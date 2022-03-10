import React from 'react';

import './index.css';

import Contact from '../Contact';
import db from '../../firebase.js';

import {useCollectionData} from "react-firebase-hooks/firestore";

import {orderBy, query, collection} from 'firebase/firestore';

import Box from '@mui/material/Box';

const Contacts = () => {
    const contactsRef = collection(db, 'contact'); 
    const contactsQuery = query(contactsRef, orderBy('order'));
    console.log(contactsQuery);
    const [contacts] = useCollectionData(contactsQuery, {
      idField: "id"
    });
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
          >
        <h1>CONTACT</h1>
          {contacts && contacts.map(contact => <Contact key={contact.id} contact={contact} />)} 
        </Box>
      </>
    )
  }

export default Contacts;