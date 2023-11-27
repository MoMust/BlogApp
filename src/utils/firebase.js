// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-a1e1c.firebaseapp.com",
  projectId: "blog-a1e1c",
  storageBucket: "blog-a1e1c.appspot.com",
  messagingSenderId: "507499520913",
  appId: "1:507499520913:web:0e6a4854be76da04d2b030",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
