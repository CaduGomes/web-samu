import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXKIccskdly5cl0gT1rlX2aZqLJ29Zeuo",
  authDomain: "app-samu-ufsc.firebaseapp.com",
  projectId: "app-samu-ufsc",
  storageBucket: "app-samu-ufsc.appspot.com",
  messagingSenderId: "944453284476",
  appId: "1:944453284476:web:3a5f822c776eb4b00d4ff9",
  measurementId: "G-WC2VWZDDYQ",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
