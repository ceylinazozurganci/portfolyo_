import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/config';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    fetch("https://formsubmit.co/ajax/ceylinazozurganci07@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(err => {
      setLoading(false);
      setError(true);
      setTimeout(() => setError(false), 5000);
      console.log(err);
    });
  };

  return (
    <div className="contact-page-wrapper page-container">
      <div className="container contact-page">
        <div className="page-breadcrumb">
          <Link to="/">Ana Sayfa</Link>
          <span className="separator">/</span>
          <span className="current">İletişim</span>
        </div>

        <div className="contact-page-header">
          <span className="page-badge">AYRI SAYFA: İLETİŞİM</span>
          <h1 className="page-main-title">İletişime Geçin</h1>
          <p className="page-subtitle">
            Büyük veri analitiği, makine öğrenmesi projeleri veya staj fırsatları hakkında benimle doğrudan bağlantı kurabilirsiniz.
          </p>
        </div>

        <div className="contact-page-grid">
          <div className="contact-info-panel">
            <div className="info-block">
              <h2 className="block-title">
                <span className="block-icon">📧</span>
                E-posta Adresi
              </h2>
              <a href={personalInfo.email} className="info-value">
                ceylinazozurganci07@gmail.com
              </a>
            </div>

            <div className="info-block">
              <h2 className="block-title">
                <span className="block-icon">💼</span>
                LinkedIn Profili
              </h2>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="info-value">
                linkedin.com/in/ceylinaz
              </a>
            </div>

            <div className="info-block">
              <h2 className="block-title">
                <span className="block-icon">💻</span>
                GitHub Çalışmaları
              </h2>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="info-value">
                github.com/ceylinaz
              </a>
            </div>

            <div className="info-block">
              <h2 className="block-title">
                <span className="block-icon">📍</span>
                Konum & Okul
              </h2>
              <p className="info-value" style={{ margin: 0 }}>
                Manisa Celal Bayar Üniversitesi
              </p>
            </div>

            <div className="contact-quick-actions">
              <a href={personalInfo.email} className="btn btn-primary quick-btn">
                ✉ Doğrudan E-posta Gönder
              </a>
            </div>
          </div>

          <div className="contact-form-panel">
            <h2 className="form-panel-title">Mesaj Gönderin</h2>
            <p className="form-panel-desc">Aşağıdaki formu doldurarak hemen mesajınızı iletebilirsiniz.</p>

            <form className="contact-page-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Adınız Soyadınız</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Örn: Ahmet Yılmaz"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta Adresiniz</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ornek@sirket.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Proje konusu, staj fırsatı veya sorunuz..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                {loading ? 'Gönderiliyor...' : 'Mesajı İlet 🚀'}
              </button>

              {submitted && <p className="success-msg">✅ Mesajınız başarıyla iletildi! En kısa sürede dönüş yapacağım.</p>}
              {error && <p className="error-msg">❌ Mesaj gönderilemedi. Lütfen doğrudan e-posta adresimden ulaşın.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
