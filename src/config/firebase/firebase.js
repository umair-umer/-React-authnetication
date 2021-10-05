import { initializeApp, } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD05D121S6pgiRRmiwIeL96gLHFClSNdeM",
  authDomain: "auth-assin.firebaseapp.com",
  projectId: "auth-assin",
  storageBucket: "auth-assin.appspot.com",
  messagingSenderId: "353204328530",
  appId: "1:353204328530:web:43f70462692242bbec278b",
  measurementId: "G-LCN1ZM50PP"
};

initializeApp(firebaseConfig)

const auth = getAuth();

export { auth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged,signOut}