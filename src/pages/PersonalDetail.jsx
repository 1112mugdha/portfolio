import React, { useRef } from 'react';
import { useParams, Link, Navigate, useSearchParams } from 'react-router-dom';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { personalData } from '../data/personal';

export default function PersonalDetail() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const conceptInfoRef = useRef(null);
  
  const category = personalData.find(c => c.id === categoryId);
  if (!category) {
    return <Navigate to="/#personal-projects" replace />;
  }

  const categoryIndex = personalData.findIndex(c => c.id === categoryId);
  const prevCategory = categoryIndex > 0 ? personalData[categoryIndex - 1] : null;
  const nextCategory = categoryIndex >= 0 && categoryIndex < personalData.length - 1 ? personalData[categoryIndex + 1] : null;

  const isBrandConcepts = category.id === 'brand-concepts';

  // Read 1-indexed slide parameter from URL (e.g. ?slide=3 -> index 2)
  const slideParam = searchParams.get('slide');
  const parsedSlide = slideParam ? parseInt(slideParam, 10) - 1 : 0;
  
  // Safe bounds check
  const slideIndex = (isNaN(parsedSlide) || parsedSlide < 0 || parsedSlide >= category.items.length)
    ? 0
    : parsedSlide;

  const scrollToConceptInfo = () => {
    if (conceptInfoRef.current) {
      const elementTop = conceptInfoRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offset = 90;
      window.scrollTo({
        top: Math.max(0, elementTop - offset),
        behavior: 'smooth'
      });
    }
  };

  const updateSlideIndex = (newIndex) => {
    setSearchParams({ slide: (newIndex + 1).toString() }, { replace: false });
    setTimeout(() => {
      scrollToConceptInfo();
    }, 30);
  };

  const nextSlide = () => {
    const nextIdx = (slideIndex + 1) % category.items.length;
    updateSlideIndex(nextIdx);
  };

  const prevSlide = () => {
    const prevIdx = (slideIndex - 1 + category.items.length) % category.items.length;
    updateSlideIndex(prevIdx);
  };

  return (
    <div className="py-6 max-w-6xl mx-auto">
      {/* Back Link (28px bottom margin) */}
      <div className="exp-back-nav mt-3">
        <Link 
          to="/#personal-projects" 
          className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-[#171515] hover:text-[#E96F98] transition-colors"
        >
          ← BACK TO PERSONAL PROJECTS
        </Link>
      </div>

      {/* Header Block (Matching Experience Page Template & Spacing) */}
      <div className="exp-header-border-block border-b-1.5 border-[#171515] mb-8">
        {/* Collection Badge */}
        <div className="exp-role-badge-wrap flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-bold bg-[#FAF4EB] text-[#171515] px-3.5 py-1.5 border border-[#171515]">
            COLLECTION {category.number} — PERSONAL PROJECT
          </span>
        </div>
        
        {/* Highlighted Main Personal Project Collection Name */}
        <div className="exp-company-highlight-container">
          <h1 className="exp-company-name-text">
            {category.title}
          </h1>
        </div>

        {category.subtitle && (
          <p className="exp-about-paragraph font-body text-base text-[#57534E] max-w-2xl leading-relaxed mb-6">
            {category.subtitle}
          </p>
        )}
      </div>

      {isBrandConcepts ? (
        /* =========================================================================
           BRAND CONCEPTS — 2-COLUMN SIDE-BY-SIDE LAYOUT (DESKTOP) & STACKED (MOBILE)
           Left Column: Concept Number, Bold Pink Brand Name, Category, Description & 3-4 Case Study Points
           Right Column: Previous Arrow (Left) + Contained Image Frame + Next Arrow (Right)
           ========================================================================= */
        <div className="detail-major-section-block">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* LEFT COLUMN: Text Info, Case Study Breakdown & Indicators */}
            <div ref={conceptInfoRef} className="lg:col-span-5 flex flex-col gap-4 text-left">
              <div className="flex items-center gap-2">
                <span className="bg-[#E96F98] text-[#171515] px-3 py-1 border border-[#171515] font-mono text-xs font-bold">
                  CONCEPT {String(slideIndex + 1).padStart(2, '0')} / {String(category.items.length).padStart(2, '0')}
                </span>
              </div>

              <div>
                {/* Bold Pink Brand Name for current concept (subordinate to main page title) */}
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#E96F98] mb-2">
                  {category.items[slideIndex].title}
                </h2>

                {category.items[slideIndex].category && (
                  <p className="font-mono text-xs font-bold text-[#171515] uppercase tracking-wider mb-3">
                    {category.items[slideIndex].category}
                  </p>
                )}
                {category.items[slideIndex].description && (
                  <p className="font-body text-sm text-[#57534E] leading-relaxed mb-4">
                    {category.items[slideIndex].description}
                  </p>
                )}
              </div>

              {/* Structured 3-4 Case Study Points per Brand Concept */}
              {category.items[slideIndex].details && (
                <div className="flex flex-col gap-3.5 my-1">
                  {category.items[slideIndex].details.map((point, idx) => (
                    <div 
                      key={idx} 
                      className={`pl-3.5 py-0.5 border-l-2 ${idx % 2 === 0 ? 'border-[#171515]' : 'border-[#E96F98]'}`}
                    >
                      <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-[#171515] mb-1">
                        {point.heading}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-[#57534E] leading-relaxed">
                        {point.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Indicator Pills & Progress */}
              <div className="flex items-center gap-2 mt-2 pt-4 border-t border-[#171515]/15">
                {category.items.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => updateSlideIndex(idx)}
                    className={`h-3 transition-all border border-[#171515] cursor-pointer ${
                      idx === slideIndex ? 'w-8 bg-[#171515]' : 'w-3 bg-[#FAF4EB] hover:bg-[#D7F23A]'
                    }`}
                    aria-label={`Go to brand concept ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Previous Arrow + Image Frame + Next Arrow */}
            <div className="lg:col-span-7 flex items-center justify-center lg:sticky lg:top-24">
              <div className="photo-essay-carousel w-full justify-center">
                {/* Left Arrow Button (Vertically centered against image frame) */}
                <button 
                  onClick={prevSlide}
                  className="photo-essay-arrow-left"
                  aria-label="Previous brand concept"
                >
                  ←
                </button>

                {/* Displayed Brand Board Image Frame (Bounded & Proportional) */}
                <div className="brand-concept-image-frame max-w-full overflow-hidden">
                  <img 
                    key={category.items[slideIndex].id}
                    src={category.items[slideIndex].image} 
                    alt={category.items[slideIndex].title}
                    className="brand-concept-carousel-img transition-opacity duration-300 ease-in-out"
                  />
                </div>

                {/* Right Arrow Button (Vertically centered against image frame) */}
                <button 
                  onClick={nextSlide}
                  className="photo-essay-arrow-right"
                  aria-label="Next brand concept"
                >
                  →
                </button>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* =========================================================================
           OTHERS — 3-ITEM HORIZONTAL GALLERY LAYOUT WITH EXPANDED CASE STUDY DETAILS
           ========================================================================= */
        <div className="detail-major-section-block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-start justify-items-center">
            {category.items.map((item) => (
              <div key={item.id} className="flex flex-col gap-4 w-full max-w-[340px] group">
                
                {/* Clean Image Title Label & Category */}
                <div>
                  <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#171515]">
                    {item.title}
                  </h3>
                  {item.category && (
                    <p className="font-mono text-[11px] font-bold text-[#E96F98] uppercase tracking-wider mt-0.5">
                      {item.category}
                    </p>
                  )}
                  {item.description && (
                    <p className="font-body text-xs text-[#57534E] leading-relaxed mt-1.5">
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

                {/* Structured Case Study Points for Other Personal Projects */}
                {item.details && (
                  <div className="flex flex-col gap-3 pt-3 border-t border-[#171515]/15">
                    {item.details.map((point, idx) => (
                      <div 
                        key={idx} 
                        className={`pl-3 py-0.5 border-l-2 ${idx % 2 === 0 ? 'border-[#171515]' : 'border-[#E96F98]'}`}
                      >
                        <h4 className="font-heading font-bold text-[11px] uppercase tracking-wider text-[#171515] mb-0.5">
                          {point.heading}
                        </h4>
                        <p className="font-body text-xs text-[#57534E] leading-relaxed">
                          {point.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom PREV / NEXT Navigation Bar for Personal Projects */}
      <div className="assignment-bottom-nav">
        {prevCategory ? (
          <Link 
            to={`/personal/${prevCategory.id}`} 
            className="prev-link px-5 sm:px-6 py-2.5 border-1.5 border-[#171515] bg-[#D7F23A] hover:bg-[#E96F98] text-[#171515] font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm flex items-center justify-center cursor-pointer active:translate-y-0.5"
            aria-label={`Go to previous personal project: ${prevCategory.title}`}
          >
            ← PREV: {prevCategory.title}
          </Link>
        ) : (
          <div className="prev-link" />
        )}

        {nextCategory ? (
          <Link 
            to={`/personal/${nextCategory.id}`} 
            className="next-link px-5 sm:px-6 py-2.5 border-1.5 border-[#171515] bg-[#D7F23A] hover:bg-[#E96F98] text-[#171515] font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm flex items-center justify-center cursor-pointer active:translate-y-0.5"
            aria-label={`Go to next personal project: ${nextCategory.title}`}
          >
            NEXT: {nextCategory.title} →
          </Link>
        ) : (
          <div className="next-link" />
        )}
      </div>
    </div>
  );
}
