import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../../utils/assetPath';

const GRAVITY = 0.7;
const BOUNCE_FACTOR = 0.38;

const INITIAL_GRAVITY_ITEMS = [
  { id: 'logo', src: 'images/nav_logo_m.png', isLogo: true, width: 95, height: 50, restXPercent: 46, restY: 35, rot: -4, startDelay: 0 },
  { id: 'psp1', src: 'images/stickers/pink_sparkle_large.png', width: 34, height: 36, restXPercent: 6, restY: 25, rot: -14, startDelay: 100 },
  { id: 'lsp1', src: 'images/stickers/lime_sparkle_1.png', width: 24, height: 26, restXPercent: 18, restY: 55, rot: 14, startDelay: 180 },
  { id: 'bsp1', src: 'images/stickers/black_8point_star.png', width: 30, height: 32, restXPercent: 30, restY: 20, rot: -6, startDelay: 260 },
  { id: 'bfl1', src: 'images/stickers/black_flower_medium.png', width: 28, height: 28, restXPercent: 62, restY: 38, rot: 10, startDelay: 340 },
  { id: 'psp2', src: 'images/stickers/pink_double_sparkle.png', width: 32, height: 32, restXPercent: 75, restY: 22, rot: -18, startDelay: 420 },
  { id: 'lsp2', src: 'images/stickers/lime_wide_sparkle.png', width: 36, height: 34, restXPercent: 88, restY: 46, rot: 15, startDelay: 500 },
  { id: 'bfl2', src: 'images/stickers/black_flower_large.png', width: 32, height: 31, restXPercent: 12, restY: 95, rot: -10, startDelay: 580 },
  { id: 'pfl1', src: 'images/stickers/pink_flower_medium.png', width: 26, height: 25, restXPercent: 36, restY: 92, rot: -8, startDelay: 660 },
  { id: 'lfl1', src: 'images/stickers/lime_flower_medium.png', width: 28, height: 27, restXPercent: 68, restY: 88, rot: 12, startDelay: 740 },
  { id: 'bsp2', src: 'images/stickers/black_cross_sparkle.png', width: 30, height: 30, restXPercent: 84, restY: 102, rot: 20, startDelay: 820 },
];

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState(() =>
    INITIAL_GRAVITY_ITEMS.map((item) => ({
      ...item,
      xPercent: item.restXPercent,
      y: -120, // Start high above footer top
      vy: 0,
      rot: item.rot - 25, // Start with rotation offset
      vrot: 0,
      isFalling: false,
      isDragging: false,
      hasLanded: false,
      startTime: null,
    }))
  );

  const draggingState = useRef({
    activeId: null,
    pointerId: null,
    startClientX: 0,
    startClientY: 0,
    startItemXPercent: 0,
    startItemY: 0,
  });

  // 1. Trigger falling animation when footer enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.08 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Physics animation loop for falling & bouncing gravity
  useEffect(() => {
    if (!isVisible) return;

    let animFrameId;
    let startTimeStamp = null;

    const updatePhysics = (timestamp) => {
      if (!startTimeStamp) startTimeStamp = timestamp;
      const elapsed = timestamp - startTimeStamp;

      setItems((prevItems) =>
        prevItems.map((item) => {
          // Skip updating position if user is dragging this item
          if (item.isDragging) return item;

          // Check if item start delay has passed
          if (elapsed < item.startDelay && !item.hasLanded && item.y < 0) {
            return item;
          }

          let newY = item.y + item.vy;
          let newVy = item.vy + GRAVITY;
          let newRot = item.rot + (item.targetRot - item.rot) * 0.05;
          let landed = item.hasLanded;

          // Target resting Y level
          const targetY = item.restY;

          if (newY >= targetY) {
            newY = targetY;
            if (Math.abs(newVy) > 1.5) {
              newVy = -newVy * BOUNCE_FACTOR; // Bounce back up!
            } else {
              newVy = 0;
              landed = true;
              newRot = item.rot;
            }
          }

          return {
            ...item,
            y: newY,
            vy: newVy,
            rot: newRot,
            hasLanded: landed,
          };
        })
      );

      animFrameId = requestAnimationFrame(updatePhysics);
    };

    animFrameId = requestAnimationFrame(updatePhysics);

    return () => cancelAnimationFrame(animFrameId);
  }, [isVisible]);

  // 3. Pointer drag interactions for stickers & logo
  const handlePointerDown = (e, item) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      e.target.setPointerCapture(e.pointerId);
    } catch (err) {}

    draggingState.current = {
      activeId: item.id,
      pointerId: e.pointerId,
      startClientX: e.clientX,
      startClientY: e.clientY,
      startItemXPercent: item.xPercent,
      startItemY: item.y,
    };

    setItems((prev) =>
      prev.map((it) =>
        it.id === item.id ? { ...it, isDragging: true, vy: 0, hasLanded: false } : it
      )
    );
  };

  const handlePointerMove = (e, item) => {
    if (draggingState.current.activeId !== item.id) return;
    e.preventDefault();

    const footerEl = footerRef.current;
    if (!footerEl) return;
    const rect = footerEl.getBoundingClientRect();

    const deltaX = e.clientX - draggingState.current.startClientX;
    const deltaY = e.clientY - draggingState.current.startClientY;

    const deltaXPercent = (deltaX / rect.width) * 100;
    const newXPercent = Math.max(2, Math.min(92, draggingState.current.startItemXPercent + deltaXPercent));
    const newY = draggingState.current.startItemY + deltaY;

    setItems((prev) =>
      prev.map((it) =>
        it.id === item.id
          ? {
              ...it,
              xPercent: newXPercent,
              y: newY,
            }
          : it
      )
    );
  };

  const handlePointerUp = (e, item) => {
    if (draggingState.current.activeId !== item.id) return;
    draggingState.current.activeId = null;

    try {
      e.target.releasePointerCapture(e.pointerId);
    } catch (err) {}

    // Drop item back down with physics gravity on release
    setItems((prev) =>
      prev.map((it) =>
        it.id === item.id
          ? {
              ...it,
              isDragging: false,
              vy: 0, // Gravity takes over
              hasLanded: false,
            }
          : it
      )
    );
  };

  return (
    <footer
      ref={footerRef}
      className="footer-element relative overflow-hidden bg-[#F7F3EA] border-t-1.5 border-[#171515] pt-8 pb-8 select-none"
      id="footer"
    >
      <div className="page-container relative z-10">
        {/* Upper Playground Area for Falling Graphics & M Logo */}
        <div className="relative w-full h-[165px] sm:h-[180px] mb-6 overflow-hidden">
          {items.map((item) => (
            <div
              key={item.id}
              onPointerDown={(e) => handlePointerDown(e, item)}
              onPointerMove={(e) => handlePointerMove(e, item)}
              onPointerUp={(e) => handlePointerUp(e, item)}
              onPointerCancel={(e) => handlePointerUp(e, item)}
              className="absolute select-none cursor-grab active:cursor-grabbing transition-transform duration-75"
              style={{
                left: `${item.xPercent}%`,
                top: `${item.y}px`,
                width: `${item.width}px`,
                height: `${item.height}px`,
                transform: `rotate(${item.rot}deg)`,
                zIndex: item.isDragging ? 35 : item.isLogo ? 20 : 15,
                touchAction: 'none',
              }}
            >
              <img
                src={getAssetPath(item.src)}
                alt={item.isLogo ? "Mugdha Patnaik Logo" : "Decorative Sticker"}
                className="w-full h-full object-contain pointer-events-none select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Three Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto relative z-20">
          {/* 1. Personal Email */}
          <a
            href="mailto:mugdhapatnaik1112@gmail.com"
            className="contact-card-box block p-4 bg-[#FAF4EB] border-1.5 border-[#171515] rounded-lg shadow-[3px_3px_0px_#171515] hover:bg-[#FFFDF9] hover:border-[#E96F98] transition-all hover:-translate-y-0.5 cursor-pointer relative z-20"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E96F98] border border-[#171515] inline-block"></span>
                PERSONAL EMAIL
              </span>
              <span className="font-mono text-xs text-[#57534E]">↗</span>
            </div>
            <p className="font-mono text-xs text-[#171515] font-medium break-all">
              mugdhapatnaik1112@gmail.com
            </p>
          </a>

          {/* 2. College Email */}
          <a
            href="mailto:sc24ucom006@mahindrauniversity.edu.in"
            className="contact-card-box block p-4 bg-[#FAF4EB] border-1.5 border-[#171515] rounded-lg shadow-[3px_3px_0px_#171515] hover:bg-[#FFFDF9] hover:border-[#D7F23A] transition-all hover:-translate-y-0.5 cursor-pointer relative z-20"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D7F23A] border border-[#171515] inline-block"></span>
                COLLEGE EMAIL
              </span>
              <span className="font-mono text-xs text-[#57534E]">↗</span>
            </div>
            <p className="font-mono text-xs text-[#171515] font-medium break-all">
              sc24ucom006@mahindrauniversity.edu.in
            </p>
          </a>

          {/* 3. LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mugdha-patnaik-073b872a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card-box block p-4 bg-[#FAF4EB] border-1.5 border-[#171515] rounded-lg shadow-[3px_3px_0px_#171515] hover:bg-[#FFFDF9] hover:border-[#E96F98] transition-all hover:-translate-y-0.5 cursor-pointer relative z-20"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#171515] inline-block"></span>
                LINKEDIN
              </span>
              <span className="font-mono text-xs text-[#57534E]">↗</span>
            </div>
            <p className="font-mono text-xs text-[#171515] font-medium break-all">
              https://www.linkedin.com/in/mugdha-patnaik-073b872a3/
            </p>
          </a>
        </div>

        {/* Copyright Sub-bar */}
        <div className="mt-8 pt-4 border-t border-[#171515]/15 text-center font-mono text-xs text-[#57534E]">
          <span>© 2026 Mugdha Patnaik</span>
        </div>
      </div>
    </footer>
  );
}
