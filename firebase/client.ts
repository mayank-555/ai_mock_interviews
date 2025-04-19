import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALTacY-JuNvMwhwew20a311TmRaoM-_9U",
  authDomain: "prepwiseai-375a0.firebaseapp.com",
  projectId: "prepwiseai-375a0",
  storageBucket: "prepwiseai-375a0.firebasestorage.app",
  messagingSenderId: "99879414370",
  appId: "1:99879414370:web:f5ec66a4e621d7713bff3b",
  measurementId: "G-WXMG0G7NP5"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)
