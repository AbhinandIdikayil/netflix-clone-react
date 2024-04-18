// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {configDotenv} from 'dotenv'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log( process.env.NETFLIX_CLONE_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey:process.env.NETFLIX_CLONE_FIREBASE_API_KEY,
  authDomain:process.env.NETFLIX_CLONE_FIREBASE_AUTH_DOMAIN,
  projectId:process.env.NETFLIX_CLONE_FIREBASE_PROJECT_ID,
  storageBucket:process.env.NETFLIX_CLONE_STORAGE_BUCKET,
  messagingSenderId:process.env.NETFLIX_CLONE_MESSAGING_SENDER_ID,
  appId:process.env.NETFLIX_CLONE_APP_APP_ID,
};
// NETFLIX_CLONE_FIREBASE_API_KEY=AIzaSyD8dNfWQu1NVWO1e7P0Xcmmlq_MJGgqI2A
// NETFLIX_CLONE_FIREBASE_AUTH_DOMAIN=netfilx-clone-react-39b2a.firebaseapp.com
// NETFLIX_CLONE_FIREBASE_PROJECT_ID=netfilx-clone-react-39b2a
// NETFLIX_CLONE_FIREBASE_STORAGE_BUCKET=netfilx-clone-react-39b2a.appspot.com
// NETFLIX_CLONE_MESSAGING_SENDER_ID=708475342004
// NETFLIX_CLONE_APP_APP_ID=1:708475342004:web:15611dff461736883b5be1
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);