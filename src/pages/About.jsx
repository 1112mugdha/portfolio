import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function About() {
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
    <div className="py-6 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: 'HOME', path: '/' }, { label: 'ABOUT' }]} />
      
      <PageHeader 
        title="ABOUT"
        subtitle="Computation & Media student exploring design, visual systems, and creative technology."
        badge="BIOGRAPHY & PROFILE"
      />

      <div className="flex flex-col gap-10 py-6 max-w-3xl">
        
        {/* ABOUT ME BIO */}
        <div className="flex flex-col gap-3 border-b-1.5 border-[#171515] pb-8">
          <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#E96F98] bg-[#171515] px-2.5 py-1 w-max">
            ABOUT ME
          </span>
          <h2 className="font-heading font-extrabold text-2xl uppercase text-[#171515]">
            MUGDHA PATNAIK
          </h2>
          <div className="font-body text-base text-[#171515] leading-relaxed flex flex-col gap-3">
            <p>
              I’m a Computation & Media student who enjoys working at the intersection of design, technology, and storytelling. I like exploring ideas through visual design, illustration, branding, photography, interactive media, and creative coding, and I’m always curious about how different mediums can come together to communicate an idea. I’m still exploring what I’m most drawn to, and I like that my interests are still evolving as I try new things.
            </p>
            <p>
              A lot of my work starts with simply wanting to make something and figuring things out along the way. Whether I’m designing a visual identity, creating characters, experimenting with an interface, or exploring a new idea, I enjoy the process of turning rough ideas into something tangible.
            </p>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="flex flex-col gap-4 border-b-1.5 border-[#171515] pb-8">
          <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] bg-[#D7F23A] px-2.5 py-1 border border-[#171515] w-max">
            EDUCATION
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
            <div className="border-l-3 border-[#171515] pl-4 py-1">
              <h3 className="font-heading font-bold text-lg text-[#171515]">
                Mahindra University
              </h3>
              <p className="font-body text-sm font-medium text-[#57534E]">
                B.Tech — Computation & Media
              </p>
              <span className="font-mono text-xs text-[#78716C]">
                2024 – Present
              </span>
            </div>

            <div className="border-l-3 border-[#171515] pl-4 py-1">
              <h3 className="font-heading font-bold text-lg text-[#171515]">
                Reliance Foundation School
              </h3>
              <p className="font-body text-sm font-medium text-[#57534E]">
                Completed Schooling
              </p>
            </div>
          </div>
        </div>

        {/* INTERESTS */}
        <div className="flex flex-col gap-4">
          <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] block">
            INTERESTS
          </span>
          <div className="flex flex-wrap gap-2.5">
            {interestsList.map((interest) => (
              <span key={interest} className="tag-pill-element text-xs py-1.5 px-3">
                {interest}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
