import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ openContactModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Galiveedu Travels</div>
      
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#destinations" onClick={closeMenu}>Destinations</a></li>
        <li><a href="#packages" onClick={closeMenu}>Packages</a></li>
        <li><a href="#rentals" onClick={closeMenu}>Rentals</a></li>
        <li><a href="#contact" onClick={e => { e.preventDefault(); closeMenu(); openContactModal(); }}>Contact</a></li>
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
      </div>
    </nav>
  );
}

export default Navbar;
