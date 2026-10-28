import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/config';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-profile-container">
            <div className="hero-avatar-glow"></div>
            <img src="./profile.jpg" alt={personalInfo.name} className="hero-avatar" />
          </div>
          <h1 className="hero-title">
            <span className="hero-name">{personalInfo.name.toUpperCase()}</span>
            <span className="hero-role">{personalInfo.role}</span>
          </h1>
          
          <div className="hero-tags">
            {personalInfo.heroTags.map(tag => (
              <span key={tag} className="badge">{tag}</span>
            ))}
          </div>

          <p className="hero-description">
            {personalInfo.heroDescription}
          </p>

          <div className="hero-ctas">
            <Link to="/projeler" className="btn btn-primary">Projeler Sayfası &rarr;</Link>
            <Link to="/hakkimda" className="btn btn-outline">Hakkımda</Link>
            <Link to="/iletisim" className="btn btn-outline">İletişim</Link>
          </div>
        </div>

        <div className="hero-visual">
          {/* Aesthetic real-time animated data art visualization */}
          <div className="data-art">
            <div className="grid-bg"></div>
            <div className="data-node node-1"></div>
            <div className="data-node node-2"></div>
            <div className="data-node node-3"></div>
            <div className="data-line line-1"></div>
            <div className="data-line line-2"></div>
            <div className="chart-bar bar-1"></div>
            <div className="chart-bar bar-2"></div>
            <div className="chart-bar bar-3"></div>
            <div className="chart-bar bar-4"></div>
            <div className="data-art-label">BÜYÜK VERİ ANALİTİĞİ SİSTEMİ</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
