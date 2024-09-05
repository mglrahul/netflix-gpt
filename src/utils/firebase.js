// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD8Y_FDTLO3dU-c21puqhJ1H0I-ByMkjk",
  authDomain: "netflixgpt-60349.firebaseapp.com",
  projectId: "netflixgpt-60349",
  storageBucket: "netflixgpt-60349.appspot.com",
  messagingSenderId: "242375308560",
  appId: "1:242375308560:web:19ec54287037fd38bee195",
  measurementId: "G-VQ66ZL2RH8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
