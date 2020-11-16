import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './Context'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
  <Router>
    <Context>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Context>
  </Router>,
  document.getElementById('root')
);

