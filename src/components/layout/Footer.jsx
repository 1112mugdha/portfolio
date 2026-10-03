import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-element" id="footer">
      <div className="footer-inner-container">
        
        {/* MAIN ROW: MUGDHA on Far Left, Contact Buttons on Far Right */}
        <div className="footer-main-row">
          
          {/* MUGDHA - Far Left (Font size increased by +4-5px to 26px) */}
          <div className="footer-name">
            <Link 
              to="/" 
              className="font-heading font-bold text-2xl sm:text-3xl tracking-wider text-[#171515] hover:opacity-80 transition-opacity uppercase"
              style={{
                fontFamily: 'Mudstone Sans, sans-serif',
                fontWeight: 'bold',
                fontSize: '26px',
                color: '#171515',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              MUGDHA
            </Link>
          </div>

          {/* CONTACT GROUP - Far Right (Horizontal Pill Boxes on Desktop, Vertical Column on Mobile) */}
          <div className="footer-contact-group">
            {/* PERSONAL EMAIL BOX (Pink - Text size unchanged at 13px) */}
            <a 
              href="mailto:mugdhapatnaik1112@gmail.com" 
              className="footer-contact-item"
              style={{
                backgroundColor: '#E96F98',
                color: '#171515',
                border: '1.5px solid #171515',
                borderRadius: '9999px',
                padding: '9px 18px',
                fontSize: '13px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              PERSONAL EMAIL ↗
            </a>

            {/* STUDENT EMAIL BOX (Neon Lime / Chartreuse - Text size unchanged at 13px) */}
            <a 
              href="mailto:sc24ucom006@mahindrauniversity.edu.in" 
              className="footer-contact-item"
              style={{
                backgroundColor: '#D7F23A',
                color: '#171515',
                border: '1.5px solid #171515',
                borderRadius: '9999px',
                padding: '9px 18px',
                fontSize: '13px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              STUDENT EMAIL ↗
            </a>

            {/* LINKEDIN BOX (Pink - Text size unchanged at 13px) */}
            <a 
              href="https://www.linkedin.com/in/mugdha-patnaik-073b872a3/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-contact-item"
              style={{
                backgroundColor: '#E96F98',
                color: '#171515',
                border: '1.5px solid #171515',
                borderRadius: '9999px',
                padding: '9px 18px',
                fontSize: '13px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              LINKEDIN ↗
            </a>
          </div>

        </div>

        {/* LINE 1: COPYRIGHT (Font size increased by +4-5px to 16.5px) */}
        <div 
          className="footer-copyright"
          style={{
            marginTop: '20px',
            fontSize: '16.5px',
            color: '#E96F98',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 'normal',
          }}
        >
          © 2026 MUGDHA PATNAIK
        </div>

        {/* LINE 2: DESIGNED & BUILT WITH LOVE <3 (Font size increased by +4-5px to 16.5px) */}
        <div 
          className="footer-credit"
          style={{
            marginTop: '3px',
            fontSize: '16.5px',
            color: '#E96F98',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 'normal',
          }}
        >
          designed &amp; built with love &lt;3
        </div>

      </div>
    </footer>
  );
}
