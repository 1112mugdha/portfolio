import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import ProjectGallery from '../components/ui/ProjectGallery';
import GameEmbed from '../components/ui/GameEmbed';
import { getAssetPath } from '../utils/assetPath';
import { projectsData } from '../data/projects';

// Direct ES Imports for Assignment Images
import posterSometimes from '/public/images/assignments/movie-posters/poster-03-sometimes.jpg';
import posterFleur from '/public/images/assignments/movie-posters/poster-01-fleur.png';
import posterMatcha from '/public/images/assignments/movie-posters/poster-02-matcha.png';
import magPage1 from '/public/images/assignments/others/magazine-page-1.jpg';
import magPage2 from '/public/images/assignments/others/magazine-page-2.jpg';
import quoteType from '/public/images/assignments/others/quote-typography.png';
import matchaType from '/public/images/assignments/others/matcha-typography.png';
import magCover from '/public/images/assignments/others/magazine-cover.png';
import leoSheet from '/public/images/assignments/character-design/leo-character-sheet.jpg';

// Cactus ES Imports
import cactusSite from '/public/images/assignments/cactus/cactus-site.png';
import cactusBrandboard from '/public/images/assignments/cactus/cactus-brandboard-official.png';
import cactusMood from '/public/images/assignments/cactus/cactus-mood.png';
import cactusPackaging from '/public/images/assignments/cactus/cactus-packaging.png';
import cactusTag from '/public/images/assignments/cactus/cactus-tag.png';
import cactusClothing from '/public/images/assignments/cactus/cactus-clothing.png';

