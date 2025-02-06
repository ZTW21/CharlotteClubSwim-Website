import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Meets from './pages/Meets';
import Records from './pages/Records';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meets" element={<Meets />} />
            <Route path="/records" element={<Records />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
