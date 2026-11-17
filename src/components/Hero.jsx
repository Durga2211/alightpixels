import React, { useState, useEffect, useRef } from 'react';

const SERVICES = [
  {
    id: 'photography',
    title: 'PHOTOGRAPHY.',
    tagline: 'COMPOSITION, LIGHT, AND HUMAN TEXTURE.',
    description: 'Thoughtful composition, studio lighting, and documentary precision capturing the genuine tactile soul of your brand.',
    deliverables: ['Product Stills', 'Culinary & Beverage', 'Portraits', 'Editorial Lifestyle'],
    categoryFilter: 'Product Photography',
    mediaType: 'images',
    images: [
      'assets/images/portfolio/photography-boats-original.jpg',
      'assets/images/portfolio/photography-sadhu-original.jpg'
    ],
    mediaSrc: 'assets/images/portfolio/photography-boats-original.jpg',
    duration: 8000,
    aspect: 'auto'
  },
  {
    id: 'video-production',
    title: 'VIDEOGRAPHY.',
    tagline: 'CINEMATIC STORIES CRAFTED FOR IMPACT.',
    description: 'Commercial films, brand documentaries, promotional narratives, and high-impact reels that command audience attention.',
    deliverables: ['Commercial Films', 'Brand Documentaries', 'Promotional Videos', 'Social Media Reels'],
    categoryFilter: 'Commercial Films',
    mediaType: 'video',
    mediaSrc: 'assets/videos/video-production-reel.mp4',
    poster: 'assets/images/portfolio/video-production-poster.jpg',
    duration: 14000,
    aspect: '16/10'
  },
  {
    id: 'digital-content',
    title: 'DIGITAL CONTENT.',
    tagline: 'WE LEAD WITH CONTENT. WE SCALE WITH DIGITAL.',
    description: 'Strategic visual content engineered to strengthen digital presence, spark engagement, and build lasting brand resonance.',
    deliverables: ['Social Campaigns', 'Creative Direction', 'Brand Narratives', 'Short-Form Video'],
    categoryFilter: 'Social Media Campaigns',
    mediaType: 'video',
    mediaSrc: 'assets/videos/instagram-reel-analytics.mp4',
    poster: 'assets/images/portfolio/digital-content-poster.jpg',
    duration: 10000,
    aspect: '16/10'
  },
  {
    id: 'website',
    title: 'WEBSITE.',
    tagline: 'DIGITAL HOMES DESIGNED FOR AMBITIOUS BRANDS.',
    description: 'Bespoke editorial websites, quiet portfolios, and responsive interactive experiences built with purpose, craft, and speed.',
    deliverables: ['Brand Websites', 'Portfolio Experiences', 'Interactive Design', 'Full-Stack Performance'],
    categoryFilter: 'All',
    mediaType: 'image',
    mediaSrc: 'assets/images/portfolio/website-bluink.jpg',
    duration: 7000,
    aspect: '16/10'
  }
];

const DEFAULT_SLIDE_DURATION = 7000;

