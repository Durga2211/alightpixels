import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

window.__REACT_HYDRATED__ = true;

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
