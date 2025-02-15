import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navigation">
      <Link to="/" className="nav-brand" onClick={closeMenu}>
        <img 
          src="/assets/branding/All-in-C.png" 
          alt="UNCC Logo" 
          className="nav-logo"
        />
        <span>Charlotte Club Swimming</span>
      </Link>

      <button 
        className={`nav-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'active' : ''}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link 
          to="/meets" 
          className={location.pathname === '/meets' ? 'active' : ''}
          onClick={closeMenu}
        >
          Meets
        </Link>
        <Link 
          to="/records" 
          className={location.pathname === '/records' ? 'active' : ''}
          onClick={closeMenu}
        >
          Records
        </Link>
        <Link 
          to="/photos" 
          className={location.pathname === '/photos' ? 'active' : ''}
          onClick={closeMenu}
        >
          Photos
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
