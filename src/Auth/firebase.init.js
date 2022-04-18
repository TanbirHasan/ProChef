// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-AxPDzwpej-39qJ4B71t8-pDoNOjN3eo",
  authDomain: "prochef-b4217.firebaseapp.com",
  projectId: "prochef-b4217",
  storageBucket: "prochef-b4217.appspot.com",
  messagingSenderId: "848624168963",
  appId: "1:848624168963:web:805fa27d0dce8252f95e36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
