// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore}