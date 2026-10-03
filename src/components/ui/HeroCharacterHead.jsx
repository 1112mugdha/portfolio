import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '../../utils/assetPath';

export default function HeroCharacterHead() {
  const containerRef = useRef(null);
  const [irisPos, setIrisPos] = useState({ x: 0, y: 0 });

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

  // Mouse Tracking Logic for Provided Separate Iris Assets
  useEffect(() => {
    // Disable mouse tracking on mobile / touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      if (!containerRef.current || !isVisibleRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      // Center point between eyes in viewport space (approx 56% width, 56.5% height of container)
      const eyeCenterX = rect.left + rect.width * 0.56;
      const eyeCenterY = rect.top + rect.height * 0.565;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Subtle movement range: Max 5.2px offset so irises NEVER leave the blank eye whites
      const maxDistance = 5.2;
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

        setIrisPos({
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
      {/* 1. Base Character Head Asset (Exact head provided by user with completely blank eye whites) */}
      <img
        src={getAssetPath('images/character_head_blank.png')}
        alt="Mugdha Patnaik Character"
        className="hero-character-head-img"
      />

      {/* 2. Provided Iris Assets Layer (Positions left & right separate irises starting perfectly centered) */}
      <div className="hero-eyeballs-layer">
        {/* Left Iris Asset */}
        <div
          className="hero-single-eyeball hero-iris-left"
          style={{
            transform: `translate(calc(-50% + ${irisPos.x}px), calc(-50% + ${irisPos.y}px))`
          }}
        >
          <img
            src={getAssetPath('images/iris_exact.png')}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Iris Asset */}
        <div
          className="hero-single-eyeball hero-iris-right"
          style={{
            transform: `translate(calc(-50% + ${irisPos.x}px), calc(-50% + ${irisPos.y}px))`
          }}
        >
          <img
            src={getAssetPath('images/iris_exact.png')}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
