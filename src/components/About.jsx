import React from 'react';

export default function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-header-grid">
          <div className="about-label-col reveal">
            <p className="section-label">ABOUT ALIGHT PIXELS</p>
            <div className="editorial-accent-sun" aria-hidden="true"></div>
          </div>
          <div className="about-headline-col reveal">
            <h2 className="editorial-headline" id="about-heading">
              Built on creativity. Driven by vision.
            </h2>
            <div className="hairline-divider" aria-hidden="true"></div>
            <p className="editorial-body">
              Alight Pixels is an independent creative production studio focused on creating meaningful visual experiences for brands and businesses. We believe great content is more than just beautiful imagery. It is storytelling, emotion, and purpose brought together through thoughtful creative execution. Our approach combines artistic direction, technical precision, and a genuine passion for visual storytelling.
            </p>
          </div>
        </div>

        <div className="about-gallery-grid">
          {/* Founder portrait placeholder */}
          <article className="founder-card reveal">
            <div className="founder-photo-wrapper">
              <img
                src="assets/images/about/founder-placeholder.jpg"
                alt="Founder & Creative Director at Alight Pixels"
                className="about-photo"
                loading="lazy"
              />
              <div className="founder-badge">
                <span className="amber-dot" aria-hidden="true"></span>
                <span>FOUNDER &amp; CREATIVE DIRECTOR</span>
              </div>
            </div>
            <div className="founder-text">
              <h3 className="founder-title">Creative Direction &amp; Vision</h3>
              <p className="founder-bio">
                [Founder Photo &amp; Profile Placeholder — Ready for studio founder name and personal note. Alight Pixels operates with direct principal involvement on every production, from treatment through final grade.]
              </p>
            </div>
          </article>

          {/* Studio BTS Images */}
          <div className="about-stills-column">
            <figure className="still-card reveal" style={{ '--stagger': 1 }}>
              <img
                src="assets/images/about/bts-camera-rig.jpg"
                alt="Behind the scenes on production location with camera rig"
                className="still-img"
                loading="lazy"
              />
              <figcaption className="still-caption">
                <span className="caption-tag">BEHIND THE SCENES</span>
                <span className="caption-title">On Location Production &amp; Lighting</span>
              </figcaption>
            </figure>

            <figure className="still-card reveal" style={{ '--stagger': 2 }}>
              <img
                src="assets/images/about/equipment-lenses.jpg"
                alt="Cinema prime lenses and camera optics equipment"
                className="still-img"
                loading="lazy"
              />
              <figcaption className="still-caption">
                <span className="caption-tag">EQUIPMENT &amp; OPTICS</span>
                <span className="caption-title">High-Resolution Cinema Sensors &amp; Glass</span>
              </figcaption>
            </figure>

            <figure className="still-card reveal" style={{ '--stagger': 3 }}>
              <img
                src="assets/images/about/editing-suite.jpg"
                alt="Color grading suite and editing desk"
                className="still-img"
                loading="lazy"
              />
              <figcaption className="still-caption">
                <span className="caption-tag">POST-PRODUCTION SUITE</span>
                <span className="caption-title">Mastering, Sound Design &amp; Precision Color</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

