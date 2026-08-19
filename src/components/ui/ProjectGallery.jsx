import React, { useState } from 'react';

export default function ProjectGallery({ 
  items = [], 
  title = 'PROJECT GALLERY & DELIVERABLES', 
  imgClassName = '' 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];
  const isMulti = items.length > 1;

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const isCompactView = imgClassName && imgClassName.includes('cactus');

  return (
    <div className="detail-major-section-block">
      {/* Gallery Header & Counter */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] flex items-center gap-3">
          <span className="w-3.5 h-3.5 bg-[#E96F98] border border-[#171515] inline-block"></span>
          {title}
        </h3>
        {isMulti && (
          <span className="font-mono text-xs font-bold text-[#171515] bg-[#FAF4EB] px-3.5 py-1.5 border border-[#171515]">
            {currentIndex + 1} / {items.length}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {/* Title & Description ALWAYS rendered ABOVE the image frame */}
        {currentItem.title && (
          <div className="pb-2 border-b-1.5 border-[#171515]">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#171515]">
              {currentItem.title}
            </h4>
            {currentItem.description && (
              <p className="font-body text-xs text-[#57534E] mt-0.5">
                {currentItem.description}
              </p>
            )}
          </div>
        )}

        {/* Sequential Gallery Frame with Left/Right Previous/Next Navigation */}
        <div className="photo-essay-carousel w-full justify-center">
          {isMulti && (
            <button 
              onClick={prevItem}
              className="photo-essay-arrow-left"
              aria-label="Previous deliverable"
            >
              ←
            </button>
          )}

          <div 
            className="border-1.5 border-[#171515] bg-[#FAF4EB] p-2 shadow-sm flex items-center justify-center w-full max-w-4xl overflow-hidden"
            style={isCompactView ? { height: 'calc(100vh - 140px)', maxHeight: 'calc(100vh - 140px)' } : {}}
          >
            {currentItem.isSpread ? (
              <div className="magazine-spread-container w-full flex items-center justify-center gap-2">
                <img 
                  src={currentItem.image} 
                  alt={`${currentItem.title || 'Deliverable'} - Page 1`} 
                  className="magazine-spread-page"
                />
                {currentItem.secondImage && (
                  <img 
                    src={currentItem.secondImage} 
                    alt={`${currentItem.title || 'Deliverable'} - Page 2`} 
                    className="magazine-spread-page"
                  />
                )}
              </div>
            ) : (
              <img 
                key={currentItem.id || currentIndex}
                src={currentItem.image} 
                alt={currentItem.title || 'Project Deliverable'} 
                className={imgClassName || 'w-full h-auto max-h-[520px] object-contain block mx-auto'}
                style={isCompactView ? { width: '100%', height: '100%', maxHeight: 'calc(100vh - 140px)', objectFit: 'contain' } : {}}
              />
            )}
          </div>

          {isMulti && (
            <button 
              onClick={nextItem}
              className="photo-essay-arrow-right"
              aria-label="Next deliverable"
            >
              →
            </button>
          )}
        </div>

        {/* Indicator Pills & Progress for Multi-Item Galleries */}
        {isMulti && (
          <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-[#171515]/15">
            {items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 transition-all border border-[#171515] cursor-pointer ${
                  idx === currentIndex ? 'w-8 bg-[#171515]' : 'w-3 bg-[#FAF4EB] hover:bg-[#D7F23A]'
                }`}
                aria-label={`Go to item ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
