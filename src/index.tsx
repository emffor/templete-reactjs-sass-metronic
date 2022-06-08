import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './sass/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './_metronic/assets/sass/style.scss';
import './_metronic/assets/sass/style.react.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


