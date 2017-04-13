import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('./sockets/sockets.js')

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
