// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeoNtSgo9GRaX5Raa92TKPzQWJdC37Ap8",
  authDomain: "boilerplate-7545b.firebaseapp.com",
  projectId: "boilerplate-7545b",
  storageBucket: "boilerplate-7545b.appspot.com",
  messagingSenderId: "974143551034",
  appId: "1:974143551034:web:c4575fafbfef1ab4132703",
  measurementId: "G-CYEHQ2KJV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const usersRef = collection(db, "Users");
const photosRef = collection(db, "Photos");
export const storageRef = getStorage(app);

async function uploadImage(data: FormData, userId: string | undefined) {
    console.log(data, userId)
    const photo_uuid = crypto.randomUUID();
    const file = await data.getAll('file')[0];

    uploadBytes(ref(storageRef, ('images/' + photo_uuid)), file)
    setDoc(doc(photosRef, photo_uuid), {
        "reference": `images/${photo_uuid}`,
        "uploadTime": new Date(),
        "userId": userId
    })
    updateDoc(doc(usersRef, userId), {
        "Posts": arrayUnion(photo_uuid)
    })
    console.log("Uploaded image")
}

// Post request handler
export function POST(req: Request) {
    console.log(req)
    return uploadImage(req.formData(), req.body.userId)
}
