import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'ABOUT', targetId: 'about', fallbackPath: '/about' },
    { name: 'ASSIGNMENTS', targetId: 'assignments', fallbackPath: '/work' },
    { name: 'PROJECTS', targetId: 'personal-projects', fallbackPath: '/personal' },
    { name: 'EXPERIENCE', targetId: 'experience', fallbackPath: '/experience' },
    { name: 'CONTACT', targetId: 'footer', fallbackPath: '/contact' },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      // Navigate to homepage first, then scroll after render
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(item.targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on homepage, smooth scroll directly
      const el = document.getElementById(item.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header">
      <div className="page-container">
        <div className="navbar-inner">
          
          {/* Logo / Brand Name */}
          <Link to="/" onClick={handleLogoClick} className="nav-brand-logo">
            MUGDHA
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="nav-menu-desktop">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.targetId}`}
                onClick={(e) => handleNavClick(e, item)}
                className="nav-link-anchor"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-toggle-mobile"
            aria-label="Toggle Navigation"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.targetId}`}
              onClick={(e) => handleNavClick(e, item)}
              className="mobile-nav-item"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
