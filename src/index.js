import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ConstructNavbar from './modules/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <React.StrictMode>
    <BrowserRouter> {/* Wrap the App with BrowserRouter */}
      <div className='bg-navbar-cont'>
        <ConstructNavbar />
      </div>
      <div className='bg-secondary container-fluid w-100 h-100 d-flex justify-content-center align-items-center p-0'>
        <App />
      </div>
      <footer className=" text-white text-center py-4">
        <p>&copy; 2025 Superstore | All rights reserved.</p>
      </footer>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
