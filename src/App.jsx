import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import WhyUs from './components/WhyUs';
import SelectedWork from './components/SelectedWork';
import PortfolioPage from './components/PortfolioPage';
import ContentPresets from './components/ContentPresets';
import ClientExperiences from './components/ClientExperiences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

// Helper to determine the active page from the browser URL
function getRouteFromLocation() {
  if (typeof window === 'undefined') return { page: 'home', folderId: null };
  const pathname = window.location.pathname;
  const hash = window.location.hash;
  const search = window.location.search;

  // 1. Direct path: /portfolio/:folderId
  const match = pathname.match(/^\/portfolio\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return { page: 'portfolio', folderId: match[1] };
  }

  // 2. Hash fallback: #/portfolio/:folderId
  const hashMatch = hash.match(/^#\/?portfolio\/?([a-zA-Z0-9_-]+)/);
  if (hashMatch) {
    return { page: 'portfolio', folderId: hashMatch[1] };
  }

  // 3. Query param fallback: ?portfolio=:folderId
  const params = new URLSearchParams(search);
  const portfolioParam = params.get('portfolio');
  if (portfolioParam) {
    return { page: 'portfolio', folderId: portfolioParam };
  }

  return { page: 'home', folderId: null };
}

export default function App() {
  // Activate smooth scroll-reveal transitions across the entire site
  useScrollReveal();

  const [route, setRoute] = useState(getRouteFromLocation);

  // Listen to browser Back/Forward buttons and Hash changes
  useEffect(() => {
    const handlePopState = () => {
      setRoute(getRouteFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateToPortfolio = (folderId) => {
    window.history.pushState(null, '', `/portfolio/${folderId}`);
    setRoute({ page: 'portfolio', folderId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (targetId = null) => {
    window.history.pushState(null, '', '/');
    setRoute({ page: 'home', folderId: null });
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (category) => {
    if (category === 'Commercial Films' || category === 'OUR VIDEOGRAPHY') {
      navigateToPortfolio('videography');
    } else if (category === 'Product Photography' || category === 'OUR PHOTOGRAPHY') {
      navigateToPortfolio('photography');
    } else if (category === 'Social Media Campaigns' || category === 'DIGITAL CONTENT') {
      navigateToPortfolio('digital-content');
    } else if (category === 'WEBSITE EXPERIENCE') {
      navigateToPortfolio('website');
    } else {
      navigateToHome('selected-work');
    }
  };

  // RENDER DEDICATED PORTFOLIO PAGE
  if (route.page === 'portfolio' && route.folderId) {
    return (
      <div className="alight-app">
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <PortfolioPage
          folderId={route.folderId}
          onNavigateHome={navigateToHome}
          onSwitchFolder={navigateToPortfolio}
        />
      </div>
    );
  }

  // RENDER HOME PAGE
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

        {/* 4. WHY CHOOSE US — Built for brands that refuse to blend in */}
        <WhyUs />

        {/* 5. WORK PORTFOLIO (Masonry cards showcase) */}
        <SelectedWork onOpenPortfolio={navigateToPortfolio} />

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
