import React from 'react';
import { PORTFOLIO_FOLDERS } from '../data/studioData';

export default function SelectedWork({ onOpenPortfolio }) {
  const handleFolderClick = (e, folderId) => {
    // If user clicked with modifier keys (Cmd/Ctrl/Shift), let browser handle open in new tab
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    if (onOpenPortfolio) {
      onOpenPortfolio(folderId);
    }
  };

  return (
    <section className="section selected-work-section" id="selected-work" aria-labelledby="work-heading">
      <div className="container">
        
        {/* Intro Headline */}
        <div className="section-intro reveal">
          <h2 className="section-headline" id="work-heading">Stories we've brought to life.</h2>
          <p className="section-subtitle">
            A selection of projects where creativity meets purpose. Click any folder to explore its dedicated portfolio page.
          </p>
        </div>

        {/* ==============================================================
            4 MINIMALIST FOLDERS (Clean Folder Icon + Text Below)
            Clicking any folder opens its dedicated portfolio page
           ============================================================== */}
        <div className="simple-folders-row" id="work-grid" role="navigation" aria-label="Portfolio Folders">
          {PORTFOLIO_FOLDERS.map((folder, idx) => (
            <div key={folder.id} className="simple-folder-wrapper reveal" style={{ '--stagger': idx }}>
              <a
                href={`/portfolio/${folder.id}`}
                className="simple-folder-btn"
                onClick={(e) => handleFolderClick(e, folder.id)}
                aria-label={`Open ${folder.title} portfolio page containing ${folder.countLabel}`}
              >
                {/* Clean Blue Folder Icon from uploaded reference with no text on it */}
                <div className="folder-icon-stage">
                  <img
                    src="/assets/images/icons/folder-blue.png"
                    alt=""
                    className="simple-folder-img"
                    loading="lazy"
                  />
                  <span className="folder-count-pill">{folder.countLabel}</span>
                </div>

                {/* Clean Text Label Below Folder Icon */}
                <div className="simple-folder-text-wrap">
                  <h3 className="simple-folder-title">{folder.title}</h3>
                  <p className="simple-folder-subtitle">{folder.subtitle}</p>
                  <span className="simple-folder-cta">
                    <span>Open Portfolio</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
