// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyA_hZzDVlocVyUAxN9LGXUJNZhSDUkGifE",
  authDomain: "opmhr-53f02.firebaseapp.com",
  projectId: "opmhr-53f02",
  storageBucket: "opmhr-53f02.appspot.com",
  messagingSenderId: "1050869986336",
  appId: "1:1050869986336:web:828b08cd24f1fce3297845",
  measurementId: "G-92KNX1784C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
