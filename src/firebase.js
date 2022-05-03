import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUOq1BVO0MHcdrts_qpXj7z9OhVlZgjC8",
  authDomain: "linkedin-clone-148fa.firebaseapp.com",
  projectId: "linkedin-clone-148fa",
  storageBucket: "linkedin-clone-148fa.appspot.com",
  messagingSenderId: "1059875019439",
  appId: "1:1059875019439:web:219db0a3efe2d9aa7c125a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const storage = getStorage(firebaseApp)

export {auth,storage}
export default db