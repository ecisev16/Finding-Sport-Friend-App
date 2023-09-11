// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJSPntTTg3U5_n3uwcTSAiELbu_qkhtpE",
  authDomain: "fir-course-17a4a.firebaseapp.com",
  projectId: "fir-course-17a4a",
  storageBucket: "fir-course-17a4a.appspot.com",
  messagingSenderId: "49777640644",
  appId: "1:49777640644:web:0a78acff078babc79b3591",
  measurementId: "G-3X8Q6P96HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);