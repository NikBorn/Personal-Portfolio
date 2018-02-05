import React from 'react';

const Header = () => {
  return (
    <header>
      <div className='name-and-logo'>
        <div className='logo-container'>
          <p>NB</p>
        </div>
        <h2 className="title"><span className='name'>Nik Bornemeier</span> <br /> Frond-end Web Developer</h2>
      </div>
      <nav>
        <a href="/">ABOUT</a>
        <a href="/">PORTFOLIO</a>
        <a href="/">CONTACT</a>
      </nav>
    </header>
  )
};

export default Header;