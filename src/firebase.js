// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-blog-85836.firebaseapp.com",
  projectId: "next-blog-85836",
  storageBucket: "next-blog-85836.firebasestorage.app",
  messagingSenderId: "776159914222",
  appId: "1:776159914222:web:b92376d16da76c57fdabff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);