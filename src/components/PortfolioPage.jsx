import React, { useState, useEffect } from 'react';
import { PORTFOLIO_FOLDERS } from '../data/studioData';
import StackSwipeModal from './StackSwipeModal';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PortfolioPage({ folderId, onNavigateHome, onSwitchFolder }) {
  const currentFolder = PORTFOLIO_FOLDERS.find((f) => f.id === folderId) || PORTFOLIO_FOLDERS[0];
  
  // Sub-folder state for Photography and Videography
  const [activeSubfolderId, setActiveSubfolderId] = useState(() => {
    return currentFolder.hasSubfolders && currentFolder.subfolders?.length > 0
      ? currentFolder.subfolders[0].id
      : null;
  });

  const [activeSubdivision, setActiveSubdivision] = useState('All');
  const [modalData, setModalData] = useState(null);

  // Reset state when switching main discipline folders
  useEffect(() => {
    setActiveSubdivision('All');
    if (currentFolder.hasSubfolders && currentFolder.subfolders?.length > 0) {
      setActiveSubfolderId(currentFolder.subfolders[0].id);
    } else {
      setActiveSubfolderId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${currentFolder.title} Portfolio | Alight Pixels`;
  }, [currentFolder.id]);

  // Active subfolder object if applicable
  const activeSubfolder = currentFolder.hasSubfolders && currentFolder.subfolders
    ? currentFolder.subfolders.find((s) => s.id === activeSubfolderId) || currentFolder.subfolders[0]
    : null;

  // Determine which items to display
  const itemsPool = activeSubfolder ? activeSubfolder.items : currentFolder.items;
  
  const displayedItems = activeSubdivision === 'All'
    ? itemsPool
    : itemsPool.filter((item) => item.subdivision === activeSubdivision);

  const handleOpenItem = (itemIndex) => {
    setModalData({
      stack: activeSubfolder || currentFolder,
      initialIndex: itemIndex
    });
  };

  const handleSubfolderClick = (subId) => {
    setActiveSubfolderId(subId);
    setActiveSubdivision('All');
    const el = document.getElementById('subfolder-works-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Find index of current folder to show previous/next
  const folderIndex = PORTFOLIO_FOLDERS.findIndex((f) => f.id === currentFolder.id);
  const nextFolder = PORTFOLIO_FOLDERS[(folderIndex + 1) % PORTFOLIO_FOLDERS.length];

  return (
    <div className="portfolio-page-wrapper">
      {/* Site Navbar */}
      <Navbar onSelectCategory={(cat) => onNavigateHome('selected-work')} />

      <main className="portfolio-page-main" id="main-content">
        {/* Top Breadcrumb & Return Bar */}
        <div className="portfolio-page-nav-bar">
          <div className="container portfolio-page-nav-inner">
            <button
              type="button"
              className="portfolio-page-back-link"
              onClick={() => onNavigateHome('selected-work')}
              aria-label="Back to all portfolios"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <span>Back to All Portfolios</span>
            </button>

            <nav className="portfolio-page-breadcrumbs" aria-label="Breadcrumb">
              <span className="crumb-item" onClick={() => onNavigateHome()} style={{ cursor: 'pointer' }}>Home</span>
              <span className="crumb-sep">/</span>
              <span className="crumb-item" onClick={() => onNavigateHome('selected-work')} style={{ cursor: 'pointer' }}>Portfolios</span>
              <span className="crumb-sep">/</span>
              <span className="crumb-current">{currentFolder.title}</span>
              {activeSubfolder && (
                <>
                  <span className="crumb-sep">/</span>
                  <span className="crumb-subfolder">{activeSubfolder.title}</span>
                </>
              )}
            </nav>
          </div>
        </div>

        {/* Portfolio Hero Header */}
        <section className="portfolio-hero-section">
          <div className="container">
            
            {/* Quick Switcher Tabs (All 4 Main Disciplines) */}
            <div className="portfolio-switcher-tabs" role="tablist" aria-label="Switch Portfolio Discipline">
              {PORTFOLIO_FOLDERS.map((f) => {
                const isSelected = f.id === currentFolder.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`portfolio-switcher-tab ${isSelected ? 'active' : ''}`}
                    onClick={() => onSwitchFolder(f.id)}
                  >
                    <img src="/assets/images/icons/folder-blue.png" alt="" className="tab-folder-icon" />
                    <span className="tab-folder-name">{f.title}</span>
                    <span className="tab-folder-count">{f.countLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Discipline Hero Banner */}
            <div className="portfolio-hero-content">
              <div className="portfolio-hero-badge-wrap">
                <span className="portfolio-hero-eyebrow">
                  PORTFOLIO ARCHIVE // 0{folderIndex + 1}
                </span>
                <span className="portfolio-hero-count-pill">{currentFolder.countLabel}</span>
              </div>

              <h1 className="portfolio-hero-title">
                {currentFolder.title}.
              </h1>
              <p className="portfolio-hero-subtitle">
                {currentFolder.hasSubfolders
                  ? `${currentFolder.subtitle}. Explore our dedicated ${currentFolder.title.toLowerCase()} sub-folders below:`
                  : currentFolder.subtitle}
              </p>
            </div>

            {/* ==============================================================
                SUB-FOLDERS DIRECTORY (For Photography & Videography)
                Rendered in the exact website folder style
               ============================================================== */}
            {currentFolder.hasSubfolders && currentFolder.subfolders && (
              <div className="subfolders-section-wrap">
                <div className="subfolders-header-label">
                  <span className="subfolders-indicator-dot"></span>
                  <span>{currentFolder.title} Sub-Folders Directory</span>
                </div>

                <div className="simple-folders-row" role="tablist" aria-label={`${currentFolder.title} Sub-folders`}>
                  {currentFolder.subfolders.map((sub, sIdx) => {
                    const isSubActive = sub.id === activeSubfolderId;
                    return (
                      <div key={sub.id} className="simple-folder-wrapper">
                        <button
                          type="button"
                          role="tab"
                          aria-selected={isSubActive}
                          className={`simple-folder-btn ${isSubActive ? 'is-active' : ''}`}
                          onClick={() => handleSubfolderClick(sub.id)}
                          aria-label={`Open ${sub.title} subfolder`}
                        >
                          {/* Clean Blue Folder Icon */}
                          <div className="folder-icon-stage">
                            <img
                              src="/assets/images/icons/folder-blue.png"
                              alt=""
                              className="simple-folder-img"
                              loading="lazy"
                            />
                            <span className="folder-count-pill">{sub.countLabel}</span>
                          </div>

                          {/* Clean Typography Below Folder */}
                          <div className="simple-folder-text-wrap">
                            <h3 className="simple-folder-title">{sub.title}</h3>
                            <p className="simple-folder-subtitle">{sub.subtitle}</p>
                            <span className="simple-folder-cta">
                              <span>{isSubActive ? 'Viewing Folder' : 'Open Folder'}</span>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                {isSubActive ? (
                                  <polyline points="6 9 12 15 18 9"></polyline>
                                ) : (
                                  <polyline points="9 18 15 12 9 6"></polyline>
                                )}
                              </svg>
                            </span>
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Subdivisions Filter Tabs (for single archive disciplines) */}
            {!currentFolder.hasSubfolders && currentFolder.subdivisions && currentFolder.subdivisions.length > 1 && (
              <div className="portfolio-subdivisions-filter" role="tablist" aria-label="Filter by Category">
                <span className="filter-label">Filter:</span>
                <div className="filter-pills-row">
                  {currentFolder.subdivisions.map((sub) => {
                    const count = sub === 'All'
                      ? currentFolder.items.length
                      : currentFolder.items.filter((i) => i.subdivision === sub).length;
                    const isActive = activeSubdivision === sub;
                    return (
                      <button
                        key={sub}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`filter-pill-btn ${isActive ? 'active' : ''}`}
                        onClick={() => setActiveSubdivision(sub)}
                      >
                        <span>{sub}</span>
                        <span className="filter-count-badge">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        </section>

        {/* Portfolio Gallery Grid */}
        <section className="portfolio-gallery-section" id="subfolder-works-anchor">
          <div className="container">
            
            {/* Active Subfolder Title & Context Banner */}
            {activeSubfolder && (
              <div className="subfolder-active-bar">
                <div className="subfolder-bar-left">
                  <img src="/assets/images/icons/folder-blue.png" alt="" className="subfolder-bar-icon" />
                  <div className="subfolder-bar-text">
                    <span className="subfolder-bar-tag">Active Archive</span>
                    <h2 className="subfolder-bar-heading">{activeSubfolder.title}</h2>
                  </div>
                  <span className="subfolder-bar-pill">{activeSubfolder.countLabel}</span>
                </div>
                <p className="subfolder-bar-desc">{activeSubfolder.subtitle}</p>
              </div>
            )}

            <div className="portfolio-gallery-grid">
              {displayedItems.map((item, idx) => (
                <article key={item.id} className="portfolio-item-card">
                  <button
                    type="button"
                    className="portfolio-item-card-btn"
                    onClick={() => handleOpenItem(idx)}
                    aria-haspopup="dialog"
                    aria-label={`Open ${item.title}`}
                  >
                    {/* Media Thumbnail Container */}
                    <div className="portfolio-item-media-wrap">
                      {item.mediaType === 'video' ? (
                        <div className="portfolio-video-thumb">
                          {item.poster ? (
                            <img
                              src={item.poster}
                              alt={item.title}
                              className="portfolio-media-element"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <video
                              src={item.src}
                              poster={item.poster}
                              muted
                              playsInline
                              preload="metadata"
                              className="portfolio-media-element"
                            />
                          )}
                          <div className="portfolio-video-play-btn" aria-hidden="true">
                            <span className="play-triangle">▶</span>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={item.src}
                          alt={item.title}
                          className="portfolio-media-element"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      )}

                      <div className="portfolio-item-overlay">
                        <span className="portfolio-overlay-pill">
                          {item.mediaType === 'video' ? 'Play Video' : 'View Full Image'}
                        </span>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="portfolio-item-meta">
                      <div className="meta-header-row">
                        <span className="portfolio-item-category">{item.category}</span>
                        {item.client && (
                          <span className="portfolio-item-client">{item.client}</span>
                        )}
                      </div>
                      <h3 className="portfolio-item-title">{item.title}</h3>
                      {item.description && (
                        <p className="portfolio-item-desc">{item.description}</p>
                      )}
                    </div>
                  </button>
                </article>
              ))}
            </div>

            {/* Bottom Actions & Next Discipline Preview */}
            <div className="portfolio-page-bottom-actions">
              <div className="next-portfolio-card">
                <div className="next-portfolio-info">
                  <span className="next-label">Next Discipline</span>
                  <h3 className="next-title">{nextFolder.title}</h3>
                  <p className="next-subtitle">{nextFolder.subtitle} ({nextFolder.countLabel})</p>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onSwitchFolder(nextFolder.id)}
                >
                  <span>Explore {nextFolder.title}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>

              <div className="portfolio-cta-strip">
                <p className="cta-strip-text">
                  Have a vision for your brand? Let’s produce it together.
                </p>
                <div className="cta-strip-buttons">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => onNavigateHome('contact')}
                  >
                    Start a Project
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => onNavigateHome('selected-work')}
                  >
                    View All Disciplines
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Full Screen Interactive Swipe Modal with Blurred Backdrop & Cross Sign */}
      {modalData && (
        <StackSwipeModal
          stack={modalData.stack}
          initialIndex={modalData.initialIndex}
          onClose={() => setModalData(null)}
        />
      )}

      {/* Site Footer */}
      <Footer onSelectCategory={(cat) => onNavigateHome('selected-work')} />
    </div>
  );
}
