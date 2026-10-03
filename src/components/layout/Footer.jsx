import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { getAssetPath } from '../../utils/assetPath';

export default function Footer() {
  const containerRef = useRef(null);
  const [bodyTransforms, setBodyTransforms] = useState({});
  const [reducedMotion, setReducedMotion] = useState(false);

  // Contact cards data
  const contactBoxes = [
    {
      id: 'card-personal-email',
      label: 'PERSONAL EMAIL',
      value: 'mugdhapatnaik1112@gmail.com',
      href: 'mailto:mugdhapatnaik1112@gmail.com',
      badgeColor: '#E96F98',
      initialPos: { xRatio: 0.22, yRatio: 0.35 },
      size: { width: 260, height: 75 },
    },
    {
      id: 'card-college-email',
      label: 'COLLEGE EMAIL',
      value: 'sc24ucom006@mahindrauniversity.edu.in',
      href: 'mailto:sc24ucom006@mahindrauniversity.edu.in',
      badgeColor: '#D7F23A',
      initialPos: { xRatio: 0.50, yRatio: 0.22 },
      size: { width: 290, height: 75 },
    },
    {
      id: 'card-linkedin',
      label: 'LINKEDIN',
      value: 'https://www.linkedin.com/in/mugdha-patnaik-073b872a3/',
      href: 'https://www.linkedin.com/in/mugdha-patnaik-073b872a3/',
      isExternal: true,
      badgeColor: '#171515',
      initialPos: { xRatio: 0.78, yRatio: 0.35 },
      size: { width: 290, height: 75 },
    },
  ];

  // Dashboard graphics stickers & logo
  const graphicsItems = [
    { id: 'logo', src: 'images/nav_logo_m.png', isLogo: true, size: { width: 95, height: 50 }, xRatio: 0.50, yRatio: 0.10 },
    { id: 'psp1', src: 'images/stickers/pink_sparkle_large.png', size: { width: 36, height: 38 }, xRatio: 0.10, yRatio: 0.15 },
    { id: 'lsp1', src: 'images/stickers/lime_sparkle_1.png', size: { width: 26, height: 28 }, xRatio: 0.28, yRatio: 0.12 },
    { id: 'bsp1', src: 'images/stickers/black_8point_star.png', size: { width: 32, height: 35 }, xRatio: 0.38, yRatio: 0.16 },
    { id: 'bfl1', src: 'images/stickers/black_flower_medium.png', size: { width: 28, height: 28 }, xRatio: 0.64, yRatio: 0.14 },
    { id: 'psp2', src: 'images/stickers/pink_double_sparkle.png', size: { width: 34, height: 34 }, xRatio: 0.75, yRatio: 0.12 },
    { id: 'lsp2', src: 'images/stickers/lime_wide_sparkle.png', size: { width: 38, height: 36 }, xRatio: 0.90, yRatio: 0.16 },
    { id: 'bfl2', src: 'images/stickers/black_flower_large.png', size: { width: 32, height: 31 }, xRatio: 0.14, yRatio: 0.45 },
    { id: 'pfl1', src: 'images/stickers/pink_flower_medium.png', size: { width: 26, height: 25 }, xRatio: 0.36, yRatio: 0.48 },
    { id: 'lfl1', src: 'images/stickers/lime_flower_medium.png', size: { width: 30, height: 29 }, xRatio: 0.64, yRatio: 0.48 },
    { id: 'bsp2', src: 'images/stickers/black_cross_sparkle.png', size: { width: 32, height: 32 }, xRatio: 0.86, yRatio: 0.45 },
  ];

  useEffect(() => {
    // 1. Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 540;

    // 2. Initialize Matter.js Physics Engine
    const { Engine, World, Bodies, Body, Mouse, MouseConstraint } = Matter;
    const engine = Engine.create({
      gravity: { x: 0, y: 0.8, scale: 0.001 },
    });

    // Static Boundaries (Walls & Floor)
    const wallOptions = { isStatic: true, friction: 0.6, restitution: 0.45 };
    const floor = Bodies.rectangle(width / 2, height + 25, width * 2, 50, wallOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height * 2, wallOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height * 2, wallOptions);
    const ceiling = Bodies.rectangle(width / 2, -150, width * 2, 50, wallOptions);

    World.add(engine.world, [floor, leftWall, rightWall, ceiling]);

    const bodiesMap = {};

    // 3. Add Contact Cards as Physical Bodies
    contactBoxes.forEach((card) => {
      const isMobile = width < 768;
      const cardWidth = isMobile ? Math.min(card.size.width, width * 0.9) : card.size.width;
      const cardHeight = card.size.height;
      const posX = Math.max(cardWidth / 2 + 10, Math.min(width - cardWidth / 2 - 10, width * card.initialPos.xRatio));
      const posY = height * (isMobile ? card.initialPos.yRatio * 0.8 : card.initialPos.yRatio);

      const body = Bodies.rectangle(posX, posY, cardWidth, cardHeight, {
        chamfer: { radius: 8 },
        friction: 0.4,
        restitution: 0.35,
        density: 0.002,
        angularDamping: 0.08,
      });
      bodiesMap[card.id] = body;
      World.add(engine.world, body);
    });

    // 4. Add Logo & Stickers as Physical Bodies
    graphicsItems.forEach((item) => {
      const posX = Math.max(30, Math.min(width - 30, width * item.xRatio));
      const posY = height * item.yRatio;

      let body;
      if (item.isLogo) {
        body = Bodies.rectangle(posX, posY, item.size.width, item.size.height, {
          chamfer: { radius: 10 },
          friction: 0.3,
          restitution: 0.45,
          density: 0.0015,
        });
      } else {
        body = Bodies.circle(posX, posY, Math.max(item.size.width, item.size.height) / 2, {
          friction: 0.2,
          restitution: 0.55,
          density: 0.001,
        });
      }
      bodiesMap[item.id] = body;
      World.add(engine.world, body);
    });

    // 5. Mouse & Touch Dragging Constraint
    const mouse = Mouse.create(container);
    // Remove element listeners so scrolling is NOT prevented when touching empty background
    mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);
    mouse.element.removeEventListener('touchstart', mouse.touchstart);
    mouse.element.removeEventListener('touchmove', mouse.touchmove);
    mouse.element.removeEventListener('touchend', mouse.touchend);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.75,
        damping: 0.1,
        render: { visible: false },
      },
    });

    World.add(engine.world, mouseConstraint);

    // 6. Click vs Drag Detection for Contact Cards
    let pointerDownInfo = null;

    const handlePointerDownContainer = (e) => {
      pointerDownInfo = {
        x: e.clientX,
        y: e.clientY,
        time: Date.now(),
        targetId: e.target.closest('[data-physics-id]')?.getAttribute('data-physics-id'),
      };
    };

    const handlePointerUpContainer = (e) => {
      if (!pointerDownInfo) return;
      const dx = e.clientX - pointerDownInfo.x;
      const dy = e.clientY - pointerDownInfo.y;
      const dist = Math.hypot(dx, dy);
      const duration = Date.now() - pointerDownInfo.time;

      // If clicked/tapped without meaningful drag (dist < 8px and duration < 300ms)
      if (dist < 8 && duration < 300 && pointerDownInfo.targetId) {
        const card = contactBoxes.find((c) => c.id === pointerDownInfo.targetId);
        if (card) {
          if (card.isExternal) {
            window.open(card.href, '_blank', 'noopener,noreferrer');
          } else {
            window.location.href = card.href;
          }
        }
      }
      pointerDownInfo = null;
    };

    container.addEventListener('pointerdown', handlePointerDownContainer);
    window.addEventListener('pointerup', handlePointerUpContainer);

    // 7. Render Loop Syncing DOM Elements with Matter.js Bodies
    let animationFrameId;
    const renderLoop = () => {
      Engine.update(engine, 1000 / 60);

      const transforms = {};
      Object.keys(bodiesMap).forEach((id) => {
        const b = bodiesMap[id];
        transforms[id] = {
          x: b.position.x,
          y: b.position.y,
          angle: b.angle,
        };
      });

      setBodyTransforms(transforms);
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    // 8. Responsive Window Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      Body.setPosition(floor, { x: newWidth / 2, y: newHeight + 25 });
      Body.setPosition(rightWall, { x: newWidth + 25, y: newHeight / 2 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointerdown', handlePointerDownContainer);
      window.removeEventListener('pointerup', handlePointerUpContainer);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [reducedMotion]);

  return (
    <footer
      className="footer-element relative bg-[#F7F3EA] border-t-1.5 border-[#171515] overflow-hidden select-none"
      id="footer"
    >
      <div className="page-container py-6">
        {/* Main 2D Physics Playground Canvas Container */}
        <div
          ref={containerRef}
          className="relative w-full h-[520px] sm:h-[560px] overflow-hidden rounded-xl border border-[#171515]/20 bg-[#FAF4EB]/60 shadow-inner"
        >
          {/* Subtle Background Playful Hint */}
          <div className="absolute top-4 left-6 pointer-events-none select-none">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515]/40">
              PHYSICS PLAYGROUND — GRAB & THROW ANYTHING :)
            </span>
          </div>

          {/* Render All Contact Cards as Physics Objects */}
          {contactBoxes.map((card) => {
            const transform = bodyTransforms[card.id];
            const posX = transform ? transform.x : 0;
            const posY = transform ? transform.y : 0;
            const angle = transform ? transform.angle : 0;

            return (
              <div
                key={card.id}
                data-physics-id={card.id}
                className="absolute p-3.5 bg-[#FAF4EB] border-1.5 border-[#171515] rounded-lg shadow-[3px_3px_0px_#171515] cursor-grab active:cursor-grabbing hover:border-[#E96F98] transition-colors select-none"
                style={{
                  width: `${card.size.width}px`,
                  height: `${card.size.height}px`,
                  left: 0,
                  top: 0,
                  transform: transform
                    ? `translate3d(${posX - card.size.width / 2}px, ${posY - card.size.height / 2}px, 0px) rotate(${angle}rad)`
                    : 'translate3d(-999px, -999px, 0px)',
                  touchAction: 'none',
                  zIndex: 20,
                }}
              >
                <div className="flex items-center justify-between mb-1 pointer-events-none">
                  <span className="font-heading font-bold text-[11px] uppercase tracking-widest text-[#171515] flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full border border-[#171515] inline-block"
                      style={{ backgroundColor: card.badgeColor }}
                    />
                    {card.label}
                  </span>
                  <span className="font-mono text-xs text-[#57534E]">↗</span>
                </div>
                <p className="font-mono text-[11px] text-[#171515] font-medium break-all pointer-events-none leading-tight">
                  {card.value}
                </p>
              </div>
            );
          })}

          {/* Render Logo & Stickers as Physics Objects */}
          {graphicsItems.map((item) => {
            const transform = bodyTransforms[item.id];
            const posX = transform ? transform.x : 0;
            const posY = transform ? transform.y : 0;
            const angle = transform ? transform.angle : 0;

            return (
              <div
                key={item.id}
                data-physics-id={item.id}
                className="absolute cursor-grab active:cursor-grabbing select-none"
                style={{
                  width: `${item.size.width}px`,
                  height: `${item.size.height}px`,
                  left: 0,
                  top: 0,
                  transform: transform
                    ? `translate3d(${posX - item.size.width / 2}px, ${posY - item.size.height / 2}px, 0px) rotate(${angle}rad)`
                    : 'translate3d(-999px, -999px, 0px)',
                  touchAction: 'none',
                  zIndex: item.isLogo ? 25 : 15,
                }}
              >
                <img
                  src={getAssetPath(item.src)}
                  alt={item.isLogo ? "Mugdha Patnaik Logo" : "Sticker"}
                  className="w-full h-full object-contain pointer-events-none select-none"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {/* Copyright Sub-bar */}
        <div className="mt-4 pt-3 border-t border-[#171515]/15 text-center font-mono text-xs text-[#57534E]">
          <span>© 2026 Mugdha Patnaik</span>
        </div>
      </div>
    </footer>
  );
}
