import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/images/ADORE.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="logo" />
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li>
          <a href="#">About</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </li>
        <li>
          <a href="#">Programs</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </li>
        <li>
          <a href="#">Participates</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </li>
        <li>
          <a href="#">Activities</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </li>
        <li>
          <a href="#">Releases</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </li>
        <li>
          <a href="#">Contact Us</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
