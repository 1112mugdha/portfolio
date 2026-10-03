import React, { useState, useEffect, useRef } from 'react';

export default function HeroCharacterAvatar() {
  const avatarRef = useRef(null);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    if (!avatarRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (!entry.isIntersecting) {
          targetPosRef.current = { x: 0, y: 0 };
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(avatarRef.current);
    return () => observer.disconnect();
  }, []);

  // Eye-Tracking Mouse Move & Lerp Loop
  useEffect(() => {
    // Disable interactive tracking on touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      if (!avatarRef.current || !isVisibleRef.current) return;

      const rect = avatarRef.current.getBoundingClientRect();
      
      // Eye center position in viewport (X: 50%, Y: 46%)
      const eyeCenterX = rect.left + rect.width * 0.5;
      const eyeCenterY = rect.top + rect.height * 0.46;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Max pupil travel in SVG units (max 9px)
      const maxDistance = 9;
      const factor = Math.min(dist / 350, 1);
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
        // Linear Interpolation (Lerp) for organic, fluid eye movement
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
      ref={avatarRef}
      className="hero-character-avatar-wrapper select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Mugdha Patnaik Illustrated Avatar"
    >
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Soft Blush Glow Filter */}
          <filter id="blushGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>

          {/* Skin Gradient for Subtle 3D Dimension */}
          <linearGradient id="skinGrad" x1="160" y1="80" x2="160" y2="270" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F7CFB4" />
            <stop offset="100%" stopColor="#ECC0A4" />
          </linearGradient>

          {/* Hair Volume Shadow Gradient */}
          <linearGradient id="hairShadow" x1="160" y1="40" x2="160" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#251C1A" />
            <stop offset="100%" stopColor="#140E0D" />
          </linearGradient>

          {/* Lip Gradient */}
          <linearGradient id="lipGrad" x1="140" y1="200" x2="180" y2="215" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E96F98" />
            <stop offset="100%" stopColor="#D85A83" />
          </linearGradient>
        </defs>

        {/* 1. BACK HAIR VOLUME */}
        <g id="BackHair">
          {/* Main Back Hair Silhouette */}
          <path
            d="M 65 140 C 40 180 35 240 55 285 C 75 310 110 315 130 290 C 145 275 160 270 175 275 C 195 295 235 310 260 285 C 285 240 280 180 255 140 C 275 100 240 40 160 35 C 80 40 45 100 65 140 Z"
            fill="url(#hairShadow)"
            stroke="#171515"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Hair Wavy Strand Details (Left) */}
          <path d="M 48 190 Q 32 230 52 275" stroke="#171515" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 62 170 Q 45 210 60 260" stroke="#2D221F" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Hair Wavy Strand Details (Right) */}
          <path d="M 272 190 Q 288 230 268 275" stroke="#171515" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 258 170 Q 275 210 260 260" stroke="#2D221F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </g>

        {/* 2. EARS & EARRINGS */}
        <g id="Ears">
          {/* Left Ear */}
          <path d="M 88 152 C 78 155 76 175 88 182 Z" fill="url(#skinGrad)" stroke="#171515" strokeWidth="2" />
          {/* Right Ear */}
          <path d="M 232 152 C 242 155 244 175 232 182 Z" fill="url(#skinGrad)" stroke="#171515" strokeWidth="2" />

          {/* Silver Hoop Earrings */}
          {/* Left Hoop */}
          <ellipse cx="80" cy="182" rx="7" ry="11" stroke="#171515" strokeWidth="2.2" fill="none" />
          <ellipse cx="80" cy="182" rx="5" ry="9" stroke="#E6E6E6" strokeWidth="1.2" fill="none" />

          {/* Right Hoop */}
          <ellipse cx="240" cy="182" rx="7" ry="11" stroke="#171515" strokeWidth="2.2" fill="none" />
          <ellipse cx="240" cy="182" rx="5" ry="9" stroke="#E6E6E6" strokeWidth="1.2" fill="none" />
        </g>

        {/* 3. FACE BASE & SHADING */}
        <g id="FaceBase">
          {/* Neck */}
          <path d="M 135 220 L 135 270 C 135 270 160 276 185 270 L 185 220 Z" fill="#E2AF91" stroke="#171515" strokeWidth="2.2" />
          <path d="M 135 220 Q 160 232 185 220 Z" fill="#D39F82" opacity="0.6" />

          {/* Chin & Jawline Shape */}
          <path
            d="M 88 140 C 88 190 102 238 160 242 C 218 238 232 190 232 140 C 232 90 215 78 160 78 C 105 78 88 90 88 140 Z"
            fill="url(#skinGrad)"
            stroke="#171515"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Soft Pink Blush on Cheeks */}
          <ellipse cx="114" cy="172" rx="19" ry="12" fill="#E96F98" opacity="0.38" filter="url(#blushGlow)" />
          <ellipse cx="206" cy="172" rx="19" ry="12" fill="#E96F98" opacity="0.38" filter="url(#blushGlow)" />
        </g>

        {/* 4. FACIAL FEATURES (NOSE, LIPS, MOLE) */}
        <g id="FacialFeatures">
          {/* Cute Nose Line */}
          <path d="M 157 158 Q 160 165 164 163" stroke="#C3876B" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <circle cx="160" cy="165" r="1.5" fill="#E29D81" opacity="0.7" />

          {/* Soft Lips */}
          <path
            d={isHovered ? "M 144 196 Q 160 213 176 196 Q 160 207 144 196 Z" : "M 145 198 Q 160 209 175 198 Q 160 203 145 198 Z"}
            fill="url(#lipGrad)"
            stroke="#171515"
            strokeWidth="1.8"
            strokeLinejoin="round"
            style={{ transition: 'd 0.2s ease' }}
          />
          {/* Lip Center Seam */}
          <path d="M 145 198 Q 160 202 175 198" stroke="#B23E64" strokeWidth="1.2" strokeLinecap="round" fill="none" />

          {/* Mole / Beauty Mark under Left Eye */}
          <circle cx="134" cy="168" r="1.6" fill="#171515" />
        </g>

        {/* 5. EYES & EYE TRACKING PUPILS */}
        <g id="EyesGroup">
          {/* Eyebrows */}
          {/* Left Eyebrow */}
          <path
            d={isHovered ? "M 100 128 Q 116 118 132 127" : "M 100 131 Q 116 122 132 130"}
            stroke="#1C1412"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
            style={{ transition: 'd 0.2s ease' }}
          />
          {/* Right Eyebrow */}
          <path
            d={isHovered ? "M 188 127 Q 204 118 220 128" : "M 188 130 Q 204 122 220 131"}
            stroke="#1C1412"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
            style={{ transition: 'd 0.2s ease' }}
          />

          {/* Eye Sockets / Whites */}
          {/* Left Eye White */}
          <path
            d="M 98 148 C 104 135 126 135 134 148 C 126 160 104 160 98 148 Z"
            fill="#FFFFFF"
            stroke="#171515"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Right Eye White */}
          <path
            d="M 186 148 C 194 135 216 135 222 148 C 216 160 194 160 186 148 Z"
            fill="#FFFFFF"
            stroke="#171515"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* EYE TRACKING PUPILS / IRISES (Translated smoothly by mouse tracking) */}
          <g transform={`translate(${pupilPos.x}, ${pupilPos.y})`}>
            {/* Left Pupil */}
            <ellipse cx="116" cy="147.5" rx="8.5" ry="9" fill="#1C1412" />
            <circle cx="113.5" cy="144" r="2.8" fill="#FFFFFF" />
            <circle cx="118.5" cy="151" r="1.2" fill="#FFFFFF" opacity="0.6" />

            {/* Right Pupil */}
            <ellipse cx="204" cy="147.5" rx="8.5" ry="9" fill="#1C1C1A" />
            <circle cx="201.5" cy="144" r="2.8" fill="#FFFFFF" />
            <circle cx="206.5" cy="151" r="1.2" fill="#FFFFFF" opacity="0.6" />

            {/* Extra Sparkle Hearts on Hover */}
            {isHovered && (
              <>
                <path d="M 116 142 L 117 144 L 119 144 L 117.5 145.5 L 118 147.5 L 116 146 L 114 147.5 L 114.5 145.5 L 113 144 L 115 144 Z" fill="#E96F98" opacity="0.9" />
                <path d="M 204 142 L 205 144 L 207 144 L 205.5 145.5 L 206 147.5 L 204 146 L 202 147.5 L 202.5 145.5 L 201 144 L 203 144 Z" fill="#E96F98" opacity="0.9" />
              </>
            )}
          </g>

          {/* Eyelash Strokes & Upper Eyelid Lines */}
          {/* Left Eyelash */}
          <path d="M 96 147 C 104 133 126 133 135 146" stroke="#171515" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M 131 140 L 137 137" stroke="#171515" strokeWidth="2" strokeLinecap="round" />

          {/* Right Eyelash */}
          <path d="M 184 146 C 193 133 215 133 224 147" stroke="#171515" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M 220 140 L 226 137" stroke="#171515" strokeWidth="2" strokeLinecap="round" />

          {/* Natural Blink Eyelids Overlay */}
          <g
            style={{
              transformOrigin: '160px 148px',
              transform: isBlinking ? 'scaleY(1)' : 'scaleY(0)',
              transition: 'transform 0.08s ease-in-out',
              opacity: isBlinking ? 1 : 0
            }}
          >
            {/* Left Closed Eyelid */}
            <path d="M 96 148 Q 116 162 136 148" fill="url(#skinGrad)" stroke="#171515" strokeWidth="3" strokeLinecap="round" />
            {/* Right Closed Eyelid */}
            <path d="M 184 148 Q 204 162 224 148" fill="url(#skinGrad)" stroke="#171515" strokeWidth="3" strokeLinecap="round" />
          </g>
        </g>

        {/* 6. FRONT HAIR BANGS & STYLIZED CURTAIN STRANDS */}
        <g id="FrontHair">
          {/* Center Hair Parting */}
          {/* Left Middle Part Bang */}
          <path
            d="M 160 76 C 145 92 120 108 92 135 C 80 148 76 170 82 188 C 84 175 92 155 106 142 C 126 122 148 100 156 78 Z"
            fill="#1F1715"
            stroke="#171515"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Left Bang Strand Highlight */}
          <path d="M 152 82 Q 130 110 100 145" stroke="#382A26" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Right Middle Part Bang */}
          <path
            d="M 160 76 C 175 92 200 108 228 135 C 240 148 244 170 238 188 C 236 175 228 155 214 142 C 194 122 172 100 164 78 Z"
            fill="#1F1715"
            stroke="#171515"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Right Bang Strand Highlight */}
          <path d="M 168 82 Q 190 110 220 145" stroke="#382A26" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Top Hair Volume Outline & Flow */}
          <path
            d="M 160 76 C 140 50 100 52 75 78 C 55 102 62 138 65 158 C 58 140 58 110 72 88 C 92 60 135 55 160 76 Z"
            fill="#231A18"
            stroke="#171515"
            strokeWidth="2"
          />
          <path
            d="M 160 76 C 180 50 220 52 245 78 C 265 102 258 138 255 158 C 262 140 262 110 248 88 C 228 60 185 55 160 76 Z"
            fill="#231A18"
            stroke="#171515"
            strokeWidth="2"
          />

          {/* Subtle Pink Hair Sparkle Accent on Top Corner */}
          <path d="M 245 68 L 247 72 L 251 72 L 248 74 L 249 78 L 245 75 L 241 78 L 242 74 L 239 72 L 243 72 Z" fill="#E96F98" opacity="0.85" />
        </g>
      </svg>
    </div>
  );
}
