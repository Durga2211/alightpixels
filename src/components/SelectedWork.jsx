import React, { useState } from 'react';
import { PORTFOLIO_FOLDERS } from '../data/studioData';
import StackSwipeModal from './StackSwipeModal';

export default function SelectedWork() {
  const [activeFolderId, setActiveFolderId] = useState(null);
  const [activeSubdivision, setActiveSubdivision] = useState('All');
  const [modalData, setModalData] = useState(null);

  const activeFolder = PORTFOLIO_FOLDERS.find((f) => f.id === activeFolderId);

  // Filter items in opened folder by selected subdivision
  const displayedItems = activeFolder
    ? activeSubdivision === 'All'
      ? activeFolder.items
      : activeFolder.items.filter((item) => item.subdivision === activeSubdivision)
    : [];

  const handleOpenFolder = (folderId) => {
    setActiveFolderId(folderId);
    setActiveSubdivision('All');
    const el = document.getElementById('selected-work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToFolders = () => {
    setActiveFolderId(null);
    setActiveSubdivision('All');
  };

  const handleOpenItemInModal = (folder, itemIndex) => {
    setModalData({
      stack: folder,
      initialIndex: itemIndex
    });
  };

  return (
    <section className="section selected-work-section" id="selected-work" aria-labelledby="work-heading">
      <div className="container">
        
        {/* Intro Headline */}
        <div className="section-intro reveal">
          <h2 className="section-headline" id="work-heading">Stories we've brought to life.</h2>
          <p className="section-subtitle">
            {activeFolder
              ? `Exploring the ${activeFolder.title} archive. Select a subdivision or click any project to view.`
              : 'A curated directory of production archives across four core disciplines.'}
          </p>
        </div>

        {/* ==============================================================
            VIEW 1: FOLDER DIRECTORY (Overview of 4 Interactive Folders)
           ============================================================== */}
        {!activeFolder && (
          <div className="portfolio-folders-grid" id="work-grid">
            {PORTFOLIO_FOLDERS.map((folder, idx) => (
              <article key={folder.id} className="folder-card-item reveal" style={{ '--stagger': idx }}>
                <button
                  type="button"
                  className="folder-interactive-btn"
                  onClick={() => handleOpenFolder(folder.id)}
                  aria-label={`Open ${folder.title} folder containing ${folder.countLabel}`}
                >
                  {/* Physical/Digital Folder Container */}
                  <div className="folder-envelope">
                    
                    {/* Folder Back Tab (Mac OS / Reference Style) */}
                    <div className="folder-back-tab">
                      <span className="folder-tab-label">DIR // 0{idx + 1}</span>
                      <img src="assets/images/icons/folder-blue.png" alt="" className="folder-tab-icon" />
                    </div>

                    {/* Inner Paper Sheets / Photo Previews Peeking Out */}
                    <div className="folder-paper-pocket">
                      {folder.previewImages && folder.previewImages[1] && (
                        <div className="folder-paper paper-secondary" aria-hidden="true">
                          <img src={folder.previewImages[1]} alt="" className="paper-img" loading="lazy" />
                        </div>
                      )}
                      {folder.previewImages && folder.previewImages[0] && (
                        <div className="folder-paper paper-primary" aria-hidden="true">
                          <img src={folder.previewImages[0]} alt="" className="paper-img" loading="lazy" />
                        </div>
                      )}
                    </div>

                    {/* Folder Front Flap with Blue Reference Styling */}
                    <div className="folder-front-flap">
                      <div className="folder-flap-top">
                        <div className="folder-icon-wrap">
                          <img src="assets/images/icons/folder-blue.png" alt="" className="folder-main-icon" />
                        </div>
                        <span className="folder-count-badge">{folder.countLabel}</span>
                      </div>

                      <div className="folder-flap-bottom">
                        <h3 className="folder-title">{folder.title}</h3>
                        <p className="folder-sub-desc">{folder.subtitle}</p>
                        <div className="folder-open-cue">
                          <span>Open Folder</span>
                          <span className="cue-arrow" aria-hidden="true">&rarr;</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </button>
              </article>
            ))}
          </div>
        )}

        {/* ==============================================================
            VIEW 2: OPENED FOLDER VIEW (Subdivisions & Portfolio Works)
           ============================================================== */}
        {activeFolder && (
          <div className="opened-folder-view">
            
            {/* Top Breadcrumb & Control Bar */}
            <div className="opened-folder-toolbar">
              <button
                type="button"
                className="btn-back-folders"
                onClick={handleBackToFolders}
                aria-label="Back to all folders"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span>Back to Folders</span>
              </button>

              <div className="folder-breadcrumbs">
                <span className="bc-root">Work Archive</span>
                <span className="bc-sep">/</span>
                <span className="bc-current">
                  <img src="assets/images/icons/folder-blue.png" alt="" className="bc-icon" />
                  {activeFolder.title}
                </span>
                <span className="bc-count">({activeFolder.countLabel})</span>
              </div>
            </div>

            {/* Subdivisions Filter Tabs (Sub-folders) */}
            <div className="folder-subdivisions-bar" role="tablist" aria-label={`${activeFolder.title} Subdivisions`}>
              {activeFolder.subdivisions.map((subdiv) => {
                const count =
                  subdiv === 'All'
                    ? activeFolder.items.length
                    : activeFolder.items.filter((item) => item.subdivision === subdiv).length;
                const isActive = activeSubdivision === subdiv;

                return (
                  <button
                    key={subdiv}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`subdivision-tab ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveSubdivision(subdiv)}
                  >
                    <span className="tab-folder-glyph" aria-hidden="true">📁</span>
                    <span className="tab-label">{subdiv}</span>
                    <span className="tab-count">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Portfolio Grid under the Active Folder / Subdivision */}
            <div className="folder-works-grid">
              {displayedItems.map((item, itemIdx) => {
                // Find true index in activeFolder.items so modal launches accurately
                const trueIndex = activeFolder.items.findIndex((i) => i.id === item.id);

                return (
                  <article key={item.id} className="folder-work-card reveal" style={{ '--stagger': itemIdx % 4 }}>
                    <button
                      type="button"
                      className="folder-work-card-btn"
                      onClick={() => handleOpenItemInModal(activeFolder, trueIndex)}
                      aria-haspopup="dialog"
                      aria-label={`View ${item.title}`}
                    >
                      <div className="folder-work-thumb-wrap">
                        {item.mediaType === 'video' ? (
                          <div className="video-thumb-container">
                            <video
                              src={item.src}
                              poster={item.poster}
                              muted
                              playsInline
                              preload="metadata"
                              className="folder-work-media"
                            />
                            <div className="video-play-badge" aria-label="Play video">
                              <span className="play-triangle">▶</span>
                            </div>
                          </div>
                        ) : (
                          <img
                            src={item.src}
                            alt={item.title}
                            className="folder-work-media"
                            loading="lazy"
                          />
                        )}

                        <div className="thumb-hover-overlay">
                          <span className="overlay-btn-label">
                            {item.mediaType === 'video' ? 'Play Video' : 'View Full Image'}
                          </span>
                        </div>
                      </div>

                      <div className="folder-work-meta">
                        <div className="work-meta-top">
                          <h3 className="folder-work-title">{item.title}</h3>
                          <span className="folder-work-category">{item.category}</span>
                        </div>
                        {item.client && (
                          <p className="folder-work-client">{item.client}</p>
                        )}
                        {item.description && (
                          <p className="folder-work-desc">{item.description}</p>
                        )}
                      </div>
                    </button>
                  </article>
                );
              })}
            </div>

            {/* Bottom Return Button */}
            <div className="folder-bottom-actions">
              <button
                type="button"
                className="btn btn-outline-preset btn-pill"
                onClick={handleBackToFolders}
              >
                &larr; Back to All Folders
              </button>
            </div>

          </div>
        )}

      </div>

      {/* Accessible Interactive Swipe Modal with Blurred Backdrop & Cross Sign */}
      {modalData && (
        <StackSwipeModal
          stack={modalData.stack}
          initialIndex={modalData.initialIndex}
          onClose={() => setModalData(null)}
        />
      )}
    </section>
  );
}
