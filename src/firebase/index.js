// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase"
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3SXIRhPZeLumP9nJ59IM3ZQQAR86GnFs",
  authDomain: "notes-projetc.firebaseapp.com",
  projectId: "notes-projetc",
  storageBucket: "notes-projetc.appspot.com",
  messagingSenderId: "650203136737",
  appId: "1:650203136737:web:d64487c65bdc2e774deda0",
  measurementId: "G-ZLSJ62Y6B6"
};

// Initialize Firebase
export const getFireBase = initializeApp(firebaseConfig);
export const getFirestore = () => firebase.firestore(getFireBase);