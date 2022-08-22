// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC45zFEX1N8Z2TzUlsB3Y9uYdRP_kZkyOA",
  authDomain: "easymeal-991d0.firebaseapp.com",
  projectId: "easymeal-991d0",
  storageBucket: "easymeal-991d0.appspot.com",
  messagingSenderId: "595170411867",
  appId: "1:595170411867:web:43a45f274c9f09d273867e"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
const firestoreApp = firebase.firestore();

export { auth, firestoreApp };