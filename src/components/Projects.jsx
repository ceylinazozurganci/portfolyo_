import React from 'react';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projeler</h2>
        <p className="section-subtitle">Öğrenme sürecimde geliştirdiğim ve üzerinde çalıştığım veri analizi, makine öğrenmesi ve büyük veri projeleri.</p>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="project-header">
                <span className="project-number">{project.id}</span>
                <span className="project-status">{project.status}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <p className="project-desc">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
