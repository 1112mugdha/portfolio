import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '../../utils/assetPath';

const MOVABLE_STICKERS_CONFIG = [
  // Contact stickers
  {
    id: 'personal_email',
    src: 'images/footer_stickers/personal_email.png',
    alt: 'Personal Email',
    href: 'mailto:mugdhapatnaik1112@gmail.com',
    initialDesktop: { xPct: 8, yPct: 12, width: 220 },
    initialMobile: { xPct: 4, yPct: 8, width: 160 },
    isContact: true,
    baseZIndex: 15,
  },
  {
    id: 'college_email',
    src: 'images/footer_stickers/college_email.png',
    alt: 'College Email',
    href: 'mailto:sc24ucom006@mahindrauniversity.edu.in',
    initialDesktop: { xPct: 68, yPct: 14, width: 210 },
    initialMobile: { xPct: 48, yPct: 10, width: 150 },
    isContact: true,
    baseZIndex: 15,
  },
  {
    id: 'linkedin',
    src: 'images/footer_stickers/linkedin.png',
    alt: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mugdha-patnaik-073b872a3/',
    isExternal: true,
    initialDesktop: { xPct: 70, yPct: 56, width: 170 },
    initialMobile: { xPct: 50, yPct: 68, width: 130 },
    isContact: true,
    baseZIndex: 15,
  },
  {
    id: 'm_logo',
    src: 'images/footer_stickers/m_logo.png',
    alt: 'M Logo',
    initialDesktop: { xPct: 84, yPct: 28, width: 140 },
    initialMobile: { xPct: 74, yPct: 35, width: 100 },
    baseZIndex: 12,
  },

  // Decorative Flowers & Sparkles
  {
    id: 'pink_flower',
    src: 'images/footer_stickers/pink_flower.png',
    alt: 'Pink Flower',
    initialDesktop: { xPct: 5, yPct: 55, width: 55 },
    initialMobile: { xPct: 4, yPct: 60, width: 42 },
    baseZIndex: 5,
  },
  {
    id: 'lime_flower',
    src: 'images/footer_stickers/lime_flower.png',
    alt: 'Lime Flower',
    initialDesktop: { xPct: 18, yPct: 72, width: 55 },
    initialMobile: { xPct: 18, yPct: 75, width: 42 },
    baseZIndex: 5,
  },
  {
    id: 'black_flower',
    src: 'images/footer_stickers/black_flower.png',
    alt: 'Black Flower',
    initialDesktop: { xPct: 28, yPct: 10, width: 55 },
    initialMobile: { xPct: 28, yPct: 6, width: 42 },
    baseZIndex: 5,
  },
  {
    id: 'pink_sparkle',
    src: 'images/footer_stickers/pink_sparkle.png',
    alt: 'Pink Sparkle',
    initialDesktop: { xPct: 60, yPct: 8, width: 50 },
    initialMobile: { xPct: 40, yPct: 4, width: 38 },
    baseZIndex: 5,
  },
  {
    id: 'lime_sparkle',
    src: 'images/footer_stickers/lime_sparkle.png',
    alt: 'Lime Sparkle',
    initialDesktop: { xPct: 34, yPct: 72, width: 50 },
    initialMobile: { xPct: 35, yPct: 76, width: 38 },
    baseZIndex: 5,
  },
  {
    id: 'cream_sparkle',
    src: 'images/footer_stickers/cream_sparkle.png',
    alt: 'Cream Sparkle',
    initialDesktop: { xPct: 15, yPct: 38, width: 50 },
    initialMobile: { xPct: 8, yPct: 38, width: 38 },
    baseZIndex: 5,
  },
  {
    id: 'asterisk_star',
    src: 'images/footer_stickers/asterisk_star.png',
    alt: 'Asterisk Star',
    initialDesktop: { xPct: 48, yPct: 72, width: 52 },
    initialMobile: { xPct: 48, yPct: 76, width: 40 },
    baseZIndex: 5,
  },
  {
    id: 'pink_dot',
    src: 'images/footer_stickers/pink_dot.png',
    alt: 'Pink Dot',
    initialDesktop: { xPct: 58, yPct: 75, width: 30 },
    initialMobile: { xPct: 62, yPct: 78, width: 24 },
    baseZIndex: 5,
  },
  {
    id: 'lime_dot',
    src: 'images/footer_stickers/lime_dot.png',
    alt: 'Lime Dot',
    initialDesktop: { xPct: 63, yPct: 75, width: 28 },
    initialMobile: { xPct: 68, yPct: 78, width: 22 },
    baseZIndex: 5,
  },
  {
    id: 'black_dot',
    src: 'images/footer_stickers/black_dot.png',
    alt: 'Black Dot',
    initialDesktop: { xPct: 67, yPct: 75, width: 28 },
    initialMobile: { xPct: 74, yPct: 78, width: 22 },
    baseZIndex: 5,
  },
  {
    id: 'pink_sparkle_2',
    src: 'images/footer_stickers/pink_sparkle_2.png',
    alt: 'Pink Sparkle',
    initialDesktop: { xPct: 88, yPct: 70, width: 42 },
    initialMobile: { xPct: 82, yPct: 74, width: 32 },
    baseZIndex: 5,
  },
  {
    id: 'lime_sparkle_2',
    src: 'images/footer_stickers/lime_sparkle_2.png',
    alt: 'Lime Sparkle',
    initialDesktop: { xPct: 93, yPct: 50, width: 40 },
    initialMobile: { xPct: 88, yPct: 55, width: 30 },
    baseZIndex: 5,
  },
  {
    id: 'black_sparkle_2',
    src: 'images/footer_stickers/black_sparkle_2.png',
    alt: 'Black Sparkle',
    initialDesktop: { xPct: 92, yPct: 15, width: 40 },
    initialMobile: { xPct: 88, yPct: 15, width: 30 },
    baseZIndex: 5,
  },
];

