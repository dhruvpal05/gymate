import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGlQcborYqpAlhTfptlGsJ4kQKh1VhZfg-w0qYtxGyaOGQquBs",
  authDomain: "gymate-ff113.firebaseapp.com",
  projectId: "gymate-ff113",
  storageBucket: "gymate-ff113.appspot.com",
  messagingSenderId: "569215624301",
  appId: "1:569215624301:web:b1bdd3ca651319233d4b64",
  measurementId: "G-224CZNPTHN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
