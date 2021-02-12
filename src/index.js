import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 import Tagifyinput from './component/Tagifyinput'; 
import Taglists from './component/Taglists';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <App />
  <Tagifyinput/>
   <Taglists/>  
  
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
