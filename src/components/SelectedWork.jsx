import React, { useState } from 'react';
import { PORTFOLIO_CATEGORIES, PROJECTS } from '../data/studioData';
import ProjectModal from './ProjectModal';

export default function SelectedWork({ activeFilter, setActiveFilter }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  return (
    <section className="section selected-work-section" id="selected-work" aria-labelledby="work-heading">
      <div className="container">
        <div className="section-intro reveal">
          <p className="section-label">SELECTED WORK</p>
          <h2 className="section-headline" id="work-heading">Stories we've brought to life.</h2>
          <p className="section-subtitle">A selection of projects where creativity meets purpose.</p>
        </div>

        {/* Filter Bar */}
        <nav className="work-filters reveal" aria-label="Portfolio Category Filter">
          <ul className="filter-list">
            {PORTFOLIO_CATEGORIES.map(cat => (
              <li key={cat}>
                <button
                  type="button"
                  className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Projects Grid */}
        <div className="work-grid" id="work-grid">
          {filteredProjects.map((project, idx) => (
            <article key={project.id} className="work-item reveal" style={{ '--stagger': idx % 4 }}>
              <button
                type="button"
                className="work-card-btn"
                aria-haspopup="dialog"
                aria-label={`View ${project.title} project details`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`work-thumb-wrapper ${project.aspect}`}>
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    className="work-thumb"
                    loading="lazy"
                  />
                  <div className="work-hover-overlay">
                    <span className="hover-view-label">View Project</span>
                  </div>
                </div>

                <div className="work-meta">
                  <h3 className="work-title">{project.title}</h3>
                  <div className="work-details">
                    <span className="work-cat">{project.category}</span>
                    <span className="work-sep">•</span>
                    <span className="work-client">{project.client}</span>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Accessible Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      )}
    </section>
  );
}

