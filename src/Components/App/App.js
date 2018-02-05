import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import Header from '../Header/Header';
import Homepage from '../HomePage/Homepage';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

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
            <Homepage />
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

      </div>
    );
  }
}

export default App;
