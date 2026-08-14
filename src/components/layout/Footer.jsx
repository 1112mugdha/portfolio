import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-element" id="footer">
      <div className="page-container">
        <div className="footer-inner-flex">
          
          {/* Brand Name Only (Tagline removed) */}
          <div>
            <Link to="/" className="footer-brand-title">
              MUGDHA PATNAIK
            </Link>
          </div>

          {/* Email Links Group */}
          <div className="footer-links-group">
            <a 
              href="mailto:mugdhapatnaik1112@gmail.com" 
              className="footer-link-item"
            >
              PERSONAL EMAIL ↗
            </a>
            <a 
              href="mailto:sc24ucom006@mahindrauniversity.edu.in" 
              className="footer-link-item"
            >
              COLLEGE EMAIL ↗
            </a>
          </div>

        </div>

        {/* Sub-bar */}
        <div className="footer-sub-bar">
          <span>© 2026 Mugdha Patnaik</span>
        </div>
      </div>
    </footer>
  );
}
