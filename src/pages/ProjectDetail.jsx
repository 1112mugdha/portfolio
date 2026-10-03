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

  // Exact 6 Cactus gallery deliverables matching files on disk in public/images/assignments/cactus/
  const cactusGalleryDeliverables = [
    {
      id: 'brand-identity',
      title: '01 — BRAND IDENTITY',
      description: 'Logo, brand mark, colour palette and typography',
      image: getAssetPath('images/assignments/cactus/cactus-brandboard-official.png')
    },
    {
      id: 'website-concept',
      title: '02 — WEBSITE CONCEPT',
      description: 'Applying the Cactus visual identity across digital touchpoints',
      image: getAssetPath('images/assignments/cactus/cactus-site.png')
    },
    {
      id: 'visual-direction',
      title: '03 — VISUAL DIRECTION',
      description: 'Moodboard and visual exploration',
      image: getAssetPath('images/assignments/cactus/cactus-mood.png')
    },
    {
      id: 'packaging',
      title: '04 — PACKAGING',
      description: 'Sustainable packaging and product presentation',
      image: getAssetPath('images/assignments/cactus/cactus-packaging.png')
    },
    {
      id: 'brand-touchpoints',
      title: '05 — BRAND TOUCHPOINTS',
      description: 'Product tags and supporting brand details',
      image: getAssetPath('images/assignments/cactus/cactus-tag.png')
    },
    {
      id: 'clothing-application',
      title: '06 — CLOTHING APPLICATION',
      description: 'Extending the identity onto apparel and fabric',
      image: getAssetPath('images/assignments/cactus/cactus-clothing.png')
    }
  ];

  // Movie Posters deliverables for sequential gallery format
  const moviePostersDeliverables = [
    {
      id: 'poster-dont-worry-darling',
      title: '01 — DON\'T WORRY DARLING',
      description: 'A minimalist poster design exploring vintage colors and retro-thriller typography.',
      image: getAssetPath('images/assignments/movie-posters/poster-03-sometimes.jpg')
    },
    {
      id: 'poster-inside-out',
      title: '02 — INSIDE OUT',
      description: 'A botanical typographic poster design inspired by emotional color harmonies.',
      image: getAssetPath('images/assignments/movie-posters/poster-01-fleur.png')
    },
    {
      id: 'poster-la-la-land',
      title: '03 — LA LA LAND',
      description: 'A graphic film poster design featuring matcha green and soft pastel hues.',
      image: getAssetPath('images/assignments/movie-posters/poster-02-matcha.png')
    }
  ];

  // Miscellaneous Collection deliverables for sequential gallery format
  const miscCollectionDeliverables = [
    {
      id: 'magazine-cover',
      title: '01 — MAGAZINE COVER',
      description: 'A magazine cover design exploring editorial typography and visual hierarchy.',
      image: getAssetPath('images/assignments/others/magazine-cover.png')
    },
    {
      id: 'editorial-magazine-spread',
      title: '02 — EDITORIAL MAGAZINE SPREAD',
      description: 'An open magazine spread featuring typography and editorial layout.',
      image: getAssetPath('images/assignments/others/magazine-page-1.jpg'),
      secondImage: getAssetPath('images/assignments/others/magazine-page-2.jpg'),
      isSpread: true
    },
    {
      id: 'creative-typography-poster',
      title: '03 — CREATIVE TYPOGRAPHY POSTER',
      description: 'A standalone poster exploring expressive typography and composition.',
      image: getAssetPath('images/assignments/others/matcha-typography.png')
    },
    {
      id: 'typography-experiment',
      title: '04 — TYPOGRAPHY EXPERIMENT',
      description: 'An experimental typography composition exploring scale, layout, and visual rhythm.',
      image: getAssetPath('images/assignments/others/quote-typography.png')
    }
  ];

  // Exact Photo Essay photograph deliverables matching files on disk in public/images/assignments/photo-essay/
  const photoEssayDeliverables = [
    {
      id: 'photo-01',
      image: getAssetPath('images/assignments/photo-essay/photo-essay-01-cover.jpg'),
      alt: 'CAMPUS THROUGH A FRAME: Cover photograph.'
    },
    {
      id: 'photo-02',
      image: getAssetPath('images/assignments/photo-essay/photo-essay-02-in-focus.jpg'),
      alt: 'In Focus: Focus during lectures.'
    },
    {
      id: 'photo-03',
      image: getAssetPath('images/assignments/photo-essay/photo-essay-03-shelves.jpg'),
      alt: 'Shelves of Knowledge: The library; a place for study and growth.'
    },
    {
      id: 'photo-04',
      image: getAssetPath('images/assignments/photo-essay/photo-essay-04-moment-to-pause.jpg'),
      alt: 'A Moment to Pause: A moment of relaxation and personal space.'
    },
    {
      id: 'photo-05',
      image: getAssetPath('images/assignments/photo-essay/photo-essay-05-midday-break.jpg'),
      alt: 'Midday Break: Social moments at lunch.'
    },
    {
      id: 'photo-06',
      image: getAssetPath('images/assignments/photo-essay/photo-essay-06-lost-in-thought.jpg'),
      alt: 'Lost in Thought: A playful pause in the day.'
    },
    {
      id: 'photo-07',
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
         3. SPECIAL CUSTOM CASE STUDY FOR IN THE MAKING (02)
         ========================================================================= */}
      {project.id === 'in-the-making' ? (
        <div>
          {/* Important Concept Disclaimer Box */}
          <div className="mb-8 p-5 bg-[#FAF4EB] border-1.5 border-[#171515] shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-[#E96F98] border border-[#171515] inline-block"></span>
              <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                CONCEPT & EXPERIENCE DESIGN PROJECT
              </h3>
            </div>
            <p className="font-body text-sm text-[#171515] leading-relaxed">
              <strong>Note:</strong> <em>In The Making</em> is an original concept and experience design project for an augmented reality (AR) cooking assistant. The videos and media presented below are <strong>AI-generated visualizations and visual prototypes</strong> created to explore and communicate how the interaction flow and spatial experience could look and feel in action — they are not recordings of an implemented or functional AR software system.
            </p>
          </div>

          {/* Top Section: Structured Project Details */}
          <div className="flex flex-col gap-8 max-w-4xl my-6">
            {/* About the Project */}
            <div className="exp-about-block border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                ABOUT THE PROJECT
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515] mb-3">
                Recipes often tell people things like <em>“cook until golden brown,”</em> <em>“knead until smooth,”</em> or <em>“whisk until pale and fluffy.”</em> For beginner and intermediate cooks, <strong>“until”</strong> is often a guess. Without visual reference points, it is easy to undercook, burn, or lose confidence during preparation.
              </p>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                <strong>In The Making</strong> is a concept for an AR cooking assistant that turns vague recipe instructions into clear, step-by-step visual targets. By providing spatial reference cues directly over ingredients and cookware, it eliminates guesswork and makes cooking an intuitive learning experience.
              </p>
            </div>

            {/* The Idea & Concept */}
            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                THE CORE CONCEPT
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515]">
                Instead of requiring users to look back and forth between a phone screen or cookbook, the AR system projects contextual guidance directly into the user’s field of vision. It provides real-time visual comparisons—showing what the food should look like at each key stage—giving cooks instant confirmation when a step is completed correctly.
              </p>
            </div>

            {/* Tools / Discipline */}
            <div className="border-l-3 border-[#E96F98] pl-6 py-1">
              <h2 className="exp-what-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                TOOLS & DISCIPLINES
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

          {/* 7-Stage Cooking Experience Breakdown */}
          <div className="detail-major-section-block my-10">
            <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-6 flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-[#D7F23A] border border-[#171515] inline-block"></span>
              THE EXPERIENCE — 7 STAGES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { stage: '01', title: 'EXPLORE', desc: 'Discover recipes with interactive spatial previews, ingredient visualizers, and complexity indicators.' },
                { stage: '02', title: 'DECONSTRUCT', desc: 'Break down complex recipes into clear visual components, prep order, and parallel timing steps.' },
                { stage: '03', title: 'UNDERSTAND', desc: 'Preview technique nuances and key visual cues (texture, color, consistency) before starting.' },
                { stage: '04', title: 'COOK', desc: 'Hands-free, step-by-step augmented guidance projected directly onto your workspace as you prepare.' },
                { stage: '05', title: 'KNOW WHEN', desc: 'Real-time visual target comparisons showing exact visual states (e.g., golden brown, soft peaks).' },
                { stage: '06', title: 'FIX', desc: 'Instant spatial troubleshooting and correction tips for over/under-cooked or mis-measured steps.' },
                { stage: '07', title: 'FINISH', desc: 'Plating assistance, timing completion summary, and saving personal cooking notes.' }
              ].map((item) => (
                <div key={item.stage} className="p-4 bg-[#FAF4EB] border-1.5 border-[#171515] shadow-sm flex flex-col gap-1.5">
                  <div className="flex items-center justify-between border-b border-[#171515]/20 pb-1.5">
                    <span className="font-heading font-bold text-sm tracking-wider text-[#171515]">
                      STAGE {item.stage} — {item.title}
                    </span>
                    <span className="w-2.5 h-2.5 bg-[#E96F98] border border-[#171515]"></span>
                  </div>
                  <p className="font-body text-sm text-[#57534E] leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visualizing the Concept — Videos Section */}
          <div className="detail-major-section-block my-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#E96F98] border border-[#171515] inline-block"></span>
                VISUALIZING THE CONCEPT — AI PROTOTYPES
              </h2>
            </div>
            <p className="font-body text-sm text-[#57534E] mb-6">
              The following video prototypes demonstrate the proposed interaction design, spatial HUD elements, and hands-free cooking assistant workflow:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.videos?.map((vid) => (
                <div key={vid.id} className="border-1.5 border-[#171515] bg-[#FAF4EB] p-3 shadow-sm flex flex-col gap-2">
                  <div className="border-b border-[#171515]/20 pb-2">
                    <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-[#171515]">
                      {vid.title}
                    </h3>
                    <p className="font-body text-xs text-[#57534E]">
                      {vid.subtitle}
                    </p>
                  </div>
                  <div className="w-full bg-[#171515] rounded overflow-hidden">
                    <video 
                      controls 
                      preload="metadata"
                      className="w-full h-auto max-h-[380px] object-contain"
                    >
                      <source src={vid.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[10px] text-[#78716C] uppercase tracking-widest">
                      AI VISUALIZATION PROTOTYPE
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Designing the Experience */}
          <div className="detail-major-section-block my-10 max-w-4xl">
            <div className="border-l-3 border-[#171515] pl-6 py-1">
              <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
                DESIGNING THE EXPERIENCE
              </h2>
              <p className="exp-about-paragraph font-body text-base text-[#171515] leading-relaxed">
                The core interaction design focuses on non-intrusive spatial UI. In a kitchen environment, hands are often wet, dirty, or occupied. The interface relies on passive visual overlays, glanceable status indicators, and voice/gesture cues so cooks never need to touch a screen while preparing food.
              </p>
            </div>
          </div>
        </div>
      ) : project.id === 'movie-posters' ? (
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

          {/* Sequential Gallery for Movie Posters */}
          <ProjectGallery items={moviePostersDeliverables} title="POSTER EXPLORATIONS" imgClassName="movie-poster-gallery-img" />
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

          {/* Project Deliverables Sequential Gallery */}
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
              <span className="font-mono text-xs font-bold text-[#171515] bg-[#FAF4EB] px-3.5 py-1.5 border border-[#171515]">
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
                {project.idea}
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
          {(project.gameEmbed?.src || project.demoIframe) && (
            <div className="detail-major-section-block flex flex-col items-center">
              <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-4 flex items-center gap-3 w-full max-w-md">
                <span className="w-3.5 h-3.5 bg-[#D7F23A] border border-[#171515] inline-block"></span>
                INTERACTIVE DEMO
              </h2>
              <div className="sky-hopper-iframe-container">
                <iframe 
                  src={project.gameEmbed?.src || project.demoIframe || getAssetPath('games/sky-hopper/index.html')} 
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
                {project.idea}
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
                src={getAssetPath('images/assignments/character-design/leo-character-sheet.jpg')} 
                alt="Leo Character Turnaround Sheet"
                className="leo-character-sheet-img"
              />
            </div>
          </div>
        </div>
      ) : project.id === 'others' ? (
        /* =========================================================================
           8. SPECIAL CUSTOM CASE STUDY FOR OTHERS (06 — MISCELLANEOUS COLLECTION)
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

          <ProjectGallery items={miscCollectionDeliverables} title="MISCELLANEOUS COLLECTION & DELIVERABLES" imgClassName="others-standalone-img" />
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
