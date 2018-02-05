import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import Header from '../Header/Header';
import Homepage from '../HomePage/Homepage';

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

        {/* <Route exact path='/portfolio'
          render={() =>

          }
        /> */}

      </div>
    );
  }
}

export default App;
