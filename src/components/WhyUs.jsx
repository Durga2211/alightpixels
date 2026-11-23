import React from 'react';

const WHY_CHOOSE_US_ITEMS = [
  {
    id: 'one-team',
    title: 'One Team',
    desc: 'Strategy, shoot, edit and ads under one roof — no juggling freelancers or agencies.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    id: 'fast-delivery',
    title: 'Fast Delivery',
    desc: '48–72 hour turnaround on most content, without cutting corners on quality.',
    featured: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    id: 'platform-first',
    title: 'Platform-first Storytelling',
    desc: 'Every frame built for the feed — hooks, pacing and formats tuned per platform.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  {
    id: 'cinematic-quality',
    title: 'Premium Cinematic Quality',
    desc: 'Cinema-grade cameras, lighting and color that make small brands look world-class.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
        <line x1="7" y1="2" x2="7" y2="22"></line>
        <line x1="17" y1="2" x2="17" y2="22"></line>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <line x1="2" y1="7" x2="7" y2="7"></line>
        <line x1="2" y1="17" x2="7" y2="17"></line>
        <line x1="17" y1="17" x2="22" y2="17"></line>
        <line x1="17" y1="7" x2="22" y2="7"></line>
      </svg>
    )
  },
  {
    id: 'transparent-comm',
    title: 'Transparent Communication',
    desc: 'Clear timelines, shared drafts and honest updates at every stage of the project.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    )
  },
  {
    id: 'scalable-packages',
    title: 'Scalable Packages',
    desc: 'Start lean and grow the engagement as your brand and results scale.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    )
  }
];

export default function WhyUs() {
  return (
    <section className="section why-choose-us-section" id="why-us" aria-labelledby="why-choose-heading">
      <div className="container">
        
        {/* Section Intro matching reference */}
        <div className="why-choose-header">
          <span className="why-choose-eyebrow">WHY CHOOSE US</span>
          <h2 className="why-choose-headline" id="why-choose-heading">
            Built for brands that refuse to <span className="why-choose-accent">blend in.</span>
          </h2>
        </div>

        {/* 3-Column x 2-Row Card Grid */}
        <div className="why-choose-grid">
          {WHY_CHOOSE_US_ITEMS.map((item, idx) => (
            <article
              key={item.id}
              className={`why-choose-card ${item.featured ? 'is-featured' : ''}`}
              style={{ '--card-idx': idx }}
            >
              <div className="why-card-icon-wrap" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
