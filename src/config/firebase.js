// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAstqVzjDZj2-WoS_cMTCbSGQPMDAwNDQ8",
  authDomain: "vite-contact-7c5ed.firebaseapp.com",
  projectId: "vite-contact-7c5ed",
  storageBucket: "vite-contact-7c5ed.firebasestorage.app",
  messagingSenderId: "1091318602456",
  appId: "1:1091318602456:web:87b5c7d1a928f2c4c7d5ad",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
