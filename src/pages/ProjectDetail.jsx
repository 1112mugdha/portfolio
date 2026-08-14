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

      {/* 2. Top Header Navigation (Back to Assignments Only) */}
      <div className="flex items-center justify-between py-4 mb-6 border-b-1.5 border-[#171515]">
        <Link to="/#assignments" className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#171515] uppercase tracking-wider hover:opacity-75 transition-opacity">
          <span>←</span>
          <span>BACK TO ASSIGNMENTS</span>
        </Link>
      </div>

      {/* 3. Project Title Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="badge-eyebrow-pink" style={{ fontSize: '0.7rem' }}>
            {project.number} — ASSIGNMENT
          </span>
          <span className="text-xs font-mono font-bold text-[#57534E] uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#171515] mb-2">
          {project.title}
        </h1>

        {project.subTitle && (
          <h2 className="font-heading font-bold text-lg sm:text-xl uppercase tracking-wider text-[#E96F98] mb-3">
            {project.subTitle}
          </h2>
        )}

        <p className="font-body text-base text-[#57534E] max-w-2xl mt-2">
          {project.shortDescription}
        </p>
      </div>

      {/* =========================================================================
         4. SPECIAL CUSTOM CASE STUDY FOR MOVIE POSTERS (01)
         ========================================================================= */}
      {project.id === 'movie-posters' ? (
        <div>
          {/* Top Section: Hero Image Left + Details Right */}
          <div className="flex flex-col md:flex-row gap-8 items-start my-8">
            {/* LEFT SIDE: Don't Worry Darling Hero Poster (MAX 280px WIDE) */}
            <div className="w-full md:w-[280px] flex-shrink-0 border-1.5 border-[#171515] bg-[#FAF4EB] p-1 shadow-sm">
              <img 
                src={getAssetPath('images/assignments/movie-posters/poster-03-sometimes.jpg')} 
                alt="Don't Worry Darling Poster Hero"
                className="movie-poster-hero-img"
              />
            </div>

            {/* RIGHT SIDE: Structured Project Details */}
            <div className="flex-1 flex flex-col gap-6">
              <div>
                <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                  ABOUT THE PROJECT
                </h2>
                <p className="font-body text-sm text-[#171515] leading-relaxed">
                  {project.about}
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                  THE IDEA
                </h2>
                <p className="font-body text-sm text-[#171515] leading-relaxed">
                  {project.idea}
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                  PROCESS & EXPLORATION
                </h2>
                <p className="font-body text-sm text-[#171515] leading-relaxed">
                  {project.process}
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-2">
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
          </div>

          {/* Bottom Section: 3-Column Equal Grid of Poster Explorations */}
          <div className="my-12 pt-8 border-t-1.5 border-[#171515]">
            <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-[#E96F98] border border-[#171515] inline-block"></span>
              POSTER EXPLORATIONS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Poster 1 */}
              <div className="flex flex-col gap-2 items-center w-full">
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1 shadow-sm">
                  <img 
                    src={getAssetPath('images/assignments/movie-posters/poster-03-sometimes.jpg')} 
                    alt="Don't Worry Darling Poster"
                    className="movie-poster-gallery-img"
                  />
                </div>
                <p className="text-xs font-mono font-bold text-[#171515] uppercase tracking-wider mt-1">
                  DON'T WORRY DARLING
                </p>
              </div>

              {/* Poster 2 */}
              <div className="flex flex-col gap-2 items-center w-full">
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1 shadow-sm">
                  <img 
                    src={getAssetPath('images/assignments/movie-posters/poster-01-fleur.png')} 
                    alt="Inside Out Poster"
                    className="movie-poster-gallery-img"
                  />
                </div>
                <p className="text-xs font-mono font-bold text-[#171515] uppercase tracking-wider mt-1">
                  INSIDE OUT
                </p>
              </div>

              {/* Poster 3 */}
              <div className="flex flex-col gap-2 items-center w-full">
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1 shadow-sm">
                  <img 
                    src={getAssetPath('images/assignments/movie-posters/poster-02-matcha.png')} 
                    alt="La La Land Poster"
                    className="movie-poster-gallery-img"
                  />
                </div>
                <p className="text-xs font-mono font-bold text-[#171515] uppercase tracking-wider mt-1">
                  LA LA LAND
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : project.id === 'cactus' ? (
        /* =========================================================================
           5. SPECIAL CUSTOM CASE STUDY FOR CACTUS (02)
           ========================================================================= */
        <div>
          {/* Centered Dominant Hero Image (~85–90% Content Width) */}
          <div className="my-10 flex justify-center w-full">
            <div className="w-full md:w-[88%] border-1.5 border-[#171515] bg-[#FAF4EB] p-1 shadow-sm flex items-center justify-center">
              <img 
                src={getAssetPath('images/assignments/cactus/cactus-site.png')} 
                alt="Cactus Sustainable Clothing Website Concept Hero"
                className="cactus-hero-85-img"
                style={{ maxHeight: '58vh', objectFit: 'contain', width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Project Information Case Study */}
          <div className="flex flex-col gap-6 my-10 max-w-3xl">
            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                ABOUT THE PROJECT
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                THE IDEA
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                PROCESS & BRAND SYSTEM
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.process}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                MY CONTRIBUTION
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.contribution}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-2">
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
           6. SPECIAL CUSTOM CASE STUDY FOR PHOTO ESSAY (03)
           ========================================================================= */
        <div>
          {/* Project Overview */}
          <div className="flex flex-col gap-6 my-8 max-w-3xl">
            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                ABOUT THE ESSAY
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                THE CONCEPT
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-2">
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
          <div className="my-10 pt-8 border-t-1.5 border-[#171515]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] flex items-center gap-3">
                <span className="w-3 h-3 bg-[#E96F98] border border-[#171515] inline-block"></span>
                PHOTO SEQUENTIAL GALLERY
              </h2>
              <span className="font-mono text-xs font-bold text-[#57534E]">
                {photoIndex + 1} / {photoEssayDeliverables.length}
              </span>
            </div>

            {/* Active Photograph Slide Frame */}
            <div className="relative border-1.5 border-[#171515] bg-[#FAF4EB] p-2 shadow-sm flex flex-col items-center">
              <img 
                src={photoEssayDeliverables[photoIndex].image} 
                alt={photoEssayDeliverables[photoIndex].alt}
                className="w-full h-auto max-h-[75vh] object-contain block mx-auto"
                style={{ maxHeight: '75vh', objectFit: 'contain', width: '100%', height: 'auto' }}
              />

              {/* Caption Bar */}
              <div className="w-full mt-3 pt-3 border-t border-[#171515]/20 text-center px-2">
                <p className="font-mono text-xs font-bold text-[#171515] uppercase tracking-wider">
                  {photoEssayDeliverables[photoIndex].alt}
                </p>
              </div>

              {/* Centered Large Navigation Bar */}
              <div className="flex justify-center items-center gap-8 sm:gap-12 w-full mt-6 mb-2">
                <button 
                  onClick={prevPhoto}
                  className="px-6 py-2.5 border-1.5 border-[#171515] bg-[#D7F23A] hover:bg-[#E96F98] text-[#171515] font-mono font-bold text-sm tracking-wider transition-all shadow-sm cursor-pointer active:translate-y-0.5"
                  aria-label="Previous photograph"
                >
                  ← PREV
                </button>
                <button 
                  onClick={nextPhoto}
                  className="px-6 py-2.5 border-1.5 border-[#171515] bg-[#D7F23A] hover:bg-[#E96F98] text-[#171515] font-mono font-bold text-sm tracking-wider transition-all shadow-sm cursor-pointer active:translate-y-0.5"
                  aria-label="Next photograph"
                >
                  NEXT →
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : project.id === 'pygame' ? (
        /* =========================================================================
           7. SPECIAL CUSTOM CASE STUDY FOR PYGAME (04)
           ========================================================================= */
        <div>
          <div className="flex flex-col gap-6 my-8 max-w-3xl">
            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                ABOUT THE GAME
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                GAMEPLAY MECHANICS
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-2">
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

          {/* Interactive Playable Game Embed */}
          <GameEmbed gameSrc={project.gameEmbed?.src} title="SKY HOPPER — PLAYABLE GAME DEMO" />
        </div>
      ) : project.id === 'character-design' ? (
        /* =========================================================================
           8. SPECIAL CUSTOM CASE STUDY FOR CHARACTER DESIGN (05)
           ========================================================================= */
        <div>
          <div className="flex flex-col gap-6 my-8 max-w-3xl">
            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                ABOUT LEO
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                CHARACTER CONCEPT
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                DESIGN PROCESS
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.process}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-2">
                TOOLS USED
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="tag-pill-element text-xs py-1 px-3">Canva</span>
                <span className="tag-pill-element text-xs py-1 px-3">Digital Illustration</span>
              </div>
            </div>
          </div>

          {/* FINAL WORK — Centered Full Leo Character Sheet (MAX 600PX WIDE) */}
          <div className="my-12 pt-8 border-t-1.5 border-[#171515]">
            <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-[#E96F98] border border-[#171515] inline-block"></span>
              FINAL WORK
            </h2>

            <div className="flex justify-center w-full my-6">
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
          <div className="flex flex-col gap-6 my-8 max-w-3xl">
            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                ABOUT THIS COLLECTION
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                CREATIVE EXPLORATION
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-2">
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

          {/* Deliverables Section */}
          <div className="my-12 pt-8 border-t-1.5 border-[#171515]">
            <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-[#E96F98] border border-[#171515] inline-block"></span>
              EDITORIAL & TYPOGRAPHY EXPLORATIONS
            </h2>

            <div className="flex flex-col gap-12">
              {/* Item 1: Magazine Spread (Horizontal 2-Page Spread) */}
              <div className="flex flex-col gap-3 items-center">
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
                <p className="text-xs font-mono font-bold text-[#171515] uppercase tracking-wider">
                  EDITORIAL DESIGN — 2-PAGE MAGAZINE SPREAD
                </p>
              </div>

              {/* Item 2: Standalone Quote Typography Poster */}
              <div className="flex flex-col gap-3 items-center">
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1.5 shadow-sm">
                  <img 
                    src={getAssetPath('images/assignments/others/quote-typography.png')} 
                    alt="Quote Typography Poster"
                    className="others-standalone-img"
                  />
                </div>
                <p className="text-xs font-mono font-bold text-[#171515] uppercase tracking-wider">
                  TYPOGRAPHY EXPLORATION — QUOTE POSTER
                </p>
              </div>

              {/* Item 3: Standalone Matcha Typography Poster */}
              <div className="flex flex-col gap-3 items-center">
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1.5 shadow-sm">
                  <img 
                    src={getAssetPath('images/assignments/others/matcha-typography.png')} 
                    alt="Matcha Typography Poster"
                    className="others-standalone-img"
                  />
                </div>
                <p className="text-xs font-mono font-bold text-[#171515] uppercase tracking-wider">
                  TYPOGRAPHY EXPLORATION — MATCHA POSTER
                </p>
              </div>

              {/* Item 4: Standalone Fleur Magazine Cover */}
              <div className="flex flex-col gap-3 items-center">
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1.5 shadow-sm">
                  <img 
                    src={getAssetPath('images/assignments/others/magazine-cover.png')} 
                    alt="Fleur Magazine Cover"
                    className="others-standalone-img"
                  />
                </div>
                <p className="text-xs font-mono font-bold text-[#171515] uppercase tracking-wider">
                  EDITORIAL DESIGN — FLEUR MAGAZINE COVER
                </p>
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