export default function Hero({ onSelectCategory }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplayPaused, setAutoplayPaused] = useState(false);

  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const current = SERVICES[currentIndex];

  const triggerNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
      setIsAnimating(false);
    }, 400);
  };

  const handleSelectService = (index) => {
    if (index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 400);
  };

  // Slider progression & natural video autoplay logic
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (autoplayPaused) {
      if (videoRef.current && current.mediaType === 'video') {
        videoRef.current.pause();
      }
      return;
    }

    if (current.mediaType === 'video') {
      // Natural video autoplay: ensure muted & play smoothly
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.defaultMuted = true;
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().catch(() => {});
            }
          });
        }
      }
    }

    const dwellTime = current.duration || DEFAULT_SLIDE_DURATION;
    timerRef.current = setTimeout(() => {
      triggerNext();
    }, dwellTime);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, autoplayPaused]);

  const handleCategoryAction = (catFilter) => {
    if (onSelectCategory) {
      onSelectCategory(catFilter);
    }
  };

  return (
    <section
      className="hero-flipping-section"
      id="hero"
      aria-label="Alight Pixels Studio Showcase"
      onMouseEnter={() => setAutoplayPaused(true)}
      onMouseLeave={() => setAutoplayPaused(false)}
    >
      {/* Background Subtle Ambient Glow / Sun Motif */}
      <div className="hero-flipping-ambient" aria-hidden="true">
        <div className="hero-sun-glow"></div>
      </div>

      <div className="container hero-flipping-container">
        
        {/* Main Stage Grid: Side-by-side with bold word on left & evolving work beside it on right */}
        <div className="hero-split-grid">
          
          {/* Left Column: Studio Label, Bold Flipping Headline, Tagline, Narrative & CTAs */}
          <div className="hero-left-col">
            <div className="hero-eyebrow-row">
              <span className="hero-flipping-label">CREATIVE PRODUCTION STUDIO</span>
              <span className="hero-flipping-counter">
                <span className="counter-current">0{currentIndex + 1}</span>
                <span className="counter-sep">/</span>
                <span className="counter-total">0{SERVICES.length}</span>
              </span>
            </div>

            {/* The Bold Flipping Headline */}
            <div className="hero-word-wrap">
              <h1
                className={`hero-flipping-word ${isAnimating ? 'word-exit' : 'word-enter'}`}
                key={current.id}
              >
                {current.title}
              </h1>
            </div>

            {/* Tagline */}
            <p
              className={`hero-flipping-tagline ${isAnimating ? 'text-exit' : 'text-enter'}`}
              key={`tag-${current.id}`}
            >
              {current.tagline}
            </p>

            {/* Narrative Description */}
            <p
              className={`hero-evolving-desc ${isAnimating ? 'text-exit' : 'text-enter'}`}
              key={`desc-${current.id}`}
            >
              {current.description}
            </p>

            {/* Deliverables Tags */}
            <div
              className={`hero-deliverables-list ${isAnimating ? 'text-exit' : 'text-enter'}`}
              key={`deliv-${current.id}`}
            >
              {current.deliverables.map((deliv, idx) => (
                <span key={idx} className="hero-deliverable-pill">
                  <span className="pill-dot"></span>
                  {deliv}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hero-evolving-actions">
              <a
                href="#selected-work"
                className="btn btn-primary btn-pill"
                onClick={() => handleCategoryAction(current.categoryFilter)}
              >
                Explore Our Work
              </a>
              <a href="#contact" className="btn-text-link">
                Start a Project <span className="arrow-glyph" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Evolving Respective Work Visual */}
          <div className="hero-right-col">
            {/* Ambient Backdrop Sun - hidden for photography where pure images without background block is requested */}
            {current.id !== 'photography' && (
              <div className="hero-media-backdrop-sun" aria-hidden="true"></div>
            )}

            <div
              className={`hero-evolving-card ${current.id === 'photography' ? 'is-pure-photo' : ''} ${isAnimating ? 'card-exit' : 'card-enter'}`}
              key={`card-${current.id}`}
            >
              <div className="evolving-media-inner">
                {current.id === 'photography' && current.images ? (
                  <div className="hero-photography-diptych">
                    {current.images.map((imgSrc, i) => (
                      <div key={i} className="diptych-frame">
                        <img
                          src={imgSrc}
                          alt={`${current.title} showcase ${i + 1}`}
                          className="diptych-img"
                        />
                      </div>
                    ))}
                  </div>
                ) : current.mediaType === 'video' ? (
                  <video
                    ref={(el) => {
                      videoRef.current = el;
                      if (el) {
                        el.muted = true;
                        el.defaultMuted = true;
                        el.play().catch(() => {});
                      }
                    }}
                    className="evolving-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    webkit-playsinline="true"
                    preload="auto"
                    poster={current.poster}
                    aria-label={current.title}
                    onLoadedData={(e) => {
                      e.currentTarget.muted = true;
                      e.currentTarget.play().catch(() => {});
                    }}
                  >
                    <source src={current.mediaSrc} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={current.mediaSrc}
                    alt={current.title}
                    className="evolving-image"
                  />
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Interactive Navigation Tabs: 4 Clickable Switchers with Progress Bars */}
        <div className="hero-service-tabs" role="tablist" aria-label="Services Showcase">
          {SERVICES.map((srv, idx) => {
            const isActive = idx === currentIndex;
            const duration = srv.duration || DEFAULT_SLIDE_DURATION;

            return (
              <button
                key={srv.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`hero-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleSelectService(idx)}
              >
                <div className="tab-progress-track">
                  <div
                    className={`tab-progress-bar ${isActive && !autoplayPaused ? 'animate' : ''}`}
                    style={
                      isActive
                        ? { animationDuration: `${duration}ms` }
                        : undefined
                    }
                  ></div>
                </div>
                <div className="tab-content">
                  <span className="tab-number">0{idx + 1}</span>
                  <span className="tab-title">{srv.title.replace('.', '')}</span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
