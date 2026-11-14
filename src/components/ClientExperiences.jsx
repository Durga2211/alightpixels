import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/studioData';

export default function ClientExperiences() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="section testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="testimonials-header reveal">
          <p className="section-label">CLIENT EXPERIENCES</p>
          <h2 className="section-headline" id="testimonials-heading">Good work. Great relationships.</h2>
        </div>

        <div className="testimonial-slider reveal" aria-roledescription="carousel" aria-live="polite">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className={`testimonial-slide ${currentIndex === idx ? 'active' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} of ${TESTIMONIALS.length}`}
            >
              <blockquote className="testimonial-quote">
                {t.quote}
              </blockquote>
              <div className="testimonial-author-block">
                <span className="author-name">{t.author}</span>
                <span className="author-sep">•</span>
                <span className="author-company">{t.company}</span>
                <span className="author-sep">•</span>
                <span className="author-project">{t.project}</span>
              </div>
            </div>
          ))}

          {/* Slider Controls */}
          <div className="testimonial-controls">
            <button
              type="button"
              className="testimonial-arrow-btn"
              onClick={prevSlide}
              aria-label="Previous client testimonial"
            >
              <span aria-hidden="true">&larr;</span>
            </button>
            <div className="testimonial-dots">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`dot-btn ${currentIndex === idx ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="testimonial-arrow-btn"
              onClick={nextSlide}
              aria-label="Next client testimonial"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>

        <p className="testimonials-footnote">
          * Note: Placeholder structures are provided for client review insertion. Real verified quotes can be added in <code>src/data/studioData.js</code>.
        </p>
      </div>
    </section>
  );
}

