// import { getAnalytics } from "firebase/analytics";


import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDrzpgW8PkB8JbWEZr3XSeH6TBQNUMdyWs",
    authDomain: "web-cv-hubert-lafont.firebaseapp.com",
    projectId: "web-cv-hubert-lafont",
    storageBucket: "web-cv-hubert-lafont.appspot.com",
    messagingSenderId: "997976969094",
    appId: "1:997976969094:web:790b57d26b040a999d6607",
    measurementId: "G-9ZNC63QEPY"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app); 
  const db = firebase.firestore();

  export default db;