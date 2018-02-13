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
        <a href='tel:1-719-201-9493'>Call Me</a>
        <p><span className='label'>Slack:</span>@NikBorn</p>
        <p><span className='label'>GitHub:</span>@NikBorn</p> {/* <- make this a GitHub link */}
        <p><span className='label'>LinkedIn:</span></p> {/* <- make this a LinkedIn link */}
      </div>
    </main>
  );
};

export default Contact;