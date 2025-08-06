// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflixgpt-a1d45.firebaseapp.com",
  projectId: "netflixgpt-a1d45",
  storageBucket: "netflixgpt-a1d45.firebasestorage.app",
  messagingSenderId: "411317904286",
  appId: "1:411317904286:web:c0b5547010a01f19022c8f",
  measurementId: "G-6ED0ZZ6DN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
