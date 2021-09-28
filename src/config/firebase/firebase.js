import { initializeApp, } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  
  };

initializeApp(firebaseConfig)

const auth = getAuth();

export { auth, createUserWithEmailAndPassword,signInWithEmailAndPassword}