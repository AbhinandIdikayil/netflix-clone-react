// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


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

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app)