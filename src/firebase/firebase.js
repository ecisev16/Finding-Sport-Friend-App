// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE-qJTkBfNU7SG_Vdu-Fx4pd6IIiYOHVo",
  authDomain: "sport-friend-app.firebaseapp.com",
  projectId: "sport-friend-app",
  storageBucket: "sport-friend-app.appspot.com",
  messagingSenderId: "675957769199",
  appId: "1:675957769199:web:4688ae27f0a8b89b1bac1a",
  measurementId: "G-YY1YMER4F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);