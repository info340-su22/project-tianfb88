import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import '.css/style.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Appointment} from './appointment.js';
import {CrowdSource} from './crowdsource';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="appointment" element={<Appointment />}>
            <Route path="crowdsource" element={<CrowdSource />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>  

);