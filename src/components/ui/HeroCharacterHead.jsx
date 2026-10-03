import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '../../utils/assetPath';

export default function HeroCharacterHead() {
  const containerRef = useRef(null);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  const targetPosRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);
  const isVisibleRef = useRef(true);

  // Natural Random Blinking Timer (Blinks every 3.5 to 6 seconds)
  useEffect(() => {
    let blinkTimeout;

    const scheduleBlink = () => {
      const delay = Math.random() * 2500 + 3500;
      blinkTimeout = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          scheduleBlink();
        }, 160);
      }, delay);
    };

    scheduleBlink();
    return () => clearTimeout(blinkTimeout);
  }, []);

  // IntersectionObserver to pause tracking when Hero is not visible
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (!entry.isIntersecting) {
          targetPosRef.current = { x: 0, y: 0 };
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Eye-Tracking Mouse Move & Lerp Loop
  useEffect(() => {
    // Disable interactive tracking on touch/mobile devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      if (!containerRef.current || !isVisibleRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      
      // Center of eyes in viewport (approx 53.7% width, 35.6% height of head container)
      const eyeCenterX = rect.left + rect.width * 0.537;
      const eyeCenterY = rect.top + rect.height * 0.356;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Max pupil movement distance in image pixels
      const maxDistance = 8.5;
      const factor = Math.min(dist / 360, 1);
      const angle = Math.atan2(dy, dx);

      const targetX = Math.cos(angle) * maxDistance * factor;
      const targetY = Math.sin(angle) * maxDistance * factor;

      targetPosRef.current = { x: targetX, y: targetY };
    };

    const handleMouseLeave = () => {
      targetPosRef.current = { x: 0, y: 0 };
    };

    const animateLoop = () => {
      if (isVisibleRef.current) {
        // Smooth linear interpolation (lerp)
        currentPosRef.current.x += (targetPosRef.current.x - currentPosRef.current.x) * 0.14;
        currentPosRef.current.y += (targetPosRef.current.y - currentPosRef.current.y) * 0.14;

        setPupilPos({
          x: currentPosRef.current.x,
          y: currentPosRef.current.y
        });
      }

      animFrameRef.current = requestAnimationFrame(animateLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animFrameRef.current = requestAnimationFrame(animateLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="hero-character-head-container select-none"
      aria-label="Mugdha Patnaik Character Avatar"
    >
      {/* 1. Original Character Head & Hair Base Image (Extracted from reference sheet) */}
      <img
        src={getAssetPath('images/character_head_base.png')}
        alt="Mugdha Patnaik Character Head"
        className="hero-character-head-img"
      />

      {/* 2. Interactive SVG Eye Layer (Positions pupils and blinking eyelids over exact eye sockets) */}
      <svg
        viewBox="0 0 470 630"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-character-eye-svg"
      >
        {/* Dynamic Eye Tracking Pupils (Left & Right) */}
        <g transform={`translate(${pupilPos.x}, ${pupilPos.y})`}>
          {/* Left Pupil */}
          <g>
            <ellipse cx="170" cy="227" rx="10.5" ry="12" fill="#1F1715" />
            <circle cx="166.5" cy="222.5" r="3.2" fill="#FFFFFF" />
            <circle cx="173" cy="230.5" r="1.5" fill="#FFFFFF" opacity="0.6" />
          </g>

          {/* Right Pupil */}
          <g>
            <ellipse cx="335" cy="222" rx="10.5" ry="12" fill="#1F1715" />
            <circle cx="331.5" cy="217.5" r="3.2" fill="#FFFFFF" />
            <circle cx="338" cy="225.5" r="1.5" fill="#FFFFFF" opacity="0.6" />
          </g>
        </g>

        {/* Eyelash Framing Overlay (Preserves exact original upper eyelash line on top of moving pupils) */}
        <g id="EyelashOverlay">
          {/* Left Upper Eyelash */}
          <path d="M 140 226 C 148 208 174 207 195 226" stroke="#171515" strokeWidth="4.2" strokeLinecap="round" fill="none" />
          <path d="M 188 214 L 199 209" stroke="#171515" strokeWidth="2.8" strokeLinecap="round" />

          {/* Right Upper Eyelash */}
          <path d="M 304 222 C 314 204 340 203 362 223" stroke="#171515" strokeWidth="4.2" strokeLinecap="round" fill="none" />
          <path d="M 355 210 L 366 205" stroke="#171515" strokeWidth="2.8" strokeLinecap="round" />
        </g>

        {/* Natural Blink Eyelids Overlay */}
        <g
          style={{
            transformOrigin: '252px 224px',
            transform: isBlinking ? 'scaleY(1)' : 'scaleY(0)',
            transition: 'transform 0.08s ease-in-out',
            opacity: isBlinking ? 1 : 0
          }}
        >
          {/* Left Closed Eyelid */}
          <path d="M 138 226 Q 168 248 197 226" fill="#F7CFB4" stroke="#171515" strokeWidth="4.2" strokeLinecap="round" />
          {/* Right Closed Eyelid */}
          <path d="M 302 222 Q 333 244 364 222" fill="#F7CFB4" stroke="#171515" strokeWidth="4.2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
