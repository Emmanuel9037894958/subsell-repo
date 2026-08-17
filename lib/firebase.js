import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8ZuMzPL2mbG5iHfPtvmokCIrZIEOKBMo",
  authDomain: "subsell.firebaseapp.com",
  projectId: "subsell",
  storageBucket: "subsell.firebasestorage.app",
  messagingSenderId: "158680223466",
  appId: "1:158680223466:web:42909d0af365d6ce939193",
  measurementId: "G-SR3LW16XEY",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);