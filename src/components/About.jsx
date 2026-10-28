import React from 'react';
import { personalInfo } from '../data/config';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">Hakkımda</h2>
        
        <div className="about-content">
          <div className="about-text-container">
            <p className="about-text">{personalInfo.aboutText}</p>
          </div>
          
          <div className="about-cards">
            <div className="info-card">
              <h3 className="card-title">Eğitim</h3>
              <p className="card-desc">Manisa Celal Bayar Üniversitesi</p>
              <p className="card-subdesc">Büyük Veri Analistliği</p>
            </div>
            
            <div className="info-card">
              <h3 className="card-title">Odak Alanlarım</h3>
              <div className="card-tags">
                {personalInfo.aboutFocus.map(focus => (
                  <span key={focus} className="card-tag">{focus}</span>
                ))}
              </div>
            </div>
            
            <div className="info-card">
              <h3 className="card-title">Kariyer Hedefim</h3>
              <p className="card-desc">{personalInfo.aboutGoal}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
