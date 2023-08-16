
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuG_HG6YGje5b-jDpWK1X0kN1Wkopomho",
  authDomain: "hosting-probo.firebaseapp.com",
  projectId: "hosting-probo",
  storageBucket: "hosting-probo.appspot.com",
  messagingSenderId: "928855165039",
  appId: "1:928855165039:web:acb8104d6d57f1973fa59a",
  measurementId: "G-NDKCV7HFVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}