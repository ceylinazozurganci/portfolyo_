import React from 'react';
import { education } from '../data/info';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Eğitim</h2>
        
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item fade-in-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="edu-institution">{edu.institution}</h3>
                <div className="edu-meta">
                  <span className="edu-degree">{edu.degree}</span>
                  <span className="edu-period">{edu.period}</span>
                </div>
                
                <div className="edu-courses">
                  <h4 className="courses-title">İlgili Dersler</h4>
                  <ul className="courses-list">
                    {edu.courses.map(course => (
                      <li key={course} className="course-item">{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
