// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOcU8cs4Y3b93mYFSwRQVCZvRxkWfbtas",
  authDomain: "food-hut-6117a.firebaseapp.com",
  projectId: "food-hut-6117a",
  storageBucket: "food-hut-6117a.appspot.com",
  messagingSenderId: "244627256883",
  appId: "1:244627256883:web:29c77390ea6e03082ed546",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

