// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrn9WbWZKfEjv8sxSAtNYA6EOufdHKDUk",
  authDomain: "netflixmoviegpt.firebaseapp.com",
  projectId: "netflixmoviegpt",
  storageBucket: "netflixmoviegpt.appspot.com",
  messagingSenderId: "1023554964704",
  appId: "1:1023554964704:web:c1a5e60cf42b8d53cc9485",
  measurementId: "G-ZEQGW6KSBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
