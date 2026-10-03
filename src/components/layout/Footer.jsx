import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer 
      className="footer-element bg-[#FAF4EB] border-t-1.5 border-[#171515] py-5 md:py-6 select-none" 
      id="footer"
      style={{
        boxSizing: 'border-box',
        backgroundColor: '#FAF4EB',
        borderTop: '1.5px solid #171515',
      }}
    >
      <div className="page-container max-w-6xl mx-auto px-4 sm:px-6 w-full">
        
        {/* MAIN DESKTOP ROW: MUGDHA on Far Left, 3 Pill Buttons on Far Right */}
        <div 
          className="footer-main-row flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 w-full"
          style={{
            display: 'flex',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {/* MUGDHA - Far Left */}
          <div className="footer-name flex-shrink-0">
            <Link 
              to="/" 
              className="font-heading font-bold text-lg sm:text-xl tracking-wider text-[#171515] hover:opacity-80 transition-opacity uppercase"
              style={{
                fontFamily: 'Mudstone Sans, sans-serif',
                fontWeight: 'bold',
                color: '#171515',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              MUGDHA
            </Link>
          </div>

          {/* CONTACT GROUP - Far Right (Horizontal on Desktop, Stacked on Mobile to prevent overflow) */}
          <div 
            className="footer-contact-group flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2.5 sm:gap-3 w-full sm:w-auto md:flex-nowrap"
            style={{
              boxSizing: 'border-box',
            }}
          >
            {/* PERSONAL EMAIL BOX (Pink) */}
            <a 
              href="mailto:mugdhapatnaik1112@gmail.com" 
              className="w-full sm:w-auto text-center inline-flex items-center justify-center bg-[#E96F98] text-[#171515] border-1.5 border-[#171515] rounded-full font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all shadow-none"
              style={{
                backgroundColor: '#E96F98',
                color: '#171515',
                border: '1.5px solid #171515',
                borderRadius: '9999px',
                padding: '8px 16px',
                fontSize: '12.5px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
              }}
            >
              PERSONAL EMAIL ↗
            </a>

            {/* STUDENT EMAIL BOX (Neon Lime / Chartreuse) */}
            <a 
              href="mailto:sc24ucom006@mahindrauniversity.edu.in" 
              className="w-full sm:w-auto text-center inline-flex items-center justify-center bg-[#D7F23A] text-[#171515] border-1.5 border-[#171515] rounded-full font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all shadow-none"
              style={{
                backgroundColor: '#D7F23A',
                color: '#171515',
                border: '1.5px solid #171515',
                borderRadius: '9999px',
                padding: '8px 16px',
                fontSize: '12.5px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
              }}
            >
              STUDENT EMAIL ↗
            </a>

            {/* LINKEDIN BOX (Pink) */}
            <a 
              href="https://www.linkedin.com/in/mugdha-patnaik-073b872a3/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto text-center inline-flex items-center justify-center bg-[#E96F98] text-[#171515] border-1.5 border-[#171515] rounded-full font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all shadow-none"
              style={{
                backgroundColor: '#E96F98',
                color: '#171515',
                border: '1.5px solid #171515',
                borderRadius: '9999px',
                padding: '8px 16px',
                fontSize: '12.5px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
              }}
            >
              LINKEDIN ↗
            </a>
          </div>

        </div>

        {/* LINE 1: COPYRIGHT */}
        <div 
          className="footer-copyright mt-4 md:mt-3 text-center md:text-left text-xs font-body font-normal tracking-wide"
          style={{
            marginTop: '16px',
            fontSize: '12px',
            color: '#E96F98',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 'normal',
          }}
        >
          © 2026 MUGDHA PATNAIK
        </div>

        {/* LINE 2: CREDIT (SEPARATE LINE UNDER COPYRIGHT) */}
        <div 
          className="footer-credit mt-1 text-center md:text-left text-xs font-body font-normal tracking-wide"
          style={{
            marginTop: '3px',
            fontSize: '12px',
            color: '#E96F98',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 'normal',
          }}
        >
          designed &amp; built with love and care &lt;3
        </div>

      </div>
    </footer>
  );
}
