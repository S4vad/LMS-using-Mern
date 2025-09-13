import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "lms-web-c66b6.firebaseapp.com",
  projectId: "lms-web-c66b6",
  storageBucket: "lms-web-c66b6.firebasestorage.app",
  messagingSenderId: "491777069504",
  appId: "1:491777069504:web:832e7f962a808f270cf825",
  measurementId: "G-2QNBHZPBB1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