export default function Footer() {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState({});
  const [zIndices, setZIndices] = useState({});
  const [topZ, setTopZ] = useState(30);
  const dragRef = useRef(null);

  // Initialize movable sticker positions
  useEffect(() => {
    const calculateInitialPositions = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth || window.innerWidth;
      const h = containerRef.current.clientHeight || 320;
      const isMobile = w < 768;

      const initialPosMap = {};
      const initialZMap = {};

      MOVABLE_STICKERS_CONFIG.forEach((s) => {
        const config = isMobile ? s.initialMobile : s.initialDesktop;
        const stickerWidth = config.width;

        const x = Math.max(10, Math.min(w - stickerWidth - 10, (config.xPct / 100) * w));
        const y = Math.max(10, Math.min(h - (stickerWidth * 0.6) - 10, (config.yPct / 100) * h));

        initialPosMap[s.id] = { x, y, width: stickerWidth };
        initialZMap[s.id] = s.baseZIndex;
      });

      setPositions((prev) => (Object.keys(prev).length === 0 ? initialPosMap : prev));
      setZIndices((prev) => (Object.keys(prev).length === 0 ? initialZMap : prev));
    };

    calculateInitialPositions();
    window.addEventListener('resize', calculateInitialPositions);
    return () => window.removeEventListener('resize', calculateInitialPositions);
  }, []);

  const handlePointerDown = (e, sticker) => {
    e.preventDefault();
    const targetEl = e.currentTarget;
    const clientX = e.clientX;
    const clientY = e.clientY;

    const currentPos = positions[sticker.id] || { x: 0, y: 0 };
    const nextZ = topZ + 1;
    setTopZ(nextZ);
    setZIndices((prev) => ({ ...prev, [sticker.id]: nextZ }));

    dragRef.current = {
      id: sticker.id,
      pointerId: e.pointerId,
      startX: clientX,
      startY: clientY,
      stickerStartX: currentPos.x,
      stickerStartY: currentPos.y,
      startTime: Date.now(),
      sticker,
    };

    try {
      targetEl.setPointerCapture(e.pointerId);
    } catch (err) {}
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current || dragRef.current.pointerId !== e.pointerId) return;
    e.preventDefault();

    const { id, startX, startY, stickerStartX, stickerStartY } = dragRef.current;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    const container = containerRef.current;
    const containerW = container ? container.clientWidth : window.innerWidth;
    const containerH = container ? container.clientHeight : 320;
    const stickerW = positions[id]?.width || 100;

    const newX = Math.max(0, Math.min(containerW - stickerW, stickerStartX + dx));
    const newY = Math.max(0, Math.min(containerH - 35, stickerStartY + dy));

    setPositions((prev) => ({
      ...prev,
      [id]: { ...prev[id], x: newX, y: newY },
    }));
  };

  const handlePointerUp = (e) => {
    if (!dragRef.current || dragRef.current.pointerId !== e.pointerId) return;

    const { startX, startY, startTime, sticker } = dragRef.current;
    const targetEl = e.currentTarget;

    try {
      targetEl.releasePointerCapture(e.pointerId);
    } catch (err) {}

    const dist = Math.hypot(e.clientX - startX, e.clientY - startY);
    const duration = Date.now() - startTime;

    // Click vs Drag discrimination for Contact stickers
    if (sticker.isContact && dist < 6 && duration < 250) {
      if (sticker.isExternal) {
        window.open(sticker.href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = sticker.href;
      }
    }

    dragRef.current = null;
  };

  return (
    <footer
      className="footer-element relative bg-[#FAF4EB] border-t-1.5 border-[#171515] overflow-hidden select-none"
      style={{
        height: '320px',
        minHeight: '320px',
        maxHeight: '320px',
        boxSizing: 'border-box',
        position: 'relative',
      }}
      id="footer"
    >
      <div
        ref={containerRef}
        className="relative w-full h-full overflow-hidden bg-[#FAF4EB] touch-none select-none"
        style={{ boxSizing: 'border-box' }}
      >
        {/* FIXED Central GET IN TOUCH Sticker (NOT Movable) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-10"
          style={{ width: 'min(310px, 75vw)' }}
        >
          <img
            src={getAssetPath('images/footer_stickers/get_in_touch.png')}
            alt="Get In Touch"
            className="w-full h-auto object-contain select-none"
            draggable={false}
          />
        </div>

        {/* MOVABLE Stickers (Dashboard Draggable Behavior) */}
        {MOVABLE_STICKERS_CONFIG.map((sticker) => {
          const pos = positions[sticker.id];
          const zIndex = zIndices[sticker.id] || sticker.baseZIndex;
          if (!pos) return null;

          return (
            <div
              key={sticker.id}
              className={`absolute cursor-grab active:cursor-grabbing select-none touch-none ${
                sticker.isContact ? 'hover:scale-[1.03] transition-transform' : ''
              }`}
              style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                width: `${pos.width}px`,
                zIndex,
                touchAction: 'none',
              }}
              onPointerDown={(e) => handlePointerDown(e, sticker)}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              <img
                src={getAssetPath(sticker.src)}
                alt={sticker.alt}
                className="w-full h-full object-contain pointer-events-none select-none"
                draggable={false}
              />
            </div>
          );
        })}
      </div>
    </footer>
  );
}
