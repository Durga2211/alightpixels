/**
 * Alight Pixels — Studio Content & Portfolio Dataset
 */

export const SERVICES = [
  {
    num: "01",
    title: "Video Production",
    desc: "From cinematic commercials to brand films, we create compelling videos that bring your brand’s vision to life.",
    deliverables: [
      "Commercial Films",
      "Brand Films",
      "Promotional Videos",
      "Product Videos",
      "Social Media Reels",
      "Corporate Films"
    ],
    category: "Commercial Films",
    thumbnail: "assets/images/service-video.jpg"
  },
  {
    num: "02",
    title: "Photography",
    desc: "Photography that captures the essence of your brand through thoughtful composition, lighting, and storytelling.",
    deliverables: [
      "Product",
      "Food",
      "Portrait",
      "Corporate",
      "Event",
      "Lifestyle"
    ],
    category: "Product Photography",
    thumbnail: "assets/images/service-photo.jpg"
  },
  {
    num: "03",
    title: "Website Experience",
    desc: "Bespoke digital homes, responsive portfolios, and interactive brand websites crafted with purpose and speed.",
    deliverables: [
      "Brand Websites",
      "Portfolio Experiences",
      "Interactive Design",
      "Full-Stack Performance",
      "Mobile Architecture",
      "Creative Direction"
    ],
    category: "Brand Websites",
    thumbnail: "assets/images/portfolio/website-showcase.jpg"
  },
  {
    num: "04",
    title: "Digital Content",
    desc: "Strategic visual content designed to strengthen your digital presence and create meaningful engagement.",
    deliverables: [
      "Social Media Content",
      "Content Creation",
      "Creative Campaigns",
      "Brand Content",
      "Digital Storytelling",
      "Content Strategy"
    ],
    category: "Social Media Campaigns",
    thumbnail: "assets/images/service-digital.jpg"
  }
];

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Commercial Films",
  "Brand Films",
  "Product Photography",
  "Food & Beverage",
  "Corporate Content",
  "Social Media Campaigns",
  "Portrait Photography",
  "Lifestyle"
];

export const PROJECTS = [
  {
    id: "luminescence",
    title: "Luminescence",
    category: "Commercial Films",
    client: "[Production Showcase — Ready for Client Credit]",
    aspect: "aspect-16-9",
    image: "assets/images/portfolio/commercial-film-01.jpg",
    overview: "A high-impact visual exploration of light, kinetic motion, and refined brand atmosphere crafted for a luxury commercial showcase.",
    approach: "Captured on large-format cinema sensors with vintage anamorphic lenses to render warm, organic skin tones and natural flares. Graded with custom print-film emulation curves.",
    gallery: [
      "assets/images/portfolio/commercial-film-01.jpg",
      "assets/images/about/bts-camera-rig.jpg",
      "assets/images/about/editing-suite.jpg"
    ],
    relatedIds: ["origins-of-craft", "tactile-forms"]
  },
  {
    id: "origins-of-craft",
    title: "Origins of Craft",
    category: "Brand Films",
    client: "[Production Showcase — Ready for Client Credit]",
    aspect: "aspect-16-9",
    image: "assets/images/portfolio/brand-film-01.jpg",
    overview: "A documentary-style brand film exploring artisanal precision, tactile materials, and human dedication across architectural workshops.",
    approach: "Focusing on natural ambient lighting, unhurried handheld compositions, and rich Foley sound design to convey intimate texture without voiceover clutter.",
    gallery: [
      "assets/images/portfolio/brand-film-01.jpg",
      "assets/images/about/bts-camera-rig.jpg",
      "assets/images/about/equipment-lenses.jpg"
    ],
    relatedIds: ["luminescence", "golden-hour-chronicles"]
  },
  {
    id: "tactile-forms",
    title: "Tactile Forms",
    category: "Product Photography",
    client: "[Production Showcase — Ready for Client Credit]",
    aspect: "aspect-4-3",
    image: "assets/images/portfolio/product-photo-01.jpg",
    overview: "Studio product campaign highlighting industrial textures, matte ceramics, and refined geometry under calibrated directional lighting.",
    approach: "Shot using medium-format digital capture with precision focus stacking to maintain absolute edge fidelity and rich micro-contrast across surfaces.",
    gallery: [
      "assets/images/portfolio/product-photo-01.jpg",
      "assets/images/about/equipment-lenses.jpg",
      "assets/images/portfolio/food-beverage-01.jpg"
    ],
    relatedIds: ["culinary-atelier", "solitude-and-vision"]
  },
  {
    id: "culinary-atelier",
    title: "Culinary Atelier",
    category: "Food & Beverage",
    client: "[Production Showcase — Ready for Client Credit]",
    aspect: "aspect-4-3",
    image: "assets/images/portfolio/food-beverage-01.jpg",
    overview: "Atmospheric still life and culinary editorial photography honoring organic ingredients, smoke, and fine dining preparation.",
    approach: "Single-source soft daylight diffusion paired with subtle negative fill to sculpt deep, velvety shadows and celebrate genuine culinary warmth.",
    gallery: [
      "assets/images/portfolio/food-beverage-01.jpg",
      "assets/images/portfolio/product-photo-01.jpg",
      "assets/images/about/bts-camera-rig.jpg"
    ],
    relatedIds: ["tactile-forms", "lifestyle-chronicles"]
  },
  {
    id: "architects-of-tomorrow",
    title: "Architects of Tomorrow",
    category: "Corporate Content",
    client: "[Production Showcase — Ready for Client Credit]",
    aspect: "aspect-16-9",
    image: "assets/images/portfolio/corporate-film-01.jpg",
    overview: "Corporate narrative film spotlighting visionary design teams, engineering studios, and urban sustainability initiatives.",
    approach: "Dynamic architectural tracking shots combined with intimate, conversational interviews to create an honest, inspiring corporate presentation.",
    gallery: [
      "assets/images/portfolio/corporate-film-01.jpg",
      "assets/images/about/editing-suite.jpg",
      "assets/images/portfolio/commercial-film-01.jpg"
    ],
    relatedIds: ["luminescence", "origins-of-craft"]
  },
  {
    id: "rhythm-and-pulse",
    title: "Rhythm & Pulse",
    category: "Social Media Campaigns",
    client: "[Production Showcase — Ready for Client Credit]",
    aspect: "aspect-4-5",
    image: "assets/images/portfolio/social-campaign-01.jpg",
    overview: "Vertical narrative reels and dynamic motion assets engineered for mobile engagement without sacrificing cinematic production quality.",
    approach: "Engineered specifically for 9:16 framing with swift, rhythm-matched cuts and bespoke sound design tailored for short-form digital channels.",
    gallery: [
      "assets/images/portfolio/social-campaign-01.jpg",
      "assets/images/portfolio/lifestyle-photo-01.jpg",
      "assets/images/about/editing-suite.jpg"
    ],
    relatedIds: ["luminescence", "solitude-and-vision"]
  },
  {
    id: "solitude-and-vision",
    title: "Solitude & Vision",
    category: "Portrait Photography",
    client: "[Production Showcase — Ready for Client Credit]",
    aspect: "aspect-4-5",
    image: "assets/images/portfolio/portrait-photo-01.jpg",
    overview: "Editorial portrait series capturing creative leaders and artists in their private workspaces and natural environments.",
    approach: "Unobtrusive, medium-telephoto prime lenses paired with gentle conversational pacing to capture candid, unforced emotional resonance.",
    gallery: [
      "assets/images/portfolio/portrait-photo-01.jpg",
      "assets/images/portfolio/brand-film-01.jpg",
      "assets/images/about/equipment-lenses.jpg"
    ],
    relatedIds: ["origins-of-craft", "tactile-forms"]
  },
  {
    id: "golden-hour-chronicles",
    title: "Golden Hour Chronicles",
    category: "Lifestyle",
    client: "[Production Showcase — Ready for Client Credit]",
    aspect: "aspect-16-9",
    image: "assets/images/portfolio/lifestyle-photo-01.jpg",
    overview: "Location lifestyle photography celebrating twilight expeditions, open landscapes, and thoughtful human connection.",
    approach: "Shot exclusively during natural dawn and golden hour transitions to harness warm ambient sun flares and expansive organic tones.",
    gallery: [
      "assets/images/portfolio/lifestyle-photo-01.jpg",
      "assets/images/portfolio/commercial-film-01.jpg",
      "assets/images/about/bts-camera-rig.jpg"
    ],
    relatedIds: ["origins-of-craft", "rhythm-and-pulse"]
  }
];

