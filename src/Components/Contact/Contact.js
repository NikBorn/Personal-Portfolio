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
        <p><span className='label'>Email:</span>NikolausRB@Gmail.com </p> {/* <- make this an email link */}
        <p><span className='label'>Phone:</span>720-883-1603</p> {/* <- make this a phone link */}
        <p><span className='label'>Slack:</span>@NikBorn</p>
        <p><span className='label'>GitHub:</span>@NikBorn</p> {/* <- make this a GitHub link */}
        <p><span className='label'>LinkedIn:</span></p> {/* <- make this a LinkedIn link */}
      </div>
    </main>
  );
};

export default Contact;