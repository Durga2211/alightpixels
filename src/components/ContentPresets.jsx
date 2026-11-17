import React from 'react';

const PRESETS = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'For brands getting serious about content.',
    price: '₹24,999',
    period: '/month',
    isPopular: false,
    features: [
      '1 content shoot (2–3 hours)',
      '8 edited Reels',
      '8 story creatives',
      '1 social platform (Instagram)',
      'Caption writing',
      'Posting and scheduling',
      'Monthly analytics report',
      '1 revision per reel'
    ],
    waMessage: "Hi Alight Pixels, I'm interested in the Starter preset (₹24,999/month). Let's book a free call."
  },
  {
    id: 'growth',
    name: 'Growth',
    subtitle: 'Our most loved plan for growing brands.',
    price: '₹49,999',
    period: '/month',
    isPopular: true,
    badge: 'Most Popular',
    features: [
      '2 shoot days/month',
      '12–16 Reels',
      '12 story creatives',
      '4 carousel/static posts',
      'Instagram + Facebook',
      'Content strategy',
      'Basic Meta Ads setup (ad budget extra)',
      'Monthly performance meeting',
      'Priority support',
      '2 revisions per reel'
    ],
    waMessage: "Hi Alight Pixels, I'm interested in the Growth preset (₹49,999/month). Let's book a free call."
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'A full in-house studio, on demand.',
    price: '₹89,999',
    period: '/month',
    isPopular: false,
    features: [
      '4 shoot days/month',
      '20–24 Reels',
      '20+ stories',
      '8 carousel/static posts',
      'Instagram + Facebook + YouTube Shorts',
      'Meta Ads management (ad budget extra)',
      'Brand strategy',
      'Competitor analysis',
      'Dedicated account manager',
      'Weekly reporting',
      '2 revisions per reel'
    ],
    waMessage: "Hi Alight Pixels, I'm interested in the Premium preset (₹89,999/month). Let's book a free call."
  }
];

export default function ContentPresets() {
  const phone = '8867670083';

  return (
    <section className="section presets-section" id="presets" aria-labelledby="presets-heading">
      <div className="container">
        <div className="section-intro reveal text-center">
          <p className="section-label">CONTENT PACKAGES</p>
          <h2 className="section-headline" id="presets-heading">Tailored production presets.</h2>
          <p className="section-subtitle">
            Consistent, high-impact social content engineered for brand resonance and scalable growth.
          </p>
        </div>

        <div className="presets-grid">
          {PRESETS.map((preset, idx) => {
            const waUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(preset.waMessage)}`;

            return (
              <div
                key={preset.id}
                className={`preset-card reveal ${preset.isPopular ? 'popular-card' : ''}`}
                style={{ '--stagger': idx }}
              >
                {preset.badge && (
                  <div className="preset-popular-badge">
                    <span className="badge-sparkle" aria-hidden="true">⚡</span>
                    <span>{preset.badge}</span>
                  </div>
                )}

                <div className="preset-header">
                  <h3 className="preset-name">{preset.name}</h3>
                  <p className="preset-subtitle">{preset.subtitle}</p>
                </div>

                <div className="preset-pricing">
                  <span className="price-amount">{preset.price}</span>
                  <span className="price-period">{preset.period}</span>
                </div>

                <ul className="preset-features-list" aria-label={`${preset.name} plan deliverables`}>
                  {preset.features.map((feat, fIdx) => (
                    <li key={fIdx} className="preset-feature-item">
                      <span className="feature-check" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span className="feature-text">{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="preset-cta-wrap">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-block ${preset.isPopular ? 'btn-primary' : 'btn-outline-preset'}`}
                    aria-label={`Book a free call for ${preset.name} package on WhatsApp`}
                  >
                    Book a Free Call
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