export const WHY_US_ITEMS = [
  {
    index: "01",
    title: "Story-Driven Creativity",
    text: "We approach every project with a story-first mindset, creating visuals that communicate with purpose."
  },
  {
    index: "02",
    title: "Cinematic Craft",
    text: "Thoughtful lighting, composition, editing, and color come together to create compelling visual experiences."
  },
  {
    index: "03",
    title: "End-to-End Execution",
    text: "From the initial concept to final delivery, we bring every stage of production together seamlessly."
  },
  {
    index: "04",
    title: "Collaborative Approach",
    text: "We work closely with our clients to understand their vision and translate it into meaningful creative work."
  }
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "Understanding your brand, goals, audience, and creative direction."
  },
  {
    num: "02",
    title: "Concept",
    desc: "Developing ideas, visual references, concepts, and production plans."
  },
  {
    num: "03",
    title: "Create",
    desc: "Bringing the concept to life through production, photography, and creative execution."
  },
  {
    num: "04",
    title: "Deliver",
    desc: "Refining, editing, and delivering polished visual content ready for your brand."
  }
];

export const TESTIMONIALS = [
  {
    quote: "“Alight Pixels brought our brand story to life with remarkable precision. Every frame captured our philosophy without being overstated. The team felt like an extension of our own creative department from day one.”",
    author: "[Client Name Placeholder — Ready for Your Verified Review]",
    company: "[Company / Brand Name]",
    project: "Brand Film Production"
  },
  {
    quote: "“The visual craftsmanship and deliberate approach to lighting set Alight Pixels apart. The photography campaign exceeded our expectations and established our new visual identity across all platforms.”",
    author: "[Client Name Placeholder — Ready for Your Verified Review]",
    company: "[Company / Brand Name]",
    project: "Product & Editorial Photography"
  },
  {
    quote: "“From initial treatment to the final color grade, the attention to detail was exceptional. A truly quiet, confident creative partner that delivers cinematic visuals with zero compromise.”",
    author: "[Client Name Placeholder — Ready for Your Verified Review]",
    company: "[Company / Brand Name]",
    project: "Commercial Film & Post Production"
  }
];

