import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { unregister as unregisterServiceWorker } from './serviceWorker'

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>
, document.getElementById('root'));
unregisterServiceWorker();
