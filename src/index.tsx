import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

declare global {         
  interface Window {         
    globalCount: number;         
  }         
}

window.globalCount = 0;