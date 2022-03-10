import React from 'react';

import './index.scss';

import Contact from '../Contact';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Contacts = (props) => {

    const contacts = props.contacts;
    
    return (
      <>
        <Typography variant='h5'>
          CONTACT
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          >
          {contacts && contacts.map(contact => <Contact key={contact.id} contact={contact} />)} 
        </Box>
      </>
    )
  }

export default Contacts;