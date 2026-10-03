import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '../../utils/assetPath';

export default function HeroCharacterHead() {
  const containerRef = useRef(null);
  const [eyeballPos, setEyeballPos] = useState({ x: 0, y: 0 });

  const targetPosRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);
  const isVisibleRef = useRef(true);

  // IntersectionObserver to pause animation loop when Hero is not visible
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

  // Mouse Tracking Logic for Provided Separate Eyeball Assets
  useEffect(() => {
    // Disable mouse tracking on mobile / touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      if (!containerRef.current || !isVisibleRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      // Center point between eyes in viewport space (approx 50.6% width, 41% height)
      const eyeCenterX = rect.left + rect.width * 0.506;
      const eyeCenterY = rect.top + rect.height * 0.41;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Subtle movement range: Max 6.5px offset so eyeballs NEVER leave the eye whites
      const maxDistance = 6.5;
      const factor = Math.min(dist / 380, 1);
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
        currentPosRef.current.x += (targetPosRef.current.x - currentPosRef.current.x) * 0.12;
        currentPosRef.current.y += (targetPosRef.current.y - currentPosRef.current.y) * 0.12;

        setEyeballPos({
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
      {/* 1. Base Character Head Asset (Exact head provided by user with gold earrings and clean eye whites) */}
      <img
        src={getAssetPath('images/character_head_clean.png')}
        alt="Mugdha Patnaik Character"
        className="hero-character-head-img"
      />

      {/* 2. Provided Eyeball Assets Layer (Positions left & right separate eyeballs starting perfectly centered) */}
      <div className="hero-eyeballs-layer">
        {/* Left Eyeball Asset */}
        <div
          className="hero-single-eyeball hero-eyeball-left"
          style={{
            transform: `translate(calc(-50% + ${eyeballPos.x}px), calc(-50% + ${eyeballPos.y}px))`
          }}
        >
          <img
            src={getAssetPath('images/eyeball_exact.png')}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Eyeball Asset */}
        <div
          className="hero-single-eyeball hero-eyeball-right"
          style={{
            transform: `translate(calc(-50% + ${eyeballPos.x}px), calc(-50% + ${eyeballPos.y}px))`
          }}
        >
          <img
            src={getAssetPath('images/eyeball_exact.png')}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
