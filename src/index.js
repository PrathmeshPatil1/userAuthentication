import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureFakeBackend } from './helpers';

configureFakeBackend();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
