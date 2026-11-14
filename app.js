/**
 * ALIGHT PIXELS — Creative Production Studio
 * Fallback Application Logic (Used when React bundle is not running)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Give React a small tick to mount if bundle is active
  setTimeout(() => {
    if (window.__REACT_HYDRATED__) {
      return; // React has mounted and handles all interactions
    }

    initNavbar();
    initServices();
    initSelectedWork();
    initShowreel();
    initTestimonials();
    initContactForm();
    initBackToTop();
  }, 50);
});

/* ==========================================================================
   1. NAVBAR & MOBILE DRAWER
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('site-header');
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const mobileLinks = drawer ? drawer.querySelectorAll('a') : [];

  function checkScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
      drawer.setAttribute('aria-hidden', String(isExpanded));
      drawer.classList.toggle('open', !isExpanded);
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
        drawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
        drawer.classList.remove('open');
        document.body.style.overflow = '';
        toggleBtn.focus();
      }
    });
  }

  // Mega-Menu Dropdown Interaction (for "OUR WORK")
  const dropdownItem = document.querySelector('.dropdown-item');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownCaret = document.querySelector('.dropdown-caret');
  const megaMenu = document.querySelector('.mega-menu-dropdown');
  const megaCards = document.querySelectorAll('.mega-menu-card');

  if (dropdownItem && megaMenu) {
    function openDropdown() {
      megaMenu.classList.add('active');
      dropdownItem.classList.add('open');
      if (dropdownCaret) dropdownCaret.classList.add('rotated');
      if (dropdownToggle) dropdownToggle.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
      megaMenu.classList.remove('active');
      dropdownItem.classList.remove('open');
      if (dropdownCaret) dropdownCaret.classList.remove('rotated');
      if (dropdownToggle) dropdownToggle.setAttribute('aria-expanded', 'false');
    }

    if (dropdownToggle) {
      dropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = megaMenu.classList.contains('active');
        if (isOpen) {
          closeDropdown();
        } else {
          openDropdown();
        }
      });
    }

    dropdownItem.addEventListener('mouseenter', openDropdown);
    dropdownItem.addEventListener('mouseleave', closeDropdown);

    megaCards.forEach(card => {
      card.addEventListener('click', (e) => {
        closeDropdown();
        const category = card.getAttribute('data-filter');
        if (category) {
          const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
          if (filterBtn) {
            filterBtn.click();
          }
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!dropdownItem.contains(e.target)) {
        closeDropdown();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && megaMenu.classList.contains('active')) {
        closeDropdown();
        if (dropdownToggle) dropdownToggle.focus();
      }
    });
  }
}

/* ==========================================================================
   2. WHAT WE DO — INTERACTIVE ROWS & PREVIEWS
   ========================================================================== */
function initServices() {
  const rows = document.querySelectorAll('.service-row');

  rows.forEach(row => {
    const preview = row.querySelector('.service-preview');
    if (!preview) return;

    row.addEventListener('mousemove', (e) => {
      if (window.innerWidth > 1024) {
        const rect = row.getBoundingClientRect();
        const relY = e.clientY - rect.top;
        preview.style.top = `${relY}px`;
      }
    });

    row.addEventListener('mouseleave', () => {
      preview.style.top = '50%';
    });
  });

  const serviceLinks = document.querySelectorAll('.service-link, [data-filter]');
  serviceLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetFilter = link.getAttribute('data-filter');
      if (targetFilter) {
        const filterBtn = document.querySelector(`.filter-btn[data-filter="${targetFilter}"]`);
        if (filterBtn) {
          filterBtn.click();
        }
      }
    });
  });
}

/* ==========================================================================
   3. SELECTED WORK & PROJECT MODAL
   ========================================================================== */
