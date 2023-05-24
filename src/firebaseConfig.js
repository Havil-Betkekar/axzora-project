// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6Ox50Xdj0dpCeaILatyt0oh0L8iXFFNo",
  authDomain: "databaseax-6adb5.firebaseapp.com",
  projectId: "databaseax-6adb5",
  storageBucket: "databaseax-6adb5.appspot.com",
  messagingSenderId: "159018462762",
  appId: "1:159018462762:web:00687be1093f55754c9d53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
