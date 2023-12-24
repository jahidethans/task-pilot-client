// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4bRDrncqWAZhIUOoSR1ufTQU816CmJbE",
  authDomain: "taskpilot-6eb2e.firebaseapp.com",
  projectId: "taskpilot-6eb2e",
  storageBucket: "taskpilot-6eb2e.appspot.com",
  messagingSenderId: "607406999954",
  appId: "1:607406999954:web:b05cdacb708a89349e594b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth