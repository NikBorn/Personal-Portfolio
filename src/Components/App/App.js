import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import Header from '../Header/Header';
import Homepage from '../HomePage/Homepage';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import resumePDF from '../../content/NikBornemeierFrontendResume.pdf'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Route path='/' 
          render={()=>
            <Header />
          }
        />

        <Route exact path='/'
          render={() =>
            <About />
          }
        />

        <Route exact path='/about'
          render={() =>
            <About />
          }
        />

        <Route exact path='/portfolio'
          render={() =>
            <Portfolio />
          }
        />

        <Route exact path='/contact'
          render={() =>
            <Contact />
          }
        />

        <Route exact path='/resume'
          render={() => 
            <Resume />
          }
        />

        <Route exact path='/resume'
          render={() =>
            <resumePDF />
          }
        />
        
      </div>
    );
  }
}

export default App;
