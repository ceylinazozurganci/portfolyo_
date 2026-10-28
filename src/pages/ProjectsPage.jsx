import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import GithubSection from '../components/GithubSection';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('Hepsi');

  const filters = ['Hepsi', 'Python', 'Machine Learning', 'Data Analysis', 'Big Data'];

  const filteredProjects = activeFilter === 'Hepsi'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <div className="projects-page page-container">
      {/* Page Hero Header */}
      <div className="page-hero">
        <div className="container">
          <div className="page-breadcrumb">
            <Link to="/">Ana Sayfa</Link>
            <span className="separator">/</span>
            <span className="current">Projeler</span>
          </div>

          <div className="page-hero-content">
            <span className="page-badge">AYRI SAYFA: PROJELER</span>
            <h1 className="page-main-title">Projeler & Araştırmalar</h1>
            <p className="page-main-desc">
              Büyük veri analitiği, makine öğrenmesi algoritmaları ve veri görselleştirme süreçlerinde geliştirdiğim projeler ve akademik çalışmalar.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Showcase & Interactive Filter */}
      <section className="projects-main-section">
        <div className="container">
          {/* Tag Filters */}
          <div className="filter-bar">
            {filters.map(filter => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Cards Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-showcase-card"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="project-card-top">
                  <span className="project-index">PROJE #{project.id}</span>
                  <span className="project-badge-status">{project.status}</span>
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>

                <div className="project-tags-list">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="project-card-footer">
                  {project.status === 'Tamamlandı' ? (
                    <span className="project-status-note">
                      <span className="pulse-indicator completed"></span>
                      Proje Tamamlandı
                    </span>
                  ) : (
                    <span className="project-status-note">
                      <span className="pulse-indicator"></span>
                      Aktif Geliştirme Sürecinde
                    </span>
                  )}

                  {(project.github || (project.link && project.link !== '#')) && (
                    <div className="project-card-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn"
                        >
                          GitHub Deposu
                        </a>
                      )}
                      {project.link && project.link !== '#' && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn primary"
                        >
                          {project.linkLabel || 'Canlı Demo / İncele'} &rarr;
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Repository Showcase Section */}
      <GithubSection />

      {/* Direct Contact Navigation CTA */}
      <section className="projects-cta-section">
        <div className="container">
          <div className="projects-cta-box">
            <h2>Bir Projede Birlikte Çalışmak İster misiniz?</h2>
            <p>
              Veri analizi veya makine öğrenmesi projeleriniz için iletişime geçebilirsiniz.
            </p>
            <div className="projects-cta-links">
              <Link to="/iletisim" className="btn btn-primary">İletişim Sayfasına Git &rarr;</Link>
              <Link to="/hakkimda" className="btn btn-outline">Hakkımda & Yetkinlikler</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
