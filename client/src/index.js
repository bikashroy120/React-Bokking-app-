import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './contex/authContext';
import { SerachContextProvider } from './contex/SearchContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SerachContextProvider>
        <App />
      </SerachContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
