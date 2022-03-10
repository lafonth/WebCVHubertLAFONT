import React from 'react';
import './App.scss';

//Components
import Contacts from './components/Contacts';

//Firebase
import db from './firebase.js';

//Firestore
import {useCollectionData} from "react-firebase-hooks/firestore";
import {orderBy, query, collection} from 'firebase/firestore';


//Material UI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const App = () => {

  const contactsRef = collection(db, 'contact');
  const contactsQuery = query(contactsRef, orderBy('order'));
  const [contacts] = useCollectionData(contactsQuery, {
    idField: "id"
  });
  
  const generalInfoRef = collection(db, 'generalInfo');
  const [generalInfos] = useCollectionData(generalInfoRef, {
    idField: "id"
  });
  var name;
  var age = 0;
  // var nationality;
  if(generalInfos !== undefined && generalInfos.length > 0){
    name = generalInfos.find(elem => elem.label === 'Name').value;  
    age = generalInfos.find(elem => elem.label === 'Age').value;  
    // nationality = generalInfos.find(elem => elem.label === 'Nationality').value;  
  }

  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="static" sx={{backgroundColor:'primary.dark'}}>
          <Toolbar>
            <Typography variant="h5" sx={{ mr: 2}}>
              {name}
            </Typography>
            <Typography variant="h5" sx={{ mr: 2}}>
              {age} years old
            </Typography>
          </Toolbar>  
        </AppBar>
      </header>
      <Box>
        <Contacts contacts={contacts}></Contacts>
      </Box>
    </div>
  );
}

export default App;
