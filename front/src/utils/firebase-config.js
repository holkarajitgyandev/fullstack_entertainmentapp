// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAluUrwNpGpAT1AP867X81q3okzK-LOm28",
  authDomain: "react-moviesapp-2af7f.firebaseapp.com",
  projectId: "react-moviesapp-2af7f",
  storageBucket: "react-moviesapp-2af7f.appspot.com",
  messagingSenderId: "695392672303",
  appId: "1:695392672303:web:b4f10b3e6df0ad1e34c4da",
  measurementId: "G-S2G58KBBEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth =getAuth(app)
