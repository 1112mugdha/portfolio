import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import ProjectGallery from '../components/ui/ProjectGallery';
import GameEmbed from '../components/ui/GameEmbed';
import { getAssetPath } from '../utils/assetPath';
import { projectsData } from '../data/projects';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [photoIndex, setPhotoIndex] = useState(0);
  
  const currentIndex = projectsData.findIndex(p => p.id === projectId);
  if (currentIndex === -1) {
    return <Navigate to="/work" replace />;
  }

  const project = projectsData[currentIndex];
  
  // Previous / Next project links (strictly 6 main assignments)
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
      id: 'brand-touchpoints',
      title: 'Brand Touchpoints',
      description: 'Product tags and supporting brand details',
      image: getAssetPath('images/assignments/cactus/cactus-tag.png')
    },
    {
      id: 'clothing-application',
      title: 'Clothing Application',
      description: 'Extending the identity onto apparel and fabric',
      image: getAssetPath('images/assignments/cactus/cactus-clothing.png')
    }
  ];

  // Exact 7 Photo Essay photographs in correct order
  const photoEssayDeliverables = [
    {
      id: 1,
      image: getAssetPath('images/assignments/photo-essay/photo-essay-01-cover.jpg'),
      alt: 'Campus Through a Frame by Mugdha Patnaik'
    },
    {
      id: 2,
      image: getAssetPath('images/assignments/photo-essay/photo-essay-02-in-focus.jpg'),
      alt: 'In Focus: Focus during lectures.'
    },
    {
      id: 3,
      image: getAssetPath('images/assignments/photo-essay/photo-essay-03-shelves.jpg'),
      alt: 'Shelves of Knowledge: The library; a place for study and growth.'
    },
    {
      id: 4,
      image: getAssetPath('images/assignments/photo-essay/photo-essay-04-moment-to-pause.jpg'),
      alt: 'A Moment to Pause: A moment of relaxation and personal space.'
    },
    {
      id: 5,
      image: getAssetPath('images/assignments/photo-essay/photo-essay-05-midday-break.jpg'),
      alt: 'Midday Break: Social moments at lunch.'
    },
    {
      id: 6,
      image: getAssetPath('images/assignments/photo-essay/photo-essay-06-lost-in-thought.jpg'),
      alt: 'Lost in Thought: A playful pause in the day.'
    },
    {
      id: 7,
      image: getAssetPath('images/assignments/photo-essay/photo-essay-07-late-night-focus.jpg'),
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
    <div className="py-6 max-w-4xl mx-auto">
      {/* 1. Subtle Editorial Breadcrumb */}
      <Breadcrumbs items={[{ label: 'HOME', path: '/' }, { label: 'ASSIGNMENTS', path: '/#assignments' }, { label: project.title }]} />

      {/* 2. Top Header Navigation (Back to Assignments Only) (28px bottom margin) */}
      <div className="detail-back-nav flex items-center justify-between py-3 border-b-1.5 border-[#171515]">
        <Link to="/#assignments" className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#171515] uppercase tracking-wider hover:opacity-75 transition-opacity">
          <span>←</span>
          <span>BACK TO ASSIGNMENTS</span>
        </Link>
      </div>

      {/* 3. Project Title Header (32px bottom border block) */}
      <div className="detail-title-header-block">
        <div className="flex items-center gap-3 mb-4">
          <span className="badge-eyebrow-pink" style={{ fontSize: '0.7rem' }}>
            {project.number} — ASSIGNMENT
          </span>
          <span className="text-xs font-mono font-bold text-[#57534E] uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#171515] mb-3">
          {project.title}
        </h1>

        {project.subTitle && (
          <h2 className="font-heading font-bold text-lg sm:text-xl uppercase tracking-wider text-[#E96F98] mb-4">
            {project.subTitle}
          </h2>
        )}

        <p className="font-body text-base text-[#57534E] max-w-2xl leading-[1.65]">
          {project.shortDescription}
        </p>
      </div>

      {/* =========================================================================
         4. SPECIAL CUSTOM CASE STUDY FOR MOVIE POSTERS (01)
         ========================================================================= */}
      {project.id === 'movie-posters' ? (
        <div>
          {/* Top Section: Structured Project Details (No top hero image) */}
          <div className="flex flex-col gap-8 max-w-3xl my-6">
            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                ABOUT THE PROJECT
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                THE IDEA
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                PROCESS & EXPLORATION
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.process}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-3">
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

          {/* Bottom Section: 3-Column Equal Grid of Poster Explorations (TITLES ALWAYS ABOVE IMAGES) */}
          <div className="detail-major-section-block">
            <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-8 flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-[#E96F98] border border-[#171515] inline-block"></span>
              POSTER EXPLORATIONS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Poster 1 — Title ABOVE image */}
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

              {/* Poster 2 — Title ABOVE image */}
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

              {/* Poster 3 — Title ABOVE image */}
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
           5. SPECIAL CUSTOM CASE STUDY FOR CACTUS (02)
           ========================================================================= */
        <div>
          {/* Project Information Case Study (No top hero image; moves up naturally) */}
          <div className="flex flex-col gap-8 max-w-3xl my-6">
            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                ABOUT THE PROJECT
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                THE IDEA
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                PROCESS & BRAND SYSTEM
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.process}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                MY CONTRIBUTION
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.contribution}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-3">
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

          {/* Project Deliverables Gallery (Titles ABOVE images) */}
          <ProjectGallery items={cactusGalleryDeliverables} title="BRAND SYSTEM & DELIVERABLES" imgClassName="cactus-gallery-img" />
        </div>
      ) : project.id === 'photo-essay' ? (
        /* =========================================================================
           6. SPECIAL CUSTOM CASE STUDY FOR PHOTO ESSAY (03)
           ========================================================================= */
        <div>
          {/* Project Overview */}
          <div className="flex flex-col gap-8 max-w-3xl my-6">
            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                ABOUT THE ESSAY
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                THE CONCEPT
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-3">
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

          {/* Interactive Carousel Viewer (Title/Caption ALWAYS ABOVE image) */}
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

            {/* Active Photograph Flex Carousel: Left Arrow + Image + Right Arrow */}
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
           7. SPECIAL CUSTOM CASE STUDY FOR PYGAME (04)
           ========================================================================= */
        <div>
          <div className="flex flex-col gap-8 max-w-3xl my-6">
            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                ABOUT THE GAME
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                GAMEPLAY MECHANICS
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-3">
                TOOLS & LANGUAGE
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

          {/* Real Playable Sky Hopper Arcade Game Embed */}
          <div className="detail-major-section-block">
            <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-6 flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-[#E96F98] border border-[#171515] inline-block"></span>
              PLAY THE GAME
            </h2>

            <div className="flex flex-col items-center justify-center w-full my-4">
              <div className="sky-hopper-iframe-container shadow-sm">
                <iframe 
                  src={getAssetPath('/games/sky-hopper/index.html')} 
                  title="Sky Hopper Playable Arcade Game" 
                  className="sky-hopper-iframe"
                  allow="autoplay; keyboard"
                />
              </div>
            </div>
          </div>
        </div>
      ) : project.id === 'character-design' ? (
        /* =========================================================================
           8. SPECIAL CUSTOM CASE STUDY FOR CHARACTER DESIGN (05)
           ========================================================================= */
        <div>
          <div className="flex flex-col gap-8 max-w-3xl my-6">
            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                ABOUT LEO
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                CHARACTER CONCEPT
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                DESIGN PROCESS
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.process}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-3">
                TOOLS USED
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="tag-pill-element text-xs py-1 px-3">Canva</span>
                <span className="tag-pill-element text-xs py-1 px-3">Digital Illustration</span>
              </div>
            </div>
          </div>

          {/* FINAL WORK — Centered Full Leo Character Sheet (Title ALWAYS ABOVE image) */}
          <div className="detail-major-section-block">
            <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-8 flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-[#E96F98] border border-[#171515] inline-block"></span>
              FINAL WORK
            </h2>

            <div className="flex flex-col items-center justify-center w-full my-4 gap-2.5">
              <p className="text-xs font-mono font-bold text-[#171515] uppercase tracking-wider text-center">
                LEO THE OVERTHINKING LEOPARD — CHARACTER DESIGN SHEET
              </p>
              <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1 shadow-sm">
                <img 
                  src={getAssetPath('images/assignments/character-design/leo-character-sheet.jpg')} 
                  alt="Leo The Overthinking Leopard Character Design Sheet"
                  className="leo-character-sheet-img"
                />
              </div>
            </div>
          </div>
        </div>
      ) : project.id === 'others' ? (
        /* =========================================================================
           9. SPECIAL CUSTOM CASE STUDY FOR OTHERS (06)
           ========================================================================= */
        <div>
          <div className="flex flex-col gap-8 max-w-3xl my-6">
            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                ABOUT THIS COLLECTION
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs uppercase tracking-widest text-[#171515]">
                CREATIVE EXPLORATION
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-3">
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

          {/* Deliverables Section (Titles ALWAYS rendered ABOVE images) */}
          <div className="detail-major-section-block">
            <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-8 flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-[#E96F98] border border-[#171515] inline-block"></span>
              EDITORIAL & TYPOGRAPHY EXPLORATIONS
            </h2>

            <div className="flex flex-col gap-14">
              {/* Item 1: Magazine Spread (Title ABOVE image) */}
              <div className="flex flex-col gap-3 items-center">
                <div className="pb-1 border-b-1.5 border-[#171515] w-full max-w-[580px]">
                  <p className="text-xs font-mono font-bold text-[#171515] uppercase tracking-wider">
                    EDITORIAL DESIGN — 2-PAGE MAGAZINE SPREAD
                  </p>
                </div>
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-3 shadow-sm flex justify-center items-center w-full max-w-[580px]">
                  <div className="magazine-spread-container">
                    <img 
                      src={getAssetPath('images/assignments/others/magazine-page-1.jpg')} 
                      alt="Magazine Page 01 (Left)"
                      className="magazine-spread-page"
                    />
                    <img 
                      src={getAssetPath('images/assignments/others/magazine-page-2.jpg')} 
                      alt="Magazine Page 02 (Right)"
                      className="magazine-spread-page"
                    />
                  </div>
                </div>
              </div>

              {/* Item 2: Standalone Quote Typography Poster (Title ABOVE image) */}
              <div className="flex flex-col gap-3 items-center">
                <div className="pb-1 border-b-1.5 border-[#171515] w-full max-w-[420px]">
                  <p className="text-xs font-mono font-bold text-[#171515] uppercase tracking-wider">
                    TYPOGRAPHY EXPLORATION — QUOTE POSTER
                  </p>
                </div>
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1.5 shadow-sm">
                  <img 
                    src={getAssetPath('images/assignments/others/quote-typography.png')} 
                    alt="Quote Typography Poster"
                    className="others-standalone-img"
                  />
                </div>
              </div>

              {/* Item 3: Standalone Matcha Typography Poster (Title ABOVE image) */}
              <div className="flex flex-col gap-3 items-center">
                <div className="pb-1 border-b-1.5 border-[#171515] w-full max-w-[420px]">
                  <p className="text-xs font-mono font-bold text-[#171515] uppercase tracking-wider">
                    TYPOGRAPHY EXPLORATION — MATCHA POSTER
                  </p>
                </div>
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1.5 shadow-sm">
                  <img 
                    src={getAssetPath('images/assignments/others/matcha-typography.png')} 
                    alt="Matcha Typography Poster"
                    className="others-standalone-img"
                  />
                </div>
              </div>

              {/* Item 4: Standalone Fleur Magazine Cover (Title ABOVE image) */}
              <div className="flex flex-col gap-3 items-center">
                <div className="pb-1 border-b-1.5 border-[#171515] w-full max-w-[420px]">
                  <p className="text-xs font-mono font-bold text-[#171515] uppercase tracking-wider">
                    EDITORIAL DESIGN — FLEUR MAGAZINE COVER
                  </p>
                </div>
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1.5 shadow-sm">
                  <img 
                    src={getAssetPath('images/assignments/others/magazine-cover.png')} 
                    alt="Fleur Magazine Cover"
                    className="others-standalone-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* =========================================================================
           10. STANDARD CASE STUDY LAYOUT FOR OTHER PROJECTS
           ========================================================================= */
        <div>
          {project.heroImage && (
            <div className="my-8 border-1.5 border-[#171515] bg-[#FAF4EB] p-2 shadow-sm flex items-center justify-center">
              <img 
                src={project.heroImage} 
                alt={`${project.title} Hero Artwork`}
                className="w-full h-auto max-h-[550px] object-contain block mx-auto"
              />
            </div>
          )}

          <div className="flex flex-col gap-6 my-8 max-w-3xl">
            {project.about && (
              <div className="border-l-3 border-[#171515] pl-5">
                <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                  ABOUT THE PROJECT
                </h2>
                <p className="font-body text-sm text-[#171515] leading-relaxed">
                  {project.about}
                </p>
              </div>
            )}

            {project.idea && (
              <div className="border-l-3 border-[#171515] pl-5">
                <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                  THE IDEA
                </h2>
                <p className="font-body text-sm text-[#171515] leading-relaxed">
                  {project.idea}
                </p>
              </div>
            )}

            {project.process && (
              <div className="border-l-3 border-[#171515] pl-5">
                <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                  PROCESS & DEVELOPMENT
                </h2>
                <p className="font-body text-sm text-[#171515] leading-relaxed">
                  {project.process}
                </p>
              </div>
            )}

            {project.tools && project.tools.length > 0 && (
              <div className="border-l-3 border-[#171515] pl-5">
                <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-2">
                  TOOLS USED
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="tag-pill-element text-xs py-1 px-3">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <ProjectGallery items={project.gallery} />
        </div>
      )}

      {/* 11. Bottom PREV / NEXT Navigation Bar */}
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
