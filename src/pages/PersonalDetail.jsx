import React from 'react';
import { useParams, Link, Navigate, useSearchParams } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { personalData } from '../data/personal';

export default function PersonalDetail() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const category = personalData.find(c => c.id === categoryId);
  if (!category) {
    return <Navigate to="/personal" replace />;
  }

  const isBrandConcepts = category.id === 'brand-concepts';

  // Read 1-indexed slide parameter from URL (e.g. ?slide=3 -> index 2)
  const slideParam = searchParams.get('slide');
  const parsedSlide = slideParam ? parseInt(slideParam, 10) - 1 : 0;
  
  // Safe bounds check
  const slideIndex = (isNaN(parsedSlide) || parsedSlide < 0 || parsedSlide >= category.items.length)
    ? 0
    : parsedSlide;

  const updateSlideIndex = (newIndex) => {
    setSearchParams({ slide: (newIndex + 1).toString() }, { replace: false });
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
      {/* Breadcrumb */}
      <Breadcrumbs items={[
        { label: 'HOME', path: '/' },
        { label: 'PERSONAL PROJECTS', path: '/#personal-projects' },
        { label: category.title }
      ]} />

      {/* Back Link (28px bottom margin) */}
      <div className="detail-back-nav mt-3">
        <Link 
          to="/#personal-projects" 
          className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-[#171515] hover:text-[#E96F98] transition-colors"
        >
          ← BACK TO PERSONAL PROJECTS
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
           BRAND CONCEPTS — 2-COLUMN SIDE-BY-SIDE LAYOUT (DESKTOP) & STACKED (MOBILE)
           Left Column: Concept Number, Title, Category, Description & Indicators
           Right Column: Previous Arrow (Left) + Contained Image Frame + Next Arrow (Right)
           ========================================================================= */
        <div className="detail-major-section-block">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* LEFT COLUMN: Text Info & Indicators */}
            <div className="lg:col-span-5 flex flex-col gap-4 text-left">
              <div className="flex items-center gap-2">
                <span className="bg-[#E96F98] text-[#171515] px-3 py-1 border border-[#171515] font-mono text-xs font-bold">
                  CONCEPT {String(slideIndex + 1).padStart(2, '0')} / {String(category.items.length).padStart(2, '0')}
                </span>
              </div>

              <div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-wider text-[#171515] mb-2">
                  {category.items[slideIndex].title}
                </h2>
                {category.items[slideIndex].category && (
                  <p className="font-mono text-xs font-bold text-[#E96F98] uppercase tracking-wider mb-3">
                    {category.items[slideIndex].category}
                  </p>
                )}
                {category.items[slideIndex].description && (
                  <p className="font-body text-sm sm:text-base text-[#57534E] leading-relaxed">
                    {category.items[slideIndex].description}
                  </p>
                )}
              </div>

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
            <div className="lg:col-span-7 flex items-center justify-center">
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
