import React, { useState } from 'react';
import { PORTFOLIO_STACKS } from '../data/studioData';
import StackSwipeModal from './StackSwipeModal';

export default function SelectedWork() {
  const [activeStack, setActiveStack] = useState(null);

  return (
    <section className="section selected-work-section" id="selected-work" aria-labelledby="work-heading">
      <div className="container">
        <div className="section-intro reveal">
          <h2 className="section-headline" id="work-heading">Stories we've brought to life.</h2>
          <p className="section-subtitle">A selection of projects where creativity meets purpose.</p>
        </div>

        {/* 4 Interactive Portfolio Stacks Grid */}
        <div className="portfolio-stacks-grid" id="work-grid">
          {PORTFOLIO_STACKS.map((stack, idx) => (
            <article key={stack.id} className="portfolio-stack-item reveal" style={{ '--stagger': idx }}>
              <button
                type="button"
                className="portfolio-stack-btn"
                aria-haspopup="dialog"
                aria-label={`Open ${stack.title} stack with ${stack.countLabel}`}
                onClick={() => setActiveStack(stack)}
              >
                {/* Visual Stack Deck of Layered Cards */}
                <div className={`stack-deck-wrapper ${stack.aspect}`}>
                  {/* Third / Back Card Layer */}
                  {stack.stackPreviews && stack.stackPreviews[1] && (
                    <div className="stack-card-layer layer-back" aria-hidden="true">
                      <img
                        src={stack.stackPreviews[1]}
                        alt=""
                        className="stack-layer-img"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Second / Middle Card Layer */}
                  {stack.stackPreviews && stack.stackPreviews[0] && (
                    <div className="stack-card-layer layer-mid" aria-hidden="true">
                      <img
                        src={stack.stackPreviews[0]}
                        alt=""
                        className="stack-layer-img"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Top / Front Active Card Layer */}
                  <div className="stack-card-layer layer-front">
                    <img
                      src={stack.coverImage}
                      alt={`${stack.title} portfolio cover`}
                      className="stack-layer-img"
                      loading="lazy"
                    />

                    <div className="stack-card-badge">
                      <span className="badge-dot"></span>
                      <span>{stack.countLabel}</span>
                    </div>

                    <div className="stack-hover-cta">
                      <span className="cta-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </span>
                      <span>Swipe Stack</span>
                    </div>
                  </div>
                </div>

                {/* Stack Meta Details */}
                <div className="stack-meta">
                  <div className="stack-meta-top">
                    <h3 className="stack-title">{stack.title}</h3>
                    <span className="stack-count-tag">{stack.countLabel}</span>
                  </div>
                  <p className="stack-subtitle">{stack.subtitle}</p>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Accessible Interactive Swipe Modal with Blurred Backdrop & Cross Sign */}
      {activeStack && (
        <StackSwipeModal
          stack={activeStack}
          initialIndex={0}
          onClose={() => setActiveStack(null)}
        />
      )}
    </section>
  );
}
