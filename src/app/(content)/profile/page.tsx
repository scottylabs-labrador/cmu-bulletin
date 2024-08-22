"use client";
import "~/styles/globals.css";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storageRef } from "src/app/api/upload/route";
import { useUser, SignOutButton } from "@clerk/nextjs";

interface Photo {
  id: string;
  url: string;
}

async function fetchUserPhotos(userId: string): Promise<Photo[]> {
  const userDocRef = doc(db, "Users", userId);
  const userDocSnap = await getDoc(userDocRef);

  if (userDocSnap.exists()) {
    const userData = userDocSnap.data();
    const photoIds = userData?.Posts || []; 

    const fetchedPhotos: Photo[] = await Promise.all(
      photoIds.map(async (photoId: string) => {
        const photoRef = ref(storageRef, ('images/' + photoId));
        const url = await getDownloadURL(photoRef);
        return {
          id: photoId,
          url,
        };
      })
    );

    return fetchedPhotos;
  }

  return [];
}

function ProfileGrid({ photos }: { photos: Photo[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="w-full aspect-w-1 aspect-h-1">
          <img
            src={photo.url}
            alt="Uploaded"
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
}

export default function ProfilePage() {
  const { user } = useUser();
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      if (user) {
        const userPhotos = await fetchUserPhotos(user?.emailAddresses[0]?.emailAddress);
        setPhotos(userPhotos);
      }
    };

    loadPhotos();
  }, [user]);

  return (
    <div className="p-4 font-sans">
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <div className="ml-4">
          <h1 className="text-2xl font-bold">{user?.emailAddresses[0]?.emailAddress}</h1>
          <p className="text-gray-500">{photos.length} posts</p>
        </div>
        <div className="ml-auto">
          <SignOutButton>
            <button
              className="px-4 py-2 bg-gray-200 text-black font-bold rounded-lg hover:bg-gray-300"
            >
              Logout
            </button>
          </SignOutButton>
        </div>
      </div>
      <div className="mt-8">
        <ProfileGrid photos={photos} />
      </div>
    </div>
  );
}
