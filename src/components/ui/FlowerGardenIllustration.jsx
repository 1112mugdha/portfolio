import React from 'react';

/**
 * FlowerGardenIllustration
 * Hand-drawn wildflower patch doodle illustration (5-7 organic flowers growing from bottom-right).
 */
export default function FlowerGardenIllustration({ className = '' }) {
  return (
    <svg 
      viewBox="0 0 380 460" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-[380px] h-auto ${className}`}
      aria-label="Hand-drawn wildflower garden patch doodle illustration"
    >
      {/* Ground baseline dashes */}
      <path d="M20 450 L360 450" stroke="#171515" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" opacity="0.4" />

      {/* --- PLANT 1: Extra Tall Left Stem with Wild Pink Poppy (Reaches Middle-Top Right) --- */}
      <path d="M120 450 C110 330, 95 200, 105 110" stroke="#171515" strokeWidth="2.8" strokeLinecap="round" />
      {/* Leaves */}
      <path d="M112 340 C75 325, 50 300, 75 285 C95 280, 114 315, 112 340 Z" fill="#D7F23A" stroke="#171515" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M109 250 C135 230, 160 215, 145 200 C128 195, 110 225, 109 250 Z" fill="#FAF0F4" stroke="#171515" strokeWidth="2.2" strokeLinejoin="round" />
      {/* Poppy Flower (Pink) */}
      <g>
        <path d="M105 110 C85 70, 125 60, 105 110 Z" fill="#E96F98" stroke="#171515" strokeWidth="2.4" />
        <path d="M105 110 C75 90, 70 120, 105 110 Z" fill="#E96F98" stroke="#171515" strokeWidth="2.4" />
        <path d="M105 110 C135 90, 140 120, 105 110 Z" fill="#E96F98" stroke="#171515" strokeWidth="2.4" />
        <path d="M105 110 C80 135, 110 145, 105 110 Z" fill="#E96F98" stroke="#171515" strokeWidth="2.4" />
        <path d="M105 110 C130 135, 100 145, 105 110 Z" fill="#E96F98" stroke="#171515" strokeWidth="2.4" />
        {/* Dark Core */}
        <circle cx="105" cy="110" r="11" fill="#171515" />
        <circle cx="105" cy="110" r="5" fill="#D7F23A" />
      </g>

      {/* --- PLANT 2: Tall Center-Right Layered Wild Daisy --- */}
      <path d="M220 450 C230 350, 210 220, 225 140" stroke="#171515" strokeWidth="2.8" strokeLinecap="round" />
      {/* Leaves */}
      <path d="M222 360 C255 345, 275 330, 260 315 C242 310, 224 338, 222 360 Z" fill="#FAF4EB" stroke="#171515" strokeWidth="2.2" strokeLinejoin="round" />
      {/* Daisy Petals */}
      <g>
        <path d="M225 140 C200 110, 220 95, 225 140 Z" fill="#FAF0F4" stroke="#171515" strokeWidth="2.2" />
        <path d="M225 140 C230 95, 250 110, 225 140 Z" fill="#E96F98" stroke="#171515" strokeWidth="2.2" />
        <path d="M225 140 C260 130, 255 150, 225 140 Z" fill="#FAF0F4" stroke="#171515" strokeWidth="2.2" />
        <path d="M225 140 C250 170, 230 175, 225 140 Z" fill="#E96F98" stroke="#171515" strokeWidth="2.2" />
        <path d="M225 140 C200 170, 195 150, 225 140 Z" fill="#FAF0F4" stroke="#171515" strokeWidth="2.2" />
        <path d="M225 140 C190 135, 195 115, 225 140 Z" fill="#E96F98" stroke="#171515" strokeWidth="2.2" />
        <circle cx="225" cy="140" r="10" fill="#E96F98" stroke="#171515" strokeWidth="2.2" />
        <circle cx="225" cy="140" r="4" fill="#D7F23A" />
      </g>

      {/* --- PLANT 3: Medium Left Tulip Stem --- */}
      <path d="M60 450 C50 370, 68 280, 58 200" stroke="#171515" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M59 310 C30 295, 20 275, 38 265 C52 260, 58 290, 59 310 Z" fill="#D7F23A" stroke="#171515" strokeWidth="2" />
      {/* Tulip Cup */}
      <path d="M40 200 C35 170, 50 155, 58 175 C66 155, 81 170, 76 200 C70 220, 46 220, 40 200 Z" fill="#E96F98" stroke="#171515" strokeWidth="2.4" strokeLinejoin="round" />

      {/* --- PLANT 4: Right Mid-height Wild Bell Flower --- */}
      <path d="M310 450 C300 370, 320 290, 305 230" stroke="#171515" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M307 330 C335 315, 350 300, 335 285 C318 280, 308 308, 307 330 Z" fill="#FAF0F4" stroke="#171515" strokeWidth="2" />
      {/* Bell Blossom */}
      <path d="M290 230 C285 205, 305 195, 305 210 C315 195, 325 210, 320 230 C310 245, 298 245, 290 230 Z" fill="#E96F98" stroke="#171515" strokeWidth="2.2" />

      {/* --- PLANT 5: Far-Right Tall Wild Bud Stem (Extends Edge) --- */}
      <path d="M350 450 C360 360, 345 260, 362 180" stroke="#171515" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="362" cy="180" r="8" fill="#D7F23A" stroke="#171515" strokeWidth="2.2" />
      <path d="M355 174 L369 186" stroke="#171515" strokeWidth="1.8" />

      {/* --- PLANT 6: Low Central Pink Blossom Bush --- */}
      <path d="M165 450 C170 390, 160 320, 168 270" stroke="#171515" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="168" cy="270" r="9" fill="#E96F98" stroke="#171515" strokeWidth="2.2" />
      <circle cx="150" cy="285" r="6" fill="#FAF0F4" stroke="#171515" strokeWidth="2" />
      <circle cx="185" cy="282" r="6.5" fill="#D7F23A" stroke="#171515" strokeWidth="2" />

      {/* --- PLANT 7: Low Left Fern Grass --- */}
      <path d="M15 450 C25 410, 10 370, 22 340" stroke="#171515" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 340 C10 325, 30 320, 22 340 Z" fill="#E96F98" stroke="#171515" strokeWidth="1.8" />

      {/* Ground Grass Tuft Details */}
      <path d="M45 450 L52 425 L60 450" stroke="#171515" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M135 450 L142 420 L150 450" stroke="#171515" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M275 450 L282 422 L290 450" stroke="#171515" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M330 450 L336 430 L342 450" stroke="#171515" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
