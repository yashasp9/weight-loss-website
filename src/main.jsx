import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import DoctorLogin from './pages/DoctorLogin.jsx';
import Dashboard from './pages/Dashboard.jsx';
import PatientSignUp from './pages/PatientSignUp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<DoctorLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointment-booking" element={<PatientSignUp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
