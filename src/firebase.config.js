import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBk7JWQsZyc2MEUObIKUwa9MURsPlQjM-k",
  authDomain: "maltimart-6da9a.firebaseapp.com",
  projectId: "maltimart-6da9a",
  storageBucket: "maltimart-6da9a.appspot.com",
  messagingSenderId: "589012299920",
  appId: "1:589012299920:web:3751d4fe55e90f09c72815",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
