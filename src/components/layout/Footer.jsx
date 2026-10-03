import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-element bg-[#FAF4EB] border-t-1.5 border-[#171515] py-6 select-none" id="footer">
      <div className="page-container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Horizontal Content Row: Far Left (MUGDHA) & Far Right (3 Pill Contact UI Buttons) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          
          {/* LEFT SIDE: Name "MUGDHA" in Mudstone Sans */}
          <Link 
            to="/" 
            className="font-heading font-bold text-base sm:text-lg tracking-wider text-[#171515] hover:opacity-80 transition-opacity uppercase flex-shrink-0"
          >
            MUGDHA
          </Link>

          {/* RIGHT SIDE: Three Clean Pill Contact UI Buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5">
            {/* Personal Email (Pink) */}
            <a 
              href="mailto:mugdhapatnaik1112@gmail.com" 
              className="inline-flex items-center justify-center px-4 py-1.5 bg-[#E96F98] text-[#171515] border-1.5 border-[#171515] rounded-full font-heading font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all shadow-none"
            >
              PERSONAL EMAIL ↗
            </a>

            {/* Student Email (Neon Lime/Chartreuse) */}
            <a 
              href="mailto:sc24ucom006@mahindrauniversity.edu.in" 
              className="inline-flex items-center justify-center px-4 py-1.5 bg-[#D7F23A] text-[#171515] border-1.5 border-[#171515] rounded-full font-heading font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all shadow-none"
            >
              STUDENT EMAIL ↗
            </a>

            {/* LinkedIn (Pink) */}
            <a 
              href="https://www.linkedin.com/in/mugdha-patnaik-073b872a3/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-4 py-1.5 bg-[#E96F98] text-[#171515] border-1.5 border-[#171515] rounded-full font-heading font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all shadow-none"
            >
              LINKEDIN ↗
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT LINE: Tiny, Regular Weight, Pink Text, Paragraph/Body Font */}
        <div className="mt-5 text-center sm:text-left text-xs text-[#E96F98] font-body font-normal tracking-wide">
          © 2026 MUGDHA · DESIGNED &amp; BUILT WITH LOVE AND CARE :)
        </div>
      </div>
    </footer>
  );
}