const PROJECTS_DATA = {
  'project-luminescence': {
    title: 'Luminescence',
    client: '[Production Showcase — Ready for Client Credit]',
    category: 'Commercial Films',
    image: 'assets/images/portfolio/commercial-film-01.jpg',
    overview: 'A high-impact visual exploration of light, glass, and kinetic motion designed for a luxury commercial showcase. Developed from initial visual treatment through 24fps high-speed capture.',
    approach: 'Captured on large-format digital cinema cameras with vintage anamorphic lenses to render warm, natural skin tones and organic flares. Color graded with a custom print-film emulation curve.',
    gallery: [
      'assets/images/portfolio/commercial-film-01.jpg',
      'assets/images/about/bts-camera-rig.jpg',
      'assets/images/about/editing-suite.jpg'
    ],
    related: ['project-origins-of-craft', 'project-tactile-forms']
  },
  'project-origins-of-craft': {
    title: 'Origins of Craft',
    client: '[Production Showcase — Ready for Client Credit]',
    category: 'Brand Films',
    image: 'assets/images/portfolio/brand-film-01.jpg',
    overview: 'A documentary-style brand film exploring artisanal precision, tactile craftsmanship, and human dedication across architectural design workshops.',
    approach: 'Focusing on natural ambient lighting, unhurried handheld compositions, and rich Foley sound design to convey intimate texture without voiceover clutter.',
    gallery: [
      'assets/images/portfolio/brand-film-01.jpg',
      'assets/images/about/bts-camera-rig.jpg',
      'assets/images/about/equipment-lenses.jpg'
    ],
    related: ['project-luminescence', 'project-golden-hour-chronicles']
  },
  'project-tactile-forms': {
    title: 'Tactile Forms',
    client: '[Production Showcase — Ready for Client Credit]',
    category: 'Product Photography',
    image: 'assets/images/portfolio/product-photo-01.jpg',
    overview: 'Studio product campaign highlighting industrial textures, matte ceramics, and refined geometry under calibrated directional lighting.',
    approach: 'Shot using medium-format digital back with precision focus stacking to maintain absolute edge fidelity and rich micro-contrast across surfaces.',
    gallery: [
      'assets/images/portfolio/product-photo-01.jpg',
      'assets/images/about/equipment-lenses.jpg',
      'assets/images/portfolio/food-beverage-01.jpg'
    ],
    related: ['project-culinary-atelier', 'project-solitude-and-vision']
  },
  'project-culinary-atelier': {
    title: 'Culinary Atelier',
    client: '[Production Showcase — Ready for Client Credit]',
    category: 'Food & Beverage',
    image: 'assets/images/portfolio/food-beverage-01.jpg',
    overview: 'Atmospheric still life and culinary editorial photography honoring organic ingredients, smoke, and fine dining preparation.',
    approach: 'Single-source soft daylight diffusion paired with subtle negative fill to sculpt deep, velvety shadows and celebrate genuine culinary warmth.',
    gallery: [
      'assets/images/portfolio/food-beverage-01.jpg',
      'assets/images/portfolio/product-photo-01.jpg',
      'assets/images/about/bts-camera-rig.jpg'
    ],
    related: ['project-tactile-forms', 'project-lifestyle-chronicles']
  },
  'project-architects-of-tomorrow': {
    title: 'Architects of Tomorrow',
    client: '[Production Showcase — Ready for Client Credit]',
    category: 'Corporate Content',
    image: 'assets/images/portfolio/corporate-film-01.jpg',
    overview: 'Corporate narrative film spotlighting visionary design teams, engineering studios, and urban sustainability initiatives.',
    approach: 'Dynamic architectural tracking shots combined with intimate, conversational interviews to create an honest, inspiring corporate presentation.',
    gallery: [
      'assets/images/portfolio/corporate-film-01.jpg',
      'assets/images/about/editing-suite.jpg',
      'assets/images/portfolio/commercial-film-01.jpg'
    ],
    related: ['project-luminescence', 'project-origins-of-craft']
  },
  'project-rhythm-and-pulse': {
    title: 'Rhythm & Pulse',
    client: '[Production Showcase — Ready for Client Credit]',
    category: 'Social Media Campaigns',
    image: 'assets/images/portfolio/social-campaign-01.jpg',
    overview: 'Vertical narrative reels and dynamic motion assets engineered for mobile engagement without sacrificing cinematic production quality.',
    approach: 'Engineered specifically for 9:16 framing with swift, rhythm-matched cuts and bespoke sound design tailored for short-form digital channels.',
    gallery: [
      'assets/images/portfolio/social-campaign-01.jpg',
      'assets/images/portfolio/lifestyle-photo-01.jpg',
      'assets/images/about/editing-suite.jpg'
    ],
    related: ['project-luminescence', 'project-solitude-and-vision']
  },
  'project-solitude-and-vision': {
    title: 'Solitude & Vision',
    client: '[Production Showcase — Ready for Client Credit]',
    category: 'Portrait Photography',
    image: 'assets/images/portfolio/portrait-photo-01.jpg',
    overview: 'Editorial portrait series capturing creative leaders and artists in their private workspaces and natural environments.',
    approach: 'Unobtrusive, medium-telephoto prime lenses paired with gentle conversational pacing to capture candid, unforced emotional resonance.',
    gallery: [
      'assets/images/portfolio/portrait-photo-01.jpg',
      'assets/images/portfolio/brand-film-01.jpg',
      'assets/images/about/equipment-lenses.jpg'
    ],
    related: ['project-origins-of-craft', 'project-tactile-forms']
  },
  'project-golden-hour-chronicles': {
    title: 'Golden Hour Chronicles',
    client: '[Production Showcase — Ready for Client Credit]',
    category: 'Lifestyle',
    image: 'assets/images/portfolio/lifestyle-photo-01.jpg',
    overview: 'Location lifestyle photography celebrating twilight expeditions, open landscapes, and thoughtful human connection.',
    approach: 'Shot exclusively during natural dawn and golden hour transitions to harness warm ambient sun flares and expansive organic tones.',
    gallery: [
      'assets/images/portfolio/lifestyle-photo-01.jpg',
      'assets/images/portfolio/commercial-film-01.jpg',
      'assets/images/about/bts-camera-rig.jpg'
    ],
    related: ['project-origins-of-craft', 'project-rhythm-and-pulse']
  }
};

