import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { getAssetPath } from '../../utils/assetPath';

export default function Footer() {
  const containerRef = useRef(null);
  const engineRef = useRef(null);
  const [bodyTransforms, setBodyTransforms] = useState({});
  const [reducedMotion, setReducedMotion] = useState(false);

  // 1. Contact cards data
  const contactBoxes = [
    {
      id: 'card-personal-email',
      label: 'PERSONAL EMAIL ↗',
      value: 'mugdhapatnaik1112@gmail.com',
      href: 'mailto:mugdhapatnaik1112@gmail.com',
      badgeColor: '#E96F98',
      initialPos: { xRatio: 0.22, yRatio: 0.72 },
      size: { width: 250, height: 68 },
    },
    {
      id: 'card-college-email',
      label: 'COLLEGE EMAIL ↗',
      value: 'sc24ucom006@mahindrauniversity.edu.in',
      href: 'mailto:sc24ucom006@mahindrauniversity.edu.in',
      badgeColor: '#D7F23A',
      initialPos: { xRatio: 0.50, yRatio: 0.72 },
      size: { width: 290, height: 68 },
    },
    {
      id: 'card-linkedin',
      label: 'LINKEDIN ↗',
      value: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mugdha-patnaik-073b872a3/',
      isExternal: true,
      badgeColor: '#171515',
      initialPos: { xRatio: 0.78, yRatio: 0.72 },
      size: { width: 180, height: 68 },
    },
  ];

  // 2. Dashboard graphics stickers & logo
  const graphicsItems = [
    { id: 'logo', src: 'images/nav_logo_m.png', isLogo: true, size: { width: 95, height: 50 }, xRatio: 0.50, yRatio: 0.25 },
    { id: 'psp1', src: 'images/stickers/pink_sparkle_large.png', size: { width: 36, height: 38 }, xRatio: 0.12, yRatio: 0.28 },
    { id: 'lsp1', src: 'images/stickers/lime_sparkle_1.png', size: { width: 26, height: 28 }, xRatio: 0.28, yRatio: 0.22 },
    { id: 'bsp1', src: 'images/stickers/black_8point_star.png', size: { width: 32, height: 35 }, xRatio: 0.38, yRatio: 0.30 },
    { id: 'bfl1', src: 'images/stickers/black_flower_medium.png', size: { width: 28, height: 28 }, xRatio: 0.62, yRatio: 0.26 },
    { id: 'psp2', src: 'images/stickers/pink_double_sparkle.png', size: { width: 34, height: 34 }, xRatio: 0.74, yRatio: 0.20 },
    { id: 'lsp2', src: 'images/stickers/lime_wide_sparkle.png', size: { width: 38, height: 36 }, xRatio: 0.88, yRatio: 0.28 },
    { id: 'bfl2', src: 'images/stickers/black_flower_large.png', size: { width: 32, height: 31 }, xRatio: 0.16, yRatio: 0.50 },
    { id: 'pfl1', src: 'images/stickers/pink_flower_medium.png', size: { width: 26, height: 25 }, xRatio: 0.36, yRatio: 0.52 },
    { id: 'lfl1', src: 'images/stickers/lime_flower_medium.png', size: { width: 30, height: 29 }, xRatio: 0.64, yRatio: 0.52 },
    { id: 'bsp2', src: 'images/stickers/black_cross_sparkle.png', size: { width: 32, height: 32 }, xRatio: 0.84, yRatio: 0.50 },
  ];

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 500;

    const { Engine, World, Bodies, Body, Sleeping } = Matter;

    // Initialize Matter Physics Engine with sleeping enabled so objects start completely still
    const engine = Engine.create({
      gravity: { x: 0, y: 0.85, scale: 0.001 },
      enableSleeping: true,
    });
    engineRef.current = engine;

    // Static Boundaries (Walls & Floor)
    const wallOptions = { isStatic: true, friction: 0.8, restitution: 0.35 };
    const floor = Bodies.rectangle(width / 2, height + 25, width * 2, 50, wallOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height * 2, wallOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height * 2, wallOptions);
    const ceiling = Bodies.rectangle(width / 2, -150, width * 2, 50, wallOptions);

    World.add(engine.world, [floor, leftWall, rightWall, ceiling]);

    const bodiesMap = {};

    // 1. Create Contact Cards as physical bodies
    contactBoxes.forEach((card) => {
      const isMobile = width < 768;
      const cardWidth = isMobile ? Math.min(card.size.width, width * 0.88) : card.size.width;
      const cardHeight = card.size.height;
      const posX = Math.max(cardWidth / 2 + 10, Math.min(width - cardWidth / 2 - 10, width * card.initialPos.xRatio));
      const posY = height * (isMobile ? card.initialPos.yRatio * 0.85 : card.initialPos.yRatio);

      const body = Bodies.rectangle(posX, posY, cardWidth, cardHeight, {
        chamfer: { radius: 8 },
        friction: 0.5,
        frictionAir: 0.02,
        restitution: 0.3,
        density: 0.002,
        angularDamping: 0.15,
        isSleeping: true, // Start COMPLETELY STILL!
      });
      body.pluginId = card.id;
      bodiesMap[card.id] = body;
      World.add(engine.world, body);
    });

    // 2. Create Logo & Stickers as physical bodies
    graphicsItems.forEach((item) => {
      const posX = Math.max(30, Math.min(width - 30, width * item.xRatio));
      const posY = height * item.yRatio;

      let body;
      if (item.isLogo) {
        body = Bodies.rectangle(posX, posY, item.size.width, item.size.height, {
          chamfer: { radius: 10 },
          friction: 0.4,
          frictionAir: 0.02,
          restitution: 0.4,
          density: 0.0015,
          isSleeping: true, // Start COMPLETELY STILL!
        });
      } else {
        body = Bodies.circle(posX, posY, Math.max(item.size.width, item.size.height) / 2, {
          friction: 0.3,
          frictionAir: 0.015,
          restitution: 0.5,
          density: 0.001,
          isSleeping: true, // Start COMPLETELY STILL!
        });
      }
      body.pluginId = item.id;
      bodiesMap[item.id] = body;
      World.add(engine.world, body);
    });

    // 3. Custom Pointer Drag & Throw Controller with Instant Sleep Settlement
    let activeDrag = null;

    const handlePointerDown = (e) => {
      const targetEl = e.target.closest('[data-physics-id]');
      if (!targetEl) return;

      const id = targetEl.getAttribute('data-physics-id');
      const body = bodiesMap[id];
      if (!body) return;

      e.preventDefault();

      // Wake up body when grabbed
      Sleeping.set(body, false);

      const rect = container.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      activeDrag = {
        id,
        body,
        pointerId: e.pointerId,
        startX: clientX,
        startY: clientY,
        startTime: Date.now(),
        history: [{ x: clientX, y: clientY, time: Date.now() }],
        card: contactBoxes.find((c) => c.id === id),
      };

      try {
        targetEl.setPointerCapture(e.pointerId);
      } catch (err) {}
    };

    const handlePointerMove = (e) => {
      if (!activeDrag || activeDrag.pointerId !== e.pointerId) return;
      e.preventDefault();

      const rect = container.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      // Keep position history for throwing velocity calculation
      const now = Date.now();
      activeDrag.history.push({ x: e.clientX, y: e.clientY, time: now });
      if (activeDrag.history.length > 5) activeDrag.history.shift();

      // Move body smoothly to pointer location while dragging
      Body.setPosition(activeDrag.body, { x: currentX, y: currentY });
      Body.setVelocity(activeDrag.body, { x: 0, y: 0 });
    };

    const handlePointerUp = (e) => {
      if (!activeDrag || activeDrag.pointerId !== e.pointerId) return;

      const targetEl = e.target.closest('[data-physics-id]');
      if (targetEl) {
        try {
          targetEl.releasePointerCapture(e.pointerId);
        } catch (err) {}
      }

      const dx = e.clientX - activeDrag.startX;
      const dy = e.clientY - activeDrag.startY;
      const dist = Math.hypot(dx, dy);
      const duration = Date.now() - activeDrag.startTime;

      // Check if it's a CLICK vs DRAG
      if (dist < 6 && duration < 250 && activeDrag.card) {
        // Simple click/tap -> trigger link!
        const card = activeDrag.card;
        if (card.isExternal) {
          window.open(card.href, '_blank', 'noopener,noreferrer');
        } else {
          window.location.href = card.href;
        }
        activeDrag = null;
        return;
      }

      // Calculate throw velocity from drag history
      let throwVx = 0;
      let throwVy = 0;

      if (activeDrag.history.length >= 2) {
        const last = activeDrag.history[activeDrag.history.length - 1];
        const prev = activeDrag.history[0];
        const dt = Math.max(1, last.time - prev.time);
        throwVx = ((last.x - prev.x) / dt) * 16;
        throwVy = ((last.y - prev.y) / dt) * 16;
      }

      // Clamp velocities for clean, satisfying throw physics
      const clampedVx = Math.max(-18, Math.min(18, throwVx));
      const clampedVy = Math.max(-18, Math.min(18, throwVy));

      // Apply throw velocity & rotation
      Sleeping.set(activeDrag.body, false);
      Body.setVelocity(activeDrag.body, { x: clampedVx, y: clampedVy });
      Body.setAngularVelocity(activeDrag.body, Math.max(-0.15, Math.min(0.15, clampedVx * 0.01)));

      activeDrag = null;
    };

    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointercancel', handlePointerUp);

    // 4. Physics Animation Loop with Auto-Sleep for Zero Jitter / Zero Vibration
    let animationFrameId;

    const renderLoop = () => {
      Engine.update(engine, 1000 / 60);

      const transforms = {};
      Object.keys(bodiesMap).forEach((id) => {
        const b = bodiesMap[id];

        // Enforce absolute resting sleep state when body slows down
        if (!b.isSleeping && b.speed < 0.15 && Math.abs(b.angularSpeed) < 0.05) {
          Body.setVelocity(b, { x: 0, y: 0 });
          Body.setAngularVelocity(b, 0);
          Sleeping.set(b, true);
        }

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

    // 5. Responsive Resize Handler
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
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointercancel', handlePointerUp);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [reducedMotion]);

  return (
    <footer
      className="footer-element relative bg-[#FAF4EB] border-t-1.5 border-[#171515] overflow-hidden select-none"
      id="footer"
    >
      <div className="page-container py-6">
        {/* Main 2D Interactive Physics Playground Container */}
        <div
          ref={containerRef}
          className="relative w-full h-[480px] sm:h-[520px] overflow-hidden rounded-xl border border-[#171515]/20 bg-[#FAF4EB]"
        >
          {/* Render All Contact Cards as Physical Objects */}
          {contactBoxes.map((card) => {
            const transform = bodyTransforms[card.id];
            const posX = transform ? transform.x : 0;
            const posY = transform ? transform.y : 0;
            const angle = transform ? transform.angle : 0;

            return (
              <div
                key={card.id}
                data-physics-id={card.id}
                className="absolute p-3 bg-[#FAF4EB] border-1.5 border-[#171515] rounded-lg shadow-[3px_3px_0px_#171515] cursor-grab active:cursor-grabbing hover:border-[#E96F98] transition-colors select-none flex flex-col justify-center"
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
                  <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#171515] flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full border border-[#171515] inline-block"
                      style={{ backgroundColor: card.badgeColor }}
                    />
                    {card.label}
                  </span>
                </div>
                <p className="font-body text-xs text-[#171515] font-medium break-all pointer-events-none leading-tight">
                  {card.value}
                </p>
              </div>
            );
          })}

          {/* Render Logo & Stickers as Physical Objects */}
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
      </div>
    </footer>
  );
}
