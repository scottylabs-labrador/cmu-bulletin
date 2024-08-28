// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

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

export const usersRef = collection(db, "Users");
export const photosRef = collection(db, "Photos");
export const storageRef = getStorage(app);