import React from 'react';

export default function ProjectGallery({ items = [], title = 'PROJECT GALLERY & DELIVERABLES' }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="my-12">
      <h3 className="font-heading font-bold text-lg uppercase tracking-wider text-[#171515] mb-6 flex items-center gap-3">
        <span className="w-3 h-3 bg-[#E96F98] border border-[#171515] inline-block"></span>
        {title}
      </h3>
      
      <div className="flex flex-col gap-12">
        {items.map((item, idx) => (
          <div key={item.id || idx} className="flex flex-col gap-3">
            <div className="border-1.5 border-[#171515] bg-[#FAF4EB] p-2 shadow-sm flex items-center justify-center w-full">
              <img 
                src={item.image} 
                alt={item.title || 'Project Deliverable'} 
                className="w-full h-auto max-h-[620px] object-contain block mx-auto"
              />
            </div>
            {item.title && (
              <p className="text-xs font-mono font-bold text-[#57534E] uppercase tracking-wider pl-1 border-l-2 border-[#171515]">
                {item.title}
              </p>
            )}
            {item.description && (
              <p className="font-body text-sm text-[#57534E] pl-1">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
