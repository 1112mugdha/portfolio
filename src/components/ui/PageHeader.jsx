import React from 'react';

export default function PageHeader({ title, subtitle, badge }) {
  return (
    <div className="py-12 border-b-1.5 border-[#171515] mb-12">
      {badge && (
        <span className="inline-block bg-[#E96F98] text-[#171515] text-xs font-heading font-bold uppercase tracking-widest px-2.5 py-1 border border-[#171515] mb-4">
          {badge}
        </span>
      )}
      <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#171515] mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="font-body text-base sm:text-lg text-[#57534E] max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
