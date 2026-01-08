import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 150;

      // Default to home if at the top
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // Check each section from bottom to top
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    // Call on mount to set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo and Brand Name */}
        <div className="header-logo">
          <img src="/images/profilepic.png" alt="Vindhyachal Logo" className="logo-image" />
          <span className="brand-text">
            <span className="brand-vindhyachal">Vindhyachal</span>
            <span className="brand-resume">Resume Maker</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>Services</a>
          <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }} className={`nav-link ${activeSection === 'reviews' ? 'active' : ''}`}>Reviews</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact Us</a>
        </nav>

        {/* Hamburger Menu Button */}
        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className={`mobile-nav-link ${activeSection === 'services' ? 'active' : ''}`}>Services</a>
          <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }} className={`mobile-nav-link ${activeSection === 'reviews' ? 'active' : ''}`}>Reviews</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
