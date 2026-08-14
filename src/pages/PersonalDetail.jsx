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

      {/* Back Link */}
      <div className="mt-1 mb-6">
        <Link 
          to="/personal" 
          className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-[#171515] hover:text-[#E96F98] transition-colors"
        >
          ← BACK TO PERSONAL WORK
        </Link>
      </div>

      {/* Header */}
      <div className="border-b-1.5 border-[#171515] pb-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge-eyebrow-pink">
            COLLECTION {category.number}
          </span>
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl uppercase tracking-tight text-[#171515] mb-2">
          {category.title}
        </h1>
        <p className="font-body text-base text-[#57534E] max-w-2xl leading-relaxed">
          {category.subtitle}
        </p>
      </div>

      {isBrandConcepts ? (
        /* =========================================================================
           BRAND CONCEPTS — INSTAGRAM-STYLE CAROUSEL / SLIDESHOW (1 BOARD AT A TIME)
           ========================================================================= */
        <div className="my-8 flex flex-col items-center">
          
          {/* Active Concept Title Directly Above Frame */}
          <div className="w-full max-w-4xl text-center mb-4">
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#171515]">
              {category.items[slideIndex].title}
            </h2>
          </div>

          {/* Carousel Frame Container */}
          <div className="relative w-full max-w-4xl bg-[#FAF4EB] border-1.5 border-[#171515] p-2 sm:p-3 shadow-sm min-h-[320px] sm:min-h-[440px] flex items-center justify-center">
            
            {/* Left Previous Button */}
            <button 
              onClick={prevSlide}
              className="absolute left-3 z-20 bg-[#171515] text-[#F7F3EA] hover:bg-[#E96F98] hover:text-[#171515] transition-colors py-2 px-3 font-heading font-bold text-xs uppercase tracking-wider border border-[#171515] shadow-md flex items-center gap-1 cursor-pointer"
              aria-label="Previous brand concept"
            >
              <span>←</span>
              <span className="hidden sm:inline">PREVIOUS</span>
            </button>

            {/* Displayed Brand Board Image — EXACTLY ONE AT A TIME */}
            <div className="w-full flex justify-center items-center overflow-hidden">
              <img 
                key={category.items[slideIndex].id}
                src={category.items[slideIndex].image} 
                alt={category.items[slideIndex].title}
                className="brand-concept-carousel-img transition-opacity duration-300 ease-in-out"
              />
            </div>

            {/* Right Next Button */}
            <button 
              onClick={nextSlide}
              className="absolute right-3 z-20 bg-[#171515] text-[#F7F3EA] hover:bg-[#E96F98] hover:text-[#171515] transition-colors py-2 px-3 font-heading font-bold text-xs uppercase tracking-wider border border-[#171515] shadow-md flex items-center gap-1 cursor-pointer"
              aria-label="Next brand concept"
            >
              <span className="hidden sm:inline">NEXT</span>
              <span>→</span>
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
        <div className="my-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start justify-items-center">
            {category.items.map((item) => (
              <div key={item.id} className="flex flex-col gap-2.5 w-full max-w-[340px] group">
                
                {/* Clean Image Title Label directly ABOVE image */}
                <div>
                  <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#171515]">
                    {item.title}
                  </h3>
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
