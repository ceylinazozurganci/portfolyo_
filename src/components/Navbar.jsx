import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { personalInfo } from '../data/config';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Ana Sayfa', to: '/' },
    { name: 'Projeler', to: '/projeler' },
    { name: 'Hakkımda', to: '/hakkimda' },
    { name: 'İletişim', to: '/iletisim' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo-area">
          <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
            {personalInfo.navbarTitle}
          </Link>
          <span className="logo-subtitle">{personalInfo.navbarSubtitle}</span>
        </div>

        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink 
                  to={item.to} 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                  end={item.to === '/'}
                >
                  {item.name}
                  <span className="nav-link-indicator"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <Link to="/iletisim" className="btn btn-primary nav-cta-btn">
            İletişim Kur
          </Link>

          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
