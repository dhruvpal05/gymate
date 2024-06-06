// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGlQcborYqpAlhTfptlGsJ4kQKh1VhZfg",
  authDomain: "gymate-ff113.firebaseapp.com",
  projectId: "gymate-ff113",
  storageBucket: "gymate-ff113.appspot.com",
  messagingSenderId: "569215624301",
  appId: "1:569215624301:web:b1bdd3ca651319233d4b64",
  measurementId: "G-224CZNPTHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);