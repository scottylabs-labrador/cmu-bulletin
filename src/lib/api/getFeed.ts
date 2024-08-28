"use server";
import { photosRef, storageRef } from "./firebaseConfig";
import { query, limit, orderBy, getDocs, } from "firebase/firestore"; 
import { ref, getDownloadURL } from "firebase/storage";

/**
 * This is a server-side function.  It will not be included in the client bundle which is good because of the Firebase SDK.
 */

export async function getFeed(userEmail: string, start: number, end: number) {
    const photoQuery = await query(photosRef,
        // where("userId", "!=", userEmail), 
        orderBy("uploadTime", "desc"), 
        limit(end)
    );
    const photos = (await getDocs(photoQuery)).docs.map((doc) => {return {id: doc.id, ...doc.data()}});

    const photoData = photos.map(async (photoData: any) => {
        const photoRef = ref(storageRef, ('images/' + photoData.id));
        const url = await getDownloadURL(photoRef);
        return {
          id: photoData.id,
          url,
          timestamp: new Date(photoData.uploadTime.seconds * 1000),
        };
      })
    return await Promise.all(photoData);
}
