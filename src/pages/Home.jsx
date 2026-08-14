import React from 'react';
import { Link } from 'react-router-dom';
import ExperienceFolder from '../components/ui/ExperienceFolder';
import FolderCard from '../components/ui/FolderCard';
import HandDrawnFlowerBorder from '../components/ui/HandDrawnFlowerBorder';
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

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-text-col">
          
          <div className="flex items-center gap-3">
            <span className="badge-eyebrow-pink">
              STUDENT · DESIGNER · CURIOUS
            </span>
          </div>

          <h1 className="hero-heading">
            MUGDHA<br />PATNAIK
          </h1>

          <p className="hero-sub-text">
            Computation & Media student exploring design, visual systems, and creative technology.
          </p>
        </div>

        {/* Hand-Drawn Flower Row along Bottom Border */}
        <div className="w-full absolute bottom-0 left-0 right-0 pointer-events-none z-10">
          <HandDrawnFlowerBorder />
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
                I’m a Computation & Media student who enjoys working at the intersection of design, technology, and storytelling. I like exploring ideas through visual design, illustration, branding, photography, interactive media, and creative coding, and I’m always curious about how different mediums can come together to communicate an idea.
              </p>
              <p style={{ marginTop: '0.85rem' }}>
                A lot of my work starts with simply wanting to make something and figuring things out along the way. Whether I’m designing a visual identity, creating characters, experimenting with an interface, or building something with code, I enjoy the process of turning rough ideas into something tangible.
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
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#57534E' }}>
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

        {/* 2-Column Responsive Folder Cards Grid (Identical Layout to Personal Projects & Experience) */}
        <div className="experience-grid-two">
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

        {/* 2-Column Responsive Personal Projects Grid */}
        <div className="experience-grid-two">
          {personalData.map((item) => (
            <FolderCard
              key={item.id}
              number={item.number}
              title={item.title}
              category={item.id === 'brand-concepts' ? 'BRANDING & VISUAL IDENTITY' : 'CREATIVE EXPERIMENTS'}
              description={item.subtitle}
              to={`/personal/${item.id}`}
              tabLabel={`${item.number} — PERSONAL PROJECT`}
              tabColor="lime"
            />
          ))}
        </div>

      </section>

      {/* 5. WORK EXPERIENCE SECTION — DIRECTLY AFTER PERSONAL PROJECTS */}
      <section id="experience" className="section-block" style={{ borderBottom: 'none' }}>
        
        <div className="section-header-flex">
          <div>
            <div className="section-num-label">
              <span>04 / EXPERIENCE</span>
              <span className="section-caption-tag">2 INTERNSHIPS</span>
            </div>
            <h2 className="section-title">
              WORK EXPERIENCE
            </h2>
          </div>
        </div>

        {/* 2-Column Responsive Experience Grid */}
        <div className="experience-grid-two">
          {experienceData.map((exp) => (
            <ExperienceFolder
              key={exp.id}
              number={exp.number}
              title={exp.title}
              role={exp.role}
              shortDescription={exp.shortDescription}
              to={`/experience/${exp.id}`}
            />
          ))}
        </div>

      </section>

    </div>
  );
}
