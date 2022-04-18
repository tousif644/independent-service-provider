// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU_qNZoRzY3ib9Us9hEzEwshv9rJuGsLU",
  authDomain: "khabar-dokan-53fcf.firebaseapp.com",
  projectId: "khabar-dokan-53fcf",
  storageBucket: "khabar-dokan-53fcf.appspot.com",
  messagingSenderId: "567663131840",
  appId: "1:567663131840:web:66c1d428a6c48b11384125",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
