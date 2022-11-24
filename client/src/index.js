import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SerachContextProvider } from './contex/SearchContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SerachContextProvider>
      <App />
    </SerachContextProvider>
  </React.StrictMode>
);
