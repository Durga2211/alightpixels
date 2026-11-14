import React, { useState } from 'react';
import { SERVICES } from '../data/studioData';

export default function WhatWeDo({ onSelectCategory }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e, idx) => {
    if (window.innerWidth > 1024) {
      const rect = e.currentTarget.getBoundingClientRect();
      setMouseY(e.clientY - rect.top);
    }
  };

  const handleCategoryClick = (category) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  return (
    <section className="section what-we-do-section" id="what-we-do" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-intro reveal">
          <p className="section-label">WHAT WE DO</p>
          <h2 className="section-headline" id="services-heading">Creative solutions. Powerful visuals.</h2>
          <p className="section-subtitle">
            Everything your brand needs to communicate visually, delivered through one creative partner.
          </p>
        </div>

        <div className="services-list" id="services-list">
          {SERVICES.map((service, idx) => (
            <article
              key={service.num}
              className={`service-row reveal ${hoveredIdx === idx ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onMouseMove={(e) => handleMouseMove(e, idx)}
            >
              <div className="service-row-inner">
                <div className="service-num" aria-hidden="true">{service.num}</div>
                <div className="service-info">
                  <div className="service-title-wrap">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                  </div>
                  <div className="service-deliverables">
                    <span className="deliverables-label">Deliverables:</span>
                    {service.deliverables.map((item, dIdx) => (
                      <React.Fragment key={item}>
                        <span className="deliverables-item">{item}</span>
                        {dIdx < service.deliverables.length - 1 && (
                          <span className="deliverable-separator">•</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="service-action">
                  <a
                    href="#selected-work"
                    className="service-link"
                    onClick={() => handleCategoryClick(service.category)}
                    aria-label={`Explore ${service.title} Portfolio Category`}
                  >
                    <span className="service-link-text">Explore Category</span>
                    <span className="arrow-circle" aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              {/* Floating Hover Preview with smooth follow */}
              <div
                className={`service-preview ${hoveredIdx === idx ? 'visible' : ''}`}
                style={{ top: hoveredIdx === idx && mouseY ? `${mouseY}px` : '50%' }}
                aria-hidden="true"
              >
                <img src={service.thumbnail} alt="" loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

