import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/app" element={<Chat />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
