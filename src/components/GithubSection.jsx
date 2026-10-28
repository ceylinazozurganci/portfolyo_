import React from 'react';
import { personalInfo } from '../data/config';
import './GithubSection.css';

const GithubSection = () => {
  return (
    <section className="github-section">
      <div className="container">
        <div className="github-container fade-in-up">
          <div className="github-content">
            <h2 className="section-title">Kodlarım & Çalışmalarım</h2>
            <p className="github-desc">
              Projelerimin kaynak kodlarını ve üzerinde çalıştığım veri analizi çalışmalarını GitHub üzerinde paylaşıyorum.
            </p>
          </div>
          <div className="github-action">
            <a href={personalInfo.github} className="btn btn-primary github-btn" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '0.5rem'}}>
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.49C9.339 21.582 9.52 21.272 9.52 21.006C9.52 20.768 9.511 20.15 9.506 19.324C6.726 19.928 6.14 17.984 6.14 17.984C5.685 16.828 5.03 16.518 5.03 16.518C4.124 15.898 5.099 15.91 5.099 15.91C6.101 15.981 6.628 16.94 6.628 16.94C7.518 18.464 8.961 18.024 9.54 17.766C9.63 17.106 9.897 16.667 10.193 16.418C7.974 16.166 5.638 15.308 5.638 11.478C5.638 10.387 6.027 9.493 6.657 8.791C6.555 8.539 6.215 7.525 6.754 6.142C6.754 6.142 7.585 5.876 9.497 7.172C10.286 6.952 11.144 6.843 11.996 6.839C12.847 6.843 13.705 6.952 14.496 7.172C16.406 5.876 17.235 6.142 17.235 6.142C17.776 7.525 17.436 8.539 17.335 8.791C17.967 9.493 18.354 10.387 18.354 11.478C18.354 15.32 16.014 16.163 13.788 16.408C14.159 16.728 14.489 17.358 14.489 18.324C14.489 19.709 14.476 20.826 14.476 21.006C14.476 21.275 14.654 21.587 15.163 21.488C19.133 20.163 22 16.416 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
              </svg>
              GitHub Profilim &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
