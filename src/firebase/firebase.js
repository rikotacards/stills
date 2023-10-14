// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyJTQFYTg2qUXjFMpRywg9DHhPfK6yWII",
  authDomain: "stills-cba63.firebaseapp.com",
  projectId: "stills-cba63",
  storageBucket: "stills-cba63.appspot.com",
  messagingSenderId: "387808117261",
  appId: "1:387808117261:web:9f5a60042aabfa31dacb44",
  measurementId: "G-7B2E4EBYRT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)