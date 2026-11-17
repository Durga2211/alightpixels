import React, { useState, useEffect, useRef } from 'react';

export default function StackSwipeModal({ stack, initialIndex = 0, onClose }) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const videoRef = useRef(null);

  const items = stack?.items || [];
  const currentItem = items[activeIndex] || items[0];
  const total = items.length;

  const goToNext = () => {
    if (isAnimating || total <= 1) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % total);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToPrev = () => {
    if (isAnimating || total <= 1) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [total]);

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev
      goToPrev();
    }
  };

  if (!stack || total === 0) return null;

  return (
    <div
      className="stack-swipe-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${stack.title} swipe gallery`}
    >
      <div className="stack-swipe-container">
        
        {/* Top Header Bar */}
        <header className="stack-swipe-header">
          <div className="stack-swipe-meta">
            <span className="stack-header-category">{stack.title.toUpperCase()} PORTFOLIO</span>
            <span className="stack-header-counter">
              <span className="current-num">0{activeIndex + 1}</span>
              <span className="sep">/</span>
              <span className="total-num">0{total}</span>
            </span>
          </div>

          <div className="stack-header-hint">
            <span>Swipe or use arrows</span>
          </div>

          {/* Cross Sign / Close Button */}
          <button
            type="button"
            className="stack-swipe-close-btn"
            onClick={onClose}
            aria-label="Close viewer (Esc)"
          >
            <svg
              className="cross-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>

        {/* Center Stage: Swipe Track & Arrows */}
        <div
          className="stack-swipe-stage"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Arrow Button */}
          {total > 1 && (
            <button
              type="button"
              className="stack-nav-btn prev-btn"
              onClick={goToPrev}
              aria-label="Previous item"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          )}

          {/* Active Media Container */}
          <div className={`stack-active-slide ${isAnimating ? 'slide-animating' : ''}`}>
            <div className="slide-media-wrapper">
              {currentItem.mediaType === 'video' ? (
                <video
                  ref={videoRef}
                  key={currentItem.src}
                  src={currentItem.src}
                  poster={currentItem.poster}
                  className="stack-slide-video"
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                />
              ) : (
                <img
                  key={currentItem.src}
                  src={currentItem.src}
                  alt={currentItem.title}
                  className="stack-slide-image"
                  draggable="false"
                />
              )}
            </div>

            {/* Slide Information & Caption */}
            <div className="slide-caption-bar">
              <div className="caption-heading-row">
                <h3 className="slide-title">{currentItem.title}</h3>
                <span className="slide-category-pill">{currentItem.category}</span>
              </div>
              {currentItem.description && (
                <p className="slide-desc">{currentItem.description}</p>
              )}
            </div>
          </div>

          {/* Next Arrow Button */}
          {total > 1 && (
            <button
              type="button"
              className="stack-nav-btn next-btn"
              onClick={goToNext}
              aria-label="Next item"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          )}
        </div>

        {/* Bottom Pagination Strip */}
        {total > 1 && (
          <nav className="stack-swipe-pagination" aria-label="Slides navigation">
            {items.map((item, idx) => (
              <button
                key={item.id || idx}
                type="button"
                className={`pagination-dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}: ${item.title}`}
                aria-current={idx === activeIndex ? 'true' : 'false'}
              >
                <span className="dot-thumb">
                  {item.mediaType === 'video' ? (
                    <span className="dot-video-icon">▶</span>
                  ) : (
                    <img src={item.src} alt="" aria-hidden="true" />
                  )}
                </span>
                <span className="dot-number">0{idx + 1}</span>
              </button>
            ))}
          </nav>
        )}

      </div>
    </div>
  );
}

