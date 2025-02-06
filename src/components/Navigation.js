import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/">Charlotte Club Swimming</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/meets" className="nav-link">Meets</Link>
        <Link to="/records" className="nav-link">Records</Link>
      </div>
    </nav>
  );
}

export default Navigation;
