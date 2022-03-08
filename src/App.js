import React from 'react';
import './App.css';

import firebase from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore";

import {useCollectionData} from "react-firebase-hooks/firestore";

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contacts></Contacts>
      </header>
    </div>
  );
}

function Contacts(){
  const contactsRef = db.collection('contact');
  const [contacts, loadingContacts] = useCollectionData(contactsRef, {
    idField: "id"
  });
  return (
    <>
    <h1>CONTACT</h1>
      {contacts && contacts.map(contact => <Contact key={contact.id} contact={contact} />)} 
    </>
  )
}

function Contact(props){
  const contact = props.contact;
  
  return (
    <p>
      {
        (() => {
          switch (contact.label) {
            case "Email":
              return <AlternateEmailIcon fontSize='medium'/>;
            case "Name":
              return <AccountBoxIcon fontSize='medium'/>;
            case "Phone":
              return <PhoneIcon fontSize='medium'/>;
            case "GitHub":
              return <GitHubIcon fontSize='medium'/>;
            case "LinkedIn":
              return <LinkedInIcon fontSize='medium'/>;
            default:
              return null;
          }
        })()
      }
      {contact.value}
    </p>
  );
}

export default App;
