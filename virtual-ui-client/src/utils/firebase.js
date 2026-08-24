// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "levonx-c94f5.firebaseapp.com",
  projectId: "levonx-c94f5",
  storageBucket: "levonx-c94f5.firebasestorage.app",
  messagingSenderId: "972759276192",
  appId: "1:972759276192:web:de4db8528ee2e435ba07c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider();
export {auth,provider}