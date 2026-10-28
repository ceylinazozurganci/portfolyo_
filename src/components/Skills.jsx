import React from 'react';
import { skills } from '../data/info';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Teknik Yetenekler</h2>
        
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="category-title">{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map(item => (
                  <span key={item} className="skill-badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
