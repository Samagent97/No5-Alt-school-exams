import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA3pLgsCp4CMSo7IGvJtFzi8dDykRiLFsE",
  authDomain: "alt-school-exams.firebaseapp.com",
  projectId: "alt-school-exams",
  storageBucket: "alt-school-exams.appspot.com",
  messagingSenderId: "227996547517",
  appId: "1:227996547517:web:63f2770304f36cd45cbad4",
  measurementId: "G-Q335CP15JC"
};


const app = initializeApp(firebaseConfig);

//setUp authProvider
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth, signInWithRedirect };
