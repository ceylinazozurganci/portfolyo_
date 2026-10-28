import React from 'react';
import { personalInfo } from '../data/config';
import './CVSection.css';

const CVSection = () => {
  return (
    <section id="cv" className="cv-section">
      <div className="container">
        <div className="cv-content fade-in-up">
          <h2 className="section-title text-center">CV</h2>
          <p className="cv-desc text-center">
            Eğitimim, teknik becerilerim, projelerim ve kariyer hedeflerim hakkında daha detaylı bilgi için CV'mi inceleyebilirsiniz.
          </p>
          <div className="cv-actions">
            <a href={personalInfo.cvLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">CV'yi Görüntüle</a>
            <a href={personalInfo.cvLink} className="btn btn-outline" download>CV'yi İndir</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
