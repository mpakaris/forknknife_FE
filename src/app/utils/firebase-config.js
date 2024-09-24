import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBR2xscJj8P0_PQ01btpjf6FZ-JrJPfghU",
  authDomain: "getstuffdone-80541.firebaseapp.com",
  projectId: "getstuffdone-80541",
  storageBucket: "getstuffdone-80541.appspot.com",
  messagingSenderId: "57215308646",
  appId: "1:57215308646:web:7e08323ff6ad76ecbfaea7",
  measurementId: "G-97G1DC6QKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
