import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDwDmthjyvSqAVgn7LzwJVrcagNQBp8dj0",
  authDomain: "medieval-wars-c21b2.firebaseapp.com",
  projectId: "medieval-wars-c21b2",
  storageBucket: "medieval-wars-c21b2.appspot.com",
  messagingSenderId: "495414618371",
  appId: "1:495414618371:web:9aff821330bc4f64cda136",
  measurementId: "G-J4E4S6P21Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
