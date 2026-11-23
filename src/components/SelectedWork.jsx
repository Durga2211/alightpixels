import React, { useState } from 'react';
import StackSwipeModal from './StackSwipeModal';

const SHOWCASE_ITEMS = [
  // COLUMN 1
  {
    id: 'cafe-brand-story',
    title: 'Café Brand Story',
    category: 'PHOTOGRAPHY',
    filterTags: ['All', 'Photography'],
    aspect: 'aspect-portrait',
    column: 1,
    mediaType: 'image',
    src: '/assets/images/portfolio/cafe-brand-story.jpg',
    thumbnail: '/assets/images/portfolio/cafe-brand-story.jpg',
    description: 'Artisanal single-origin roasting, natural morning diffusion, and culinary warmth captured for hospitality branding.'
  },
  {
    id: 'studio-brand-film',
    title: 'Studio Brand Film',
    category: 'VIDEOS',
    filterTags: ['All', 'Videos', 'Commercial Shoots'],
    aspect: 'aspect-landscape',
    column: 1,
    mediaType: 'video',
    src: '/assets/videos/video-production-reel.mp4',
    poster: '/assets/images/portfolio/video-production-poster.jpg',
    description: 'High-contrast cinema sensors, kinetic camera movement, and evocative brand storytelling.'
  },
  {
    id: 'skincare-product-film',
    title: 'Skincare Product Still Life',
    category: 'PRODUCT SHOOTS',
    filterTags: ['All', 'Product Shoots', 'Photography', 'Branding'],
    aspect: 'aspect-portrait',
    column: 1,
    mediaType: 'image',
    src: '/assets/images/portfolio/photography-og-luxury-perfume.jpg',
    thumbnail: '/assets/images/portfolio/photography-og-luxury-perfume.jpg',
    description: 'Directional studio key lighting, obsidian shadows, and caustic refraction celebrating luxury beauty formulations.'
  },

  // COLUMN 2
  {
    id: 'avenia-identity-system',
    title: 'Avenia Identity System',
    category: 'BRANDING',
    filterTags: ['All', 'Branding', 'Website'],
    aspect: 'aspect-square',
    column: 2,
    mediaType: 'video',
    src: '/assets/videos/website-showcase.mp4',
    poster: '/assets/images/portfolio/website-screen-recording-poster.jpg',
    description: 'Bespoke brand architecture, tactile stationery suites, and responsive digital experience.'
  },
  {
    id: 'fitness-campaign',
    title: 'Fitness Campaign',
    category: 'COMMERCIAL SHOOTS',
    filterTags: ['All', 'Commercial Shoots', 'Videos', 'Social Media'],
    aspect: 'aspect-tall',
    column: 2,
    mediaType: 'video',
    src: '/assets/videos/car-delivery.mp4',
    poster: '/assets/images/portfolio/fitness-campaign.jpg',
    description: 'Raw kinetic movement, high-energy lighting, and performance-driven commercial cinematography.'
  },
  {
    id: 'reels-that-convert',
    title: 'Reels That Convert',
    category: 'SOCIAL MEDIA',
    filterTags: ['All', 'Social Media', 'Videos'],
    aspect: 'aspect-phone',
    column: 2,
    mediaType: 'video',
    src: '/assets/videos/instagram-reel-analytics.mp4',
    poster: '/assets/images/portfolio/reels-convert-poster.jpg',
    description: 'Engineered for organic reach and high audience retention with motion graphics and viral pacing.'
  },

  // COLUMN 3
  {
    id: 'luxury-interiors',
    title: 'Luxury Interiors',
    category: 'PHOTOGRAPHY',
    filterTags: ['All', 'Photography'],
    aspect: 'aspect-landscape',
    column: 3,
    mediaType: 'image',
    src: '/assets/images/portfolio/photography-boats-original.jpg',
    thumbnail: '/assets/images/portfolio/photography-boats-original.jpg',
    description: 'Atmospheric natural lighting, architectural symmetry, and textured tactile materials.'
  },
  {
    id: 'restaurant-commercial',
    title: 'Restaurant Commercial',
    category: 'COMMERCIAL SHOOTS',
    filterTags: ['All', 'Commercial Shoots', 'Videos'],
    aspect: 'aspect-landscape',
    column: 3,
    mediaType: 'video',
    src: '/assets/videos/candid-reel-001.mp4',
    poster: '/assets/images/portfolio/photography-wedding-bride.jpg',
    description: 'Culinary mastery, sizzle close-ups, and immersive ambient audio crafted for luxury dining.'
  },
  {
    id: 'studio-podcast-series',
    title: 'Studio Podcast Series',
    category: 'VIDEOS',
    filterTags: ['All', 'Videos', 'Social Media'],
    aspect: 'aspect-landscape',
    column: 3,
    mediaType: 'video',
    src: '/assets/videos/podcast-reel.mp4',
    poster: '/assets/images/portfolio/podcast-video-poster.jpg',
    description: 'Broadcast multi-camera setup, pristine audio fidelity, and short-form conversational highlights.'
  },
  {
    id: 'editorial-heritage-stills',
    title: 'Editorial Heritage Stills',
    category: 'PHOTOGRAPHY',
    filterTags: ['All', 'Photography'],
    aspect: 'aspect-portrait',
    column: 3,
    mediaType: 'image',
    src: '/assets/images/portfolio/drive-portrait-dsc0007.jpg',
    thumbnail: '/assets/images/portfolio/drive-portrait-dsc0007.jpg',
    description: 'High-contrast studio portraiture capturing authentic skin texture, calm expression, and editorial silhouette.'
  }
];

