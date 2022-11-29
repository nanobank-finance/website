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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot" element={<ForgotPasswordPage />} />
          <Route path="/start" element={<CreateAccountPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
