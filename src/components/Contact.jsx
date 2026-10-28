import React, { useState } from 'react';
import { personalInfo } from '../data/config';
import './Contact.css';

const Contact = () => {
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
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="contact-info fade-in-up">
          <h2 className="section-title">İletişim</h2>
          <p className="contact-desc">
            Projeler, staj fırsatları veya veri analitiği alanındaki çalışmalar hakkında iletişime geçebilirsiniz.
          </p>
          
          <div className="contact-methods">
            <a href={personalInfo.email} className="contact-method-link">
              <span className="method-icon">✉</span>
              E-posta
            </a>
            <a href={personalInfo.linkedin} className="contact-method-link" target="_blank" rel="noopener noreferrer">
              <span className="method-icon">in</span>
              LinkedIn
            </a>
            <a href={personalInfo.github} className="contact-method-link" target="_blank" rel="noopener noreferrer">
              <span className="method-icon">&lt;/&gt;</span>
              GitHub
            </a>
          </div>
        </div>

        <div className="contact-form-container fade-in-up">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ad Soyad</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Adınız Soyadınız"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="ornek@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mesaj</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                placeholder="Mesajınız..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
              {loading ? 'Gönderiliyor...' : 'Mesaj Gönder'}
            </button>
            
            {submitted && <p className="success-msg">✅ Mesajınız başarıyla iletildi! Teşekkürler.</p>}
            {error && <p className="error-msg">❌ Mesaj gönderilemedi. Lütfen e-posta ile iletişime geçin.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
