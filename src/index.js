import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router';
import App from './Components/App/App';
// import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
// registerServiceWorker();
