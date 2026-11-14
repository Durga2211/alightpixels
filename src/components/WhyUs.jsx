import React from 'react';
import { WHY_US_ITEMS } from '../data/studioData';

export default function WhyUs() {
  return (
    <section className="section why-us-section" id="why-us" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-intro reveal">
          <p className="section-label">WHY ALIGHT PIXELS</p>
          <h2 className="section-headline" id="why-heading">More than production. A creative partnership.</h2>
        </div>

        <div className="why-grid">
          {WHY_US_ITEMS.map((item, idx) => (
            <article key={item.index} className="why-card reveal" style={{ '--stagger': idx }}>
              <div className="why-index">{item.index}</div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

