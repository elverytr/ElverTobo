import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQS2IhFS3h0JL_TRe80pi8Mh64fc-iGVg",
  authDomain: "portfolio-elver.firebaseapp.com",
  projectId: "portfolio-elver",
  storageBucket: "portfolio-elver.appspot.com",
  messagingSenderId: "877083422576",
  appId: "1:877083422576:web:56f668c222b7b213b8a9b5",
  measurementId: "G-6LVL6ZNJW9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db, firebase };
