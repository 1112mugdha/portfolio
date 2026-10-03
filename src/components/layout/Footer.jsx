import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '../../utils/assetPath';

const STICKERS_CONFIG = [
  {
    id: 'get_in_touch',
    src: 'images/footer_stickers/get_in_touch.png',
    alt: 'Get In Touch',
    initialDesktop: { xPct: 35, yPct: 20, width: 340 },
    initialMobile: { xPct: 15, yPct: 22, width: 250 },
    baseZIndex: 10,
  },
  {
    id: 'personal_email',
    src: 'images/footer_stickers/personal_email.png',
    alt: 'Personal Email',
    href: 'mailto:mugdhapatnaik1112@gmail.com',
    initialDesktop: { xPct: 8, yPct: 10, width: 250 },
    initialMobile: { xPct: 4, yPct: 8, width: 180 },
    isContact: true,
    baseZIndex: 15,
  },
  {
    id: 'college_email',
    src: 'images/footer_stickers/college_email.png',
    alt: 'College Email',
    href: 'mailto:sc24ucom006@mahindrauniversity.edu.in',
    initialDesktop: { xPct: 65, yPct: 12, width: 250 },
    initialMobile: { xPct: 46, yPct: 10, width: 180 },
    isContact: true,
    baseZIndex: 15,
  },
  {
    id: 'linkedin',
    src: 'images/footer_stickers/linkedin.png',
    alt: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mugdha-patnaik-073b872a3/',
    isExternal: true,
    initialDesktop: { xPct: 72, yPct: 56, width: 190 },
    initialMobile: { xPct: 48, yPct: 66, width: 140 },
    isContact: true,
    baseZIndex: 15,
  },
  {
    id: 'm_logo',
    src: 'images/footer_stickers/m_logo.png',
    alt: 'M Logo',
    initialDesktop: { xPct: 8, yPct: 50, width: 230 },
    initialMobile: { xPct: 4, yPct: 58, width: 160 },
    baseZIndex: 12,
  },
  {
    id: 'pink_sparkle_top',
    src: 'images/footer_stickers/pink_sparkle_top.png',
    alt: 'Pink Sparkle',
    initialDesktop: { xPct: 48, yPct: 6, width: 70 },
    initialMobile: { xPct: 45, yPct: 5, width: 50 },
    baseZIndex: 5,
  },
  {
    id: 'lime_sparkle_left',
    src: 'images/footer_stickers/lime_sparkle_left.png',
    alt: 'Lime Sparkle',
    initialDesktop: { xPct: 4, yPct: 32, width: 60 },
    initialMobile: { xPct: 4, yPct: 35, width: 45 },
    baseZIndex: 5,
  },
  {
    id: 'black_flower',
    src: 'images/footer_stickers/black_flower.png',
    alt: 'Black Flower',
    initialDesktop: { xPct: 24, yPct: 26, width: 65 },
    initialMobile: { xPct: 18, yPct: 30, width: 48 },
    baseZIndex: 5,
  },
  {
    id: 'pink_flower',
    src: 'images/footer_stickers/pink_flower.png',
    alt: 'Pink Flower',
    initialDesktop: { xPct: 73, yPct: 36, width: 60 },
    initialMobile: { xPct: 75, yPct: 40, width: 45 },
    baseZIndex: 5,
  },
  {
    id: 'asterisk_star',
    src: 'images/footer_stickers/asterisk_star.png',
    alt: 'Asterisk Star',
    initialDesktop: { xPct: 42, yPct: 72, width: 65 },
    initialMobile: { xPct: 38, yPct: 74, width: 48 },
    baseZIndex: 5,
  },
  {
    id: 'pink_sparkle_bottom',
    src: 'images/footer_stickers/pink_sparkle_bottom.png',
    alt: 'Pink Sparkle',
    initialDesktop: { xPct: 58, yPct: 68, width: 60 },
    initialMobile: { xPct: 56, yPct: 70, width: 45 },
    baseZIndex: 5,
  },
  {
    id: 'black_sparkle_right',
    src: 'images/footer_stickers/black_sparkle_right.png',
    alt: 'Black Sparkle',
    initialDesktop: { xPct: 88, yPct: 68, width: 50 },
    initialMobile: { xPct: 82, yPct: 72, width: 40 },
    baseZIndex: 5,
  },
];

export default function Footer() {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState({});
  const [zIndices, setZIndices] = useState({});
  const [topZ, setTopZ] = useState(30);
  const dragRef = useRef(null);

  // Initialize layout positions based on container width/height
  useEffect(() => {
    const calculateInitialPositions = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth || window.innerWidth;
      const h = containerRef.current.clientHeight || 380;
      const isMobile = w < 768;

      const initialPosMap = {};
      const initialZMap = {};

      STICKERS_CONFIG.forEach((s) => {
        const config = isMobile ? s.initialMobile : s.initialDesktop;
        const stickerWidth = config.width;
        
        // Calculate X & Y from percentage, clamped within container
        const x = Math.max(10, Math.min(w - stickerWidth - 10, (config.xPct / 100) * w));
        const y = Math.max(10, Math.min(h - (stickerWidth * 0.6) - 10, (config.yPct / 100) * h));

        initialPosMap[s.id] = { x, y, width: stickerWidth };
        initialZMap[s.id] = s.baseZIndex;
      });

      // Maintain existing dragged positions if user already moved some stickers
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
    const containerH = container ? container.clientHeight : 380;
    const stickerW = positions[id]?.width || 150;

    // Clamp within footer boundary
    const newX = Math.max(0, Math.min(containerW - stickerW, stickerStartX + dx));
    const newY = Math.max(0, Math.min(containerH - 40, stickerStartY + dy));

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
        height: '380px',
        minHeight: '380px',
        maxHeight: '380px',
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
        {STICKERS_CONFIG.map((sticker) => {
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
                className="w-full h-auto object-contain pointer-events-none select-none"
                draggable={false}
              />
            </div>
          );
        })}
      </div>
    </footer>
  );
}
