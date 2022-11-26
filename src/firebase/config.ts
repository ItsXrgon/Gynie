// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrWQi1zyGv2LSJ3qdkOyIrgwCvfA_OmTQ",
  authDomain: "gynie-ce4b2.firebaseapp.com",
  projectId: "gynie-ce4b2",
  storageBucket: "gynie-ce4b2.appspot.com",
  messagingSenderId: "46337282367",
  appId: "1:46337282367:web:f40657d22b7b5e950b838a",
  measurementId: "G-C11F0F05RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage();
const projectFirestore = getFirestore();

export { projectStorage, projectFirestore}