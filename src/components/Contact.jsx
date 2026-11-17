import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    timeline: '1 - 3 months',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string, mailtoUrl?: string, waUrl?: string }

  const validateField = (name, value) => {
    let err = '';
    const val = value.trim();

    if (name === 'name') {
      if (!val) err = 'Please provide your full name.';
      else if (val.length < 2) err = 'Name must be at least 2 characters.';
    } else if (name === 'email') {
      if (!val) err = 'Email address is required.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) err = 'Please provide a valid email address.';
    } else if (name === 'service') {
      if (!val) err = 'Please select a required service.';
    } else if (name === 'message') {
      if (!val) err = 'Please describe your project brief.';
      else if (val.length < 10) err = 'Please provide at least a brief sentence (10+ characters).';
    }

    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      const err = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const err = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      service: validateField('service', formData.service),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      setStatus({
        type: 'error',
        message: 'Please review and complete the highlighted required fields above.'
      });
      return;
    }

    setLoading(true);

    // Format WhatsApp message containing all enquiry details
    const waText = 
      `*New Project Enquiry — Alight Pixels*\n\n` +
      `• *Name:* ${formData.name.trim()}\n` +
      `• *Email:* ${formData.email.trim()}\n` +
      `• *Phone:* ${formData.phone.trim() || 'Not provided'}\n` +
      `• *Company / Brand:* ${formData.company.trim() || 'Not specified'}\n` +
      `• *Service Required:* ${formData.service}\n` +
      `• *Timeline:* ${formData.timeline}\n\n` +
      `*Project Brief:*\n${formData.message.trim()}`;

    const waUrl = `https://wa.me/918867670083?text=${encodeURIComponent(waText)}`;

    try {
      // 1. Post to local server endpoint
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      }).catch(() => {});

      // 2. Open WhatsApp directly with the filled message
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      // 3. Set success state
      setStatus({
        type: 'success',
        message: `Thank you, ${formData.name}! Your enquiry has been received and opened in WhatsApp (+91 88676 70083). Our creative team will connect with you shortly.`,
        waUrl
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        timeline: 'Immediate (Within 1 Month)',
        message: ''
      });
      setErrors({});
    } catch (err) {
      console.warn('Enquiry fallback:', err);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setStatus({
        type: 'success',
        message: `Your enquiry was prepared for WhatsApp (+91 88676 70083).`,
        waUrl
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-grid">
          
          {/* Contact Left: Editorial Copy and Direct Channels */}
          <div className="contact-info-col reveal">
            <p className="section-label">START A CONVERSATION</p>
            <h2 className="editorial-headline" id="contact-heading">Have a vision? Let's bring it to life.</h2>
            <p className="editorial-body">
              Tell us about your project, and let’s explore how we can bring your vision to life.
            </p>

            <div className="direct-channels">
              <div className="channel-row">
                <span className="channel-label">EMAIL DIRECT</span>
                <a href="mailto:hello@alightpixels.com" className="channel-value">hello@alightpixels.com</a>
              </div>
              <div className="channel-row">
                <span className="channel-label">WHATSAPP STUDIO</span>
                <a
                  href="https://wa.me/918867670083?text=Hello%20Alight%20Pixels%2C%20I%20would%20like%20to%20discuss%20a%20creative%20production%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value"
                >
                  +91 88676 70083
                </a>
              </div>
            </div>
          </div>

          {/* Contact Right: Form */}
          <div className="contact-form-col reveal">
            <form className="project-form" id="project-form" onSubmit={handleSubmit} noValidate>
              {status && (
                <div className={`form-feedback ${status.type}`} role="alert" aria-live="assertive">
                  <p>{status.message}</p>
                  {status.mailtoUrl && (
                    <div style={{ marginTop: '0.75rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <a href={status.mailtoUrl} className="btn-text-link" style={{ color: 'inherit' }}>
                        Send via Email Direct &rarr;
                      </a>
                      <a href={status.waUrl} target="_blank" rel="noopener noreferrer" className="btn-text-link" style={{ color: 'inherit' }}>
                        Send via WhatsApp &rarr;
                      </a>
                    </div>
                  )}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Full Name <span className="required-mark" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input ${errors.name ? 'invalid' : ''}`}
                  placeholder="e.g. Eleanor Vance"
                  required
                  autoComplete="name"
                />
                <span className="field-error" aria-live="polite">{errors.name}</span>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address <span className="required-mark" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input ${errors.email ? 'invalid' : ''}`}
                    placeholder="eleanor@brand.com"
                    required
                    autoComplete="email"
                  />
                  <span className="field-error" aria-live="polite">{errors.email}</span>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+1 (555) 000-0000"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-company" className="form-label">Company / Brand</label>
                  <input
                    type="text"
                    id="contact-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Brand or Agency name"
                    autoComplete="organization"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-service" className="form-label">
                    Service Required <span className="required-mark" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-select ${errors.service ? 'invalid' : ''}`}
                    required
                  >
                    <option value="" disabled>Select a primary service</option>
                    <option value="Video Production">Video Production</option>
                    <option value="Photography">Photography</option>
                    <option value="Post Production">Post Production</option>
                    <option value="Digital Content">Digital Content</option>
                    <option value="Other">Other / Full Campaign</option>
                  </select>
                  <span className="field-error" aria-live="polite">{errors.service}</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-timeline" className="form-label">Project Timeline</label>
                <select
                  id="contact-timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Immediate (< 1 month)">Immediate (Within 1 Month)</option>
                  <option value="1 - 3 months">1 – 3 Months</option>
                  <option value="3 - 6 months">3 – 6 Months</option>
                  <option value="Flexible / Exploratory">Flexible / Exploratory Planning</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Project Description <span className="required-mark" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  className={`form-textarea ${errors.message ? 'invalid' : ''}`}
                  placeholder="Briefly describe your brand, objectives, creative references or deliverables needed..."
                  required
                />
                <span className="field-error" aria-live="polite">{errors.message}</span>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className={`btn btn-primary btn-submit ${loading ? 'loading' : ''}`}
                  disabled={loading}
                >
                  <span className="btn-text">{loading ? 'Sending enquiry...' : 'Send Project Enquiry'}</span>
                  <span className="btn-spinner" aria-hidden="true"></span>
                </button>
                <span className="privacy-note">We respond within 24 hours. Your details remain private.</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

