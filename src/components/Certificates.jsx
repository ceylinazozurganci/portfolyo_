import React from 'react';
import { certificates } from '../data/info';
import './Certificates.css';

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title">Sertifikalar & Eğitimler</h2>
        
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={cert.id} className="cert-card fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="cert-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-meta">
                <span className="cert-platform">{cert.platform}</span>
                <span className="cert-date">{cert.date}</span>
              </div>
              <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">Sertifikayı Gör &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
