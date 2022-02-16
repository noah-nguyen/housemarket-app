import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7UsUKAMemf3LpD3sq4iTlAtGbhSaGul8",
  authDomain: "house-marketplace-app-dc0af.firebaseapp.com",
  projectId: "house-marketplace-app-dc0af",
  storageBucket: "house-marketplace-app-dc0af.appspot.com",
  messagingSenderId: "831981726670",
  appId: "1:831981726670:web:bffa2c02600c8b8c93d99f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();