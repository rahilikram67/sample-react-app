import React from 'react';
import './App.css';
import Home from './pages/Home';
import Minting from './pages/Minting';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route caseSensitive path="/" element={<Home />} />
        <Route caseSensitive path="/Minting" element={<Minting />} />
      </Routes>
    </Router>
  );
}
export default App;