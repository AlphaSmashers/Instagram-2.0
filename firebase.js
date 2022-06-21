// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { Firestore } from "firebase/firestore";
import { getApps , getApp  } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsihSQRzf_djtq1RgrZxdhUhE5SLPy2U0",
  authDomain: "instagram-20-mann.firebaseapp.com",
  projectId: "instagram-20-mann",
  storageBucket: "instagram-20-mann.appspot.com",
  messagingSenderId: "167690403468",
  appId: "1:167690403468:web:e8406eb4baab4354ee05a9"
};

// Initialize Firebase
const app =  !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app , db , storage};