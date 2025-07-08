// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzsf_zT6Rp2-imjagu5ojm8JCdXfTvx7E",
  authDomain: "reactnote-10859.firebaseapp.com",
  projectId: "reactnote-10859",
  storageBucket: "reactnote-10859.firebasestorage.app",
  messagingSenderId: "689148654037",
  appId: "1:689148654037:web:917a7b06e34664ed61cd5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db,"notes")