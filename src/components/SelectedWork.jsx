import React, { useState } from 'react';
import { PORTFOLIO_FOLDERS } from '../data/studioData';
import StackSwipeModal from './StackSwipeModal';

export default function SelectedWork() {
  const [activeFolderId, setActiveFolderId] = useState('photography');
  const [modalData, setModalData] = useState(null);

  const activeFolder = PORTFOLIO_FOLDERS.find((f) => f.id === activeFolderId) || PORTFOLIO_FOLDERS[0];

  const handleOpenFolder = (folderId) => {
    setActiveFolderId(folderId);
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
            A selection of projects where creativity meets purpose. Click any folder to explore its attached portfolio.
          </p>
        </div>

        {/* ==============================================================
            4 MINIMALIST FOLDERS (Clean Folder Icon + Text Below)
           ============================================================== */}
        <div className="simple-folders-row" id="work-grid" role="tablist" aria-label="Portfolio Disciplines">
          {PORTFOLIO_FOLDERS.map((folder, idx) => {
            const isActive = folder.id === activeFolder.id;
            return (
              <div key={folder.id} className="simple-folder-wrapper reveal" style={{ '--stagger': idx }}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`simple-folder-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleOpenFolder(folder.id)}
                  aria-label={`Open ${folder.title} folder containing ${folder.countLabel}`}
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
                      <span>{isActive ? 'Viewing Folder' : 'Open Folder'}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        {isActive ? (
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

        {/* ==============================================================
            OPENED FOLDER PORTFOLIO (Respective Works Attached to Active Folder)
           ============================================================== */}
        <div className="opened-folder-view" key={activeFolder.id}>
          
          {/* Active Folder Header Banner */}
          <div className="opened-folder-toolbar">
            <div className="folder-breadcrumbs">
              <span className="bc-root">Work Archive</span>
              <span className="bc-sep">/</span>
              <span className="bc-current">
                <img src="/assets/images/icons/folder-blue.png" alt="" className="bc-icon" />
                {activeFolder.title}
              </span>
              <span className="bc-count">({activeFolder.items.length} Projects)</span>
            </div>
            <div className="folder-active-desc">
              <span>{activeFolder.subtitle}</span>
            </div>
          </div>

          {/* Portfolio Grid under the Active Folder */}
          <div className="folder-works-grid">
            {activeFolder.items.map((item, itemIdx) => (
              <article key={item.id} className="folder-work-card">
                <button
                  type="button"
                  className="folder-work-card-btn"
                  onClick={() => handleOpenItemInModal(activeFolder, itemIdx)}
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
            ))}
          </div>

        </div>

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
