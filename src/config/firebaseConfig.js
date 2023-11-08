// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVC2fKzHfbZAMnRQELFksDg-VZy74oKK0",
  authDomain: "the-career-maker.firebaseapp.com",
  projectId: "the-career-maker",
  storageBucket: "the-career-maker.appspot.com",
  messagingSenderId: "69156865071",
  appId: "1:69156865071:web:d09e07d48c1937402872da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);