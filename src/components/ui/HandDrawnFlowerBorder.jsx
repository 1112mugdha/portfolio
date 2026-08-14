import React from 'react';

/**
 * HandDrawnFlowerBorder
 * A simple hand-drawn row of small tulips and daisies sitting directly on the bottom horizontal line of the hero section.
 */
export default function HandDrawnFlowerBorder({ className = '', style = {} }) {
  return (
    <svg 
      viewBox="0 0 720 68.5" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full ${className}`}
      style={{ display: 'block', height: '96px', maxHeight: '96px', width: '100%', ...style }}
      aria-label="Hand-drawn row of tulips and daisies sitting directly on bottom border line"
    >
      {/* Baseline (aligned exactly with y=68, touching hero bottom border line) */}
      <path d="M0 68 L720 68" stroke="#171515" strokeWidth="1.5" />

      {/* --- FLOWER 1: Small Daisy (Pink Center) --- */}
      <g transform="translate(18, 68)">
        <path d="M0 0 L-1 -32" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <g transform="translate(-1, -32)">
          <circle cx="-6" cy="0" r="4.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="6" cy="0" r="4.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="-6" r="4.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="6" r="4.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="0" r="3.5" fill="#E96F98" stroke="#171515" strokeWidth="1.4" />
        </g>
      </g>

      {/* --- FLOWER 2: Small Tulip (Pink Head) --- */}
      <g transform="translate(52, 68)">
        <path d="M0 0 L1 -28" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M-8 -46 C-10 -30, 0 -24, 1 -28 C2 -24, 12 -30, 10 -46 C7 -40, 2 -38, 1 -28 C0 -38, -5 -40, -8 -46 Z" fill="#E96F98" stroke="#171515" strokeWidth="1.6" strokeLinejoin="round" />
      </g>

      {/* --- FLOWER 3: Tiny Daisy (Lime Center) --- */}
      <g transform="translate(86, 68)">
        <path d="M0 0 L0 -24" stroke="#171515" strokeWidth="1.5" strokeLinecap="round" />
        <g transform="translate(0, -24)">
          <circle cx="-5" cy="0" r="3.8" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="5" cy="0" r="3.8" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="0" cy="-5" r="3.8" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="0" cy="5" r="3.8" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="0" cy="0" r="3" fill="#D7F23A" stroke="#171515" strokeWidth="1.3" />
        </g>
      </g>

      {/* --- FLOWER 4: Tall Tulip (Pink Head) --- */}
      <g transform="translate(120, 68)">
        <path d="M0 0 L-1 -38" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M-10 -58 C-12 -40, -2 -34, -1 -38 C0 -34, 10 -40, 8 -58 C5 -52, 0 -50, -1 -38 C-2 -50, -7 -52, -10 -58 Z" fill="#E96F98" stroke="#171515" strokeWidth="1.6" strokeLinejoin="round" />
      </g>

      {/* --- FLOWER 5: Daisy (Pink Center) --- */}
      <g transform="translate(155, 68)">
        <path d="M0 0 L1 -30" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <g transform="translate(1, -30)">
          <circle cx="-5.5" cy="0" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="5.5" cy="0" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="-5.5" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="5.5" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="0" r="3.2" fill="#E96F98" stroke="#171515" strokeWidth="1.4" />
        </g>
      </g>

      {/* --- FLOWER 6: Small Tulip (Pink Head) --- */}
      <g transform="translate(188, 68)">
        <path d="M0 0 L0 -26" stroke="#171515" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M-7 -42 C-9 -28, 0 -22, 0 -26 C0 -22, 9 -28, 7 -42 C5 -37, 0 -35, 0 -26 C0 -35, -5 -37, -7 -42 Z" fill="#E96F98" stroke="#171515" strokeWidth="1.5" strokeLinejoin="round" />
      </g>

      {/* --- FLOWER 7: Daisy (Lime Center) --- */}
      <g transform="translate(222, 68)">
        <path d="M0 0 L-1 -35" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <g transform="translate(-1, -35)">
          <circle cx="-6" cy="0" r="4.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="6" cy="0" r="4.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="-6" r="4.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="6" r="4.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="0" r="3.5" fill="#D7F23A" stroke="#171515" strokeWidth="1.4" />
        </g>
      </g>

      {/* --- FLOWER 8: Tall Tulip (Pink Head) --- */}
      <g transform="translate(258, 68)">
        <path d="M0 0 L1 -36" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M-9 -54 C-11 -38, 0 -32, 1 -36 C2 -32, 11 -38, 9 -54 C6 -48, 1 -46, 1 -36 C0 -46, -6 -48, -9 -54 Z" fill="#E96F98" stroke="#171515" strokeWidth="1.6" strokeLinejoin="round" />
      </g>

      {/* --- FLOWER 9: Tiny Daisy (Pink Center) --- */}
      <g transform="translate(292, 68)">
        <path d="M0 0 L0 -22" stroke="#171515" strokeWidth="1.4" strokeLinecap="round" />
        <g transform="translate(0, -22)">
          <circle cx="-4.5" cy="0" r="3.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="4.5" cy="0" r="3.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="0" cy="-4.5" r="3.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="0" cy="4.5" r="3.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="0" cy="0" r="2.8" fill="#E96F98" stroke="#171515" strokeWidth="1.3" />
        </g>
      </g>

      {/* --- FLOWER 10: Tulip (Pink Head) --- */}
      <g transform="translate(325, 68)">
        <path d="M0 0 L-1 -31" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M-9 -48 C-11 -33, -2 -27, -1 -31 C0 -27, 9 -33, 7 -48 C5 -43, 0 -41, -1 -31 C-2 -41, -7 -43, -9 -48 Z" fill="#E96F98" stroke="#171515" strokeWidth="1.6" strokeLinejoin="round" />
      </g>

      {/* --- FLOWER 11: Daisy (Lime Center) --- */}
      <g transform="translate(360, 68)">
        <path d="M0 0 L1 -34" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <g transform="translate(1, -34)">
          <circle cx="-5.5" cy="0" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="5.5" cy="0" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="-5.5" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="5.5" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="0" r="3.2" fill="#D7F23A" stroke="#171515" strokeWidth="1.4" />
        </g>
      </g>

      {/* --- FLOWER 12: Small Tulip (Pink Head) --- */}
      <g transform="translate(394, 68)">
        <path d="M0 0 L0 -27" stroke="#171515" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M-7 -43 C-9 -29, 0 -23, 0 -27 C0 -23, 9 -29, 7 -43 C5 -38, 0 -36, 0 -27 C0 -36, -5 -38, -7 -43 Z" fill="#E96F98" stroke="#171515" strokeWidth="1.5" strokeLinejoin="round" />
      </g>

      {/* --- FLOWER 13: Daisy (Pink Center) --- */}
      <g transform="translate(428, 68)">
        <path d="M0 0 L-1 -32" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <g transform="translate(-1, -32)">
          <circle cx="-5.5" cy="0" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="5.5" cy="0" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="-5.5" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="5.5" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="0" r="3.2" fill="#E96F98" stroke="#171515" strokeWidth="1.4" />
        </g>
      </g>

      {/* --- FLOWER 14: Tall Tulip (Pink Head) --- */}
      <g transform="translate(462, 68)">
        <path d="M0 0 L1 -37" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M-9 -55 C-11 -39, 0 -33, 1 -37 C2 -33, 11 -39, 9 -55 C6 -49, 1 -47, 1 -37 C0 -47, -6 -49, -9 -55 Z" fill="#E96F98" stroke="#171515" strokeWidth="1.6" strokeLinejoin="round" />
      </g>

      {/* --- FLOWER 15: Tiny Daisy (Lime Center) --- */}
      <g transform="translate(496, 68)">
        <path d="M0 0 L0 -23" stroke="#171515" strokeWidth="1.4" strokeLinecap="round" />
        <g transform="translate(0, -23)">
          <circle cx="-4.5" cy="0" r="3.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="4.5" cy="0" r="3.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="0" cy="-4.5" r="3.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="0" cy="4.5" r="3.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="0" cy="0" r="2.8" fill="#D7F23A" stroke="#171515" strokeWidth="1.3" />
        </g>
      </g>

      {/* --- FLOWER 16: Tulip (Pink Head) --- */}
      <g transform="translate(530, 68)">
        <path d="M0 0 L-1 -30" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M-8 -46 C-10 -32, -1 -26, -1 -30 C0 -26, 9 -32, 7 -46 C5 -41, 0 -39, -1 -30 C-2 -39, -6 -41, -8 -46 Z" fill="#E96F98" stroke="#171515" strokeWidth="1.6" strokeLinejoin="round" />
      </g>

      {/* --- FLOWER 17: Daisy (Pink Center) --- */}
      <g transform="translate(564, 68)">
        <path d="M0 0 L1 -33" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <g transform="translate(1, -33)">
          <circle cx="-5.5" cy="0" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="5.5" cy="0" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="-5.5" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="5.5" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="0" r="3.2" fill="#E96F98" stroke="#171515" strokeWidth="1.4" />
        </g>
      </g>

      {/* --- FLOWER 18: Small Tulip (Pink Head) --- */}
      <g transform="translate(598, 68)">
        <path d="M0 0 L0 -26" stroke="#171515" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M-7 -42 C-9 -28, 0 -22, 0 -26 C0 -22, 9 -28, 7 -42 C5 -37, 0 -35, 0 -26 C0 -35, -5 -37, -7 -42 Z" fill="#E96F98" stroke="#171515" strokeWidth="1.5" strokeLinejoin="round" />
      </g>

      {/* --- FLOWER 19: Daisy (Lime Center) --- */}
      <g transform="translate(632, 68)">
        <path d="M0 0 L-1 -31" stroke="#171515" strokeWidth="1.6" strokeLinecap="round" />
        <g transform="translate(-1, -31)">
          <circle cx="-5.5" cy="0" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="5.5" cy="0" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="-5.5" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="5.5" r="4.2" fill="#F7F3EA" stroke="#171515" strokeWidth="1.4" />
          <circle cx="0" cy="0" r="3.2" fill="#D7F23A" stroke="#171515" strokeWidth="1.4" />
        </g>
      </g>

      {/* --- FLOWER 20: Small Tulip (Pink Head) --- */}
      <g transform="translate(666, 68)">
        <path d="M0 0 L1 -28" stroke="#171515" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M-7 -44 C-9 -30, 1 -24, 1 -28 C1 -24, 9 -30, 7 -44 C5 -39, 1 -37, 1 -28 C0 -37, -5 -39, -7 -44 Z" fill="#E96F98" stroke="#171515" strokeWidth="1.5" strokeLinejoin="round" />
      </g>

      {/* --- FLOWER 21: Tiny Daisy (Pink Center) --- */}
      <g transform="translate(700, 68)">
        <path d="M0 0 L0 -24" stroke="#171515" strokeWidth="1.4" strokeLinecap="round" />
        <g transform="translate(0, -24)">
          <circle cx="-4.5" cy="0" r="3.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="4.5" cy="0" r="3.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="0" cy="-4.5" r="3.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="0" cy="4.5" r="3.5" fill="#F7F3EA" stroke="#171515" strokeWidth="1.3" />
          <circle cx="0" cy="0" r="2.8" fill="#E96F98" stroke="#171515" strokeWidth="1.3" />
        </g>
      </g>
    </svg>
  );
}
