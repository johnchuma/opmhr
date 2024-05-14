// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage";
import { getAuth } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAU_SSsNGpg_3mNgCSlqHmCaEiO6CJPoNA",
  authDomain: "top-target.firebaseapp.com",
  projectId: "top-target",
  storageBucket: "top-target.appspot.com",
  messagingSenderId: "679704725071",
  appId: "1:679704725071:web:de9b89ca2f3e61b6ba8c3a",
  measurementId: "G-6BX41RDKVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
