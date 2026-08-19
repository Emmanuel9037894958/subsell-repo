import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8ZuMzPL2mbG5iHfPtvmokCIrZIEOKBMo",
  authDomain: "subsell.firebaseapp.com",
  projectId: "subsell",
  storageBucket: "subsell.firebasestorage.app",
  messagingSenderId: "158680223466",
  appId: "YOUR_APP_ID",
};

const app = getApps().length > 0
  ? getApp()
  : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);