import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import config from "./config.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = config.projectName;
root.render(
  <React.StrictMode>
    <App title={config.projectName}/>
  </React.StrictMode>
);

reportWebVitals();
