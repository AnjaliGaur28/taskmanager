// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-3e511.firebaseapp.com",
  projectId: "taskmanager-3e511",
  storageBucket: "taskmanager-3e511.appspot.com",
  messagingSenderId: "299223024716",
  appId: "1:299223024716:web:992e87406ab5c69bf860e9",
  measurementId: "G-KLTTZDQM10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);