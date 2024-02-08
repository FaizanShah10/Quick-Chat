
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC8Gc0Z9TuC33k5RZtDcmK266eSey2GT8o",
  authDomain: "quick-chat-ab870.firebaseapp.com",
  projectId: "quick-chat-ab870",
  storageBucket: "quick-chat-ab870.appspot.com",
  messagingSenderId: "345583036371",
  appId: "1:345583036371:web:7d714d9dff71e1e881b126",
  measurementId: "G-HEBC22RFMK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore();
export const storage = getStorage();
