import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../../utils/assetPath';

export default function Footer() {
  return (
    <footer className="footer-element bg-[#FAF4EB] border-t-1.5 border-[#171515] py-8 select-none" id="footer">
      <div className="page-container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* LEFT SIDE: Brand Name + Tiny Sparkle Accent */}
          <div className="flex items-center gap-3">
            <Link 
              to="/" 
              className="font-heading font-bold text-base sm:text-lg tracking-wider text-[#171515] hover:opacity-80 transition-opacity uppercase"
            >
              MUGDHA PATNAIK
            </Link>
            {/* Subtle Pink Sparkle */}
            <img 
              src={getAssetPath('images/stickers/pink_double_sparkle.png')}
              alt=""
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain select-none pointer-events-none opacity-90"
            />
          </div>

          {/* RIGHT SIDE: 3 Small Rounded Contact Boxes + Subtle Accents */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Lime Sparkle Accent */}
            <img 
              src={getAssetPath('images/stickers/lime_sparkle_1.png')}
              alt=""
              className="w-3.5 h-3.5 object-contain select-none pointer-events-none opacity-85 hidden sm:inline-block"
            />

            {/* Personal Email Box (Pink) */}
            <a 
              href="mailto:mugdhapatnaik1112@gmail.com" 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#E96F98] text-[#171515] border-1.5 border-[#171515] rounded-xl font-heading font-bold text-xs uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-transform shadow-[2px_2px_0px_#171515]"
            >
              PERSONAL EMAIL ↗
            </a>

            {/* College Email Box (Lime) */}
            <a 
              href="mailto:sc24ucom006@mahindrauniversity.edu.in" 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#D7F23A] text-[#171515] border-1.5 border-[#171515] rounded-xl font-heading font-bold text-xs uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-transform shadow-[2px_2px_0px_#171515]"
            >
              COLLEGE EMAIL ↗
            </a>

            {/* LinkedIn Box (Cream) */}
            <a 
              href="https://www.linkedin.com/in/mugdha-patnaik-073b872a3/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FAF4EB] text-[#171515] border-1.5 border-[#171515] rounded-xl font-heading font-bold text-xs uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-transform shadow-[2px_2px_0px_#171515]"
            >
              LINKEDIN ↗
            </a>

            {/* Black Flower Accent */}
            <img 
              src={getAssetPath('images/stickers/black_flower_medium.png')}
              alt=""
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain select-none pointer-events-none opacity-90 hidden sm:inline-block"
            />
          </div>

        </div>

        {/* Sub-bar Copyright */}
        <div className="mt-6 pt-4 border-t border-[#171515]/10 flex items-center justify-between text-xs text-[#171515]/60 font-body">
          <span>© 2026 Mugdha Patnaik</span>
          <span>Designed & Built with Care</span>
        </div>
      </div>
    </footer>
  );
}
