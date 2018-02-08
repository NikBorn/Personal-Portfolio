import React from 'react';

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
        <a href="nb-fe-portfolio.herokuapp.com/about">ABOUT</a>
        <a href="nb-fe-portfolio.herokuapp.com/portfolio">PORTFOLIO</a>
        <a href="nb-fe-portfolio.herokuapp.com/contact">CONTACT</a>
      </nav>
    </header>
  )
};

export default Header;