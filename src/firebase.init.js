// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtanxr7RZ6aoWYPupnIkpLbGuPIhwE-Xs",
  authDomain: "the-car-doctor-665e2.firebaseapp.com",
  projectId: "the-car-doctor-665e2",
  storageBucket: "the-car-doctor-665e2.appspot.com",
  messagingSenderId: "248311675474",
  appId: "1:248311675474:web:d7810462bcf5918db0bd8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
