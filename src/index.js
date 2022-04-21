import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProvideContext } from './Hooks/Context/MainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProvideContext>
      <App />
    </ProvideContext>
  </React.StrictMode>
);
