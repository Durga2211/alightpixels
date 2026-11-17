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
    title: "River Ghat Reflections",
    category: "Photography",
    client: "Editorial Commission",
    aspect: "aspect-4-3",
    image: "assets/images/portfolio/photography-boats-original.jpg",
    overview: "Atmospheric location photography capturing color, texture, and cultural stillness along the sacred riverbanks.",
    approach: "Captured with natural dawn light, emphasizing deep earth tones, textured wooden boats, and unhurried spiritual composition.",
    gallery: [
      "assets/images/portfolio/photography-boats-original.jpg",
      "assets/images/portfolio/photography-sadhu-original.jpg"
    ],
    relatedIds: ["sacred-devotion", "culinary-atelier"]
  },
  {
    id: "sacred-devotion",
    title: "Sacred Devotion & Stillness",
    category: "Photography",
    client: "Editorial Commission",
    aspect: "aspect-4-5",
    image: "assets/images/portfolio/photography-sadhu-original.jpg",
    overview: "Intimate cultural documentary photography honoring devotion, tactile vibrant vermilion shrines, and quiet human presence.",
    approach: "Natural directional sunlight sculpting the warmth of aged textures, vermilion offerings, and meditative human stillness.",
    gallery: [
      "assets/images/portfolio/photography-sadhu-original.jpg",
      "assets/images/portfolio/photography-boats-original.jpg"
    ],
    relatedIds: ["tactile-forms", "solitude-and-vision"]
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
    id: "bluink-experience",
    title: "Bluink Digital Platform",
    category: "Web & Digital",
    client: "Bluink Apparel",
    aspect: "aspect-16-9",
    image: "assets/images/portfolio/website-bluink.jpg",
    overview: "Custom brand commerce platform crafted for high-performance corporate apparel and bespoke embroidery showcases.",
    approach: "Sleek glassmorphic navigation header, dynamic hero sliders, interactive quote conversion funnels, and responsive cross-device layout.",
    gallery: [
      "assets/images/portfolio/website-bluink.jpg",
      "assets/images/portfolio/website-showcase.jpg"
    ],
    relatedIds: ["luminescence", "tactile-forms"]
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

export const PORTFOLIO_STACKS = [
  {
    id: "photography",
    title: "Photography",
    subtitle: "Composition, Light & Cultural Stills",
    countLabel: "5 Works",
    aspect: "stack-aspect-portrait",
    coverImage: "assets/images/portfolio/photography-boats-original.jpg",
    stackPreviews: [
      "assets/images/portfolio/photography-sadhu-original.jpg",
      "assets/images/portfolio/photography-bandmaster.jpg",
      "assets/images/portfolio/photography-vendor.jpg"
    ],
    items: [
      {
        id: "photo-boats",
        title: "River Ghat Reflections",
        category: "Atmospheric Location Stills",
        client: "Editorial Commission",
        mediaType: "image",
        src: "assets/images/portfolio/photography-boats-original.jpg",
        description: "Atmospheric morning light, sacred river stillness, and deep earth tones along the sacred riverbanks."
      },
      {
        id: "photo-sadhu",
        title: "Sacred Devotion & Stillness",
        category: "Cultural Documentary",
        client: "Documentary Stills",
        mediaType: "image",
        src: "assets/images/portfolio/photography-sadhu-original.jpg",
        description: "Intimate portrait honoring quiet prayer, vermilion devotion, and warm directional sunlight."
      },
      {
        id: "photo-bandmaster",
        title: "The Brass Bandmaster",
        category: "Editorial Street Portraiture",
        client: "Heritage Series",
        mediaType: "image",
        src: "assets/images/portfolio/photography-bandmaster.jpg",
        description: "Dignified street portraiture capturing the ceremonial red velvet uniform and heritage cycle rickshaw."
      },
      {
        id: "photo-vendor",
        title: "Sacred Threads & Beads",
        category: "Documentary Still Life",
        client: "Cultural Craft",
        mediaType: "image",
        src: "assets/images/portfolio/photography-vendor.jpg",
        description: "Vibrant ritual threads, hand-strung beads, and cultural textures outside the temple sanctum."
      },
      {
        id: "photo-ayodhya",
        title: "Ayodhya Cultural Stories",
        category: "Visual Narrative Triptych",
        client: "Alight Pixels Original",
        mediaType: "image",
        src: "assets/images/portfolio/photography-ayodhya.jpg",
        description: "A three-tier visual narrative of sacred craft, brass puja artifacts, and peacock feather ceremonies."
      }
    ]
  },
  {
    id: "videography",
    title: "Videography",
    subtitle: "Cinematic Films & Brand Stories",
    countLabel: "4 Works",
    aspect: "stack-aspect-landscape",
    coverImage: "assets/images/portfolio/commercial-film-01.jpg",
    stackPreviews: [
      "assets/images/portfolio/brand-film-01.jpg",
      "assets/images/portfolio/corporate-film-01.jpg"
    ],
    items: [
      {
        id: "video-reel",
        title: "Cinematic Production Reel",
        category: "Commercial Film Production",
        client: "Studio Production Reel",
        mediaType: "video",
        src: "assets/videos/video-production-reel.mp4",
        poster: "assets/images/portfolio/video-production-poster.jpg",
        description: "Large-format cinematography with anamorphic lenses capturing kinetic movement and luxury atmospheres."
      },
      {
        id: "video-luminescence",
        title: "Luminescence",
        category: "Commercial Film",
        client: "Luxury Showcase",
        mediaType: "image",
        src: "assets/images/portfolio/commercial-film-01.jpg",
        description: "A high-impact visual exploration of light, kinetic motion, and refined brand atmosphere."
      },
      {
        id: "video-origins",
        title: "Origins of Craft",
        category: "Brand Documentary",
        client: "Artisanal Studio",
        mediaType: "image",
        src: "assets/images/portfolio/brand-film-01.jpg",
        description: "Artisanal precision, tactile textures, and natural ambient light across architecture studios."
      },
      {
        id: "video-architects",
        title: "Architects of Tomorrow",
        category: "Corporate Narrative",
        client: "Design Firm",
        mediaType: "image",
        src: "assets/images/portfolio/corporate-film-01.jpg",
        description: "Dynamic architectural tracking shots and personal leadership interviews on urban sustainability."
      }
    ]
  },
  {
    id: "digital-content",
    title: "Digital Content",
    subtitle: "Viral Campaigns & Social Analytics",
    countLabel: "3 Works",
    aspect: "stack-aspect-portrait",
    coverImage: "assets/images/portfolio/social-campaign-01.jpg",
    stackPreviews: [
      "assets/images/portfolio/digital-content-poster.jpg"
    ],
    items: [
      {
        id: "digital-reel",
        title: "Reel Analytics & Reach Engine",
        category: "Short-Form Performance Video",
        client: "Meta Collaboration",
        mediaType: "video",
        src: "assets/videos/instagram-reel-analytics.mp4",
        poster: "assets/images/portfolio/digital-content-poster.jpg",
        description: "13.8K+ impressions, high-retention short-form video content engineered for organic platform virality."
      },
      {
        id: "digital-campaign",
        title: "High-Impact Social Campaign",
        category: "Social Media Strategy",
        client: "Audience Growth Campaign",
        mediaType: "image",
        src: "assets/images/portfolio/social-campaign-01.jpg",
        description: "Strategic visual campaign driving measurable audience acquisition, shares, and brand resonance."
      },
      {
        id: "digital-narrative",
        title: "Omnichannel Brand Stories",
        category: "Creative Direction",
        client: "Creator Narrative",
        mediaType: "image",
        src: "assets/images/portfolio/digital-content-poster.jpg",
        description: "Multi-platform visual narratives connecting creator aesthetics with commercial engagement."
      }
    ]
  },
  {
    id: "website",
    title: "Website",
    subtitle: "Bespoke Digital Homes & Platforms",
    countLabel: "2 Works",
    aspect: "stack-aspect-landscape",
    coverImage: "assets/images/portfolio/website-bluink.jpg",
    stackPreviews: [
      "assets/images/portfolio/website-showcase.jpg"
    ],
    items: [
      {
        id: "web-bluink",
        title: "Bluink Custom Apparel Platform",
        category: "Web & Digital Commerce",
        client: "Bluink Apparel",
        mediaType: "image",
        src: "assets/images/portfolio/website-bluink.jpg",
        description: "Modern glassmorphic apparel platform with interactive quote funnels, fast load times, and custom embroidery galleries."
      },
      {
        id: "web-editorial",
        title: "Editorial UI & Next-Gen Experience",
        category: "Interactive Web Experience",
        client: "Digital Architecture",
        mediaType: "image",
        src: "assets/images/portfolio/website-showcase.jpg",
        description: "Fluid layout architecture, typography-forward minimalism, and responsive multi-device design."
      }
    ]
  }
];


