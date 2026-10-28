import React from 'react';
import { whatIDo } from '../data/info';
import './WhatIDo.css';

const WhatIDo = () => {
  return (
    <section id="what-i-do" className="what-i-do-section">
      <div className="container">
        <h2 className="section-title">Neler Yapıyorum?</h2>
        <div className="what-i-do-grid">
          {whatIDo.map((item, index) => (
            <div key={index} className="what-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="what-icon">
                {/* Abstract visual for icon */}
                <div className="icon-shape"></div>
              </div>
              <h3 className="what-title">{item.title}</h3>
              <p className="what-desc">{item.description}</p>
              <div className="what-techs">
                {item.tags.map(tag => (
                  <span key={tag} className="tech-badge">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
