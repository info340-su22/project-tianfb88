import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Appointment from './components/appointment';
import CrowdSource from './components/crowdsource';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<App />} />
        <Route index element={<App />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="crowdsource" element={<CrowdSource />} />
      </Routes>

      <App />
    </BrowserRouter>
    
  </React.StrictMode>  

);