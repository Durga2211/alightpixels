import React from 'react';
import { PROCESS_STEPS } from '../data/studioData';

export default function HowWeWork() {
  return (
    <section className="section how-we-work-section" id="how-we-work" aria-labelledby="process-heading">
      <div className="container">
        <div className="section-intro reveal">
          <p className="section-label">OUR PROCESS</p>
          <h2 className="section-headline" id="process-heading">From first idea to final frame.</h2>
        </div>

        <div className="process-track reveal">
          <div className="process-line" aria-hidden="true"></div>

          <ol className="process-steps">
            {PROCESS_STEPS.map((step, idx) => (
              <li key={step.num} className="process-step" style={{ '--stagger': idx }}>
                <div className="step-marker" aria-hidden="true">
                  <span className="amber-dot"></span>
                </div>
                <div className="step-content">
                  <span className="step-number">{step.num}</span>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

