import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import SelectedWork from './components/SelectedWork';
import ContentPresets from './components/ContentPresets';
import ClientExperiences from './components/ClientExperiences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Activate smooth scroll-reveal transitions across the entire site
  useScrollReveal();

  const handleSelectCategory = () => {
    const selectedWorkEl = document.getElementById('selected-work');
    if (selectedWorkEl) {
      selectedWorkEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="alight-app">
      {/* Editorial Intro Preloader with Logo & Smooth Transition */}
      <Preloader />

      <a href="#main-content" className="skip-to-content">Skip to content</a>

      {/* 1. NAVBAR */}
      <Navbar onSelectCategory={handleSelectCategory} />

      <main id="main-content">
        {/* 2. HERO — Side-by-Side Flipping Services & Evolving Works */}
        <Hero onSelectCategory={handleSelectCategory} />

        {/* 3. WHO WE ARE / ABOUT */}
        <WhoWeAre />

        {/* 4. WORK PORTFOLIO */}
        <SelectedWork />

        {/* 5. CONTENT PRESETS & PACKAGES */}
        <ContentPresets />

        {/* 6. CLIENT EXPERIENCES */}
        <ClientExperiences />

        {/* 7. FINAL CTA + CONTACT */}
        <Contact />
      </main>

      {/* 8. FOOTER */}
      <Footer onSelectCategory={handleSelectCategory} />
    </div>
  );
}

