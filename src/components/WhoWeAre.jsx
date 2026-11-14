import React from 'react';

export default function WhoWeAre() {
  return (
    <section className="section who-we-are-section" id="about" aria-labelledby="who-heading">
      <div className="container who-container">
        <div className="who-offset-layout">
          <div className="who-label-col reveal">
            <p className="section-label">WHO WE ARE</p>
            <div className="editorial-accent-sun" aria-hidden="true"></div>
          </div>
          <div className="who-content-col reveal">
            <h2 className="editorial-headline" id="who-heading">
              Every brand has a story. We make it unforgettable.
            </h2>
            <div className="hairline-divider" aria-hidden="true"></div>
            <p className="editorial-body">
              We combine creativity, storytelling, and visual craftsmanship to transform ideas into powerful brand experiences. From concept to final frame, we create visuals that connect, inspire, and leave an impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

