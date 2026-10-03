import React from 'react';
import { Link } from 'react-router-dom';
import ExperienceFolder from '../components/ui/ExperienceFolder';
import FolderCard from '../components/ui/FolderCard';
import HeroCharacterHead from '../components/ui/HeroCharacterHead';
import DraggableSticker from '../components/ui/DraggableSticker';
import { projectsData } from '../data/projects';
import { personalData } from '../data/personal';
import { experienceData } from '../data/experience';

export default function Home() {
  const interestsList = [
    'BRANDING',
    'ILLUSTRATION',
    'PHOTOGRAPHY',
    'STORYTELLING',
    'UI / UX',
    'CREATIVE CODING',
    'COOKING / BAKING'
  ];

  const desktopStickers = [
    { id: 'psp1', src: 'images/stickers/pink_sparkle_large.png', initialPos: { x: 580, y: 40 }, size: { width: 36, height: 38 }, alt: "Pink Sparkle Large" },
    { id: 'psp2', src: 'images/stickers/pink_double_sparkle.png', initialPos: { x: 920, y: 60 }, size: { width: 34, height: 34 }, alt: "Pink Double Sparkle" },
    { id: 'psp3', src: 'images/stickers/pink_dashed_cross.png', initialPos: { x: 780, y: 140 }, size: { width: 28, height: 30 }, alt: "Pink Dashed Cross" },
    { id: 'bsp1', src: 'images/stickers/black_8point_star.png', initialPos: { x: 740, y: 40 }, size: { width: 32, height: 35 }, alt: "Black 8 Point Star" },
    { id: 'bsp2', src: 'images/stickers/black_double_sparkle.png', initialPos: { x: 670, y: 150 }, size: { width: 30, height: 32 }, alt: "Black Double Sparkle" },
    { id: 'bsp3', src: 'images/stickers/black_cross_sparkle.png', initialPos: { x: 40, y: 380 }, size: { width: 34, height: 34 }, alt: "Black Cross Sparkle" },
    { id: 'bsp4', src: 'images/stickers/black_sparkle_circle.png', initialPos: { x: 880, y: 130 }, size: { width: 28, height: 30 }, alt: "Black Sparkle Circle" },
    { id: 'lsp1', src: 'images/stickers/lime_sparkle_1.png', initialPos: { x: 640, y: 90 }, size: { width: 22, height: 24 }, alt: "Lime Sparkle" },
    { id: 'lsp2', src: 'images/stickers/lime_wide_sparkle.png', initialPos: { x: 860, y: 220 }, size: { width: 38, height: 36 }, alt: "Lime Wide Sparkle" },
    { id: 'lsp3', src: 'images/stickers/lime_dashed_cross.png', initialPos: { x: 940, y: 270 }, size: { width: 28, height: 29 }, alt: "Lime Dashed Cross" },
    { id: 'pfl1', src: 'images/stickers/pink_flower_large.png', initialPos: { x: 180, y: 440 }, size: { width: 34, height: 33 }, alt: "Pink Flower Large" },
    { id: 'pfl2', src: 'images/stickers/pink_flower_medium.png', initialPos: { x: 820, y: 450 }, size: { width: 25, height: 24 }, alt: "Pink Flower Medium" },
    { id: 'bfl1', src: 'images/stickers/black_flower_medium.png', initialPos: { x: 930, y: 370 }, size: { width: 26, height: 26 }, alt: "Black Flower Medium" },
    { id: 'bfl2', src: 'images/stickers/black_flower_large.png', initialPos: { x: 60, y: 460 }, size: { width: 32, height: 31 }, alt: "Black Flower Large" },
    { id: 'lfl1', src: 'images/stickers/lime_flower_medium.png', initialPos: { x: 300, y: 460 }, size: { width: 30, height: 29 }, alt: "Lime Flower Medium" },
    { id: 'lfl2', src: 'images/stickers/lime_flower_small.png', initialPos: { x: 700, y: 460 }, size: { width: 24, height: 23 }, alt: "Lime Flower Small" }
  ];

  const mobileStickers = [
    // EXACTLY 5 Mobile Movable Graphics:
    // 1. ONE Pink Sparkle
    { id: 'mob_psp1', src: 'images/stickers/pink_sparkle_large.png', initialPos: { x: 260, y: 25 }, size: { width: 32, height: 34 }, alt: "Pink Sparkle" },
    // 2. ONE Lime Sparkle
    { id: 'mob_lsp1', src: 'images/stickers/lime_sparkle_1.png', initialPos: { x: 18, y: 220 }, size: { width: 22, height: 24 }, alt: "Lime Sparkle" },
    // 3. ONE Black Sparkle
    { id: 'mob_bsp1', src: 'images/stickers/black_8point_star.png', initialPos: { x: 300, y: 130 }, size: { width: 28, height: 30 }, alt: "Black Sparkle" },
    // 4. ONE Small Black Flower with Pink Center (Lower Left)
    { id: 'mob_bfl1', src: 'images/stickers/black_flower_medium.png', initialPos: { x: 22, y: 350 }, size: { width: 26, height: 26 }, alt: "Black Flower 1" },
    // 5. ONE Additional Small Black Flower with Pink Center (Lower Right)
    { id: 'mob_bfl2', src: 'images/stickers/black_flower_medium.png', initialPos: { x: 280, y: 360 }, size: { width: 26, height: 26 }, alt: "Black Flower 2" }
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        {/* Desktop Draggable Stickers (hidden on mobile) */}
        <div className="hero-stickers-desktop">
          {desktopStickers.map((sticker) => (
            <DraggableSticker
              key={sticker.id}
              src={sticker.src}
              initialPos={sticker.initialPos}
              size={sticker.size}
              alt={sticker.alt}
            />
          ))}
        </div>

        {/* Mobile Draggable Stickers (rendered ONLY on mobile - EXACTLY 5 STICKERS TOTAL) */}
        <div className="hero-stickers-mobile">
          {mobileStickers.map((sticker) => (
            <DraggableSticker
              key={sticker.id}
              src={sticker.src}
              initialPos={sticker.initialPos}
              size={sticker.size}
              alt={sticker.alt}
            />
          ))}
        </div>

        <div className="hero-content-col">
          {/* MUGDHA PATNAIK Heading */}
          <h1 className="hero-heading">
            MUGDHA PATNAIK
          </h1>

          {/* Description */}
          <p className="hero-sub-text">
            Computation & Media student exploring design, visual systems, and creative technology.
          </p>
        </div>

        {/* Subtle interface hint text */}
        <span className="hero-hint-text">move things around :)</span>

        {/* Large Original Character Head Emerging from Bottom of Hero */}
        <div className="hero-character-bottom-wrapper">
          <HeroCharacterHead />
        </div>
      </section>

      {/* 2. ABOUT ME SECTION — FULL WIDTH INTENTIONAL LAYOUT (NO PORTRAIT) */}
      <section id="about" className="section-block">
        
        <div className="section-header-flex">
          <div>
            <div className="section-num-label">
              <span>01 / ABOUT</span>
            </div>
            <h2 className="section-title">
              ABOUT ME
            </h2>
          </div>
        </div>

        {/* Full-width container with comfortable max-width */}
        <div className="max-w-4xl">
          <div className="about-info-col">
            
            {/* Bio Text */}
            <div className="about-bio-text max-w-3xl">
              <p>
                I’m a Computation & Media student who enjoys working at the intersection of design, technology, and storytelling. I like exploring ideas through visual design, illustration, branding, photography, interactive media, and creative coding, and I’m always curious about how different mediums can come together to communicate an idea. I’m still exploring what I’m most drawn to, and I like that my interests are still evolving as I try new things.
              </p>
              <p style={{ marginTop: '0.85rem' }}>
                A lot of my work starts with simply wanting to make something and figuring things out along the way. Whether I’m designing a visual identity, creating characters, experimenting with an interface, or exploring a new idea, I enjoy the process of turning rough ideas into something tangible.
              </p>
            </div>

            {/* Education Box — Spans Full Available Width */}
            <div className="education-card-box max-w-3xl">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="badge-eyebrow-pink" style={{ fontSize: '0.7rem' }}>
                  EDUCATION
                </span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#57534E' }}>ACADEMIC</span>
              </div>
              
              <div className="education-grid-two">
                <div className="education-item">
                  <div className="education-school">Mahindra University</div>
                  <div className="education-degree">B.Tech — Computation & Media</div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#78716C', marginTop: '0.25rem' }}>
                    2024 – Present
                  </div>
                </div>

                <div className="education-item">
                  <div className="education-school">Reliance Foundation School</div>
                  <div className="education-degree">Completed Schooling</div>
                </div>
              </div>
            </div>

          </div>

          {/* Interests Pills */}
          <div className="interests-wrapper max-w-3xl">
            <span style={{ fontFamily: 'mudstone-sans, sans-serif', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#57534E' }}>
              CREATIVE INTERESTS
            </span>
            <div className="tags-flex-container">
              {interestsList.map((interest) => (
                <span key={interest} className="tag-pill-element">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* 3. ASSIGNMENTS SECTION — 2-COLUMN RESPONSIVE FOLDER CARDS GRID */}
      <section id="assignments" className="section-block">
        
        <div className="section-header-flex">
          <div>
            <div className="section-num-label">
              <span>02 / COURSEWORK</span>
              <span className="section-caption-tag">6 FOLDERS</span>
            </div>
            <h2 className="section-title">
              ASSIGNMENTS
            </h2>
          </div>
        </div>

        {/* Horizontal Scrollable Row for Assignment Folders */}
        <div className="assignments-horizontal-scroll">
          {projectsData.map((project) => (
            <FolderCard
              key={project.id}
              number={project.number}
              title={`${project.number} — ${project.title}`}
              category={project.category}
              description={project.shortDescription}
              to={`/work/${project.id}`}
              tabLabel={`${project.number} — ASSIGNMENT`}
              tabColor="lime"
            />
          ))}
        </div>

      </section>

      {/* 4. PERSONAL PROJECTS SECTION — DIRECTLY AFTER ASSIGNMENTS */}
      <section id="personal-projects" className="section-block">
        
        <div className="section-header-flex">
          <div>
            <div className="section-num-label">
              <span>03 / PERSONAL PROJECTS</span>
              <span className="section-caption-tag">2 FOLDERS</span>
            </div>
            <h2 className="section-title">
              PERSONAL PROJECTS
            </h2>
          </div>
        </div>

        {/* 2-Column Responsive Grid for Personal Projects Folders */}
        <div className="experience-grid-two">
          {personalData.map((proj) => (
            <FolderCard
              key={proj.id}
              number={proj.number}
              title={`${proj.number} — ${proj.title}`}
              category={proj.category}
              description={proj.description}
              to={`/personal/${proj.id}`}
              tabLabel={`${proj.number} — FOLDER`}
              tabColor="pink"
            />
          ))}
        </div>

      </section>

      {/* 5. EXPERIENCE SECTION — DIRECTLY AFTER PERSONAL PROJECTS */}
      <section id="experience" className="section-block">
        
        <div className="section-header-flex">
          <div>
            <div className="section-num-label">
              <span>04 / EXPERIENCE</span>
              <span className="section-caption-tag">2 FOLDERS</span>
            </div>
            <h2 className="section-title">
              EXPERIENCE
            </h2>
          </div>
        </div>

        {/* 2-Column Responsive Experience Folders Grid */}
        <div className="experience-grid-two">
          {experienceData.map((exp) => (
            <ExperienceFolder
              key={exp.id}
              number={exp.number}
              company={exp.title}
              role={exp.role}
              about={exp.about}
              to={`/experience/${exp.id}`}
            />
          ))}
        </div>

      </section>
    </div>
  );
}
