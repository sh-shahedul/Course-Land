// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpoTCzJuPiTBZhQKiZU2TfAa-R9h66oTE",
  authDomain: "course-land-b6150.firebaseapp.com",
  projectId: "course-land-b6150",
  storageBucket: "course-land-b6150.firebasestorage.app",
  messagingSenderId: "184697941443",
  appId: "1:184697941443:web:3b0cd32c8f071c8768a176"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);