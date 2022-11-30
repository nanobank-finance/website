import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import CreateAccountPage from "./components/CreateAccountPage";
import AboutPage from "./components/AboutPage";
import CareersPage from "./components/CareersPage";
import LegalPage from "./components/LegalPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot" element={<ForgotPasswordPage />} />
          <Route path="/start" element={<CreateAccountPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/legal" element={<LegalPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
