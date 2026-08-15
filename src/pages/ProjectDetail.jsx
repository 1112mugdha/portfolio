import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ProjectGallery from '../components/ui/ProjectGallery';
import { projectsData } from '../data/projects';
import { getAssetPath } from '../utils/assetPath';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [photoIndex, setPhotoIndex] = useState(0);

  const project = projectsData.find(p => p.id === projectId);
  if (!project) {
    return <Navigate to="/#assignments" replace />;
  }

  const currentIndex = projectsData.findIndex(p => p.id === projectId);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  // Exact 6 Cactus gallery deliverables
  const cactusGalleryDeliverables = [
    {
      id: 'brand-identity',
      title: 'Brand Identity',
      description: 'Logo, brand mark, colour palette and typography',
      image: getAssetPath('images/assignments/cactus/cactus-brandboard-official.png')
    },
    {
      id: 'website-concept',
      title: 'Website Concept',
      description: 'Applying the Cactus visual identity across digital touchpoints',
      image: getAssetPath('images/assignments/cactus/cactus-site.png')
    },
    {
      id: 'visual-direction',
      title: 'Visual Direction',
      description: 'Moodboard and visual exploration',
      image: getAssetPath('images/assignments/cactus/cactus-mood.png')
    },
    {
      id: 'packaging',
      title: 'Packaging',
      description: 'Sustainable packaging and product presentation',
      image: getAssetPath('images/assignments/cactus/cactus-packaging.png')
    },
    {
      id: 'app-concept',
      title: 'App Concept',
      description: 'Mobile interface concept for community and product catalog',
      image: getAssetPath('images/assignments/cactus/cactus-mobile-concept.jpg')
    },
    {
      id: 'stationery-print',
      title: 'Stationery & Print',
      description: 'Business cards, letterheads, and print collateral',
      image: getAssetPath('images/assignments/cactus/cactus-stationery.png')
    }
  ];

  // Exact 6 Photo Essay photograph deliverables
  const photoEssayDeliverables = [
    {
      id: 'photo-01',
      image: getAssetPath('images/assignments/photo-essay/01-shadows-stairwell.jpg'),
      alt: 'Shadows & Geometry: Sunlit angles across urban architecture.'
    },
    {
      id: 'photo-02',
      image: getAssetPath('images/assignments/photo-essay/02-framing-archway.jpg'),
      alt: 'Framing Motion: Looking through traditional corridors.'
    },
    {
      id: 'photo-03',
      image: getAssetPath('images/assignments/photo-essay/03-reflections-window.jpg'),
      alt: 'Quiet Reflection: Still moments captured in glass and light.'
    },
    {
      id: 'photo-04',
      image: getAssetPath('images/assignments/photo-essay/04-textural-details.jpg'),
      alt: 'Textural Contrast: Weathered stone meeting modern metal.'
    },
    {
      id: 'photo-05',
      image: getAssetPath('images/assignments/photo-essay/05-solitude-bench.jpg'),
      alt: 'Solitude & Scale: Human presence amidst wide open spaces.'
    },
    {
      id: 'photo-06',
      image: getAssetPath('images/assignments/photo-essay/06-night-lights.jpg'),
      alt: 'Late Night Focus: Focused moments under the quiet glow.'
    }
  ];

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % photoEssayDeliverables.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + photoEssayDeliverables.length) % photoEssayDeliverables.length);
  };

  return (
    <div className="py-6 max-w-5xl mx-auto">
      {/* 1. Top Header Navigation (Back to Assignments) (margin-bottom: 28px) */}
      <div className="exp-back-nav mt-3">
        <Link 
          to="/#assignments" 
          className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-[#171515] hover:text-[#E96F98] transition-colors"
        >
          ← BACK TO ASSIGNMENTS
        </Link>
      </div>

      {/* 2. Project Title Header (Matching Experience Page Template & Spacing) */}
      <div className="exp-header-border-block border-b-1.5 border-[#171515] mb-8">
        {/* Category Badge (margin-bottom: 32px) */}
        <div className="exp-role-badge-wrap flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-bold bg-[#FAF4EB] text-[#171515] px-3.5 py-1.5 border border-[#171515]">
            ASSIGNMENT {project.number} — {project.category}
          </span>
        </div>

        {/* Highlighted Main Assignment Name Label (e.g. CACTUS) */}
        <div className="exp-company-highlight-container">
          <h1 className="exp-company-name-text">
            {project.title}
          </h1>
        </div>

        {project.subTitle && (
          <h2 className="font-heading font-bold text-lg sm:text-xl uppercase tracking-wider text-[#E96F98] mb-4">
            {project.subTitle}
          </h2>
        )}

        {project.shortDescription && (
          <p className="exp-about-paragraph font-body text-base text-[#57534E] max-w-2xl leading-relaxed mb-6">
            {project.shortDescription}
          </p>
        )}
      </div>

      {/* =========================================================================
         3. SPECIAL CUSTOM CASE STUDY FOR MOVIE POSTERS (05)
         ========================================================================= */}
      {project.id === 'movie-posters' ? (
        <div>
          {/* Top Section: Structured Project Details */}
          <div className="flex flex-col gap-8 max-w-4xl my-6">
            <div className="exp-about-block border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                ABOUT THE PROJECT
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                THE IDEA
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                PROCESS & EXPLORATION
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.process}
              </p>
            </div>

            <div className="border-l-3 border-[#E96F98] pl-6 py-1">
              <h2 className="exp-what-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                TOOLS USED
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tools?.map((tool) => (
                  <span key={tool} className="tag-pill-element text-xs py-1 px-3">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section: 3-Column Equal Grid of Poster Explorations */}
          <div className="detail-major-section-block">
            <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-8 flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-[#E96F98] border border-[#171515] inline-block"></span>
              POSTER EXPLORATIONS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Poster 1 */}
              <div className="flex flex-col gap-2.5 items-center w-full">
                <p className="text-xs font-mono font-bold text-[#171515] uppercase tracking-wider mb-0.5 text-center">
                  DON'T WORRY DARLING
                </p>
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1 shadow-sm w-full">
                  <img 
                    src={getAssetPath('images/assignments/movie-posters/poster-03-sometimes.jpg')} 
                    alt="Don't Worry Darling Poster"
                    className="movie-poster-gallery-img"
                  />
                </div>
              </div>

              {/* Poster 2 */}
              <div className="flex flex-col gap-2.5 items-center w-full">
                <p className="text-xs font-mono font-bold text-[#171515] uppercase tracking-wider mb-0.5 text-center">
                  INSIDE OUT
                </p>
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1 shadow-sm w-full">
                  <img 
                    src={getAssetPath('images/assignments/movie-posters/poster-01-fleur.png')} 
                    alt="Inside Out Poster"
                    className="movie-poster-gallery-img"
                  />
                </div>
              </div>

              {/* Poster 3 */}
              <div className="flex flex-col gap-2.5 items-center w-full">
                <p className="text-xs font-mono font-bold text-[#171515] uppercase tracking-wider mb-0.5 text-center">
                  LA LA LAND
                </p>
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1 shadow-sm w-full">
                  <img 
                    src={getAssetPath('images/assignments/movie-posters/poster-02-matcha.png')} 
                    alt="La La Land Poster"
                    className="movie-poster-gallery-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : project.id === 'cactus' ? (
        /* =========================================================================
           4. SPECIAL CUSTOM CASE STUDY FOR CACTUS (01)
           ========================================================================= */
        <div>
          {/* Project Information Case Study */}
          <div className="flex flex-col gap-8 max-w-4xl my-6">
            <div className="exp-about-block border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                ABOUT THE PROJECT
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                THE IDEA
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                PROCESS & BRAND SYSTEM
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.process}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                MY CONTRIBUTION
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.contribution}
              </p>
            </div>

            <div className="border-l-3 border-[#E96F98] pl-6 py-1">
              <h2 className="exp-what-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                TOOLS USED
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tools?.map((tool) => (
                  <span key={tool} className="tag-pill-element text-xs py-1 px-3">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Deliverables Gallery */}
          <ProjectGallery items={cactusGalleryDeliverables} title="BRAND SYSTEM & DELIVERABLES" imgClassName="cactus-gallery-img" />
        </div>
      ) : project.id === 'photo-essay' ? (
        /* =========================================================================
           5. SPECIAL CUSTOM CASE STUDY FOR PHOTO ESSAY (02)
           ========================================================================= */
        <div>
          {/* Project Overview */}
          <div className="flex flex-col gap-8 max-w-4xl my-6">
            <div className="exp-about-block border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                ABOUT THE ESSAY
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                THE CONCEPT & APPROACH
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.concept}
              </p>
            </div>

            <div className="border-l-3 border-[#E96F98] pl-6 py-1">
              <h2 className="exp-what-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                TOOLS USED
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tools?.map((tool) => (
                  <span key={tool} className="tag-pill-element text-xs py-1 px-3">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Carousel Viewer */}
          <div className="detail-major-section-block">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#E96F98] border border-[#171515] inline-block"></span>
                PHOTO SEQUENTIAL GALLERY
              </h2>
              <span className="font-mono text-xs font-bold text-[#57534E]">
                {photoIndex + 1} / {photoEssayDeliverables.length}
              </span>
            </div>

            {/* Caption Bar ALWAYS rendered ABOVE the carousel frame */}
            <div className="w-full mb-3 pb-2 border-b border-[#171515]/20 text-center px-2">
              <p className="font-mono text-xs font-bold text-[#171515] uppercase tracking-wider">
                {photoEssayDeliverables[photoIndex].alt}
              </p>
            </div>

            {/* Active Photograph Flex Carousel */}
            <div className="photo-essay-carousel">
              <button 
                onClick={prevPhoto}
                className="photo-essay-arrow-left"
                aria-label="Previous photograph"
              >
                ←
              </button>

              <div className="photo-essay-image-frame">
                <img 
                  src={photoEssayDeliverables[photoIndex].image} 
                  alt={photoEssayDeliverables[photoIndex].alt}
                  className="photo-essay-img"
                />
              </div>

              <button 
                onClick={nextPhoto}
                className="photo-essay-arrow-right"
                aria-label="Next photograph"
              >
                →
              </button>
            </div>
          </div>
        </div>
      ) : project.id === 'pygame' ? (
        /* =========================================================================
           6. SPECIAL CUSTOM CASE STUDY FOR PYGAME (03)
           ========================================================================= */
        <div>
          <div className="flex flex-col gap-8 max-w-4xl my-6">
            <div className="exp-about-block border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                ABOUT THE GAME
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                GAMEPLAY MECHANICS
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.mechanics}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                TECHNICAL IMPLEMENTATION
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.implementation}
              </p>
            </div>

            <div className="border-l-3 border-[#E96F98] pl-6 py-1">
              <h2 className="exp-what-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                TOOLS USED
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tools?.map((tool) => (
                  <span key={tool} className="tag-pill-element text-xs py-1 px-3">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Embedded Pygame HTML5 Canvas Frame */}
          {project.demoIframe && (
            <div className="detail-major-section-block flex flex-col items-center">
              <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-4 flex items-center gap-3 w-full max-w-md">
                <span className="w-3.5 h-3.5 bg-[#D7F23A] border border-[#171515] inline-block"></span>
                INTERACTIVE DEMO
              </h2>
              <div className="sky-hopper-iframe-container">
                <iframe 
                  src={project.demoIframe} 
                  title="Sky Hopper Pygame WebGL Demo" 
                  className="sky-hopper-iframe"
                />
              </div>
            </div>
          )}
        </div>
      ) : project.id === 'character-design' ? (
        /* =========================================================================
           7. SPECIAL CUSTOM CASE STUDY FOR CHARACTER DESIGN (04)
           ========================================================================= */
        <div>
          <div className="flex flex-col gap-8 max-w-4xl my-6">
            <div className="exp-about-block border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                ABOUT THE CHARACTER
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                CHARACTER BACKSTORY
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.backstory}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                DESIGN PROCESS & EXPRESSIONS
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.designProcess}
              </p>
            </div>

            <div className="border-l-3 border-[#E96F98] pl-6 py-1">
              <h2 className="exp-what-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                TOOLS USED
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tools?.map((tool) => (
                  <span key={tool} className="tag-pill-element text-xs py-1 px-3">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Full Character Turnaround Sheet */}
          <div className="detail-major-section-block">
            <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-6 flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-[#E96F98] border border-[#171515] inline-block"></span>
              CHARACTER TURNAROUND SHEET
            </h2>
            <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-2 shadow-sm flex items-center justify-center min-h-[300px] sm:min-h-[420px] w-full">
              <img 
                src={getAssetPath('images/assignments/character-design/leo-character-sheet.png')} 
                alt="Leo Character Turnaround Sheet"
                className="leo-character-sheet-img"
              />
            </div>
          </div>
        </div>
      ) : project.id === 'others' ? (
        /* =========================================================================
           8. SPECIAL CUSTOM CASE STUDY FOR OTHERS (06)
           ========================================================================= */
        <div>
          <div className="flex flex-col gap-8 max-w-4xl my-6">
            <div className="exp-about-block border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                ABOUT THE MISCELLANEOUS COLLECTION
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.about}
              </p>
            </div>
          </div>

          <div className="detail-major-section-block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-items-center">
              {/* Item 1 */}
              <div className="w-full max-w-[480px] flex flex-col gap-3">
                <div className="pb-1.5 border-b-1.5 border-[#171515]">
                  <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#171515]">
                    01 — EDITORIAL MAGAZINE SPREAD
                  </h3>
                  <p className="font-body text-xs text-[#57534E] leading-tight mt-1">
                    An open magazine spread featuring typography and editorial layout.
                  </p>
                </div>

                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-2 shadow-sm flex items-center justify-center min-h-[280px] sm:min-h-[360px] w-full">
                  <div className="magazine-spread-container">
                    <img 
                      src={getAssetPath('images/assignments/others/01-magazine-spread-left.png')} 
                      alt="Magazine Spread Page 1"
                      className="magazine-spread-page"
                    />
                    <img 
                      src={getAssetPath('images/assignments/others/01-magazine-spread-right.png')} 
                      alt="Magazine Spread Page 2"
                      className="magazine-spread-page"
                    />
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="w-full max-w-[480px] flex flex-col gap-3">
                <div className="pb-1.5 border-b-1.5 border-[#171515]">
                  <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#171515]">
                    02 — CREATIVE TYPOGRAPHY POSTER
                  </h3>
                  <p className="font-body text-xs text-[#57534E] leading-tight mt-1">
                    A standalone poster exploring expressive typography and composition.
                  </p>
                </div>

                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-2 shadow-sm flex items-center justify-center min-h-[280px] sm:min-h-[360px] w-full">
                  <img 
                    src={getAssetPath('images/assignments/others/02-typography-poster.png')} 
                    alt="Creative Typography Poster"
                    className="others-standalone-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Standard Fallback Gallery */
        <div>
          {project.deliverables && (
            <ProjectGallery items={project.deliverables} title="DELIVERABLES & GALLERY" />
          )}
        </div>
      )}

      {/* Bottom PREV / NEXT Navigation Bar */}
      <div className="assignment-bottom-nav">
        {prevProject ? (
          <Link 
            to={`/work/${prevProject.id}`} 
            className="prev-link px-5 sm:px-6 py-2.5 border-1.5 border-[#171515] bg-[#D7F23A] hover:bg-[#E96F98] text-[#171515] font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm flex items-center justify-center cursor-pointer active:translate-y-0.5"
            aria-label={`Go to previous project: ${prevProject.title}`}
          >
            ← PREV: {prevProject.title}
          </Link>
        ) : (
          <div className="prev-link" />
        )}

        {nextProject ? (
          <Link 
            to={`/work/${nextProject.id}`} 
            className="next-link px-5 sm:px-6 py-2.5 border-1.5 border-[#171515] bg-[#D7F23A] hover:bg-[#E96F98] text-[#171515] font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm flex items-center justify-center cursor-pointer active:translate-y-0.5"
            aria-label={`Go to next project: ${nextProject.title}`}
          >
            NEXT: {nextProject.title} →
          </Link>
        ) : (
          <div className="next-link" />
        )}
      </div>
    </div>
  );
}