function initSelectedWork() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workItems = document.querySelectorAll('.work-item');
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.textContent.trim();

      workItems.forEach(item => {
        const itemCategory = item.querySelector('.work-cat')?.textContent.trim();
        if (filter === 'All' || itemCategory === filter) {
          item.classList.remove('hidden');
          item.style.display = '';
        } else {
          item.classList.add('hidden');
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   4. SHOWREEL VIDEO PLAYER
   ========================================================================== */
function initShowreel() {
  const container = document.getElementById('showreel-video-container');
  const video = document.getElementById('showreel-video');
  const playBtn = document.getElementById('showreel-play-btn');

  if (!video || !playBtn) return;

  function togglePlay() {
    if (video.paused || video.ended) {
      video.play().then(() => {
        container.classList.add('playing');
        playBtn.style.opacity = '0';
        playBtn.style.pointerEvents = 'none';
      }).catch(console.warn);
    } else {
      video.pause();
      container.classList.remove('playing');
      playBtn.style.opacity = '1';
      playBtn.style.pointerEvents = 'auto';
    }
  }

  playBtn.addEventListener('click', togglePlay);
  video.addEventListener('click', togglePlay);
}

/* ==========================================================================
   5. CLIENT EXPERIENCES — TESTIMONIAL SLIDER
   ========================================================================== */
function initTestimonials() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot-btn');
  const prevBtn = document.querySelector('.testimonial-arrow-btn[aria-label*="Previous"]');
  const nextBtn = document.querySelector('.testimonial-arrow-btn[aria-label*="Next"]');
  let currentIndex = 0;

  if (slides.length === 0) return;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  if (nextBtn) nextBtn.addEventListener('click', () => {
    showSlide((currentIndex + 1) % slides.length);
  });

  if (prevBtn) prevBtn.addEventListener('click', () => {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showSlide(idx));
  });
}

/* ==========================================================================
   6. CONTACT FORM VALIDATION & REAL API SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('project-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('submit-btn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const phone = document.getElementById('contact-phone')?.value.trim() || '';
    const company = document.getElementById('contact-company')?.value.trim() || '';
    const service = document.getElementById('contact-service')?.value;
    const timeline = document.getElementById('contact-timeline')?.value || '';
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !service || !message) {
      if (feedback) {
        feedback.hidden = false;
        feedback.className = 'form-feedback error';
        feedback.textContent = 'Please complete all required fields.';
      }
      return;
    }

    if (submitBtn) {
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, company, service, timeline, message })
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success !== false) {
        form.reset();
        if (feedback) {
          feedback.hidden = false;
          feedback.className = 'form-feedback success';
          feedback.textContent = `Thank you, ${name}. Your enquiry has been received. We will follow up via ${email} within 24 hours.`;
        }
      } else {
        throw new Error(result.error || 'Server error');
      }
    } catch (err) {
      if (feedback) {
        feedback.hidden = false;
        feedback.className = 'form-feedback error';
        feedback.innerHTML = `
          Enquiry received offline. Reach us directly: 
          <a href="mailto:hello@alightpixels.com" style="color:inherit;text-decoration:underline;margin-left:0.5rem;">Email Direct</a> or 
          <a href="https://wa.me/15550192834" target="_blank" style="color:inherit;text-decoration:underline;margin-left:0.5rem;">WhatsApp</a>
        `;
      }
    } finally {
      if (submitBtn) {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
      }
    }
  });
}

/* ==========================================================================
   7. BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const backToTop = document.querySelector('.back-to-top-btn');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
