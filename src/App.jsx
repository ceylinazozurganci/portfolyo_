import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CosmicBackground from './components/CosmicBackground';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* 3D 4K Interactive Cosmic Background */}
      <CosmicBackground />
      
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Dynamic Multi-Page Routes */}
      <main className="app-main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projeler" element={<ProjectsPage />} />
          <Route path="/hakkimda" element={<AboutPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </Router>
  );
}

export default App;
