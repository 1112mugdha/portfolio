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
    <div className={`py-6 max-w-6xl mx-auto ${!isBrandConcepts ? 'personal-others-page' : ''}`}>
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
      <div className="exp-header-border-block border-b-1.5 border-[#171515] mb-6">
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

      {/* PINK DIVIDER */}
      <div className="detail-section-divider" />

      {/* Detail Major Section Block with Ref for smooth scrolling */}
      <div ref={conceptInfoRef} className={`personal-concept-container ${!isBrandConcepts ? 'personal-others-container' : ''}`}>
        
        {/* Item Counter */}
        <div className="personal-concept-counter">
          {isBrandConcepts 
            ? `CONCEPT ${String(slideIndex + 1).padStart(2, '0')} / ${String(category.items.length).padStart(2, '0')}`
            : `PROJECT ${String(slideIndex + 1).padStart(2, '0')} / ${String(category.items.length).padStart(2, '0')}`
          }
        </div>

        {/* Main Title */}
        <h2 className="personal-concept-title">
          {category.items[slideIndex]?.title}
        </h2>

        {/* Category */}
        {category.items[slideIndex]?.category && (
          <p className="personal-concept-category">
            {category.items[slideIndex]?.category}
          </p>
        )}

        {/* Short Description */}
        {category.items[slideIndex]?.description && (
          <p className="personal-concept-description">
            {category.items[slideIndex]?.description}
          </p>
        )}

        {/* Pink Divider between overview and case study sections */}
        <div className="detail-section-divider" />

        {/* Case Study Sections with Pink Dividers between distinct sections */}
        {category.items[slideIndex]?.details && category.items[slideIndex].details.map((point, idx) => (
          <React.Fragment key={idx}>
            <div className="personal-detail-section">
              <h3 className="personal-section-heading">
                {point.heading}
              </h3>
              <p className="personal-section-paragraph">
                {point.content}
              </p>
            </div>
            {/* Pink Divider between sections and before the carousel */}
            <div className="detail-section-divider" />
          </React.Fragment>
        ))}

        {/* Carousel Section with Previous/Next Arrows and Image Frame */}
        <div className="personal-carousel-wrapper">
          <div className="photo-essay-carousel w-full justify-center">
            {/* Left Arrow Button */}
            <button 
              onClick={prevSlide}
              className="photo-essay-arrow-left"
              aria-label="Previous item"
            >
              ←
            </button>

            {/* Displayed Image Frame */}
            <div className={isBrandConcepts ? "brand-concept-image-frame" : "others-concept-image-frame"}>
              {category.items[slideIndex]?.image?.endsWith('.svg') ? (
                <ImagePlaceholder
                  src={category.items[slideIndex].image}
                  title={category.items[slideIndex].title}
                  label={category.items[slideIndex].category}
                  aspectRatio={category.items[slideIndex].aspect || '3/4'}
                />
              ) : (
                <img 
                  key={category.items[slideIndex]?.id || slideIndex}
                  src={category.items[slideIndex]?.image} 
                  alt={category.items[slideIndex]?.title}
                  className={isBrandConcepts ? "brand-concept-carousel-img" : "others-concept-carousel-img"}
                />
              )}
            </div>

            {/* Right Arrow Button */}
            <button 
              onClick={nextSlide}
              className="photo-essay-arrow-right"
              aria-label="Next item"
            >
              →
            </button>
          </div>

          {/* Indicator Pills & Progress */}
          <div className="personal-indicator-pills">
            {category.items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => updateSlideIndex(idx)}
                className={`personal-indicator-pill ${idx === slideIndex ? 'active' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

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
