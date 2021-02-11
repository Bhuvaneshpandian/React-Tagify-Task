import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tagify from './tagify/Tagify';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <App />
    <Tagify />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
