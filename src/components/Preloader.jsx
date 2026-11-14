import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const duration = 1400; // 1.4 seconds total loading feel
    const startTime = performance.now();

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawProgress);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        // Trigger smooth curtain exit animation
        setExiting(true);
        setTimeout(() => {
          setHidden(true);
          if (onComplete) onComplete();
        }, 650); // Exit transition duration
      }
    };

    const animFrame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animFrame);
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      className={`site-preloader ${exiting ? 'preloader-exit' : ''}`}
      aria-label="Loading Alight Pixels"
      role="status"
    >
      <div className="preloader-backdrop"></div>

      <div className="preloader-content">
        {/* Amber Sun Ambient Glow */}
        <div className="preloader-sun-glow" aria-hidden="true"></div>

        {/* Brand Logo with Gentle Floating Scale (Light & Dark Variants) */}
        <div className="preloader-logo-wrap">
          <img
            src="assets/images/logo.png"
            alt="Alight Pixels"
            className="preloader-logo brand-logo-light"
          />
          <img
            src="assets/images/logo-dark.png"
            alt="Alight Pixels"
            className="preloader-logo brand-logo-dark"
          />
        </div>

        {/* Studio Subtext */}
        <div className="preloader-meta">
          <p className="preloader-studio-title">ALIGHT PIXELS</p>
          <p className="preloader-subtitle">CREATIVE PRODUCTION STUDIO</p>
        </div>

        {/* Minimalist Hairline Progress Bar */}
        <div className="preloader-progress-track">
          <div
            className="preloader-progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage Counter */}
        <div className="preloader-counter">
          <span className="counter-num">{progress}</span>
          <span className="counter-symbol">%</span>
        </div>
      </div>
    </div>
  );
}

