import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import FolderCard from '../components/ui/FolderCard';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { experienceData } from '../data/experience';

export default function ExperienceDetail() {
  const { id, subFolder } = useParams();
  
  const exp = experienceData.find(e => e.id === id);
  if (!exp) {
    return <Navigate to="/#experience" replace />;
  }

  const currentIndex = experienceData.findIndex(e => e.id === id);
  const prevExp = currentIndex > 0 ? experienceData[currentIndex - 1] : null;
  const nextExp = currentIndex >= 0 && currentIndex < experienceData.length - 1 ? experienceData[currentIndex + 1] : null;

  // =========================================================================
  // SUB-FOLDER VIEW (CREATIVES DESIGNED / OUTREACH VISITS)
  // =========================================================================
  if (subFolder) {
    const isCreatives = subFolder === 'creatives-designed';
    const isOutreach = subFolder === 'outreach-visits';

    if (!isCreatives && !isOutreach) {
      return <Navigate to={`/experience/${id}`} replace />;
    }

    const currentItems = isCreatives ? (exp.creativesDesigned || []) : (exp.outreachVisits || []);
    const folderTitle = isCreatives ? '01 — CREATIVES DESIGNED' : '02 — OUTREACH VISITS';

    return (
      <div className="py-6 max-w-5xl mx-auto">
        {/* Back Link */}
        <div className="mt-1 mb-6">
          <Link 
            to={`/experience/${exp.id}`} 
            className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-[#171515] hover:text-[#E96F98] transition-colors"
          >
            ← BACK TO WHITE VOLUNTEERS FOUNDATION
          </Link>
        </div>

        {/* Header */}
        <div className="border-b-1.5 border-[#171515] pb-4 mb-8">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-[#171515]">
            {folderTitle}
          </h1>
        </div>

        {/* Compact 2-Column Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 my-6 justify-items-center">
          {currentItems.map((item, idx) => (
            <div 
              key={item.id || idx} 
              className={`w-full ${isOutreach ? 'max-w-[340px]' : 'max-w-[380px]'} flex flex-col gap-2 group`}
            >
              {/* Creatives Designed shows title; Outreach Visits has NO title, caption, or text */}
              {isCreatives && item.title && (
                <div className="pb-1 border-b-1.5 border-[#171515]">
                  <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#171515]">
                    {item.title}
                  </h3>
                </div>
              )}

              {/* Compact Photo / Poster Frame */}
              <div className="border border-[#171515] bg-[#FAF4EB] p-1.5 shadow-sm flex items-center justify-center min-h-[200px] sm:min-h-[240px] w-full transition-transform group-hover:scale-[1.015]">
                {item.image.endsWith('.svg') ? (
                  <ImagePlaceholder
                    src={item.image}
                    title={item.title || 'Outreach Photo'}
                    label={isCreatives ? 'DESIGN POSTER' : 'OUTREACH PHOTO'}
                    aspectRatio={item.aspect || '4/3'}
                  />
                ) : (
                  <img 
                    src={item.image} 
                    alt={`Outreach Photograph ${idx + 1}`} 
                    className={isCreatives ? "white-volunteers-creative-thumb" : "white-volunteers-outreach-thumb"}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom PREV / NEXT Navigation Bar for White Volunteers Sub-Folders */}
        <div className="assignment-bottom-nav">
          {isOutreach ? (
            <Link 
              to="/experience/white-volunteers/creatives-designed" 
              className="prev-link px-5 sm:px-6 py-2.5 border-1.5 border-[#171515] bg-[#D7F23A] hover:bg-[#E96F98] text-[#171515] font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm flex items-center justify-center cursor-pointer active:translate-y-0.5"
              aria-label="Go to previous folder: Creatives Designed"
            >
              ← PREV: CREATIVES DESIGNED
            </Link>
          ) : (
            <div className="prev-link" />
          )}

          {isCreatives ? (
            <Link 
              to="/experience/white-volunteers/outreach-visits" 
              className="next-link px-5 sm:px-6 py-2.5 border-1.5 border-[#171515] bg-[#D7F23A] hover:bg-[#E96F98] text-[#171515] font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm flex items-center justify-center cursor-pointer active:translate-y-0.5"
              aria-label="Go to next folder: Outreach Visits"
            >
              NEXT: OUTREACH VISITS →
            </Link>
          ) : (
            <div className="next-link" />
          )}
        </div>
      </div>
    );
  }

  // =========================================================================
  // MAIN EXPERIENCE DETAIL VIEW
  // =========================================================================
  return (
    <div className="py-6 max-w-5xl mx-auto">
      {/* Back Link (margin-bottom: 28px) */}
      <div className="exp-back-nav mt-3">
        <Link 
          to="/#experience" 
          className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-[#171515] hover:text-[#E96F98] transition-colors"
        >
          ← BACK TO EXPERIENCE
        </Link>
      </div>

      {/* Experience Header */}
      <div className="exp-header-border-block border-b-1.5 border-[#171515]">
        {/* Role Badge (margin-bottom: 32px) */}
        <div className="exp-role-badge-wrap flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-bold bg-[#FAF4EB] text-[#171515] px-3.5 py-1.5 border border-[#171515]">
            EXPERIENCE {exp.number} — {exp.role}
          </span>
        </div>
        
        {/* Highlighted Company Name Label */}
        <div className="exp-company-highlight-container">
          <h1 className="exp-company-name-text">
            {exp.title}
          </h1>
        </div>
      </div>

      {/* Content Breakdown */}
      <div className="max-w-4xl">
        
        {/* ABOUT THE ROLE */}
        <div className="exp-about-block border-l-3 border-[#171515] pl-6 py-1">
          <h2 className="exp-about-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
            ABOUT THE ROLE
          </h2>
          <p className="exp-about-paragraph font-body text-base text-[#171515]">
            {exp.about}
          </p>
        </div>

        {/* WHAT I DID */}
        <div className="border-l-3 border-[#E96F98] pl-6 py-1">
          <h2 className="exp-what-heading font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#171515]">
            WHAT I DID
          </h2>
          <ul className="exp-bullet-list font-body">
            {exp.whatIDid.map((item, idx) => (
              <li key={idx} className="exp-bullet-item">
                <span className="w-2 h-2 bg-[#171515] rounded-full mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* MODI BUILDERS: WORK CREATED SECTION */}
      {exp.workCreated && (
        <div className="exp-work-section-container">
          <div className="exp-work-heading-block">
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-[#171515] mb-2 flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-[#E96F98] border border-[#171515] inline-block"></span>
              WORK CREATED
            </h2>
            {exp.workCreatedSubtitle && (
              <p className="font-body text-sm sm:text-base text-[#57534E] leading-relaxed mt-2">
                {exp.workCreatedSubtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-items-center">
            {exp.workCreated.map((item) => (
              <div 
                key={item.id} 
                className="w-full max-w-[460px] flex flex-col gap-3"
              >
                <div className="pb-1.5 border-b-1.5 border-[#171515]">
                  <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#171515]">
                    {item.title}
                  </h3>
                </div>

                <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-2 shadow-sm flex items-center justify-center min-h-[300px] sm:min-h-[380px] w-full">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="modi-builders-work-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* WHITE VOLUNTEERS FOUNDATION: WORK SECTION */}
      {exp.folders && (
        <div className="exp-work-section-container">
          <div className="exp-work-heading-block">
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-[#171515] flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-[#E96F98] border border-[#171515] inline-block"></span>
              WORK
            </h2>
          </div>

          <div className="experience-grid-two">
            {exp.folders.map((folder) => (
              <FolderCard
                key={folder.id}
                number={folder.number}
                title={folder.title}
                category={folder.category}
                description={folder.description}
                to={folder.path}
                tabLabel={`${folder.number} — FOLDER`}
                tabColor="lime"
              />
            ))}
          </div>
        </div>
      )}

      {/* Bottom PREV / NEXT Navigation Bar for Top-Level Experience Folders */}
      <div className="assignment-bottom-nav">
        {prevExp ? (
          <Link 
            to={`/experience/${prevExp.id}`} 
            className="prev-link px-5 sm:px-6 py-2.5 border-1.5 border-[#171515] bg-[#D7F23A] hover:bg-[#E96F98] text-[#171515] font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm flex items-center justify-center cursor-pointer active:translate-y-0.5"
            aria-label={`Go to previous experience: ${prevExp.title}`}
          >
            ← PREV: {prevExp.title}
          </Link>
        ) : (
          <div className="prev-link" />
        )}

        {nextExp ? (
          <Link 
            to={`/experience/${nextExp.id}`} 
            className="next-link px-5 sm:px-6 py-2.5 border-1.5 border-[#171515] bg-[#D7F23A] hover:bg-[#E96F98] text-[#171515] font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm flex items-center justify-center cursor-pointer active:translate-y-0.5"
            aria-label={`Go to next experience: ${nextExp.title}`}
          >
            NEXT: {nextExp.title} →
          </Link>
        ) : (
          <div className="next-link" />
        )}
      </div>

    </div>
  );
}
