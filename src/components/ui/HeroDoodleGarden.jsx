import React from 'react';

export default function HeroDoodleGarden() {
  return (
    <div className="hero-doodle-garden-container">
      <svg
        viewBox="0 0 1200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[145px] block pointer-events-none"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* =========================================================================
           BACKGROUND GARDEN STEMS, TULIPS, DAISIES & DOODLE FLOWERS
           Colors: Stroke #171515, Accents #E96F98 (Pink), #D7F23A (Lime)
           ========================================================================= */}
        <g stroke="#171515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          
          {/* GROUP 1: Far Left (x: 40 - 160) — Tiny Tulip & Stem */}
          <path d="M 60 160 Q 58 130 62 105" />
          <path d="M 62 125 Q 45 120 52 110 Q 60 115 62 125" fill="#D7F23A" fillOpacity="0.4" />
          {/* Tulip Flower Head */}
          <path d="M 52 105 C 50 88 57 80 62 80 C 67 80 74 88 72 105 Z" fill="#E96F98" fillOpacity="0.85" />
          <path d="M 62 105 L 62 82" />
          
          {/* Small Daisy beside Tulip */}
          <path d="M 110 160 Q 112 140 108 120" />
          <circle cx="108" cy="115" r="4" fill="#D7F23A" />
          <path d="M 108 103 C 105 107 105 111 108 111" />
          <path d="M 108 119 C 105 123 105 127 108 127" />
          <path d="M 96 115 C 100 112 104 112 104 115" />
          <path d="M 112 115 C 116 112 120 112 120 115" />
          <path d="M 100 107 C 103 110 105 112 105 112" />
          <path d="M 116 123 C 113 120 111 118 111 118" />

          {/* GROUP 2: Left-Center (x: 220 - 380) — Sketchy Daisy & Tall Sprig */}
          <path d="M 250 160 Q 254 120 248 85" />
          <path d="M 249 135 Q 268 128 260 118 Q 250 125 249 135" fill="#D7F23A" fillOpacity="0.4" />
          {/* Hand-drawn Daisy */}
          <circle cx="248" cy="80" r="7" fill="#D7F23A" />
          <path d="M 248 62 C 243 68 244 73 248 73" />
          <path d="M 248 87 C 243 92 244 98 248 98" />
          <path d="M 230 80 C 236 75 241 76 241 80" />
          <path d="M 255 80 C 260 75 266 76 266 80" />
          <path d="M 235 67 C 240 71 243 74 243 74" />
          <path d="M 253 86 C 256 89 261 93 261 93" />
          <path d="M 261 67 C 256 71 253 74 253 74" />
          <path d="M 243 86 C 240 89 235 93 235 93" />

          {/* Tiny companion sprout */}
          <path d="M 310 160 Q 308 142 312 128" />
          <path d="M 312 128 C 304 122 305 116 312 118 C 319 116 320 122 312 128" fill="#E96F98" fillOpacity="0.7" />

          {/* GROUP 3: Center-Left (x: 440 - 560) — Pink Doodle Tulip & Little Stems */}
          <path d="M 470 160 Q 468 125 472 98" />
          <path d="M 471 138 Q 452 132 458 122 Q 468 128 471 138" fill="#D7F23A" fillOpacity="0.4" />
          <path d="M 462 98 C 460 82 467 74 472 74 C 477 74 484 82 482 98 Z" fill="#E96F98" fillOpacity="0.8" />
          <path d="M 472 98 L 472 76" />
          <path d="M 464 88 L 472 82 L 480 88" />

          <path d="M 520 160 Q 522 145 518 132" />
          <circle cx="518" cy="127" r="5" fill="#D7F23A" />

          {/* GROUP 4: Center-Right (x: 640 - 780) — Loose Sketchy Garden */}
          <path d="M 680 160 Q 682 118 678 82" />
          <path d="M 679 125 Q 696 118 690 108 Q 680 115 679 125" fill="#D7F23A" fillOpacity="0.4" />
          {/* Sketchy Big Daisy */}
          <circle cx="678" cy="76" r="8" fill="#E96F98" fillOpacity="0.9" />
          <path d="M 678 56 C 672 63 673 68 678 68" />
          <path d="M 678 84 C 672 89 673 96 678 96" />
          <path d="M 658 76 C 664 70 670 71 670 76" />
          <path d="M 686 76 C 692 70 698 71 698 76" />
          <path d="M 664 62 C 670 67 673 70 673 70" />
          <path d="M 683 82 C 686 85 692 90 692 90" />

          <path d="M 740 160 Q 738 138 742 120" />
          <path d="M 735 120 C 733 108 742 102 742 102 C 742 102 751 108 749 120 Z" fill="#E96F98" fillOpacity="0.75" />

          {/* GROUP 5: Far Right (x: 860 - 1140) — Mixed Sketchy Tulips & Dots */}
          <path d="M 890 160 Q 894 130 888 100" />
          <path d="M 889 130 Q 906 122 898 112 Q 889 120 889 130" fill="#D7F23A" fillOpacity="0.4" />
          <circle cx="888" cy="94" r="6" fill="#D7F23A" />
          <path d="M 888 82 C 884 86 884 90 888 90" />
          <path d="M 888 98 C 884 102 884 106 888 106" />
          <path d="M 876 94 C 880 91 884 91 884 94" />
          <path d="M 892 94 C 896 91 900 91 900 94" />

          <path d="M 970 160 Q 968 122 972 90" />
          <path d="M 971 128 Q 952 120 958 110 Q 968 118 971 128" fill="#D7F23A" fillOpacity="0.4" />
          <path d="M 962 90 C 960 74 967 66 972 66 C 977 66 984 74 982 90 Z" fill="#E96F98" fillOpacity="0.85" />
          <path d="M 972 90 L 972 68" />

          <path d="M 1060 160 Q 1062 140 1058 122" />
          <circle cx="1058" cy="116" r="5" fill="#D7F23A" />
          <path d="M 1110 160 Q 1108 145 1112 135" />
          <circle cx="1112" cy="130" r="4" fill="#E96F98" />
        </g>

        {/* =========================================================================
           EXACTLY 2 ANIMATED HAND-DRAWN BUTTERFLIES
           ========================================================================= */}
        
        {/* BUTTERFLY 1: Hovering over Left-Center Flowers (x: ~200, y: ~40) */}
        <g className="butterfly-group-1" transform="translate(190, 40)">
          <g stroke="#171515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Body */}
            <path d="M 20 20 Q 20 28 20 34" />
            <path d="M 20 20 Q 17 14 14 12" />
            <path d="M 20 20 Q 23 14 26 12" />
            
            {/* Left Wing */}
            <g className="butterfly-wing-left">
              <path d="M 20 22 C 8 10 2 24 18 29 C 6 32 10 42 20 32 Z" fill="#E96F98" fillOpacity="0.85" />
            </g>
            
            {/* Right Wing */}
            <g className="butterfly-wing-right">
              <path d="M 20 22 C 32 10 38 24 22 29 C 34 32 30 42 20 32 Z" fill="#E96F98" fillOpacity="0.85" />
            </g>
          </g>
        </g>

        {/* BUTTERFLY 2: Hovering over Right-Center Flowers (x: ~730, y: ~35) */}
        <g className="butterfly-group-2" transform="translate(730, 35)">
          <g stroke="#171515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Body */}
            <path d="M 20 20 Q 20 28 20 34" />
            <path d="M 20 20 Q 17 14 14 12" />
            <path d="M 20 20 Q 23 14 26 12" />
            
            {/* Left Wing */}
            <g className="butterfly-wing-left">
              <path d="M 20 22 C 8 10 2 24 18 29 C 6 32 10 42 20 32 Z" fill="#D7F23A" fillOpacity="0.85" />
            </g>
            
            {/* Right Wing */}
            <g className="butterfly-wing-right">
              <path d="M 20 22 C 32 10 38 24 22 29 C 34 32 30 42 20 32 Z" fill="#D7F23A" fillOpacity="0.85" />
            </g>
          </g>
        </g>

      </svg>
    </div>
  );
}
