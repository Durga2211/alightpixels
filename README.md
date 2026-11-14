# Alight Pixels — Creative Production Studio (React)

> **"We create visuals that move brands."**
> An editorial, quiet, and human portfolio website for **Alight Pixels**, built in the **React** framework, adhering to high SEO standards and featuring smooth transitions.

---

## 🎨 Design Philosophy & Brand Tokens

The design strictly reflects the Alight Pixels brand:
- **Palette**:
  - Background: `#FCFBF8` (Warm off-white)
  - Text & Headings: `#231F20` (Charcoal)
  - Accent: `#F9B044` (Sun Amber — used sparingly for the sun circle motif, dots, primary buttons, and hover accents)
  - Muted Text: `#6B6762`
  - Hairlines: `#E4E0D8` (1px clean editorial dividers)
  - Dark Showreel Section: `#151313` for cinematic contrast
- **Typography**:
  - Headings: *Cormorant Garamond* / *EB Garamond* (large, confident, classical serif)
  - Body & UI: *Inter* (clean, refined, legible)
  - Section Labels: Small uppercase with wide letter-spacing (`0.22em`), echoing the spaced-out `p i x e l s`
- **Rules**:
  - Sharp corners (`border-radius: 2px` at most)
  - Recurring amber sun motif behind the hero visual, as the showreel play button, and as timeline/hover markers
  - Numbered rows for services (no boxed cards)
  - No AI-template styling: zero glassmorphism, zero gradient blobs, zero icon grids
  - Full support for `prefers-reduced-motion` and WCAG accessibility standards

---

## ⚡ React Architecture & Smooth Transitions

Built with **React 18** and **Vite**:
- **Component Breakdown**:
  - `Navbar.jsx`: Smooth scroll detection, backdrop blur, accessible mobile drawer.
  - `Hero.jsx`: Asymmetrical editorial hero with looping 24fps showreel and ambient amber sun motif (*scroll cue removed per user request*).
  - `WhoWeAre.jsx`: Editorial typography offset layout.
  - `WhatWeDo.jsx`: Interactive numbered rows (01–04) with smooth floating image reveal that tracks the mouse, amber hover numbers, and portfolio filter links.
  - `SelectedWork.jsx`: Dynamic category filtering with smooth fade/scale transitions, slow zoom on hover, and custom modal viewer.
  - `ProjectModal.jsx`: Accessible dialog with smooth scale-up & fade transition, complete overview, approach, stills gallery, and related projects.
  - `Showreel.jsx`: The only dark section (`#151313`) with custom amber play button, ambient breathing pulse, and custom video controls.
  - `WhyUs.jsx`: 4 text blocks with zero icons.
  - `HowWeWork.jsx`: 4 timeline steps along a thin hairline with amber marker dots.
  - `About.jsx`: Founder card placeholder and 3 BTS/equipment/editing stills.
  - `ClientExperiences.jsx`: Single-quote fade carousel with automatic rotation and dot navigation.
  - `Contact.jsx`: Final CTA combined with enquiry form, real-time client-side validation, loading spinner state, persistence to `data/enquiries.json`, and direct WhatsApp / Email fallbacks.
  - `Footer.jsx`: Light and uncluttered with Back to Top smooth scroll.
- **Animation System (`useScrollReveal`)**:
  - Gentle fade-up reveal on scroll (`opacity: 0; transform: translateY(26px)` &rarr; `opacity: 1; transform: translateY(0)`).
  - Staggered delays for grids and steps (`--stagger: 0..3`).
  - Smooth hover zoom (`scale(1.045)` with `cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 🔍 SEO Standards Maintained

- **Meta Tags**: Title, meta description, keywords, author, robots (`index, follow`), theme-color (`#FCFBF8`), and canonical link (`https://alightpixels.com/`).
- **Social Graph**: Complete Open Graph (`og:type`, `og:title`, `og:description`, `og:image`, `og:url`, `og:site_name`) and Twitter Card (`summary_large_image`).
- **Structured Data**: JSON-LD Schema.org `ProfessionalService` with address, logo, and comprehensive `OfferCatalog` for video production, photography, post-production, and digital content.
- **Search Engine Discovery**: `robots.txt` and `sitemap.xml` included and served at root.
- **Noscript Crawlability**: `<noscript>` fallback included in `index.html` ensuring search bots index headings and services even before script hydration.

---

## 📂 Directory Structure

```text
/Applications/alightpixels/
├── index.html                    # SEO-optimized HTML entry with JSON-LD schema
├── package.json                  # React 18, Vite & scripts
├── vite.config.js                # Vite configuration with React plugin & proxy
├── server.js                     # ES module Node.js server (serves dist/ & API)
├── public/                       # Static public assets (copied to dist on build)
│   ├── assets/                   # Images, videos, icons
│   ├── favicon.svg               # Amber sun vector favicon
│   ├── favicon.png               # Amber sun PNG favicon
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.jsx                  # React application entry point
│   ├── App.jsx                   # Master layout with all 12 sections
│   ├── hooks/
│   │   └── useScrollReveal.js    # Smooth scroll-reveal animation hook
│   ├── data/
│   │   └── studioData.js         # Content, services, portfolio, testimonials
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx              # (Scroll cue removed per request)
│   │   ├── WhoWeAre.jsx
│   │   ├── WhatWeDo.jsx
│   │   ├── SelectedWork.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Showreel.jsx          # (Dark section #151313)
│   │   ├── WhyUs.jsx
│   │   ├── HowWeWork.jsx
│   │   ├── About.jsx
│   │   ├── ClientExperiences.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── styles/
│       └── index.css             # Full editorial stylesheet & animation rules
├── data/
│   └── enquiries.json            # Enquiries database
└── dist/                         # Production-optimized React bundle
```

---

## 🚀 Running the Project

### Development Server (with HMR)
```bash
npm run dev
# Starts Vite dev server at http://localhost:3000
```

### Production Build & Serve
```bash
# 1. Build the production React bundle
npm run build

# 2. Start the production server
npm start
# Serves dist/ and handles POST /api/contact at http://localhost:3000
```
