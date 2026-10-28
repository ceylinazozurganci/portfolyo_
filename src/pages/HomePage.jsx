import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page page-container">
      {/* 3D Hero Section */}
      <Hero />

      {/* 3D Portal Gateway Cards: Clear entry points to distinct pages */}
      <section className="portal-section">
        <div className="container">
          <div className="portal-header text-center">
            <span className="portal-badge">PORTFOLYO MERKEZİ</span>
            <h2 className="section-title">Sayfalara Göz Atın</h2>
            <p className="section-subtitle">
              Çalışmalarımı, özgeçmişimi ve iletişim bilgilerimi ayrı sayfalarda detaylı olarak inceleyebilirsiniz.
            </p>
          </div>

          <div className="portal-grid">
            {/* Projeler Sayfası Card */}
            <Link to="/projeler" className="portal-card">
              <div className="portal-card-glow"></div>
              <div className="portal-card-icon">📁</div>
              <div className="portal-card-tag">3+ Proje & Araştırma</div>
              <h3 className="portal-card-title">Projeler & Çalışmalar</h3>
              <p className="portal-card-desc">
                TÜBİTAK 2209-A suç analizi sistemi, duygu analizi ve Manisa ulaşım veri analitiği projelerimi ayrı sayfada inceleyin.
              </p>
              <span className="portal-card-link">
                Projeler Sayfasına Git <span>&rarr;</span>
              </span>
            </Link>

            {/* Hakkımda Sayfası Card */}
            <Link to="/hakkimda" className="portal-card">
              <div className="portal-card-glow"></div>
              <div className="portal-card-icon">👤</div>
              <div className="portal-card-tag">Eğitim & Yetkinlikler</div>
              <h3 className="portal-card-title">Hakkımda & Beceriler</h3>
              <p className="portal-card-desc">
                MCBÜ Büyük Veri Analistliği eğitimim, Python, SQL, makine öğrenmesi yetkinliklerim ve sertifikalarım.
              </p>
              <span className="portal-card-link">
                Hakkımda Sayfasına Git <span>&rarr;</span>
              </span>
            </Link>

            {/* İletişim Sayfası Card */}
            <Link to="/iletisim" className="portal-card">
              <div className="portal-card-glow"></div>
              <div className="portal-card-icon">✉️</div>
              <div className="portal-card-tag">Staj & İş Birliği</div>
              <h3 className="portal-card-title">İletişime Geçin</h3>
              <p className="portal-card-desc">
                Büyük veri ve analiz projeleri, staj teklifleri veya akademik iş birlikleri için doğrudan mesaj gönderin.
              </p>
              <span className="portal-card-link">
                İletişim Sayfasına Git <span>&rarr;</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Clean Call To Action Bar */}
      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-box">
            <div className="home-cta-content">
              <h2>Veri Odaklı Projeler İçin Birlikte Çalışalım</h2>
              <p>
                Büyük Veri Analistliği öğrencisi olarak staj ve veri bilimi projelerinde yer almaya hazırım.
              </p>
            </div>
            <div className="home-cta-buttons">
              <Link to="/iletisim" className="btn btn-primary">İletişim Sayfası &rarr;</Link>
              <Link to="/projeler" className="btn btn-outline">Tüm Projeler</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
