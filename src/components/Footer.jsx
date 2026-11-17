import React from 'react';

export default function Footer({ onSelectCategory }) {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (category) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  return (
    <footer className="site-footer" id="site-footer">
      <div className="container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <a href="#hero" className="brand-link" aria-label="Alight Pixels Home">
              <img src="assets/images/logo.png" alt="Alight Pixels — Creative Production Studio" className="brand-logo-clear footer-logo brand-logo-light" />
              <img src="assets/images/logo-dark.png" alt="Alight Pixels — Creative Production Studio" className="brand-logo-clear footer-logo brand-logo-dark" />
            </a>
            <p className="footer-tagline">Creating visuals that move brands.</p>
          </div>

          <nav className="footer-nav-col" aria-label="Footer Quick Links">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-link-list">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#hero" className="footer-link">Services</a></li>
              <li><a href="#selected-work" className="footer-link">Our Work</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </nav>

          <nav className="footer-services-col" aria-label="Footer Services">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-link-list">
              <li>
                <a href="#selected-work" className="footer-link" onClick={() => handleServiceClick('Commercial Films')}>
                  Video Production
                </a>
              </li>
              <li>
                <a href="#selected-work" className="footer-link" onClick={() => handleServiceClick('Product Photography')}>
                  Photography
                </a>
              </li>
              <li>
                <a href="#selected-work" className="footer-link" onClick={() => handleServiceClick('All')}>
                  Website Experience
                </a>
              </li>
              <li>
                <a href="#selected-work" className="footer-link" onClick={() => handleServiceClick('Social Media Campaigns')}>
                  Digital Content
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect</h4>
            <ul className="footer-link-list">
              <li><a href="https://instagram.com/alightpixels" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a></li>
              <li><a href="https://linkedin.com/company/alightpixels" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a></li>
              <li><a href="https://youtube.com/@alightpixels" target="_blank" rel="noopener noreferrer" className="footer-link">YouTube</a></li>
              <li><a href="mailto:hello@alightpixels.com" className="footer-link">Email Direct</a></li>
              <li><a href="https://wa.me/918867670083" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp (+91 88676 70083)</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-hairline" aria-hidden="true"></div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">&copy; 2026 Alight Pixels. All rights reserved.</p>
          <div className="footer-bottom-actions">
            <a href="#hero" className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top of page">
              <span>Back to top</span>
              <span className="arrow-up" aria-hidden="true">&uarr;</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