// Photo Essay ES Imports
import photoCover from '/public/images/assignments/photo-essay/photo-essay-01-cover.jpg';
import photoFocus from '/public/images/assignments/photo-essay/photo-essay-02-in-focus.jpg';
import photoShelves from '/public/images/assignments/photo-essay/photo-essay-03-shelves.jpg';
import photoPause from '/public/images/assignments/photo-essay/photo-essay-04-moment-to-pause.jpg';
import photoBreak from '/public/images/assignments/photo-essay/photo-essay-05-midday-break.jpg';
import photoThought from '/public/images/assignments/photo-essay/photo-essay-06-lost-in-thought.jpg';
import photoNight from '/public/images/assignments/photo-essay/photo-essay-07-late-night-focus.jpg';

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
      image: cactusBrandboard
    },
    {
      id: 'website-concept',
      title: 'Website Concept',
      description: 'Applying the Cactus visual identity across digital touchpoints',
      image: cactusSite
    },
    {
      id: 'visual-direction',
      title: 'Visual Direction',
      description: 'Moodboard and visual exploration',
      image: cactusMood
    },
    {
      id: 'packaging',
      title: 'Packaging',
      description: 'Sustainable packaging and product presentation',
      image: cactusPackaging
    },
    {
      id: 'brand-touchpoints',
      title: 'Brand Touchpoints',
      description: 'Product tags and supporting brand details',
      image: cactusTag
    },
    {
      id: 'clothing-application',
      title: 'Clothing Application',
      description: 'Extending the identity onto apparel and fabric',
      image: cactusClothing
    }
  ];

  // Exact 7 Photo Essay photographs in correct order
  const photoEssayDeliverables = [
    {
      id: 1,
      image: photoCover,
      alt: 'Campus Through a Frame by Mugdha Patnaik'
    },
    {
      id: 2,
      image: photoFocus,
      alt: 'In Focus: Focus during lectures.'
    },
    {
      id: 3,
      image: photoShelves,
      alt: 'Shelves of Knowledge: The library; a place for study and growth.'
    },
    {
      id: 4,
      image: photoPause,
      alt: 'A Moment to Pause: A moment of relaxation and personal space.'
    },
    {
      id: 5,
      image: photoBreak,
      alt: 'Midday Break: Social moments at lunch.'
    },
    {
      id: 6,
      image: photoThought,
      alt: 'Lost in Thought: A playful pause in the day.'
    },
    {
      id: 7,
      image: photoNight,
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
      <Breadcrumbs items={[
        { label: 'HOME', path: '/' },
        { label: 'ASSIGNMENTS', path: '/work' },
        { label: project.title }
      ]} />

      {/* Back to Assignments Link */}
      <div className="mt-1 mb-6">
        <Link 
          to="/work" 
          className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-[#171515] hover:text-[#E96F98] transition-colors"
        >
          ← BACK TO ASSIGNMENTS
        </Link>
      </div>

      {/* 2. Global Header Layout Across ALL Assignments */}
      <div className="border-b-1.5 border-[#171515] pb-6 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="badge-eyebrow-pink">
            ASSIGNMENT {project.number}
          </span>
          {project.isGroupProject && (
            <span className="badge-group-project">
              GROUP PROJECT
            </span>
          )}
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl uppercase tracking-tight text-[#171515]">
          {project.title}
        </h1>
        {project.id === 'pygame' && (
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#E96F98] mt-1">
            SKY HOPPER
          </h2>
        )}

        {/* Brief Intro Description directly under title */}
        <p className="font-body text-base text-[#57534E] leading-relaxed mt-4 max-w-2xl">
          {project.shortDescription}
        </p>
      </div>

      {/* =========================================================================
         1. MOVIE POSTERS — COMPACT HERO & GALLERY
         ========================================================================= */}
      {project.id === 'movie-posters' ? (
        <div>
          {/* 2-Column Intro Section */}
          <div className="flex flex-col md:flex-row gap-8 items-start my-8">
            
            {/* LEFT SIDE: Don't Worry Darling Hero Poster (MAX 280px WIDE) */}
            <div className="w-full md:w-[280px] flex-shrink-0 border-1.5 border-[#171515] bg-[#FAF4EB] p-1 shadow-sm">
              <img 
                src={posterSometimes} 
                alt="Don't Worry Darling Poster Hero"
                className="movie-poster-hero-img"
              />
            </div>

            {/* RIGHT SIDE: Text Column Beside Poster */}
            <div className="flex-1 flex flex-col gap-6 max-w-xl">
              <div className="border-l-3 border-[#171515] pl-5">
                <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                  ABOUT THE PROJECT
                </h2>
                <p className="font-body text-sm text-[#171515] leading-relaxed">
                  A collection of poster design explorations created to experiment with typography, composition, visual hierarchy, imagery, and different visual moods. Each poster explores a different approach to communicating an idea through layout and visual storytelling.
                </p>
              </div>

              <div className="border-l-3 border-[#E96F98] pl-5">
                <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                  THE IDEA
                </h2>
                <p className="font-body text-sm text-[#57534E] leading-relaxed">
                  The projects focus on turning simple concepts into visually engaging posters. I experimented with type as a visual element, image placement, colour palettes, scale, and composition to create distinct visual identities for each piece.
                </p>
              </div>

              <div className="border-l-3 border-[#D7F23A] pl-5">
                <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                  PROCESS
                </h2>
                <p className="font-body text-sm text-[#57534E] leading-relaxed">
                  The process involved exploring different layouts, typography combinations, imagery, colour palettes, and compositions before developing the final posters. I focused on creating designs that feel visually strong while still communicating the central idea clearly.
                </p>
              </div>

              <div className="pt-2 border-t border-[#171515]/15">
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] block mb-2">
                  TOOLS USED
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="tag-pill-element text-xs py-1 px-3">Canva</span>
                  <span className="tag-pill-element text-xs py-1 px-3">Adobe Photoshop</span>
                  <span className="tag-pill-element text-xs py-1 px-3">Adobe Illustrator</span>
                </div>
              </div>
            </div>

          </div>

          {/* FINAL WORK GALLERY (Don't Worry Darling, Inside Out, La La Land) */}
          <div className="my-12 pt-8 border-t-1.5 border-[#171515]">
            <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-[#E96F98] border border-[#171515] inline-block"></span>
              FINAL WORK
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start justify-items-center">
              {/* Don't Worry Darling */}
              <div className="flex flex-col gap-2 items-center w-full">
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1 shadow-sm">
                  <img 
                    src={posterSometimes} 
                    alt="Don't Worry Darling Poster"
                    className="movie-poster-gallery-img"
                  />
                </div>
                <p className="text-xs font-mono font-bold text-[#57534E] uppercase tracking-wider mt-1 text-center">
                  DON'T WORRY DARLING
                </p>
              </div>

              {/* Inside Out */}
              <div className="flex flex-col gap-2 items-center w-full">
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1 shadow-sm">
                  <img 
                    src={posterFleur} 
                    alt="Inside Out Poster"
                    className="movie-poster-gallery-img"
                  />
                </div>
                <p className="text-xs font-mono font-bold text-[#57534E] uppercase tracking-wider mt-1 text-center">
                  INSIDE OUT
                </p>
              </div>

              {/* La La Land */}
              <div className="flex flex-col gap-2 items-center w-full">
                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1 shadow-sm">
                  <img 
                    src={posterMatcha} 
                    alt="La La Land Poster"
                    className="movie-poster-gallery-img"
                  />
                </div>
                <p className="text-xs font-mono font-bold text-[#57534E] uppercase tracking-wider mt-1 text-center">
                  LA LA LAND
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : project.id === 'cactus' ? (
        /* =========================================================================
           2. CACTUS — LARGE CENTERED HERO (85-90%) & OVERLAY GALLERY LAYOUT
           ========================================================================= */
        <div>
          {/* Centered Dominant Hero Image (~85–90% Content Width) */}
          <div className="my-10 flex justify-center w-full">
            <div className="w-full md:w-[88%] border-1.5 border-[#171515] bg-[#FAF4EB] p-1 shadow-sm">
              <img 
                src={cactusSite} 
                alt="Cactus Sustainable Clothing Website Concept Hero"
                className="cactus-hero-85-img"
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

            <div className="border-l-3 border-[#E96F98] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                THE IDEA
              </h2>
              <p className="font-body text-sm text-[#57534E] leading-relaxed">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#D7F23A] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                PROCESS
              </h2>
              <p className="font-body text-sm text-[#57534E] leading-relaxed">
                {project.process}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                FINAL WORK
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.finalWork}
              </p>
            </div>

            <div className="border-l-3 border-[#E96F98] pl-5 bg-[#FAF0F4] py-3 pr-4">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1">
                MY CONTRIBUTION
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed font-medium">
                {project.contribution}
              </p>
            </div>

            <div className="pt-2 border-t border-[#171515]/15">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] block mb-2">
                TOOLS USED
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="tag-pill-element text-xs py-1 px-3">CANVA</span>
                <span className="tag-pill-element text-xs py-1 px-3">ADOBE ILLUSTRATOR</span>
                <span className="tag-pill-element text-xs py-1 px-3">ADOBE PHOTOSHOP</span>
              </div>
            </div>
          </div>

          {/* EDITORIAL GALLERY WITH OVERLAY TITLES & DESCRIPTIONS ON TOP OF IMAGES */}
          <div className="my-14 pt-8 border-t-1.5 border-[#171515]">
            <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-[#E96F98] border border-[#171515] inline-block"></span>
              BRANDING CASE STUDY & DELIVERABLES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-items-center">
              {cactusGalleryDeliverables.map((item) => (
                <div 
                  key={item.id} 
                  className="relative w-full max-w-[440px] border-1.5 border-[#171515] bg-[#FAF4EB] p-1 shadow-sm overflow-hidden group"
                >
                  {/* Overlaid Title & Description Box ON TOP of the image */}
                  <div className="absolute top-3 left-3 right-3 z-10 bg-[#171515]/90 text-[#F7F3EA] p-3 border border-[#171515] shadow-md backdrop-blur-sm">
                    <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#F7F3EA] mb-0.5">
                      {item.title}
                    </h3>
                    <p className="font-body text-[0.725rem] text-[#F7F3EA]/90 leading-snug">
                      {item.description}
                    </p>
                  </div>

                  {/* Image Element */}
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="cactus-gallery-overlay-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : project.id === 'photo-essay' ? (
        /* =========================================================================
           3. PHOTO ESSAY — INSTAGRAM-STYLE HORIZONTAL CAROUSEL / SLIDESHOW
           ========================================================================= */
        <div>
          {/* Project Information */}
          <div className="flex flex-col gap-6 my-8 max-w-3xl">
            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                ABOUT THE PROJECT
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#E96F98] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                THE IDEA
              </h2>
              <p className="font-body text-sm text-[#57534E] leading-relaxed">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#D7F23A] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                PROCESS
              </h2>
              <p className="font-body text-sm text-[#57534E] leading-relaxed">
                {project.process}
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                FINAL WORK
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                {project.finalWork}
              </p>
            </div>

            <div className="pt-2 border-t border-[#171515]/15">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] block mb-2">
                TOOLS USED
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="tag-pill-element text-xs py-1 px-3">DIGITAL PHOTOGRAPHY</span>
                <span className="tag-pill-element text-xs py-1 px-3">ADOBE LIGHTROOM</span>
              </div>
            </div>
          </div>

          {/* INSTAGRAM-STYLE HORIZONTAL PHOTO VIEWER / CAROUSEL */}
          <div className="my-12 pt-8 border-t-1.5 border-[#171515]">
            <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-[#E96F98] border border-[#171515] inline-block"></span>
              PHOTO ESSAY SLIDESHOW
            </h2>

            <div className="photo-carousel-container flex flex-col items-center">
              
              {/* Single Image Display Area with Left & Right Arrow Controls */}
              <div className="relative w-full flex items-center justify-center bg-[#FAF4EB] border-1.5 border-[#171515] p-2 shadow-sm min-h-[380px] sm:min-h-[440px]">
                
                {/* Left Previous Button */}
                <button 
                  onClick={prevPhoto}
                  className="absolute left-3 z-20 bg-[#171515] text-[#F7F3EA] hover:bg-[#E96F98] hover:text-[#171515] transition-colors py-2 px-3 font-heading font-bold text-xs uppercase tracking-wider border border-[#171515] shadow-md flex items-center gap-1 cursor-pointer"
                  aria-label="Previous photograph"
                >
                  <span>←</span>
                  <span className="hidden sm:inline">PREVIOUS</span>
                </button>

                {/* Displayed Photograph — EXACTLY ONE AT A TIME */}
                <div className="w-full flex justify-center items-center overflow-hidden">
                  <img 
                    key={photoEssayDeliverables[photoIndex].id}
                    src={photoEssayDeliverables[photoIndex].image} 
                    alt={photoEssayDeliverables[photoIndex].alt}
                    className="photo-carousel-img transition-opacity duration-300 ease-in-out"
                  />
                </div>

                {/* Right Next Button */}
                <button 
                  onClick={nextPhoto}
                  className="absolute right-3 z-20 bg-[#171515] text-[#F7F3EA] hover:bg-[#E96F98] hover:text-[#171515] transition-colors py-2 px-3 font-heading font-bold text-xs uppercase tracking-wider border border-[#171515] shadow-md flex items-center gap-1 cursor-pointer"
                  aria-label="Next photograph"
                >
                  <span className="hidden sm:inline">NEXT</span>
                  <span>→</span>
                </button>

              </div>

              {/* Counter & Slide Indicator Bar */}
              <div className="mt-4 flex items-center justify-between w-full max-w-[680px] px-2 font-mono text-xs font-bold text-[#171515]">
                <span className="bg-[#E96F98] px-3 py-1 border border-[#171515]">
                  {String(photoIndex + 1).padStart(2, '0')} / 07
                </span>
                
                <div className="flex gap-1.5">
                  {photoEssayDeliverables.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setPhotoIndex(idx)}
                      className={`w-3 h-3 border border-[#171515] transition-colors ${
                        idx === photoIndex ? 'bg-[#171515]' : 'bg-[#FAF4EB] hover:bg-[#D7F23A]'
                      }`}
                      aria-label={`Go to photograph ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      ) : project.id === 'pygame' ? (
        /* =========================================================================
           4. PYGAME — BALANCED 2-COLUMN & SHORTER PLAYABLE GAME LAYOUT
           ========================================================================= */
        <div>
          {/* TOP 2-COLUMN INTRO SECTION (ABOUT & IDEA SIDE-BY-SIDE) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="border-l-3 border-[#171515] pl-4">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                ABOUT THE PROJECT
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                A 2D arcade-style game developed using Python and Pygame, exploring basic game mechanics, player movement, collision detection, scoring, and interactive game states.
              </p>
            </div>

            <div className="border-l-3 border-[#E96F98] pl-4">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                THE IDEA
              </h2>
              <p className="font-body text-sm text-[#57534E] leading-relaxed">
                A simple arcade game where the player controls a bird navigating through moving pipes while trying to achieve the highest possible score.
              </p>
            </div>
          </div>

          {/* PLAYABLE GAME FRAME — COMPACT 380–420PX HEIGHT */}
          <div className="my-8 pt-4 border-t border-[#171515]/15 flex flex-col items-center">
            <p className="font-mono text-[0.7rem] font-bold text-[#57534E] mb-3 uppercase tracking-wider text-center">
              CONTROLS: <span className="bg-[#D7F23A] px-1.5 py-0.5 border border-[#171515] text-[#171515]">SPACE</span> = START / JUMP &nbsp;|&nbsp; <span className="bg-[#E96F98] px-1.5 py-0.5 border border-[#171515] text-[#171515]">R</span> = RESTART
            </p>

            {/* Centered Shorter Game Frame (335px * 402px) */}
            <div className="sky-hopper-iframe-container">
              <iframe 
                src="/games/sky-hopper/index.html" 
                title="Sky Hopper Playable Pygame Game"
                className="sky-hopper-iframe"
                scrolling="no"
              />
            </div>
          </div>

          {/* BOTTOM 2-COLUMN DETAILS SECTION (FEATURES & PROCESS SIDE-BY-SIDE) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 pt-6 border-t border-[#171515]/15 items-start">
            {/* LEFT: FEATURES */}
            <div className="border-l-3 border-[#D7F23A] pl-4 bg-[#FAF4EB] p-3 border border-[#171515]">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-2">
                FEATURES
              </h2>
              <ul className="list-disc list-inside font-body text-xs text-[#171515] space-y-1 leading-snug">
                <li>Player-controlled jumping</li>
                <li>Gravity-based movement</li>
                <li>Moving obstacles</li>
                <li>Collision detection</li>
                <li>Score tracking</li>
                <li>Start screen</li>
                <li>Game-over state</li>
                <li>Restart functionality</li>
                <li>Moving clouds and a simple illustrated game environment</li>
              </ul>
            </div>

            {/* RIGHT: PROCESS & TOOLS */}
            <div className="flex flex-col gap-6">
              <div className="border-l-3 border-[#171515] pl-4">
                <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                  PROCESS
                </h2>
                <p className="font-body text-sm text-[#57534E] leading-relaxed">
                  I developed the game by building the player movement and gravity system first, then adding the pipe obstacles, collision detection, scoring system, game states, and visual elements.
                </p>
              </div>

              <div className="pt-2 border-t border-[#171515]/15">
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] block mb-2">
                  TOOLS USED
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="tag-pill-element text-xs py-1 px-3">PYTHON</span>
                  <span className="tag-pill-element text-xs py-1 px-3">PYGAME</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : project.id === 'others' ? (
        /* =========================================================================
           5. ASSIGNMENT 06 — OTHERS CREATIVE EXPERIMENTS CASE STUDY
           ========================================================================= */
        <div>
          {/* Project Information */}
          <div className="flex flex-col gap-6 my-8 max-w-3xl">
            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                ABOUT THE PROJECT
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                A collection of miscellaneous course assignments and creative experiments.
              </p>
            </div>

            <div className="border-l-3 border-[#E96F98] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                THE IDEA
              </h2>
              <p className="font-body text-sm text-[#57534E] leading-relaxed">
                Exploring diverse mediums, visual briefs, and hands-on exercises.
              </p>
            </div>

            <div className="border-l-3 border-[#D7F23A] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                PROCESS
              </h2>
              <p className="font-body text-sm text-[#57534E] leading-relaxed">
                Iterative experimentation across print, digital, and interactive formats.
              </p>
            </div>

            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                FINAL WORK
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                A collection of experimental creative outputs across typography, editorial design, and visual composition.
              </p>
            </div>

            <div className="pt-2 border-t border-[#171515]/15">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] block mb-2">
                TOOLS USED
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="tag-pill-element text-xs py-1 px-3">CANVA</span>
                <span className="tag-pill-element text-xs py-1 px-3">ADOBE ILLUSTRATOR</span>
                <span className="tag-pill-element text-xs py-1 px-3">ADOBE PHOTOSHOP</span>
              </div>
            </div>
          </div>

          {/* OTHERS CREATIVE WORKS GALLERY */}
          <div className="my-14 pt-8 border-t-1.5 border-[#171515]">
            <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-10 flex items-center gap-3">
              <span className="w-3 h-3 bg-[#E96F98] border border-[#171515] inline-block"></span>
              CREATIVE EXPERIMENTS & DELIVERABLES
            </h2>

            <div className="flex flex-col gap-14 items-center">
              
              {/* WORK 1: MAGAZINE SPREAD (Strict 2-Page Horizontal Open Magazine Layout) */}
              <div className="w-full flex flex-col items-center gap-3">
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] bg-[#FAF0F4] px-3 py-1 border border-[#171515]">
                  MAGAZINE SPREAD
                </span>

                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-3 shadow-sm flex justify-center items-center w-full max-w-[580px]">
                  <div className="magazine-spread-container">
                    <img 
                      src={magPage1} 
                      alt="Magazine Page 01 (Left)"
                      className="magazine-spread-page"
                    />
                    <img 
                      src={magPage2} 
                      alt="Magazine Page 02 (Right)"
                      className="magazine-spread-page"
                    />
                  </div>
                </div>
              </div>

              {/* WORK 2: QUOTE TYPOGRAPHY */}
              <div className="w-full flex flex-col items-center gap-3">
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] bg-[#FAF0F4] px-3 py-1 border border-[#171515]">
                  QUOTE TYPOGRAPHY
                </span>

                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1.5 shadow-sm">
                  <img 
                    src={quoteType} 
                    alt="Quote Typography Poster"
                    className="others-standalone-img"
                  />
                </div>
              </div>

              {/* WORK 3: MATCHA TYPOGRAPHY */}
              <div className="w-full flex flex-col items-center gap-3">
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] bg-[#FAF0F4] px-3 py-1 border border-[#171515]">
                  MATCHA TYPOGRAPHY
                </span>

                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1.5 shadow-sm">
                  <img 
                    src={matchaType} 
                    alt="Matcha Typography Poster"
                    className="others-standalone-img"
                  />
                </div>
              </div>

              {/* WORK 4: MAGAZINE COVER */}
              <div className="w-full flex flex-col items-center gap-3">
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] bg-[#FAF0F4] px-3 py-1 border border-[#171515]">
                  MAGAZINE COVER
                </span>

                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-1.5 shadow-sm">
                  <img 
                    src={magCover} 
                    alt="Fleur Magazine Cover"
                    className="others-standalone-img"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      ) : project.id === 'character-design' ? (
        /* =========================================================================
           6. CHARACTER DESIGN — NO TOP HERO IMAGE, TEXT-FIRST & MAX 600PX BOTTOM SHEET
           ========================================================================= */
        <div>
          {/* Clean Text-Focused Introduction (Immediately Below Title) */}
          <div className="flex flex-col gap-6 my-8 max-w-2xl">
            <div className="border-l-3 border-[#171515] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                ABOUT THE PROJECT
              </h2>
              <p className="font-body text-sm text-[#171515] leading-relaxed">
                Leo is an original character created as an exploration of personality-driven character design. He is an overthinking, slightly stressed leopard who copes with life through food. His chubby appearance, messy details, expressions, and snack-filled backpack were designed to reflect his personality.
              </p>
            </div>

            <div className="border-l-3 border-[#E96F98] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                THE IDEA
              </h2>
              <p className="font-body text-sm text-[#57534E] leading-relaxed">
                The character was built around the idea of an anxious overthinker who is usually caught in his own thoughts. His love for snacks became an important part of his personality and visual identity, helping make him feel more relatable, humorous, and recognisable.
              </p>
            </div>

            <div className="border-l-3 border-[#D7F23A] pl-5">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-1.5">
                PROCESS
              </h2>
              <p className="font-body text-sm text-[#57534E] leading-relaxed">
                The project began with initial character sketches and silhouette explorations before developing Leo's appearance and personality. I explored different poses, expressions, proportions, clothing, props, and small details such as his backpack and snacks to build a consistent character.
              </p>
            </div>

            <div className="pt-2 border-t border-[#171515]/15">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] block mb-2">
                TOOLS USED
              </span>
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
                  src={leoSheet} 
                  alt="Leo The Overthinking Leopard Character Design Sheet"
                  className="leo-character-sheet-img"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* =========================================================================
           7. STANDARD CASE STUDY LAYOUT FOR OTHER PROJECTS
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

          {project.isGameProject && project.gameEmbed && (
            <GameEmbed gameConfig={project.gameEmbed} />
          )}

          <div className="flex flex-col gap-10 my-12 py-4">
            <div className="border-l-3 border-[#171515] pl-6">
              <h2 className="font-heading font-bold text-lg uppercase tracking-wider text-[#171515] mb-2">
                ABOUT THE PROJECT
              </h2>
              <p className="font-body text-base text-[#171515] leading-relaxed">
                {project.about}
              </p>
            </div>

            <div className="border-l-3 border-[#E96F98] pl-6">
              <h2 className="font-heading font-bold text-lg uppercase tracking-wider text-[#171515] mb-2">
                THE IDEA
              </h2>
              <p className="font-body text-base text-[#57534E] leading-relaxed">
                {project.idea}
              </p>
            </div>

            <div className="border-l-3 border-[#D7F23A] pl-6">
              <h2 className="font-heading font-bold text-lg uppercase tracking-wider text-[#171515] mb-2">
                PROCESS
              </h2>
              <p className="font-body text-base text-[#57534E] leading-relaxed">
                {project.process}
              </p>
            </div>

            {project.whatILearned && (
              <div className="border-l-3 border-[#171515] pl-6">
                <h2 className="font-heading font-bold text-lg uppercase tracking-wider text-[#171515] mb-2">
                  WHAT I LEARNED
                </h2>
                <p className="font-body text-base text-[#57534E] leading-relaxed">
                  {project.whatILearned}
                </p>
              </div>
            )}

            <div className="border-l-3 border-[#171515] pl-6">
              <h2 className="font-heading font-bold text-lg uppercase tracking-wider text-[#171515] mb-2">
                FINAL WORK
              </h2>
              <p className="font-body text-base text-[#171515] leading-relaxed">
                {project.finalWork}
              </p>
            </div>

            {project.tools && project.tools.length > 0 && (
              <div className="pt-4 border-t border-[#171515]/15">
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] block mb-3">
                  TOOLS USED
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="tag-pill-element text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <ProjectGallery items={project.gallery} title="PROJECT GALLERY & DELIVERABLES" />
          )}
        </div>
      )}

      {/* =========================================================================
         CLEAN & SPACIOUS PREVIOUS / NEXT NAVIGATION ROW AT THE BOTTOM
         ========================================================================= */}
      <div className="mt-20 pt-10 pb-12 border-t-1.5 border-[#171515] flex flex-row items-center justify-between gap-8 font-heading font-bold text-xs uppercase tracking-widest text-[#171515] w-full">
        <div>
          {prevProject ? (
            <Link 
              to={`/work/${prevProject.id}`}
              className="group flex items-center gap-2 text-[#171515] hover:text-[#E96F98] transition-colors"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              <span>PREVIOUS: {prevProject.title}</span>
            </Link>
          ) : null}
        </div>

        <div>
          {nextProject ? (
            <Link 
              to={`/work/${nextProject.id}`}
              className="group flex items-center gap-2 text-[#171515] hover:text-[#E96F98] transition-colors text-right"
            >
              <span>NEXT: {nextProject.title}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ) : null}
        </div>
      </div>

    </div>
  );
}
