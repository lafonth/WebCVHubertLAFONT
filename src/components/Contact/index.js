import React from 'react';

import './index.scss';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contact = (props) => {
    const contact = props.contact;
    
    return (
      <div id="contactItem">
        {
          (() => {
            switch (contact.label) {
              case "Email":
                return <><AlternateEmailIcon fontSize='medium' className='contactIcon'/> {contact.value}</>;
              case "Phone":
                return <><PhoneIcon fontSize='medium' className='contactIcon'/>{contact.value}</>;
              case "GitHub":
                return <a href={contact.value}><GitHubIcon fontSize='medium' className='contactIcon'/>{contact.label}</a>; 
              case "LinkedIn French Version":
              case "LinkedIn English Version":
                return <a href={contact.value}><LinkedInIcon fontSize='medium' className='contactIcon'/>{contact.label}</a>;
              default:
                return null;
            } 
          })()
        }
      </div>
    );
  }

  
export default Contact;