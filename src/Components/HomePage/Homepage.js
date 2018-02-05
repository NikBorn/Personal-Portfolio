import React from 'react';

const Homepage = () => {
  return (
    <main>
      <h1 className='site-title'>NIK BORNEMEIER: Front-end Web Developer</h1>
      <p className="intro">
        <strong>CURRENTLY LOOKING FOR A NEW POSITION!!! </strong><br />
        <br />
        I am a Denver based front-end wed developer with a passion for creativity, continuing eduction, and writing code.
              I created this website to show off some of the projects and websites that I have worked on in the past.  Take
              a look around and let me know your thoughts.  Be sure and visit the portfolio page to see my work and the contact
              page if you would like to reach out.
            </p>
      <section className='nav-buttons-container'>
        <article className='nav-button'>
          <div className='nav-button-icon nav-button-info'>
          </div>
          <p>ABOUT</p>
        </article>
        <article className='nav-button'>
          <div className='nav-button-icon nav-button-portfolio'>
          </div>
          <p>PORTFOLIO</p>
        </article>
        <article className='nav-button'>
          <div className='nav-button-icon nav-button-contact'>
          </div>
          <p>CONTACT</p>
        </article>
      </section>
    </main>
  )
};

export default Homepage;