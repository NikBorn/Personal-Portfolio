import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className='name-and-logo'>
          <div className='logo-container'>
            <p>NB</p>
          </div>
          <h2 className="title"><span className='name'>Nik Bornemeier</span> <br/> Frond-end Web Developer</h2>
          </div>
          <nav>
            <a href="/">ABOUT</a> 
            <a href="/">PORTFOLIO</a> 
            <a href="/">CONTACT</a> 
          </nav>
        </header>
        <main>
          <h1 className='site-title'>NIK BORNEMEIER: Front-end Developer</h1>
          <p className="intro">
            CURRENTLY LOOKING FOR A NEW POSITION!!! <br/>
            <br/>
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
      </div>
    );
  }
}

export default App;
