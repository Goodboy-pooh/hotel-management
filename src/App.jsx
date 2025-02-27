import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/landingpage'
import Dashboard from './components/dashboard';
function App() {
  

  return (
  <Router>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
  )
}

export default App
