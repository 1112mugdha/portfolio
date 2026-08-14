import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function Contact() {
  return (
    <div className="py-6 max-w-4xl">
      <Breadcrumbs items={[{ label: 'HOME', path: '/' }, { label: 'CONTACT' }]} />
      
      <PageHeader 
        title="CONTACT"
        subtitle="I'm always open to talking about design, creative coding, or interesting projects. Feel free to reach out!"
        badge="GET IN TOUCH"
      />

      <div className="my-12 border-1.5 border-[#171515] bg-[#FAF4EB] p-8 sm:p-12 flex flex-col gap-10">
        <div>
          <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#E96F98] bg-[#171515] px-2.5 py-1 inline-block mb-3">
            SAY HELLO
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase text-[#171515]">
            LET'S CONNECT & COLLABORATE
          </h2>
          <p className="font-body text-base text-[#57534E] mt-2 max-w-xl">
            Whether you have a question, a potential assignment, or just want to say hi, my inbox is always open.
          </p>
        </div>

        {/* Direct Clickable Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#171515]/15">
          {/* EMAIL */}
          <a 
            href="mailto:contact@mugdha.design"
            className="group border border-[#171515] bg-white p-5 flex flex-col justify-between h-36 hover:bg-[#D7F23A] transition-colors"
          >
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#57534E]">
              EMAIL
            </span>
            <div className="flex items-center justify-between font-heading font-bold text-sm text-[#171515] group-hover:underline">
              <span>contact@mugdha.design</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </div>
          </a>

          {/* INSTAGRAM */}
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[#171515] bg-white p-5 flex flex-col justify-between h-36 hover:bg-[#E96F98] transition-colors"
          >
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#57534E]">
              INSTAGRAM
            </span>
            <div className="flex items-center justify-between font-heading font-bold text-sm text-[#171515] group-hover:underline">
              <span>@mugdha.patnaik</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </div>
          </a>

          {/* LINKEDIN */}
          <a 
            href="https://linkedin.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[#171515] bg-white p-5 flex flex-col justify-between h-36 hover:bg-[#D7F23A] transition-colors"
          >
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#57534E]">
              LINKEDIN
            </span>
            <div className="flex items-center justify-between font-heading font-bold text-sm text-[#171515] group-hover:underline">
              <span>Mugdha Patnaik</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
