// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClh1AUoBg3yPAIN-pWUdNlTJK710ypK1k",
  authDomain: "react-netflix-clone-af79c.firebaseapp.com",
  projectId: "react-netflix-clone-af79c",
  storageBucket: "react-netflix-clone-af79c.appspot.com",
  messagingSenderId: "997529767415",
  appId: "1:997529767415:web:c379438659b43a1e43b2f2",
  measurementId: "G-4H106TLJF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);