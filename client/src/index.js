import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PageBody } from './AppElements'

ReactDOM.render(
  <React.StrictMode>
    <PageBody />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
