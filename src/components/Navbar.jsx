import React, { useState, useEffect, useRef } from 'react';

export default function Navbar({ onSelectCategory, onNavigateSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('alight_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Sync initial theme attribute and listen to system theme changes
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.style.colorScheme = theme;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      const saved = localStorage.getItem('alight_theme');
      if (!saved) {
        const sysTheme = e.matches ? 'dark' : 'light';
        setTheme(sysTheme);
        document.documentElement.setAttribute('data-theme', sysTheme);
        document.documentElement.style.colorScheme = sysTheme;
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    document.documentElement.style.colorScheme = nextTheme;
    try {
      localStorage.setItem('alight_theme', nextTheme);
    } catch (e) {}
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleWorkCategoryClick = (category) => {
    setDropdownOpen(false);
    setMobileOpen(false);
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  const handleNavLinkClick = (e, targetId) => {
    closeMobile();
    if (onNavigateSection) {
      e.preventDefault();
      onNavigateSection(targetId);
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  const WORK_CATEGORIES = [
    {
      label: "OUR VIDEOGRAPHY",
      title: "Commercial & Brand Films",
      category: "Commercial Films",
      image: "assets/images/service-video.jpg"
    },
    {
      label: "OUR PHOTOGRAPHY",
      title: "Editorial & Product Stills",
      category: "Product Photography",
      image: "assets/images/service-photo.jpg"
    },
    {
      label: "DIGITAL CONTENT",
      title: "Campaigns & Narrative Media",
      category: "Social Media Campaigns",
      image: "assets/images/service-digital.jpg"
    },
    {
      label: "WEBSITE EXPERIENCE",
      title: "Digital Homes & Design",
      category: "All",
      image: "assets/images/portfolio/website-showcase.jpg"
    }
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="site-header">
      <div className="nav-container">
        
        {/* Brand Logo: Crisp high-resolution artwork (Light & Dark variants) */}
        <a href="#hero" className="brand-link" aria-label="Alight Pixels Home" onClick={closeMobile}>
          <img
            src="assets/images/logo.png"
            alt="Alight Pixels — Creative Production Studio"
            className="brand-logo-clear brand-logo-light"
          />
          <img
            src="assets/images/logo-dark.png"
            alt="Alight Pixels — Creative Production Studio"
            className="brand-logo-clear brand-logo-dark"
          />
        </a>

        {/* Desktop Navigation: EXACTLY Our Work (with dropdown), Our Services, About Us */}
        <nav className="nav-menu" id="primary-nav" aria-label="Primary Navigation">
          <ul className="nav-list">
            
            {/* 1. OUR WORK (With Dropdown Mega-Menu) */}
            <li
              className={`nav-item dropdown-item ${dropdownOpen ? 'open' : ''}`}
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className="nav-link dropdown-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>OUR WORK</span>
                <span className={`dropdown-caret ${dropdownOpen ? 'rotated' : ''}`} aria-hidden="true">
                  ▾
                </span>
              </button>

              {/* Mega-Menu Dropdown Panel (4 Columns as in Reference) */}
              <div className={`mega-menu-dropdown ${dropdownOpen ? 'active' : ''}`} role="region" aria-label="Our Work categories">
                <div className="mega-menu-inner container">
                  <div className="mega-menu-grid">
                    {WORK_CATEGORIES.map((item) => (
                      <a
                        key={item.label}
                        href="#selected-work"
                        className="mega-menu-card"
                        data-filter={item.category}
                        onClick={() => handleWorkCategoryClick(item.category)}
                      >
                        <div className="mega-card-header">
                          <span className="mega-card-label">{item.label}</span>
                          <span className="mega-card-explore">
                            EXPLORE <span className="explore-arrow">&rarr;</span>
                          </span>
                        </div>
                        <div className="mega-card-thumb-wrap">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="mega-card-thumb"
                            loading="lazy"
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* 2. OUR SERVICES */}
            <li className="nav-item">
              <a href="#services" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'services')}>
                OUR SERVICES
              </a>
            </li>

            {/* 3. ABOUT US */}
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'about')}>
                ABOUT US
              </a>
            </li>

            {/* 4. CONTACT US */}
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'contact')}>
                CONTACT US
              </a>
            </li>

          </ul>
        </nav>

        {/* Right Action: Theme Toggle & START A PROJECT */}
        <div className="nav-actions">
          {/* Theme Toggle Button (Desktop & Mobile) */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? (
              <svg
                className="theme-icon sun-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg
                className="theme-icon moon-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a href="#contact" className="btn btn-primary nav-cta btn-pill" onClick={(e) => handleNavLinkClick(e, 'contact')}>
            START A PROJECT
          </a>
          <button
            type="button"
            className="mobile-toggle"
            aria-controls="mobile-drawer"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`} id="mobile-drawer" aria-hidden={!mobileOpen}>
        <div className="mobile-drawer-inner">
          <ul className="mobile-nav-list">
            <li>
              <div className="mobile-section-header">OUR WORK</div>
              <div className="mobile-subgrid">
                {WORK_CATEGORIES.map((cat) => (
                  <a
                    key={cat.label}
                    href="#selected-work"
                    className="mobile-sublink"
                    onClick={() => handleWorkCategoryClick(cat.category)}
                  >
                    <span>{cat.label}</span>
                    <span className="explore-arrow">&rarr;</span>
                  </a>
                ))}
              </div>
            </li>
            <li><a href="#services" className="mobile-nav-link" onClick={(e) => handleNavLinkClick(e, 'services')}>OUR SERVICES</a></li>
            <li><a href="#about" className="mobile-nav-link" onClick={(e) => handleNavLinkClick(e, 'about')}>ABOUT US</a></li>
            <li><a href="#contact" className="mobile-nav-link" onClick={(e) => handleNavLinkClick(e, 'contact')}>CONTACT US</a></li>
          </ul>
          <div className="mobile-drawer-footer">
            <div className="mobile-theme-row">
              <span className="mobile-theme-label">Theme Mode</span>
              <button
                type="button"
                className="theme-toggle-btn mobile-theme-toggle"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {theme === 'dark' ? (
                  <span className="theme-toggle-text-wrap">
                    <svg
                      className="theme-icon sun-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                    </svg>
                    <span>Dark</span>
                  </span>
                ) : (
                  <span className="theme-toggle-text-wrap">
                    <svg
                      className="theme-icon moon-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                    <span>Light</span>
                  </span>
                )}
              </button>
            </div>
            <a href="#contact" className="btn btn-primary btn-block nav-cta btn-pill" onClick={closeMobile}>
              START A PROJECT
            </a>
            <a
              href="https://wa.me/918867670083"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-wa-link"
            >
              <span>WhatsApp: +91 88676 70083</span>
            </a>
            <p className="mobile-contact-line">hello@alightpixels.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
