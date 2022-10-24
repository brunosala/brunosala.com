import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/theme.min.css';
import './css/theme.overrides.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
