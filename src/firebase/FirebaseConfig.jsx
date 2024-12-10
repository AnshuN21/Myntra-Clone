
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUn8LccQsFG0hrGs9jF1LpJ1UPv8D95QA",
  authDomain: "myfirstapp-dd637.firebaseapp.com",
  projectId: "myfirstapp-dd637",
  storageBucket: "myfirstapp-dd637.firebasestorage.app",
  messagingSenderId: "373132334859",
  appId: "1:373132334859:web:a14cb5a420988ce678740e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;