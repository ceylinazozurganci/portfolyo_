import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/config';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page page-container">
      {/* Page Hero Header */}
      <div className="page-hero">
        <div className="container">
          <div className="page-breadcrumb">
            <Link to="/">Ana Sayfa</Link>
            <span className="separator">/</span>
            <span className="current">Hakkımda</span>
          </div>

          <div className="about-profile-card">
            <div className="about-avatar-wrapper">
              <img src="./profile.jpg" alt={personalInfo.name} className="about-avatar-img" />
              <div className="about-avatar-ring"></div>
            </div>

            <div className="about-profile-info">
              <span className="page-badge">AYRI SAYFA: HAKKIMDA</span>
              <h1 className="about-name">{personalInfo.name}</h1>
              <p className="about-title-role">{personalInfo.role}</p>
              <p className="about-lead-bio">{personalInfo.aboutText}</p>

              <div className="about-actions-row">
                <Link to="/iletisim" className="btn btn-primary">İletişime Geç &rarr;</Link>
                <Link to="/projeler" className="btn btn-outline">Projelerimi Gör</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Focus & Career Goals */}
      <section className="about-highlights-section">
        <div className="container">
          <div className="about-two-col">
            <div className="about-feature-box">
              <h3 className="feature-box-title">
                <span className="feature-icon">🎯</span>
                Odak Alanlarım
              </h3>
              <div className="focus-pills-list">
                {personalInfo.aboutFocus.map(focus => (
                  <span key={focus} className="focus-pill">{focus}</span>
                ))}
              </div>
            </div>

            <div className="about-feature-box">
              <h3 className="feature-box-title">
                <span className="feature-icon">🚀</span>
                Kariyer Hedefim
              </h3>
              <p className="feature-box-desc">{personalInfo.aboutGoal}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Component */}
      <Skills />

      {/* Education Component */}
      <Education />

      {/* Certificates Component */}
      <Certificates />

      {/* Bottom CTA */}
      <section className="about-bottom-cta">
        <div className="container">
          <div className="about-cta-panel">
            <h2>İş Birliği & Staj İmkanları İçin Hazırım</h2>
            <p>
              Büyük veri analitiği ve makine öğrenmesi projelerinizde yer almak için benimle hemen iletişime geçebilirsiniz.
            </p>
            <Link to="/iletisim" className="btn btn-primary">İletişim Sayfasına Git &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
