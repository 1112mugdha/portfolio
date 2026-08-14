import React from 'react';

/**
 * SketchbookDoodleCluster
 * Hand-drawn sketchbook doodle cluster (18-22 delicate ink doodles concentrated horizontally along the bottom-right).
 */
export default function SketchbookDoodleCluster({ className = '' }) {
  return (
    <svg 
      viewBox="0 0 440 230" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-[420px] h-auto ${className}`}
      aria-label="Hand-drawn sketchbook doodles collection"
    >
      {/* 1. Tiny 5-Petal Flower (Left) */}
      <g transform="translate(25, 140)">
        <path d="M0 -14 C-4 -22, 4 -22, 0 -14 Z" fill="#FAF0F4" stroke="#171515" strokeWidth="1.6" />
        <path d="M-14 0 C-22 -4, -22 4, -14 0 Z" fill="#FAF0F4" stroke="#171515" strokeWidth="1.6" />
        <path d="M14 0 C22 -4, 22 4, 14 0 Z" fill="#FAF0F4" stroke="#171515" strokeWidth="1.6" />
        <path d="M-9 10 C-16 16, -10 22, -9 10 Z" fill="#FAF0F4" stroke="#171515" strokeWidth="1.6" />
        <path d="M9 10 C16 16, 10 22, 9 10 Z" fill="#FAF0F4" stroke="#171515" strokeWidth="1.6" />
        <path d="M0 22 C-2 38, 4 50, 2 68" stroke="#171515" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="0" cy="0" r="5" fill="#E96F98" stroke="#171515" strokeWidth="1.6" />
      </g>

      {/* 2. Delicate Open Eye with Lashes */}
      <g transform="translate(85, 115)">
        <path d="M-18 0 C-8 -12, 8 -12, 18 0 C8 12, -8 12, -18 0 Z" stroke="#171515" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="0" cy="0" r="5.5" fill="#171515" />
        <circle cx="2" cy="-2" r="1.8" fill="#F7F3EA" />
        {/* Lashes */}
        <path d="M-12 -8 L-16 -14" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M0 -11 L0 -17" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 -8 L16 -14" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
      </g>

      {/* 3. Small Hand-Drawn Heart (Soft Pink Accent) */}
      <path 
        d="M135 155 C135 145, 122 138, 115 148 C108 138, 95 145, 95 155 C95 170, 115 185, 115 188 C115 185, 135 170, 135 155 Z" 
        fill="#E96F98" 
        stroke="#171515" 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />

      {/* 4. Tiny Sparkle Star (Lime Accent) */}
      <g transform="translate(70, 60)">
        <path d="M0 -14 Q0 0 -14 0 Q0 0 0 14 Q0 0 14 0 Q0 0 0 -14 Z" fill="#D7F23A" stroke="#171515" strokeWidth="1.6" strokeLinejoin="round" />
      </g>

      {/* 5. Little Cloud with Raindrops */}
      <g transform="translate(170, 75)">
        <path d="M-22 8 C-28 8, -30 -2, -22 -6 C-20 -18, -4 -20, 2 -12 C10 -18, 24 -14, 22 -4 C28 -4, 30 8, 22 8 Z" fill="#F7F3EA" stroke="#171515" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M-10 16 L-12 22" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M0 18 L-2 24" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M10 16 L8 22" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
      </g>

      {/* 6. Small Sketchbook Mushroom */}
      <g transform="translate(165, 145)">
        <path d="M-15 0 C-15 -18, 15 -18, 15 0 Z" fill="#FAF0F4" stroke="#171515" strokeWidth="1.8" />
        <path d="M-8 0 L-6 25 Q0 28 6 25 L8 0" stroke="#171515" strokeWidth="1.8" fill="#F7F3EA" />
        <circle cx="-5" cy="-8" r="2" fill="#171515" />
        <circle cx="4" cy="-10" r="1.5" fill="#171515" />
      </g>

      {/* 7. Tiny 2-Leaf Plant Sprout */}
      <g transform="translate(225, 160)">
        <path d="M0 0 C-14 -12, -20 -3, 0 10" fill="#FAF4EB" stroke="#171515" strokeWidth="1.6" />
        <path d="M0 0 C14 -14, 22 -4, 0 10" fill="#FAF4EB" stroke="#171515" strokeWidth="1.6" />
        <path d="M0 10 L2 40" stroke="#171515" strokeWidth="1.8" strokeLinecap="round" />
      </g>

      {/* 8. Small Ribbon Bow */}
      <g transform="translate(230, 95)">
        <path d="M0 0 C-12 -12, -18 6, 0 0 Z" fill="#FAF0F4" stroke="#171515" strokeWidth="1.6" />
        <path d="M0 0 C12 -12, 18 6, 0 0 Z" fill="#FAF0F4" stroke="#171515" strokeWidth="1.6" />
        <circle cx="0" cy="0" r="3" fill="#171515" />
        <path d="M-2 2 C-8 12, -10 18, -12 24" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M2 2 C6 12, 10 18, 12 24" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
      </g>

      {/* 9. Radiating Sun Doodle */}
      <g transform="translate(285, 60)">
        <circle cx="0" cy="0" r="9" stroke="#171515" strokeWidth="1.8" fill="#F7F3EA" />
        <path d="M0 -14 L0 -18" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M0 14 L0 18" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M-14 0 L-18 0" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M14 0 L18 0" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M-10 -10 L-13 -13" stroke="#171515" strokeWidth="1.6" opacity="0.7" />
        <path d="M10 10 L13 13" stroke="#171515" strokeWidth="1.6" opacity="0.7" />
        <path d="M10 -10 L13 -13" stroke="#171515" strokeWidth="1.6" opacity="0.7" />
        <path d="M-10 10 L-13 13" stroke="#171515" strokeWidth="1.6" opacity="0.7" />
      </g>

      {/* 10. Tiny Tulip Doodle (Soft Pink Accent) */}
      <g transform="translate(285, 140)">
        <path d="M-10 -5 C-12 -22, -2 -25, 0 -12 C2 -25, 12 -22, 10 -5 C8 10, -8 10, -10 -5 Z" fill="#E96F98" stroke="#171515" strokeWidth="1.8" />
        <path d="M0 5 L-2 55" stroke="#171515" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M-1 30 C12 20, 18 25, 14 38 Z" fill="#D7F23A" stroke="#171515" strokeWidth="1.6" />
      </g>

      {/* 11. Wavy Spiral Squiggle */}
      <path 
        d="M335 175 C320 165, 325 145, 340 150 C350 155, 345 170, 335 168" 
        stroke="#171515" 
        strokeWidth="1.6" 
        strokeLinecap="round" 
      />

      {/* 12. Little Wink Eye */}
      <g transform="translate(345, 105)">
        <path d="M-12 0 C-6 -8, 6 -8, 12 0" stroke="#171515" strokeWidth="2" strokeLinecap="round" />
        <path d="M-8 3 L-12 8" stroke="#171515" strokeWidth="1.6" />
        <path d="M0 4 L0 10" stroke="#171515" strokeWidth="1.6" />
        <path d="M8 3 L12 8" stroke="#171515" strokeWidth="1.6" />
      </g>

      {/* 13. Tiny 4-Petal Flower */}
      <g transform="translate(385, 145)">
        <circle cx="-7" cy="0" r="5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.5" />
        <circle cx="7" cy="0" r="5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.5" />
        <circle cx="0" cy="-7" r="5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.5" />
        <circle cx="0" cy="7" r="5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="3.5" fill="#171515" />
        <path d="M0 12 L0 45" stroke="#171515" strokeWidth="1.8" strokeLinecap="round" />
      </g>

      {/* 14. Tiny Crescent Moon & Sparks */}
      <g transform="translate(390, 65)">
        <path d="M-4 -12 C4 -12, 10 -4, 6 6 C2 14, -8 12, -10 6 C-6 6, -2 0, -4 -12 Z" fill="#F7F3EA" stroke="#171515" strokeWidth="1.6" />
        <circle cx="12" cy="-6" r="1.5" fill="#171515" />
        <circle cx="15" cy="8" r="1" fill="#171515" />
      </g>

      {/* 15. Tiny Coffee / Tea Cup Sketch */}
      <g transform="translate(45, 195)">
        <path d="M-10 0 L10 0 L8 16 Q0 20 -8 16 Z" fill="#F7F3EA" stroke="#171515" strokeWidth="1.6" />
        <path d="M10 3 C15 3, 15 12, 8 13" stroke="#171515" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M-3 -4 C-6 -8, 0 -10, -2 -14" stroke="#171515" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
        <path d="M3 -4 C0 -8, 6 -10, 4 -14" stroke="#171515" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* 16. Small Leafy Twig Branch */}
      <g transform="translate(205, 185)">
        <path d="M-20 15 C-5 10, 10 5, 25 0" stroke="#171515" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M-10 13 C-16 5, -8 0, -10 13 Z" fill="#FAF0F4" stroke="#171515" strokeWidth="1.5" />
        <path d="M0 8 C-4 -2, 4 -5, 0 8 Z" fill="#FAF0F4" stroke="#171515" strokeWidth="1.5" />
        <path d="M12 4 C8 -6, 16 -8, 12 4 Z" fill="#D7F23A" stroke="#171515" strokeWidth="1.5" />
      </g>

      {/* 17. Tiny Arrow & Loop */}
      <path d="M315 205 C330 195, 345 220, 360 200" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M352 198 L360 200 L358 208" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

      {/* 18. Tiny Loose Star Sparkles */}
      <path d="M135 65 L135 73 M131 69 L139 69" stroke="#171515" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M245 145 L245 151 M242 148 L248 148" stroke="#171515" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M365 140 L365 146 M362 143 L368 143" stroke="#171515" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
