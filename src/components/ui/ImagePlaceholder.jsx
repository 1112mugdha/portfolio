import React from 'react';

/**
 * ImagePlaceholder component
 * Renders actual uploaded project images, or tailored visual CSS compositions for project placeholders.
 */
export default function ImagePlaceholder({ 
  preset = 'default', // 'movie-posters', 'cactus', 'character-design', 'portrait', or 'default'
  label = 'IMAGE PREVIEW', 
  aspectRatio = '4/3', 
  className = '',
  src,
  alt = 'Artwork Preview' 
}) {
  const [imgError, setImgError] = React.useState(false);

  const getAspectClass = (aspect) => {
    switch (aspect) {
      case '3/4': return 'aspect-3-4';
      case '4/3': return 'aspect-4-3';
      case '16/9': return 'aspect-16-9';
      case '3/2': return 'aspect-3-2';
      case '1/1': return 'aspect-1-1';
      default: return '';
    }
  };

  // Render real image if provided and not a placeholder SVG
  const isRealImage = src && !src.endsWith('.svg');

  if (src && !imgError && isRealImage) {
    const isAutoAspect = aspectRatio === 'auto' || !aspectRatio;
    return (
      <div 
        className={`border-1.5 border-[#171515] bg-[#FAF4EB] overflow-hidden ${isAutoAspect ? 'w-full' : getAspectClass(aspectRatio)} ${className}`} 
        style={{ padding: 0 }}
      >
        <img 
          src={src} 
          alt={alt} 
          onError={() => setImgError(true)}
          style={{ width: '100%', height: isAutoAspect ? 'auto' : '100%', objectFit: isAutoAspect ? 'contain' : 'cover', display: 'block' }}
        />
      </div>
    );
  }

  // Render project-specific pure CSS placeholder art compositions (for cards without real images yet)
  if (preset === 'movie-posters') {
    return (
      <div className={`image-placeholder-frame ${getAspectClass(aspectRatio)} ${className}`} style={{ padding: 0 }}>
        <div className="card-thumb-composition thumb-movie-posters">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="badge-category" style={{ backgroundColor: '#D7F23A', color: '#171515' }}>
              POSTER DESIGN
            </span>
            <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', opacity: 0.8 }}>01 / BRIEF</span>
          </div>
          <div>
            <div className="poster-title-block">MOVIE POSTERS</div>
            <div className="poster-bar" />
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.08em', color: '#FAF0F4', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '0.5rem' }}>
            TYPOGRAPHY & COMPOSITION
          </div>
        </div>
      </div>
    );
  }

  if (preset === 'cactus') {
    return (
      <div className={`image-placeholder-frame ${getAspectClass(aspectRatio)} ${className}`} style={{ padding: 0 }}>
        <div className="card-thumb-composition thumb-cactus">
          <div className="brand-grid-pattern" />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
            <span className="badge-category" style={{ backgroundColor: '#171515', color: '#F7F3EA' }}>
              BRAND IDENTITY
            </span>
            <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: '#171515' }}>02 / SYSTEM</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 10 }}>
            <div className="brand-logo-mark">C</div>
            <div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#171515', textTransform: 'uppercase' }}>
                CACTUS
              </div>
              <div style={{ fontSize: '0.7rem', color: '#57534E', fontFamily: 'monospace' }}>VISUAL IDENTITY</div>
            </div>
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.08em', color: '#57534E', borderTop: '1px solid rgba(23,21,21,0.2)', paddingTop: '0.5rem', zIndex: 10 }}>
            BRAND ASSETS & PACKAGING
          </div>
        </div>
      </div>
    );
  }

  if (preset === 'character-design') {
    return (
      <div className={`image-placeholder-frame ${getAspectClass(aspectRatio)} ${className}`} style={{ padding: 0 }}>
        <div className="card-thumb-composition thumb-character-design">
          <div className="thumb-character-shape-1" />
          <div className="thumb-character-shape-2" />
          <div style={{ display: 'flex', justify: 'space-between', alignItems: 'center', zIndex: 10 }}>
            <span className="badge-category" style={{ backgroundColor: '#D7F23A', color: '#171515' }}>
              ILLUSTRATION
            </span>
            <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: '#171515' }}>05 / CHARACTERS</span>
          </div>
          <div style={{ zIndex: 10 }}>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#171515', textTransform: 'uppercase' }}>
              CHARACTER DESIGN
            </div>
            <div style={{ fontSize: '0.7rem', color: '#57534E', fontFamily: 'monospace' }}>CONCEPT ART & SILHOUETTES</div>
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.08em', color: '#57534E', borderTop: '1px solid rgba(23,21,21,0.2)', paddingTop: '0.5rem', zIndex: 10 }}>
            TURNAROUNDS & EXPRESSIONS
          </div>
        </div>
      </div>
    );
  }

  // Portrait Placeholder
  if (preset === 'portrait') {
    return (
      <div className={`image-placeholder-frame aspect-3-4 ${className}`} style={{ backgroundColor: '#FAF0F4' }}>
        <span className="placeholder-center-label" style={{ backgroundColor: '#D7F23A' }}>
          PORTRAIT / 01
        </span>
      </div>
    );
  }

  // Default Editorial Frame Placeholder
  return (
    <div className={`image-placeholder-frame ${getAspectClass(aspectRatio)} ${className}`}>
      <span className="placeholder-center-label">
        {label}
      </span>
    </div>
  );
}
