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

export const PORTFOLIO_FOLDERS = [
  {
    id: "photography",
    title: "Photography",
    subtitle: "Composition, Light & Cultural Stills",
    countLabel: "3 Sub-folders",
    folderColor: "#1d8cf8",
    hasSubfolders: true,
    subdivisions: ["All", "Portraits", "Products", "Candid Wedding"],
    coverImage: "/assets/images/portfolio/photography-og-luxury-perfume.jpg",
    previewImages: [
      "/assets/images/portfolio/photography-og-luxury-perfume.jpg",
      "/assets/images/portfolio/photography-wedding-bride.jpg"
    ],
    subfolders: [
      {
        id: "portraits",
        title: "Portraits",
        subtitle: "Studio, Editorial & Cultural Portraiture",
        countLabel: "5 Works",
        items: [
          {
            id: "photo-portrait-01",
            title: "Editorial Studio Portraiture",
            category: "Portraits",
            subdivision: "Studio",
            client: "Studio Portrait Series",
            mediaType: "image",
            src: "/assets/images/portfolio/drive-portrait-dsc0007.jpg",
            description: "High-contrast directional studio lighting capturing authentic skin texture, calm expression, and editorial silhouette."
          },
          {
            id: "photo-portrait-02",
            title: "Monochrome Classical Portrait",
            category: "Portraits",
            subdivision: "Editorial",
            client: "Heritage Portrait Series",
            mediaType: "image",
            src: "/assets/images/portfolio/drive-portrait-dsc0035.jpg",
            description: "Timeless black and white tones with soft ambient key lighting highlighting depth and character."
          },
          {
            id: "photo-sadhu",
            title: "Sacred Devotion & Stillness",
            category: "Cultural Portraits",
            subdivision: "Cultural",
            client: "Documentary Stills",
            mediaType: "image",
            src: "/assets/images/portfolio/photography-sadhu-original.jpg",
            description: "Intimate portrait honoring quiet prayer, vermilion devotion, and warm directional sunlight."
          },
          {
            id: "photo-bandmaster",
            title: "The Brass Bandmaster",
            category: "Street Portraiture",
            subdivision: "Editorial",
            client: "Heritage Series",
            mediaType: "image",
            src: "/assets/images/portfolio/photography-bandmaster.jpg",
            description: "Dignified street portraiture capturing the ceremonial red velvet uniform and heritage cycle rickshaw."
          },
          {
            id: "photo-portrait-contemporary",
            title: "Contemporary Light & Texture",
            category: "Editorial Portrait",
            subdivision: "Studio",
            client: "Editorial Commission",
            mediaType: "image",
            src: "/assets/images/portfolio/portrait-photo-01.jpg",
            description: "Soft window wrap lighting and muted editorial grading emphasizing natural beauty and human presence."
          }
        ]
      },
      {
        id: "products",
        title: "Products",
        subtitle: "Commercial Still Life & Brand Packaging",
        countLabel: "4 Works",
        items: [
          {
            id: "photo-og-perfume",
            title: "OG Luxury — Shadow Perfume",
            category: "Product Shoot",
            subdivision: "Luxury Packaging",
            client: "OG Beauty Luxury",
            mediaType: "image",
            src: "/assets/images/portfolio/photography-og-luxury-perfume.jpg",
            description: "Dramatic directional studio lighting, obsidian shadows, and caustic blue refraction celebrating luxury perfume aesthetics."
          },
          {
            id: "photo-product-commercial",
            title: "Commercial Brand Still Life",
            category: "Product Photography",
            subdivision: "Commercial",
            client: "Commercial Commission",
            mediaType: "image",
            src: "/assets/images/portfolio/product-photo-01.jpg",
            description: "Crisp studio lighting and balanced composition highlighting tactile packaging details and material craftsmanship."
          },
          {
            id: "photo-vendor",
            title: "Sacred Threads & Beads",
            category: "Artisanal Craft Still Life",
            subdivision: "Craft",
            client: "Cultural Craft Series",
            mediaType: "image",
            src: "/assets/images/portfolio/photography-vendor.jpg",
            description: "Vibrant ritual threads, hand-strung beads, and cultural textures outside the temple sanctum."
          },
          {
            id: "photo-culinary",
            title: "Culinary & Beverage Still Life",
            category: "Beverage & Culinary",
            subdivision: "Culinary",
            client: "Hospitality Commission",
            mediaType: "image",
            src: "/assets/images/portfolio/food-beverage-01.jpg",
            description: "Warm directional lighting, organic table composition, and rich textural depth for hospitality branding."
          }
        ]
      },
      {
        id: "candid-wedding",
        title: "Candid Wedding",
        subtitle: "Traditional Ceremonies, Bridal Moments & Rituals",
        countLabel: "4 Works",
        items: [
          {
            id: "photo-wedding-bride",
            title: "Traditional Bridal Procession",
            category: "Bridal Ceremony",
            subdivision: "Ceremony",
            client: "Wedding Commission",
            mediaType: "image",
            src: "/assets/images/portfolio/photography-wedding-bride.jpg",
            description: "Authentic emotional moments, vibrant red silk saree, and sacred floral canopy procession captured under natural sunlight."
          },
          {
            id: "photo-wedding-rituals",
            title: "Sacred Ceremonial Rituals",
            category: "Wedding Rituals",
            subdivision: "Rituals",
            client: "Traditional Wedding",
            mediaType: "image",
            src: "/assets/images/portfolio/drive-wedding-ceremony.jpg",
            description: "Vibrant yellow turmeric rituals, sacred laughter, and intimate family blessings captured documentary style."
          },
          {
            id: "photo-ayodhya",
            title: "Ayodhya Cultural Stories",
            category: "Visual Narrative Triptych",
            subdivision: "Ceremony",
            client: "Alight Pixels Original",
            mediaType: "image",
            src: "/assets/images/portfolio/photography-ayodhya.jpg",
            description: "A three-tier visual narrative of sacred craft, brass puja artifacts, and peacock feather ceremonies."
          },
          {
            id: "photo-boats",
            title: "River Ghat Reflections",
            category: "Atmospheric Location Stills",
            subdivision: "Atmospheric",
            client: "Editorial Commission",
            mediaType: "image",
            src: "/assets/images/portfolio/photography-boats-original.jpg",
            description: "Atmospheric morning light, sacred river stillness, and deep earth tones along the sacred riverbanks."
          }
        ]
      }
    ],
    items: [
      {
        id: "photo-portrait-01",
        title: "Editorial Studio Portraiture",
        category: "Portraits",
        subdivision: "Studio",
        client: "Studio Portrait Series",
        mediaType: "image",
        src: "/assets/images/portfolio/drive-portrait-dsc0007.jpg",
        description: "High-contrast directional studio lighting capturing authentic skin texture, calm expression, and editorial silhouette."
      },
      {
        id: "photo-portrait-02",
        title: "Monochrome Classical Portrait",
        category: "Portraits",
        subdivision: "Editorial",
        client: "Heritage Portrait Series",
        mediaType: "image",
        src: "/assets/images/portfolio/drive-portrait-dsc0035.jpg",
        description: "Timeless black and white tones with soft ambient key lighting highlighting depth and character."
      },
      {
        id: "photo-og-perfume",
        title: "OG Luxury — Shadow Perfume",
        category: "Product Shoot",
        subdivision: "Product Shoot",
        client: "OG Beauty Luxury",
        mediaType: "image",
        src: "/assets/images/portfolio/photography-og-luxury-perfume.jpg",
        description: "Dramatic directional studio lighting, obsidian shadows, and caustic blue refraction celebrating luxury perfume aesthetics."
      },
      {
        id: "photo-wedding-bride",
        title: "Traditional Bridal Procession",
        category: "Event Photography",
        subdivision: "Event Photography",
        client: "Wedding Commission",
        mediaType: "image",
        src: "/assets/images/portfolio/photography-wedding-bride.jpg",
        description: "Authentic emotional moments, vibrant red silk saree, and sacred floral canopy procession captured under natural sunlight."
      },
      {
        id: "photo-wedding-rituals",
        title: "Sacred Ceremonial Rituals",
        category: "Wedding Rituals",
        subdivision: "Rituals",
        client: "Traditional Wedding",
        mediaType: "image",
        src: "/assets/images/portfolio/drive-wedding-ceremony.jpg",
        description: "Vibrant yellow turmeric rituals, sacred laughter, and intimate family blessings captured documentary style."
      },
      {
        id: "photo-boats",
        title: "River Ghat Reflections",
        category: "Atmospheric Location Stills",
        subdivision: "Cultural Stills",
        client: "Editorial Commission",
        mediaType: "image",
        src: "/assets/images/portfolio/photography-boats-original.jpg",
        description: "Atmospheric morning light, sacred river stillness, and deep earth tones along the sacred riverbanks."
      },
      {
        id: "photo-sadhu",
        title: "Sacred Devotion & Stillness",
        category: "Cultural Documentary",
        subdivision: "Cultural Stills",
        client: "Documentary Stills",
        mediaType: "image",
        src: "/assets/images/portfolio/photography-sadhu-original.jpg",
        description: "Intimate portrait honoring quiet prayer, vermilion devotion, and warm directional sunlight."
      },
      {
        id: "photo-bandmaster",
        title: "The Brass Bandmaster",
        category: "Editorial Street Portraiture",
        subdivision: "Cultural Stills",
        client: "Heritage Series",
        mediaType: "image",
        src: "/assets/images/portfolio/photography-bandmaster.jpg",
        description: "Dignified street portraiture capturing the ceremonial red velvet uniform and heritage cycle rickshaw."
      },
      {
        id: "photo-vendor",
        title: "Sacred Threads & Beads",
        category: "Documentary Still Life",
        subdivision: "Cultural Stills",
        client: "Cultural Craft",
        mediaType: "image",
        src: "/assets/images/portfolio/photography-vendor.jpg",
        description: "Vibrant ritual threads, hand-strung beads, and cultural textures outside the temple sanctum."
      },
      {
        id: "photo-ayodhya",
        title: "Ayodhya Cultural Stories",
        category: "Visual Narrative Triptych",
        subdivision: "Cultural Stills",
        client: "Alight Pixels Original",
        mediaType: "image",
        src: "/assets/images/portfolio/photography-ayodhya.jpg",
        description: "A three-tier visual narrative of sacred craft, brass puja artifacts, and peacock feather ceremonies."
      }
    ]
  },
  {
    id: "videography",
    title: "Videography",
    subtitle: "Cinematic Films & Brand Stories",
    countLabel: "4 Sub-folders",
    folderColor: "#007aff",
    hasSubfolders: true,
    subdivisions: ["All", "Vehicle Delivery", "Wedding", "Podcast & Talking Head", "Commercial Films"],
    coverImage: "/assets/images/about/bts-camera-rig.jpg",
    previewImages: [
      "/assets/images/about/bts-camera-rig.jpg",
      "/assets/images/portfolio/photography-wedding-bride.jpg"
    ],
    subfolders: [
      {
        id: "vehicle-delivery",
        title: "Vehicle Delivery",
        subtitle: "Automotive & Luxury Delivery Cinema",
        countLabel: "2 Films",
        items: [
          {
            id: "video-car-delivery",
            title: "Automotive Delivery Cinema",
            category: "Automotive Delivery",
            subdivision: "Automotive",
            client: "Automotive Delivery Showcase",
            mediaType: "video",
            src: "/assets/videos/car-delivery.mp4",
            poster: "/assets/images/about/bts-camera-rig.jpg",
            description: "Dynamic vehicle unveil, cinematic lighting, and celebratory client delivery captured with smooth camera tracking."
          },
          {
            id: "video-bike-delivery",
            title: "Superbike Delivery Experience",
            category: "Vehicle Delivery",
            subdivision: "Motorsport",
            client: "Motorcycle Studio Delivery",
            mediaType: "video",
            src: "/assets/videos/car-delivery.mp4",
            poster: "/assets/images/about/bts-camera-rig.jpg",
            description: "High-octane exhaust notes, golden hour reveal, and celebratory customer handover film."
          }
        ]
      },
      {
        id: "wedding",
        title: "Wedding",
        subtitle: "Candid Wedding Reels & Bridal Celebrations",
        countLabel: "2 Films",
        items: [
          {
            id: "video-candid-reel",
            title: "Candid Wedding & Bridal Cinema",
            category: "Wedding Cinema",
            subdivision: "Wedding",
            client: "Wedding & Event Production",
            mediaType: "video",
            src: "/assets/videos/candid-reel-001.mp4",
            poster: "/assets/images/portfolio/photography-wedding-bride.jpg",
            description: "Unposed emotional celebration, cultural richness, and vibrant documentary cinematography crafted for high-impact social reels."
          },
          {
            id: "video-ceremony-reel",
            title: "Traditional Sangeet & Baraat Reel",
            category: "Wedding Celebration",
            subdivision: "Celebration",
            client: "Celebration Film",
            mediaType: "video",
            src: "/assets/videos/candid-reel-001.mp4",
            poster: "/assets/images/portfolio/photography-wedding-bride.jpg",
            description: "Dynamic dance floor energy, slow motion flower showers, and cinematic sound design."
          }
        ]
      },
      {
        id: "podcast-talking-head",
        title: "Podcast & Talking Head",
        subtitle: "Studio Podcasts & Creator Conversations",
        countLabel: "2 Films",
        items: [
          {
            id: "video-podcast-reel",
            title: "Studio Podcast Production",
            category: "Podcast & Interview Video",
            subdivision: "Podcast",
            client: "Podcast Studio",
            mediaType: "video",
            src: "/assets/videos/podcast-reel.mp4",
            poster: "/assets/images/portfolio/podcast-video-poster.jpg",
            description: "Studio multi-cam capture, clean audio routing, and punchy formatting designed for viral episode highlights and digital reach."
          },
          {
            id: "video-talking-head",
            title: "Creator Thought Leadership Reel",
            category: "Talking Head Content",
            subdivision: "Creator",
            client: "Executive Founder Series",
            mediaType: "video",
            src: "/assets/videos/podcast-reel.mp4",
            poster: "/assets/images/portfolio/podcast-video-poster.jpg",
            description: "Direct-to-camera storytelling with kinetic b-roll overlays, kinetic typography, and broadcast-grade audio."
          }
        ]
      },
      {
        id: "commercial-films",
        title: "Commercial & Event Films",
        subtitle: "Cinematic Commercials, Walkthroughs & Brand Films",
        countLabel: "2 Films",
        items: [
          {
            id: "video-production-reel",
            title: "Commercial Production Reel",
            category: "Commercial Film Production",
            subdivision: "Commercial",
            client: "Studio Production Reel",
            mediaType: "video",
            src: "/assets/videos/video-production-reel.mp4",
            poster: "/assets/images/portfolio/video-production-poster.jpg",
            description: "Large-format cinema sensors with vintage lenses capturing kinetic movement, luxury atmospheres, and brand storytelling."
          },
          {
            id: "video-hero-reel",
            title: "Brand Anthem & Showreel Cinema",
            category: "Brand Anthem",
            subdivision: "Anthem",
            client: "Alight Pixels Cinema",
            mediaType: "video",
            src: "/assets/videos/hero-reel.mp4",
            poster: "/assets/images/about/bts-camera-rig.jpg",
            description: "High-contrast cinema visuals, sound-designed cuts, and evocative visual pacing."
          }
        ]
      }
    ],
    items: [
      {
        id: "video-candid-reel",
        title: "Candid Wedding & Event Reel",
        category: "Reel Editing & Event Video",
        subdivision: "Reels & Events",
        client: "Wedding & Event Production",
        mediaType: "video",
        src: "/assets/videos/candid-reel-001.mp4",
        poster: "/assets/images/portfolio/photography-wedding-bride.jpg",
        description: "Unposed emotional celebration, cultural richness, and vibrant documentary cinematography crafted for high-impact social reels."
      },
      {
        id: "video-car-delivery",
        title: "Automotive Delivery Cinema",
        category: "Corporate Video & Commercial",
        subdivision: "Commercial & Corporate",
        client: "Automotive Delivery Showcase",
        mediaType: "video",
        src: "/assets/videos/car-delivery.mp4",
        poster: "/assets/images/about/bts-camera-rig.jpg",
        description: "Dynamic vehicle unveil, cinematic lighting, and celebratory client delivery captured with smooth camera tracking."
      },
      {
        id: "video-podcast-reel",
        title: "Studio Podcast Production",
        category: "Podcast Editing & Video",
        subdivision: "Podcast Production",
        client: "Podcast Studio",
        mediaType: "video",
        src: "/assets/videos/podcast-reel.mp4",
        poster: "/assets/images/portfolio/podcast-video-poster.jpg",
        description: "Studio lighting, multi-cam capture, and punchy reel formatting designed for viral episode highlights and digital reach."
      },
      {
        id: "video-production-reel",
        title: "Commercial Production Reel",
        category: "Commercial Film Production",
        subdivision: "Commercial & Corporate",
        client: "Studio Production Reel",
        mediaType: "video",
        src: "/assets/videos/video-production-reel.mp4",
        poster: "/assets/images/portfolio/video-production-poster.jpg",
        description: "Large-format cinema sensors with vintage lenses capturing kinetic movement, luxury atmospheres, and brand storytelling."
      }
    ]
  },
  {
    id: "digital-content",
    title: "Digital Content",
    subtitle: "Viral Campaigns & Social Analytics",
    countLabel: "1 Work",
    folderColor: "#38b6ff",
    subdivisions: ["All", "Reel Analytics"],
    coverImage: "/assets/images/portfolio/digital-content-poster.jpg",
    previewImages: [
      "/assets/images/portfolio/digital-content-poster.jpg"
    ],
    items: [
      {
        id: "digital-reel",
        title: "Reel Analytics & Reach Engine",
        category: "Short-Form Performance Video",
        subdivision: "Reel Analytics",
        client: "Meta Collaboration",
        mediaType: "video",
        src: "/assets/videos/instagram-reel-analytics.mp4",
        poster: "/assets/images/portfolio/digital-content-poster.jpg",
        description: "13.8K+ impressions, high-retention short-form video content engineered for organic platform virality."
      }
    ]
  },
  {
    id: "website",
    title: "Website",
    subtitle: "Bespoke Digital Homes & Platforms",
    countLabel: "1 Platform",
    folderColor: "#0284c7",
    subdivisions: ["All", "Brand Commerce"],
    coverImage: "/assets/images/portfolio/website-screen-recording-poster.jpg",
    previewImages: [
      "/assets/images/portfolio/website-screen-recording-poster.jpg"
    ],
    items: [
      {
        id: "web-bluink",
        title: "Bluink Custom Apparel Platform",
        category: "Web & Digital Commerce",
        subdivision: "Brand Commerce",
        client: "Bluink Apparel",
        mediaType: "video",
        src: "/assets/videos/website-showcase.mp4",
        poster: "/assets/images/portfolio/website-screen-recording-poster.jpg",
        description: "Modern glassmorphic apparel platform with interactive quote funnels, fast load times, and custom embroidery galleries."
      }
    ]
  }
];

export const PORTFOLIO_STACKS = PORTFOLIO_FOLDERS;


