import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When location hash changes, scroll to the element
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/#about' },
    { name: 'Expertise', path: '/#expertise' },
    { name: 'Recognition', path: '/#recognition' },
    { name: 'Updates', path: '/#updates' },
    { name: 'Impact', path: '/impact' },
  ];

  const handleNavClick = (e, link) => {
    setIsMenuOpen(false);

    // Hash links that target the homepage
    if (link.path.startsWith('/#')) {
      e.preventDefault();
      const hash = link.path.substring(1); // e.g. "#about"

      if (location.pathname === '/') {
        // Already on homepage — just scroll
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to homepage first, then scroll
        navigate('/' + hash);
      }
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/logo-main.svg" alt="Matt Nam" className="logo-img" />
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-item ${location.pathname + location.hash === link.path ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link)}
            >
              {link.name}
            </Link>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta">Get in Touch</a>
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
