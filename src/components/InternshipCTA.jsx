import React from 'react';
import { personalInfo } from '../data/config';
import './InternshipCTA.css';

const InternshipCTA = () => {
  return (
    <section className="internship-section">
      <div className="container">
        <div className="internship-content fade-in-up">
          <h2 className="section-title">Birlikte Çalışalım</h2>
          <p className="internship-desc">
            Veri analizi, veri bilimi ve büyük veri alanlarında staj ve öğrenme fırsatlarına açığım.
          </p>
          <div className="internship-actions">
            <a href={personalInfo.linkedin} className="btn btn-primary" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={personalInfo.email} className="btn btn-outline">E-posta Gönder</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipCTA;
