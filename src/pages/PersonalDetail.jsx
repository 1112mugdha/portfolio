import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { personalData } from '../data/personal';

export default function PersonalDetail() {
  const { categoryId } = useParams();
  const [slideIndex, setSlideIndex] = useState(0);
  
  const category = personalData.find(c => c.id === categoryId);
  if (!category) {
    return <Navigate to="/personal" replace />;
  }

  const isBrandConcepts = category.id === 'brand-concepts';

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % category.items.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + category.items.length) % category.items.length);
  };

  return (
    <div className="py-6 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <Breadcrumbs items={[
        { label: 'HOME', path: '/' },
        { label: 'PERSONAL WORK', path: '/personal' },
        { label: category.title }
      ]} />

      {/* Back Link (28px bottom margin) */}
      <div className="detail-back-nav mt-3">
        <Link 
          to="/personal" 
          className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-[#171515] hover:text-[#E96F98] transition-colors"
        >
          ← BACK TO PERSONAL WORK
        </Link>
      </div>

      {/* Header (32px bottom border block) */}
      <div className="detail-title-header-block">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge-eyebrow-pink">
            COLLECTION {category.number}
          </span>
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl uppercase tracking-tight text-[#171515] mb-3">
          {category.title}
        </h1>
        <p className="font-body text-base text-[#57534E] max-w-2xl leading-relaxed">
          {category.subtitle}
        </p>
      </div>

      {isBrandConcepts ? (
        /* =========================================================================
           BRAND CONCEPTS — CAROUSEL WITH PHOTO SEQUENTIAL GALLERY NAVIGATION SYSTEM
           ========================================================================= */
        <div className="detail-major-section-block flex flex-col items-center">
          
          {/* Active Concept Title & Description Directly Above Frame */}
          <div className="w-full max-w-4xl text-center mb-4">
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#171515]">
              {category.items[slideIndex].title}
            </h2>
            {category.items[slideIndex].description && (
              <p className="font-body text-xs sm:text-sm text-[#57534E] leading-tight mt-1.5 truncate max-w-full block" title={category.items[slideIndex].description}>
                {category.items[slideIndex].description}
              </p>
            )}
          </div>

          {/* Photo Sequential Gallery Component Navigation: Left Arrow + Image Frame + Right Arrow */}
          <div className="photo-essay-carousel">
            
            {/* Left Arrow Button (Matching Photo Sequential Gallery System) */}
            <button 
              onClick={prevSlide}
              className="photo-essay-arrow-left"
              aria-label="Previous brand concept"
            >
              ←
            </button>

            {/* Displayed Brand Board Image Frame */}
            <div className="photo-essay-image-frame">
              <img 
                key={category.items[slideIndex].id}
                src={category.items[slideIndex].image} 
                alt={category.items[slideIndex].title}
                className="brand-concept-carousel-img transition-opacity duration-300 ease-in-out"
              />
            </div>

            {/* Right Arrow Button (Matching Photo Sequential Gallery System) */}
            <button 
              onClick={nextSlide}
              className="photo-essay-arrow-right"
              aria-label="Next brand concept"
            >
              →
            </button>

          </div>

          {/* Counter & Indicator Bar */}
          <div className="mt-4 flex items-center justify-between w-full max-w-4xl px-2 font-mono text-xs font-bold text-[#171515]">
            <span className="bg-[#E96F98] px-3 py-1 border border-[#171515]">
              {String(slideIndex + 1).padStart(2, '0')} / {String(category.items.length).padStart(2, '0')}
            </span>
            
            <div className="flex gap-1.5">
              {category.items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlideIndex(idx)}
                  className={`w-3.5 h-3.5 border border-[#171515] transition-colors ${
                    idx === slideIndex ? 'bg-[#171515]' : 'bg-[#FAF4EB] hover:bg-[#D7F23A]'
                  }`}
                  aria-label={`Go to brand concept ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      ) : (
        /* =========================================================================
           OTHERS — 3-ITEM HORIZONTAL GALLERY LAYOUT (TITLES DIRECTLY ABOVE IMAGES)
           ========================================================================= */
        <div className="detail-major-section-block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-start justify-items-center">
            {category.items.map((item) => (
              <div key={item.id} className="flex flex-col gap-3 w-full max-w-[340px] group">
                
                {/* Clean Image Title Label & One-line Description directly ABOVE image */}
                <div>
                  <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#171515]">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="font-body text-xs text-[#57534E] leading-tight mt-1 truncate max-w-full block" title={item.description}>
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Contained Image Frame with subtle border & background */}
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-2 shadow-sm flex items-center justify-center min-h-[340px] sm:min-h-[410px] w-full">
                  {item.image.endsWith('.svg') ? (
                    <ImagePlaceholder
                      src={item.image}
                      title={item.title}
                      label={item.category}
                      aspectRatio={item.aspect || '4/3'}
                    />
                  ) : (
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="others-gallery-img"
                    />
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
