import 'normalize.css'; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './estilos/globales.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

