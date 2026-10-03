import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { getAssetPath } from '../../utils/assetPath';

export default function Footer() {
  const containerRef = useRef(null);
  const domRefs = useRef({});

  // 1. Contact Links as Physical Cards
  const contactBoxes = [
    {
      id: 'card-personal-email',
      label: 'PERSONAL EMAIL ↗',
      href: 'mailto:mugdhapatnaik1112@gmail.com',
      badgeColor: '#E96F98',
      initialPos: { xRatio: 0.20, startY: -120 },
      size: { width: 175, height: 46 },
    },
    {
      id: 'card-college-email',
      label: 'COLLEGE EMAIL ↗',
      href: 'mailto:sc24ucom006@mahindrauniversity.edu.in',
      badgeColor: '#D7F23A',
      initialPos: { xRatio: 0.50, startY: -220 },
      size: { width: 175, height: 46 },
    },
    {
      id: 'card-linkedin',
      label: 'LINKEDIN ↗',
      href: 'https://www.linkedin.com/in/mugdha-patnaik-073b872a3/',
      isExternal: true,
      badgeColor: '#171515',
      initialPos: { xRatio: 0.80, startY: -170 },
      size: { width: 140, height: 46 },
    },
  ];

  // 2. Logo & Dashboard Decorative Graphics
  const graphicsItems = [
    { id: 'logo', src: 'images/nav_logo_m.png', isLogo: true, size: { width: 90, height: 48 }, xRatio: 0.45, startY: -300 },
    { id: 'psp1', src: 'images/stickers/pink_sparkle_large.png', size: { width: 38, height: 40 }, xRatio: 0.12, startY: -90 },
    { id: 'lsp1', src: 'images/stickers/lime_sparkle_1.png', size: { width: 28, height: 30 }, xRatio: 0.32, startY: -180 },
    { id: 'bsp1', src: 'images/stickers/black_8point_sparkle_2.png', size: { width: 34, height: 36 }, xRatio: 0.40, startY: -240 },
    { id: 'bfl1', src: 'images/stickers/black_flower_medium.png', size: { width: 30, height: 30 }, xRatio: 0.62, startY: -140 },
    { id: 'psp2', src: 'images/stickers/pink_double_sparkle.png', size: { width: 36, height: 36 }, xRatio: 0.74, startY: -210 },
    { id: 'lsp2', src: 'images/stickers/lime_wide_sparkle.png', size: { width: 40, height: 38 }, xRatio: 0.88, startY: -100 },
    { id: 'bfl2', src: 'images/stickers/black_flower_large.png', size: { width: 34, height: 33 }, xRatio: 0.18, startY: -280 },
    { id: 'pfl1', src: 'images/stickers/pink_flower_medium.png', size: { width: 28, height: 27 }, xRatio: 0.38, startY: -260 },
    { id: 'lfl1', src: 'images/stickers/lime_flower_medium.png', size: { width: 32, height: 31 }, xRatio: 0.68, startY: -270 },
    { id: 'bsp2', src: 'images/stickers/black_cross_sparkle.png', size: { width: 34, height: 34 }, xRatio: 0.84, startY: -190 },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body, Sleeping } = Matter;

    // 1. Create Physics Engine with 2D gravity & sleeping enabled
    const engine = Engine.create({
      gravity: { x: 0, y: 1, scale: 0.001 },
      enableSleeping: true,
    });
    const world = engine.world;
    const runner = Runner.create();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 350;

    // 2. Invisible Static Boundaries (Ground, Left, Right, Ceiling)
    const wallOptions = { isStatic: true, friction: 0.8, restitution: 0.3 };
    const ground = Bodies.rectangle(width / 2, height + 25, width * 2, 50, wallOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height * 3, wallOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height * 3, wallOptions);
    const ceiling = Bodies.rectangle(width / 2, -500, width * 2, 50, wallOptions);

    Composite.add(world, [ground, leftWall, rightWall, ceiling]);

    const bodiesMap = {};
    const itemsList = [...contactBoxes, ...graphicsItems];

    // 3. Create Rigid Bodies starting above top boundary
    contactBoxes.forEach((card) => {
      const isMobile = width < 768;
      const cardW = isMobile ? Math.min(card.size.width, width * 0.82) : card.size.width;
      const cardH = card.size.height;
      const posX = Math.max(cardW / 2 + 10, Math.min(width - cardW / 2 - 10, width * card.initialPos.xRatio));
      const posY = card.initialPos.startY;

      const body = Bodies.rectangle(posX, posY, cardW, cardH, {
        label: card.id,
        chamfer: { radius: 12 },
        friction: 0.5,
        frictionStatic: 0.8,
        frictionAir: 0.012,
        restitution: 0.25,
        density: 0.002,
      });

      bodiesMap[card.id] = body;
      Composite.add(world, body);
    });

    graphicsItems.forEach((item) => {
      const posX = Math.max(30, Math.min(width - 30, width * item.xRatio));
      const posY = item.startY;

      let body;
      if (item.isLogo) {
        body = Bodies.rectangle(posX, posY, item.size.width, item.size.height, {
          label: item.id,
          chamfer: { radius: 10 },
          friction: 0.4,
          frictionStatic: 0.7,
          frictionAir: 0.012,
          restitution: 0.3,
          density: 0.0015,
        });
      } else {
        const radius = Math.max(item.size.width, item.size.height) / 2;
        body = Bodies.circle(posX, posY, radius, {
          label: item.id,
          friction: 0.3,
          frictionStatic: 0.6,
          frictionAir: 0.01,
          restitution: 0.4,
          density: 0.001,
        });
      }

      bodiesMap[item.id] = body;
      Composite.add(world, body);
    });

    // 4. Mouse & MouseConstraint for Native Grab & Throw
    const mouse = Mouse.create(container);
    // Prevent mouse scroll hijacking on container
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        damping: 0.1,
        render: { visible: false },
      },
    });

    Composite.add(world, mouseConstraint);

    // 5. Click vs Drag Detection for Contact Link Cards
    let mouseDownPos = null;
    let mouseDownTime = 0;
    let clickedCardId = null;

    Events.on(mouseConstraint, 'mousedown', (event) => {
      const body = mouseConstraint.body;
      if (body) {
        Sleeping.set(body, false);
        if (body.label && body.label.startsWith('card-')) {
          clickedCardId = body.label;
          mouseDownPos = { x: event.mouse.position.x, y: event.mouse.position.y };
          mouseDownTime = Date.now();
        } else {
          clickedCardId = null;
        }
      } else {
        clickedCardId = null;
      }
    });

    Events.on(mouseConstraint, 'mouseup', (event) => {
      if (clickedCardId && mouseDownPos) {
        const dx = event.mouse.position.x - mouseDownPos.x;
        const dy = event.mouse.position.y - mouseDownPos.y;
        const dist = Math.hypot(dx, dy);
        const duration = Date.now() - mouseDownTime;

        if (dist < 8 && duration < 350) {
          const card = contactBoxes.find((c) => c.id === clickedCardId);
          if (card) {
            if (card.isExternal) {
              window.open(card.href, '_blank', 'noopener,noreferrer');
            } else {
              window.location.href = card.href;
            }
          }
        }
      }
      clickedCardId = null;
      mouseDownPos = null;
    });

    // 6. DOM Synchronization on Every Engine Physics Update (DMmotionarts Architecture)
    Events.on(engine, 'afterUpdate', () => {
      itemsList.forEach((item) => {
        const body = bodiesMap[item.id];
        const el = domRefs.current[item.id];
        if (body && el) {
          const x = body.position.x;
          const y = body.position.y;
          const angle = body.angle;
          const w = item.size.width;
          const h = item.size.height;
          el.style.transform = `translate3d(${x - w / 2}px, ${y - h / 2}px, 0px) rotate(${angle}rad)`;
        }
      });
    });

    // 7. Start Engine via IntersectionObserver when Footer Enters Viewport (10% threshold)
    let physicsStarted = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !physicsStarted) {
          physicsStarted = true;
          // Unfreeze bodies and run Matter.js Runner
          Object.values(bodiesMap).forEach((b) => Sleeping.set(b, false));
          Runner.run(runner, engine);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    // 8. Handle Window Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      Body.setPosition(ground, { x: newWidth / 2, y: newHeight + 25 });
      Body.setPosition(rightWall, { x: newWidth + 25, y: newHeight / 2 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      Events.off(engine, 'afterUpdate');
      Events.off(mouseConstraint, 'mousedown');
      Events.off(mouseConstraint, 'mouseup');
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <footer
      className="footer-element relative bg-[#FAF4EB] border-t-1.5 border-[#171515] overflow-hidden select-none"
      style={{
        height: '50vh',
        minHeight: 0,
        maxHeight: '50vh',
        boxSizing: 'border-box',
      }}
      id="footer"
    >
      <div
        ref={containerRef}
        className="relative w-full h-full overflow-hidden bg-[#FAF4EB] touch-none"
        style={{ boxSizing: 'border-box' }}
      >
        {/* Contact Links as Rounded Physical Cards */}
        {contactBoxes.map((card) => (
          <div
            key={card.id}
            ref={(el) => (domRefs.current[card.id] = el)}
            className="absolute px-3.5 py-2.5 bg-[#FAF4EB] border-1.5 border-[#171515] rounded-xl shadow-[3px_3px_0px_#171515] cursor-grab active:cursor-grabbing hover:border-[#E96F98] transition-colors select-none flex items-center justify-between pointer-events-auto"
            style={{
              width: `${card.size.width}px`,
              height: `${card.size.height}px`,
              left: 0,
              top: 0,
              transform: 'translate3d(-999px, -999px, 0px)',
              touchAction: 'none',
              zIndex: 20,
              boxSizing: 'border-box',
            }}
          >
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#171515] flex items-center gap-1.5 pointer-events-none select-none">
              <span
                className="w-2 h-2 rounded-full border border-[#171515] inline-block flex-shrink-0"
                style={{ backgroundColor: card.badgeColor }}
              />
              {card.label}
            </span>
          </div>
        ))}

        {/* Graphics Items & Logo */}
        {graphicsItems.map((item) => (
          <div
            key={item.id}
            ref={(el) => (domRefs.current[item.id] = el)}
            className="absolute cursor-grab active:cursor-grabbing select-none pointer-events-auto"
            style={{
              width: `${item.size.width}px`,
              height: `${item.size.height}px`,
              left: 0,
              top: 0,
              transform: 'translate3d(-999px, -999px, 0px)',
              touchAction: 'none',
              zIndex: item.isLogo ? 25 : 15,
              boxSizing: 'border-box',
            }}
          >
            <img
              src={getAssetPath(item.src)}
              alt={item.isLogo ? "Mugdha Patnaik Logo" : "Sticker"}
              className="w-full h-full object-contain pointer-events-none select-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </footer>
  );
}
