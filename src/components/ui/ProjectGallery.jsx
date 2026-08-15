import React from 'react';
import { useLightbox } from '../../context/LightboxContext';

export default function ProjectGallery({ items = [], title = 'PROJECT GALLERY & DELIVERABLES', imgClassName = 'w-full h-auto max-h-[620px] object-contain block mx-auto' }) {
  const { openLightbox } = useLightbox();

  if (!items || items.length === 0) return null;

  const isCompactView = imgClassName && imgClassName.includes('cactus');

  return (
    <div className="detail-major-section-block">
      <h3 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[#171515] mb-8 flex items-center gap-3">
        <span className="w-3.5 h-3.5 bg-[#E96F98] border border-[#171515] inline-block"></span>
        {title}
      </h3>
      
      <div className="flex flex-col gap-14">
        {items.map((item, idx) => (
          <div key={item.id || idx} className="flex flex-col gap-3">
            {/* Title & Description ALWAYS rendered ABOVE the image */}
            {item.title && (
              <div className="pb-1.5 border-b-1.5 border-[#171515]">
                <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#171515]">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="font-body text-xs text-[#57534E] mt-0.5">
                    {item.description}
                  </p>
                )}
              </div>
            )}
            
            <div 
              className="border-1.5 border-[#171515] bg-[#FAF4EB] p-2 shadow-sm flex items-center justify-center w-full cursor-pointer"
              style={isCompactView ? { height: 'calc(100vh - 220px)', maxHeight: 'calc(100vh - 220px)' } : {}}
              onClick={() => openLightbox(item.image, item.title || 'Project Deliverable')}
            >
              <img 
                src={item.image} 
                alt={item.title || 'Project Deliverable'} 
                className={imgClassName}
                style={isCompactView ? { width: '100%', height: '100%', maxHeight: 'calc(100vh - 220px)', objectFit: 'contain' } : {}}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
