import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

export default function ProjectGallery({ items = [], title = 'PROJECT GALLERY & DELIVERABLES' }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="my-12">
      <h3 className="font-heading font-bold text-lg uppercase tracking-wider text-[#171515] mb-6 flex items-center gap-3">
        <span className="w-3 h-3 bg-[#E96F98] border border-[#171515] inline-block"></span>
        {title}
      </h3>
      
      <div className="flex flex-col gap-12">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-3">
            <ImagePlaceholder 
              src={item.image} 
              alt={item.title || 'Project Deliverable'} 
              aspectRatio={item.aspect || 'auto'} 
            />
            {item.title && (
              <p className="text-xs font-mono font-bold text-[#57534E] uppercase tracking-wider pl-1 border-l-2 border-[#171515]">
                {item.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
