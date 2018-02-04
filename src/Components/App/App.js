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
          <h1 className="title"><span className='name'>Nik Bornemeier</span> <br/> Frond-end Web Developer</h1>
          </div>
          <nav>
            <a href="/">About</a> 
            <a href="/">Portfolio</a> 
            <a href="/">Contact</a> 
          </nav>
        </header>

        <p className="intro">
          
        </p>
      </div>
    );
  }
}

export default App;
