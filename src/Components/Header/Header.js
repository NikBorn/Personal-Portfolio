import React from 'react';
import './Header.css';

const Header = () => {

  return (
    <header>
      <a  className='home-link' href='/'>
        <div className='name-and-logo'>
          <div className='logo-container'>
            <p>NB</p>
          </div>
          <h2 className="title"><span className='name'>Nik Bornemeier</span> <br /> Frond-end Web Developer</h2>
        </div>
      </a>
      <nav>
        <a href="/about">ABOUT</a>
        <a href="/portfolio">PORTFOLIO</a>
        <a href="/contact">CONTACT</a>
      </nav>
    </header>
  );
};

export default Header;