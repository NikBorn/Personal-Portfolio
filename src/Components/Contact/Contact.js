import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <main>
      <div className='page-header'>
        <h3>
          Contact Me
        </h3>
      </div>
      <div className='contact-page'>
        <a href='mailto:NikolausRB@gmail.com'>Email Me</a>
        <a href='tel:1-720-883-1603'>Call Me</a>
        <a href='https://github.com/NikBorn'>GitHub</a> 
        <a href='https://www.linkedin.com/in/nik-bornemeier/'>LinkedIn</a>
      </div>
    </main>
  );
};

export default Contact;