const FILTER_CATEGORIES = [
  'All',
  'Photography',
  'Videos',
  'Branding',
  'Social Media',
  'Product Shoots',
  'Commercial Shoots'
];

export default function SelectedWork({ onOpenPortfolio }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [modalData, setModalData] = useState(null);

  // Filter items based on active category
  const filteredItems = activeFilter === 'All'
    ? SHOWCASE_ITEMS
    : SHOWCASE_ITEMS.filter((item) => item.filterTags.includes(activeFilter));

  // Partition items into 3 columns for balanced masonry layout
  const col1Items = [];
  const col2Items = [];
  const col3Items = [];

  if (activeFilter === 'All') {
    // Preserve original curated 3-column balance
    filteredItems.forEach((item) => {
      if (item.column === 1) col1Items.push(item);
      else if (item.column === 2) col2Items.push(item);
      else col3Items.push(item);
    });
  } else {
    // Round-robin distribution when filtered so columns stay balanced
    filteredItems.forEach((item, idx) => {
      if (idx % 3 === 0) col1Items.push(item);
      else if (idx % 3 === 1) col2Items.push(item);
      else col3Items.push(item);
    });
  }

  const handleOpenItem = (item) => {
    const itemIndex = filteredItems.findIndex((i) => i.id === item.id);
    setModalData({
      stack: {
        title: activeFilter === 'All' ? 'Portfolio Showcase' : activeFilter,
        items: filteredItems
      },
      initialIndex: itemIndex >= 0 ? itemIndex : 0
    });
  };

  const renderCard = (item) => {
    const isVideo = item.mediaType === 'video';
    return (
      <article
        key={item.id}
        className={`portfolio-showcase-card ${item.aspect}`}
        onClick={() => handleOpenItem(item)}
        role="button"
        tabIndex={0}
        aria-label={`Open ${item.title} (${item.category})`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOpenItem(item);
          }
        }}
      >
        <div className="portfolio-card-media-wrap">
          {isVideo ? (
            <>
              <img
                src={item.poster}
                alt={item.title}
                className="portfolio-card-media"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Sleek Floating Amber Play Button */}
              <div className="portfolio-card-play-btn" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
              </div>
            </>
          ) : (
            <img
              src={item.src}
              alt={item.title}
              className="portfolio-card-media"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          )}

          {/* Dark Gradient Overlay with Typography */}
          <div className="portfolio-card-overlay">
            <span className="portfolio-card-tag">{item.category}</span>
            <h3 className="portfolio-card-title">{item.title}</h3>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className="section selected-work-section portfolio-masonry-section" id="selected-work" aria-labelledby="portfolio-heading">
      <div className="container">
        
        {/* Section Intro matching reference */}
        <div className="portfolio-section-header">
          <span className="portfolio-eyebrow-tag">PORTFOLIO</span>
          <h2 className="portfolio-main-headline" id="portfolio-heading">
            Work that makes brands <span className="portfolio-headline-accent">impossible to ignore.</span>
          </h2>
        </div>

        {/* Filter Pills Navigation Row */}
        <div className="portfolio-filter-row" role="tablist" aria-label="Portfolio Category Filter">
          {FILTER_CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`portfolio-filter-pill ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3-Column Masonry Allocation Grid */}
        <div className="portfolio-masonry-container" aria-live="polite">
          {/* Column 1 */}
          <div className="portfolio-masonry-col">
            {col1Items.map((item) => renderCard(item))}
          </div>

          {/* Column 2 */}
          <div className="portfolio-masonry-col">
            {col2Items.map((item) => renderCard(item))}
          </div>

          {/* Column 3 */}
          <div className="portfolio-masonry-col">
            {col3Items.map((item) => renderCard(item))}
          </div>
        </div>

        {/* Refined Client Archive Explorer Banner */}
        <div className="portfolio-archive-strip">
          <div className="archive-strip-text">
            <h4 className="archive-strip-title">Explore Complete Google Drive Archives</h4>
            <p className="archive-strip-sub">
              Over 140+ cataloged production works, dedicated sub-folders, and raw high-resolution stills.
            </p>
          </div>
          <div className="archive-strip-links">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onOpenPortfolio && onOpenPortfolio('photography')}
            >
              <span>Photography Folders (106)</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => onOpenPortfolio && onOpenPortfolio('videography')}
            >
              <span>Videography Folders (36)</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

      </div>

      {/* Interactive Swipe Modal Lightbox */}
      {modalData && (
        <StackSwipeModal
          stack={modalData.stack}
          initialIndex={modalData.initialIndex}
          onClose={() => setModalData(null)}
        />
      )}
    </section>
  );
}
