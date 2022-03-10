import React from 'react';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const Contact = (props) => {
    const contact = props.contact;
    
    return (
      <p>
        {
          (() => {
            switch (contact.label) {
              case "Email":
                return <><AlternateEmailIcon fontSize='medium'/> {contact.value}</>;
              case "Name":
                return <><AccountBoxIcon fontSize='medium'/>{contact.value}</>;
              case "Phone":
                return <><PhoneIcon fontSize='medium'/>{contact.value}</>;
              case "GitHub":
                return <a href={contact.value}><GitHubIcon fontSize='medium'/>{contact.label}</a>; 
              case "LinkedIn French Version":
              case "LinkedIn English Version":
                return <a href={contact.value}><LinkedInIcon fontSize='medium'/>{contact.label}</a>;
              default:
                return null;
            }
          })()
        }
      </p>
    );
  }

  
export default Contact;