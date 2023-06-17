import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCJl4Va2I_X6aBQPLA2X2bc9IZ4ndH0SBc",
  authDomain: "tiktok---jornada-5bb55.firebaseapp.com",
  projectId: "tiktok---jornada-5bb55",
  storageBucket: "tiktok---jornada-5bb55.appspot.com",
  messagingSenderId: "1087312108608",
  appId: "1:1087312108608:web:b6042921657ece4a9213a5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
