import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import FolderCard from '../components/ui/FolderCard';
import ProjectGallery from '../components/ui/ProjectGallery';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { experienceData } from '../data/experience';

export default function ExperienceDetail() {
  const { id, subFolder } = useParams();
  const [lightboxImage, setLightboxImage] = useState(null);
  
  const exp = experienceData.find(e => e.id === id);
  if (!exp) {
    return <Navigate to="/experience" replace />;
  }

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
        {/* Lightbox Modal for Full Image View (Creatives & Outreach) */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 z-50 bg-[#171515]/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setLightboxImage(null)}
                className="self-end bg-[#E96F98] text-[#171515] hover:bg-[#D7F23A] transition-colors py-1.5 px-3 font-heading font-bold text-xs uppercase tracking-wider border border-[#171515] cursor-pointer"
              >
                ✕ CLOSE PREVIEW
              </button>

              <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-2 shadow-2xl overflow-hidden">
                <img 
                  src={lightboxImage.image} 
                  alt={lightboxImage.title || 'Outreach Photograph'} 
                  className="max-h-[80vh] w-auto max-w-[90vw] object-contain block mx-auto"
                />
              </div>

              {isCreatives && lightboxImage.title && (
                <p className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#F7F3EA] bg-[#171515] px-3 py-1 border border-[#F7F3EA]/30">
                  {lightboxImage.title}
                </p>
              )}
            </div>
          </div>
        )}

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

        {/* Compact 2-Column Grid Gallery (2 photos/posters on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 my-6 justify-items-center">
          {currentItems.map((item, idx) => (
            <div 
              key={item.id || idx} 
              className={`w-full ${isOutreach ? 'max-w-[340px]' : 'max-w-[380px]'} flex flex-col gap-2 group cursor-pointer`}
              onClick={() => setLightboxImage(item)}
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
      </div>
    );
  }

  // =========================================================================
  // MAIN EXPERIENCE DETAIL VIEW
  // =========================================================================
  return (
    <div className="py-6 max-w-5xl mx-auto">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'HOME', path: '/' },
        { label: 'EXPERIENCE', path: '/experience' },
        { label: exp.title }
      ]} />

      {/* Back Link */}
      <div className="mt-3 mb-8 sm:mb-10">
        <Link 
          to="/experience" 
          className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-[#171515] hover:text-[#E96F98] transition-colors"
        >
          ← BACK TO EXPERIENCE
        </Link>
      </div>

      {/* Experience Header */}
      <div className="border-b-1.5 border-[#171515] pb-8 mb-12 sm:mb-14">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="font-mono text-xs font-bold bg-[#D7F23A] text-[#171515] px-3 py-1.5 border border-[#171515]">
            EXPERIENCE {exp.number} — {exp.role}
          </span>
        </div>
        
        {/* Highlighted Company Name Block */}
        <div className="inline-block bg-[#E96F98] text-[#171515] px-4 py-2 sm:px-6 sm:py-3 border-1.5 border-[#171515] shadow-[4px_4px_0px_0px_#171515]">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#171515] leading-none">
            {exp.title}
          </h1>
        </div>
      </div>

      {/* Content Breakdown */}
      <div className="flex flex-col gap-12 sm:gap-14 my-10 max-w-4xl">
        
        {/* ABOUT THE ROLE */}
        <div className="border-l-3 border-[#171515] pl-6 py-1">
          <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-4">
            ABOUT THE ROLE
          </h2>
          <p className="font-body text-sm sm:text-base text-[#171515] leading-relaxed sm:leading-[1.8]">
            {exp.about}
          </p>
        </div>

        {/* WHAT I DID - Clean Bullet Point List */}
        <div className="border-l-3 border-[#E96F98] pl-6 py-1">
          <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] mb-5">
            WHAT I DID
          </h2>
          <ul className="flex flex-col gap-3.5 sm:gap-4 font-body text-sm sm:text-base text-[#57534E]">
            {exp.whatIDid.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#171515] rounded-full mt-2 shrink-0" />
                <span className="leading-relaxed sm:leading-[1.8]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* =========================================================================
         MODI BUILDERS: WORK CREATED SECTION (2-COLUMN COMPACT GRID)
         ========================================================================= */}
      {exp.workCreated && (
        <div className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t-1.5 border-[#171515]">
          <div className="mb-10 sm:mb-12">
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-[#171515] mb-3 flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-[#E96F98] border border-[#171515] inline-block"></span>
              WORK CREATED
            </h2>
            {exp.workCreatedSubtitle && (
              <p className="font-body text-sm sm:text-base text-[#57534E] leading-relaxed">
                {exp.workCreatedSubtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-start justify-items-center">
            {exp.workCreated.map((item) => (
              <div key={item.id} className="w-full max-w-[460px] flex flex-col gap-2.5">
                <div className="pb-1 border-b-1.5 border-[#171515]">
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

      {/* =========================================================================
         WHITE VOLUNTEERS FOUNDATION: WORK SECTION (TWO CLICKABLE CARDS)
         ========================================================================= */}
      {exp.folders && (
        <div className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t-1.5 border-[#171515]">
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-[#171515] mb-10 sm:mb-12 flex items-center gap-3">
            <span className="w-3.5 h-3.5 bg-[#E96F98] border border-[#171515] inline-block"></span>
            WORK
          </h2>

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

    </div>
  );
}
