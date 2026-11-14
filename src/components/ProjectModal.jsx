import React, { useEffect, useRef } from 'react';
import { PROJECTS } from '../data/studioData';

export default function ProjectModal({ project, onClose, onSelectProject }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target)) {
      onClose();
    }
  };

  const relatedProjects = (project.relatedIds || [])
    .map(relId => PROJECTS.find(p => p.id === relId))
    .filter(Boolean);

  return (
    <div className="modal-backdrop-overlay" onClick={handleBackdropClick} role="presentation">
      <div
        className="project-modal-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        <div className="modal-inner">
          <header className="modal-header">
            <div className="modal-header-meta">
              <span className="modal-category">{project.category}</span>
              <span className="modal-client">{project.client}</span>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close project modal"
            >
              &times;
            </button>
          </header>

          <div className="modal-body">
            <h2 className="modal-title" id="modal-project-title">{project.title}</h2>

            <div className="modal-main-media">
              <img
                src={project.image}
                alt={`${project.title} featured still`}
                className="modal-img"
              />
            </div>

            <div className="modal-text-columns">
              <div className="modal-col">
                <h3 className="modal-subheading">Project Overview</h3>
                <p className="modal-desc">{project.overview}</p>
              </div>
              <div className="modal-col">
                <h3 className="modal-subheading">Objectives &amp; Approach</h3>
                <p className="modal-desc">{project.approach}</p>
              </div>
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <div className="modal-gallery-section">
                <h3 className="modal-subheading">Production Gallery</h3>
                <div className="modal-gallery-grid">
                  {project.gallery.map((imgSrc, idx) => (
                    <div key={idx} className="modal-gallery-item">
                      <img
                        src={imgSrc}
                        alt={`${project.title} production still ${idx + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {relatedProjects.length > 0 && (
              <div className="modal-related-section">
                <h3 className="modal-subheading">Related Projects</h3>
                <div className="modal-related-grid">
                  {relatedProjects.map(rel => (
                    <button
                      key={rel.id}
                      type="button"
                      className="related-card"
                      onClick={() => onSelectProject(rel)}
                    >
                      <img src={rel.image} alt={rel.title} className="related-thumb" loading="lazy" />
                      <span className="related-title">{rel.title}</span>
                      <span className="related-category">{rel.category}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

