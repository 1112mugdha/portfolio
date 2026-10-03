import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer 
      className="footer-element bg-[#FAF4EB] border-t-1.5 border-[#171515] select-none" 
      id="footer"
      style={{
        boxSizing: 'border-box',
        backgroundColor: '#FAF4EB',
        borderTop: '1.5px solid #171515',
        paddingTop: '28px',
        paddingBottom: '24px',
      }}
    >
      <div className="page-container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* MAIN ROW: MUGDHA on Far Left, Contact Buttons on Far Right */}
        <div 
          className="flex flex-col md:flex-row items-center justify-between gap-5 w-full"
          style={{
            width: '100%',
          }}
        >
          {/* MUGDHA - Far Left */}
          <Link 
            to="/" 
            className="font-heading font-bold tracking-wider text-[#171515] hover:opacity-80 transition-opacity uppercase flex-shrink-0"
            style={{
              fontFamily: 'Mudstone Sans, sans-serif',
              fontWeight: 'bold',
              fontSize: '22px',
              color: '#171515',
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}
          >
            MUGDHA
          </Link>

          {/* CONTACT GROUP - Far Right (Horizontal Pill Boxes, 10-15% Larger) */}
          <div 
            className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end gap-3"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            {/* PERSONAL EMAIL BOX (Pink) */}
            <a 
              href="mailto:mugdhapatnaik1112@gmail.com" 
              className="inline-flex items-center justify-center bg-[#E96F98] text-[#171515] border-1.5 border-[#171515] rounded-full font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all shadow-none"
              style={{
                backgroundColor: '#E96F98',
                color: '#171515',
                border: '1.5px solid #171515',
                borderRadius: '9999px',
                padding: '9px 19px',
                fontSize: '13.5px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              PERSONAL EMAIL ↗
            </a>

            {/* STUDENT EMAIL BOX (Neon Lime / Chartreuse) */}
            <a 
              href="mailto:sc24ucom006@mahindrauniversity.edu.in" 
              className="inline-flex items-center justify-center bg-[#D7F23A] text-[#171515] border-1.5 border-[#171515] rounded-full font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all shadow-none"
              style={{
                backgroundColor: '#D7F23A',
                color: '#171515',
                border: '1.5px solid #171515',
                borderRadius: '9999px',
                padding: '9px 19px',
                fontSize: '13.5px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              STUDENT EMAIL ↗
            </a>

            {/* LINKEDIN BOX (Pink) */}
            <a 
              href="https://www.linkedin.com/in/mugdha-patnaik-073b872a3/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-[#E96F98] text-[#171515] border-1.5 border-[#171515] rounded-full font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all shadow-none"
              style={{
                backgroundColor: '#E96F98',
                color: '#171515',
                border: '1.5px solid #171515',
                borderRadius: '9999px',
                padding: '9px 19px',
                fontSize: '13.5px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              LINKEDIN ↗
            </a>
          </div>

        </div>

        {/* COPYRIGHT LINE (Pink, Body Font, Full Name MUGDHA PATNAIK) */}
        <div 
          className="mt-6 text-center md:text-left font-body font-normal tracking-wide"
          style={{
            marginTop: '20px',
            fontSize: '13px',
            color: '#E96F98',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 'normal',
          }}
        >
          © 2026 MUGDHA PATNAIK · designed &amp; built with love and care &lt;3
        </div>

      </div>
    </footer>
  );
}
