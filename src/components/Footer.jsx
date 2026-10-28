import React from 'react';
import { personalInfo } from '../data/config';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-name">{personalInfo.name.toUpperCase()}</h3>
            <p className="footer-role">Big Data Analytics Student</p>
          </div>
          
          <div className="footer-right">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={personalInfo.email}>E-posta</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {year} {personalInfo.name}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
