import React from 'react';

export default function HeroDoodleGarden() {
  return (
    <div className="hero-doodle-garden-container">
      {/* =========================================================================
         DESKTOP DOODLE GARDEN (Screen Width >= 640px)
         viewBox="0 0 1200 160" — Delicate, thin (1.5px), small flower heads, uneven heights
         ========================================================================= */}
      <svg
        viewBox="0 0 1200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden sm:block w-full h-auto max-h-[160px] pointer-events-none"
        preserveAspectRatio="xMidYMax meet"
      >
        <g stroke="#171515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          
          {/* 1. Tiny Tulip (x: 20, stem top y: 110) */}
          <path d="M 20 160 Q 18 135 22 115" />
          <path d="M 21 138 Q 12 132 17 125 Q 22 130 21 138" fill="#D7F23A" fillOpacity="0.5" strokeWidth="1.2" />
          <path d="M 16 115 C 14 104 19 98 22 98 C 25 98 30 104 28 115 Z" fill="#E96F98" fillOpacity="0.75" />
          <path d="M 22 115 L 22 100" />

          {/* 2. Wonky Daisy (x: 45, stem top y: 75) */}
          <path d="M 45 160 Q 43 118 47 80" />
          <circle cx="47" cy="74" r="2.5" fill="#D7F23A" />
          <circle cx="47" cy="67" r="2.5" />
          <circle cx="47" cy="81" r="2.5" />
          <circle cx="40" cy="74" r="2.5" />
          <circle cx="54" cy="74" r="2.5" />
          <circle cx="42" cy="69" r="2" />
          <circle cx="52" cy="79" r="2" />

          {/* 3. Tiny 3-Dot Wildflower (x: 75, stem top y: 130) */}
          <path d="M 75 160 Q 77 145 74 132" />
          <circle cx="74" cy="128" r="2" fill="#E96F98" />
          <circle cx="70" cy="132" r="1.8" />
          <circle cx="78" cy="132" r="1.8" />

          {/* 4. Medium Wonky Tulip (x: 105, stem top y: 85) */}
          <path d="M 105 160 Q 102 122 107 88" />
          <path d="M 106 128 Q 118 122 112 114 Q 105 120 106 128" fill="#D7F23A" fillOpacity="0.4" strokeWidth="1.2" />
          <path d="M 101 88 C 99 78 104 72 107 72 C 110 72 115 78 113 88 Z" fill="#E96F98" fillOpacity="0.7" />

          {/* 5. Tall Delicate Daisy (x: 140, stem top y: 55) */}
          <path d="M 140 160 Q 143 110 138 60" />
          <circle cx="138" cy="54" r="3" fill="#D7F23A" />
          <path d="M 138 43 C 135 48 135 51 138 51" />
          <path d="M 138 57 C 135 60 135 63 138 63" />
          <path d="M 127 54 C 131 51 134 52 134 54" />
          <path d="M 142 54 C 145 51 149 52 149 54" />

          {/* 6. Tiny Sprout (x: 170, stem top y: 135) */}
          <path d="M 170 160 Q 168 148 171 136" />
          <circle cx="171" cy="133" r="2.5" fill="#E96F98" />

          {/* 7. Wonky 5-Petal Flower (x: 200, stem top y: 95) */}
          <path d="M 200 160 Q 202 130 198 98" />
          <circle cx="198" cy="94" r="2.5" fill="#E96F98" />
          <circle cx="198" cy="88" r="2.5" />
          <circle cx="198" cy="100" r="2.5" />
          <circle cx="192" cy="94" r="2.5" />
          <circle cx="204" cy="94" r="2.5" />

          {/* 8. Medium Leafy Stem (x: 235, stem top y: 105) */}
          <path d="M 235 160 Q 232 135 237 110" />
          <path d="M 234 135 Q 222 128 228 120 Q 235 125 234 135" fill="#D7F23A" fillOpacity="0.4" strokeWidth="1.2" />
          <circle cx="237" cy="106" r="3" fill="#D7F23A" />

          {/* 9. Extra Tall Tulip (x: 270, stem top y: 48) */}
          <path d="M 270 160 Q 267 105 272 52" />
          <path d="M 271 115 Q 284 108 278 100 Q 270 106 271 115" fill="#D7F23A" fillOpacity="0.4" strokeWidth="1.2" />
          <path d="M 266 52 C 264 40 269 34 272 34 C 275 34 280 40 278 52 Z" fill="#E96F98" fillOpacity="0.8" />

          {/* 10. Short Daisy (x: 305, stem top y: 115) */}
          <path d="M 305 160 Q 307 140 304 120" />
          <circle cx="304" cy="115" r="2.5" fill="#D7F23A" />
          <circle cx="304" cy="110" r="2" />
          <circle cx="304" cy="120" r="2" />
          <circle cx="299" cy="115" r="2" />
          <circle cx="309" cy="115" r="2" />

          {/* 11. Tiny 3-Dot Wildflower (x: 335, stem top y: 140) */}
          <path d="M 335 160 Q 333 150 336 142" />
          <circle cx="336" cy="139" r="2" fill="#E96F98" />

          {/* 12. Tall Daisy (x: 365, stem top y: 65) */}
          <path d="M 365 160 Q 368 115 363 68" />
          <circle cx="363" cy="62" r="3" fill="#E96F98" />
          <path d="M 363 51 C 360 56 360 59 363 59" />
          <path d="M 363 65 C 360 68 360 71 363 71" />
          <path d="M 352 62 C 356 59 359 60 359 62" />
          <path d="M 367 62 C 371 59 374 60 374 62" />

          {/* 13. Medium Tulip (x: 400, stem top y: 92) */}
          <path d="M 400 160 Q 397 128 402 96" />
          <path d="M 401 130 Q 388 124 394 116 Q 401 122 401 130" fill="#D7F23A" fillOpacity="0.4" strokeWidth="1.2" />
          <path d="M 396 96 C 394 86 399 80 402 80 C 405 80 410 86 408 96 Z" fill="#D7F23A" fillOpacity="0.75" />

          {/* 14. Short 5-Petal Flower (x: 435, stem top y: 125) */}
          <path d="M 435 160 Q 437 145 434 130" />
          <circle cx="434" cy="126" r="2.5" fill="#E96F98" />
          <circle cx="434" cy="121" r="2" />
          <circle cx="434" cy="131" r="2" />

          {/* 15. Super Tall Tulip (x: 470, stem top y: 42) */}
          <path d="M 470 160 Q 467 100 472 46" />
          <path d="M 471 110 Q 484 102 478 94 Q 470 100 471 110" fill="#D7F23A" fillOpacity="0.4" strokeWidth="1.2" />
          <path d="M 466 46 C 464 34 469 28 472 28 C 475 28 480 34 478 46 Z" fill="#E96F98" fillOpacity="0.8" />

          {/* 16. Medium Wonky Daisy (x: 505, stem top y: 82) */}
          <path d="M 505 160 Q 508 122 503 86" />
          <circle cx="503" cy="80" r="3" fill="#D7F23A" />
          <circle cx="503" cy="74" r="2" />
          <circle cx="503" cy="86" r="2" />
          <circle cx="497" cy="80" r="2" />
          <circle cx="509" cy="80" r="2" />

          {/* 17. Tiny Wildflower Sprout (x: 540, stem top y: 135) */}
          <path d="M 540 160 Q 538 148 541 138" />
          <circle cx="541" cy="135" r="2.5" fill="#D7F23A" />

          {/* 18. Tall Daisy (x: 575, stem top y: 60) */}
          <path d="M 575 160 Q 578 112 573 64" />
          <path d="M 576 118 Q 588 110 582 102 Q 574 108 576 118" fill="#D7F23A" fillOpacity="0.4" strokeWidth="1.2" />
          <circle cx="573" cy="58" r="3" fill="#E96F98" />
          <path d="M 573 47 C 570 52 570 55 573 55" />
          <path d="M 573 61 C 570 64 570 67 573 67" />
          <path d="M 562 58 C 566 55 569 56 569 58" />
          <path d="M 577 58 C 581 55 584 56 584 58" />

          {/* 19. Medium Tulip (x: 610, stem top y: 100) */}
          <path d="M 610 160 Q 607 132 612 104" />
          <path d="M 606 104 C 604 94 609 88 612 88 C 615 88 620 94 618 104 Z" fill="#D7F23A" fillOpacity="0.75" />

          {/* 20. Short 5-Petal Flower (x: 645, stem top y: 122) */}
          <path d="M 645 160 Q 647 142 644 126" />
          <circle cx="644" cy="122" r="2.5" fill="#E96F98" />
          <circle cx="644" cy="117" r="2" />
          <circle cx="644" cy="127" r="2" />

          {/* 21. Extra Tall Daisy (x: 680, stem top y: 48) */}
          <path d="M 680 160 Q 683 105 678 52" />
          <circle cx="678" cy="46" r="3.5" fill="#D7F23A" />
          <path d="M 678 34 C 674 40 675 43 678 43" />
          <path d="M 678 49 C 674 52 675 55 678 55" />
          <path d="M 666 46 C 671 42 674 43 674 46" />
          <path d="M 682 46 C 687 42 690 43 690 46" />

          {/* 22. Medium Tulip (x: 715, stem top y: 88) */}
          <path d="M 715 160 Q 712 125 717 92" />
          <path d="M 716 126 Q 728 120 722 112 Q 714 118 716 126" fill="#D7F23A" fillOpacity="0.4" strokeWidth="1.2" />
          <path d="M 711 92 C 709 82 714 76 717 76 C 720 76 725 82 723 92 Z" fill="#E96F98" fillOpacity="0.75" />

          {/* 23. Short Daisy (x: 750, stem top y: 118) */}
          <path d="M 750 160 Q 752 140 749 122" />
          <circle cx="749" cy="117" r="2.5" fill="#E96F98" />
          <circle cx="749" cy="112" r="2" />
          <circle cx="749" cy="122" r="2" />

          {/* 24. Tiny Sprout (x: 780, stem top y: 140) */}
          <path d="M 780 160 Q 778 150 781 142" />
          <circle cx="781" cy="139" r="2" fill="#D7F23A" />

          {/* 25. Super Tall Tulip (x: 815, stem top y: 44) */}
          <path d="M 815 160 Q 812 100 817 48" />
          <path d="M 816 112 Q 828 104 822 96 Q 814 102 816 112" fill="#D7F23A" fillOpacity="0.4" strokeWidth="1.2" />
          <path d="M 811 48 C 809 36 814 30 817 30 C 820 30 825 36 823 48 Z" fill="#E96F98" fillOpacity="0.8" />

          {/* 26. Medium Daisy (x: 850, stem top y: 78) */}
          <path d="M 850 160 Q 853 120 848 82" />
          <circle cx="848" cy="76" r="3" fill="#D7F23A" />
          <path d="M 848 65 C 845 70 845 73 848 73" />
          <path d="M 848 79 C 845 82 845 85 848 85" />
          <path d="M 837 76 C 841 73 844 74 844 76" />
          <path d="M 852 76 C 856 73 859 74 859 76" />

          {/* 27. Short Tulip (x: 885, stem top y: 108) */}
          <path d="M 885 160 Q 882 135 887 112" />
          <path d="M 881 112 C 879 102 884 96 887 96 C 890 96 895 102 893 112 Z" fill="#D7F23A" fillOpacity="0.75" />

          {/* 28. Tiny Wildflower (x: 915, stem top y: 132) */}
          <path d="M 915 160 Q 917 146 914 134" />
          <circle cx="914" cy="130" r="2.5" fill="#E96F98" />

          {/* 29. Tall Daisy (x: 950, stem top y: 62) */}
          <path d="M 950 160 Q 953 112 948 66" />
          <path d="M 951 116 Q 963 108 957 100 Q 949 106 951 116" fill="#D7F23A" fillOpacity="0.4" strokeWidth="1.2" />
          <circle cx="948" cy="60" r="3" fill="#E96F98" />
          <path d="M 948 49 C 945 54 945 57 948 57" />
          <path d="M 948 63 C 945 66 945 69 948 69" />

          {/* 30. Medium Tulip (x: 985, stem top y: 90) */}
          <path d="M 985 160 Q 982 126 987 94" />
          <path d="M 981 94 C 979 84 984 78 987 78 C 990 78 995 84 993 94 Z" fill="#E96F98" fillOpacity="0.75" />

          {/* 31. Short 5-Petal Flower (x: 1020, stem top y: 120) */}
          <path d="M 1020 160 Q 1022 142 1019 124" />
          <circle cx="1019" cy="119" r="2.5" fill="#D7F23A" />
          <circle cx="1019" cy="114" r="2" />
          <circle cx="1019" cy="124" r="2" />

          {/* 32. Super Tall Tulip (x: 1055, stem top y: 46) */}
          <path d="M 1055 160 Q 1052 102 1057 50" />
          <path d="M 1056 114 Q 1068 106 1062 98 Q 1054 104 1056 114" fill="#D7F23A" fillOpacity="0.4" strokeWidth="1.2" />
          <path d="M 1051 50 C 1049 38 1054 32 1057 32 C 1060 32 1065 38 1063 50 Z" fill="#E96F98" fillOpacity="0.8" />

          {/* 33. Medium Daisy (x: 1090, stem top y: 80) */}
          <path d="M 1090 160 Q 1093 122 1088 84" />
          <circle cx="1088" cy="78" r="3" fill="#D7F23A" />
          <path d="M 1088 67 C 1085 72 1085 75 1088 75" />
          <path d="M 1088 81 C 1085 84 1085 87 1088 87" />

          {/* 34. Short Tulip (x: 1125, stem top y: 110) */}
          <path d="M 1125 160 Q 1122 136 1127 114" />
          <path d="M 1121 114 C 1119 104 1124 98 1127 98 C 1130 98 1135 104 1133 114 Z" fill="#E96F98" fillOpacity="0.75" />

          {/* 35. Tiny Sprout (x: 1160, stem top y: 136) */}
          <path d="M 1160 160 Q 1158 148 1161 138" />
          <circle cx="1161" cy="135" r="2.5" fill="#D7F23A" />

          {/* 36. Medium Wonky Tulip (x: 1185, stem top y: 88) */}
          <path d="M 1185 160 Q 1182 125 1187 92" />
          <path d="M 1181 92 C 1179 82 1184 76 1187 76 C 1190 76 1195 82 1193 92 Z" fill="#E96F98" fillOpacity="0.8" />

        </g>

        {/* =========================================================================
           EXACTLY 2 ANIMATED HAND-DRAWN BUTTERFLIES (DESKTOP)
           ========================================================================= */}
        
        {/* BUTTERFLY 1: Left / Center Flight Path */}
        <g className="butterfly-group-1" transform="translate(180, 20)">
          <g stroke="#171515" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 15 15 Q 15 21 15 25" />
            <path d="M 15 15 Q 12 10 10 8" />
            <path d="M 15 15 Q 18 10 20 8" />
            <g className="butterfly-wing-left">
              <path d="M 15 17 C 6 8 1 18 13 22 C 4 24 7 32 15 25 Z" fill="#E96F98" fillOpacity="0.85" />
            </g>
            <g className="butterfly-wing-right">
              <path d="M 15 17 C 24 8 29 18 17 22 C 26 24 23 32 15 25 Z" fill="#E96F98" fillOpacity="0.85" />
            </g>
          </g>
        </g>

        {/* BUTTERFLY 2: Center / Right Flight Path */}
        <g className="butterfly-group-2" transform="translate(780, 15)">
          <g stroke="#171515" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 15 15 Q 15 21 15 25" />
            <path d="M 15 15 Q 12 10 10 8" />
            <path d="M 15 15 Q 18 10 20 8" />
            <g className="butterfly-wing-left">
              <path d="M 15 17 C 6 8 1 18 13 22 C 4 24 7 32 15 25 Z" fill="#D7F23A" fillOpacity="0.85" />
            </g>
            <g className="butterfly-wing-right">
              <path d="M 15 17 C 24 8 29 18 17 22 C 26 24 23 32 15 25 Z" fill="#D7F23A" fillOpacity="0.85" />
            </g>
          </g>
        </g>
      </svg>


      {/* =========================================================================
         MOBILE DEDICATED DOODLE GARDEN (Screen Width < 640px)
         viewBox="0 0 400 160" — Rich, dense, small flowers anchored to bottom baseline Y=160
         ========================================================================= */}
      <svg
        viewBox="0 0 400 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block sm:hidden w-full h-auto max-h-[160px] pointer-events-none"
        preserveAspectRatio="xMidYMax meet"
      >
        <g stroke="#171515" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          
          {/* Mobile Flower 1 (x: 12) */}
          <path d="M 12 160 Q 10 135 14 112" />
          <path d="M 9 112 C 7 102 12 96 14 96 C 17 96 22 102 20 112 Z" fill="#E96F98" fillOpacity="0.75" />

          {/* Mobile Flower 2 (x: 32) */}
          <path d="M 32 160 Q 34 140 31 122" />
          <circle cx="31" cy="117" r="2.5" fill="#D7F23A" />
          <circle cx="31" cy="112" r="2" />
          <circle cx="31" cy="122" r="2" />

          {/* Mobile Flower 3 (x: 52) */}
          <path d="M 52 160 Q 49 118 54 78" />
          <circle cx="54" cy="72" r="3" fill="#D7F23A" />
          <path d="M 54 61 C 51 66 51 69 54 69" />
          <path d="M 54 75 C 51 78 51 81 54 81" />

          {/* Mobile Flower 4 (x: 72) */}
          <path d="M 72 160 Q 75 135 69 110" />
          <circle cx="69" cy="104" r="3" fill="#E96F98" />

          {/* Mobile Flower 5 (x: 92) */}
          <path d="M 92 160 Q 89 105 94 52" />
          <path d="M 88 52 C 86 40 91 34 94 34 C 97 34 102 40 100 52 Z" fill="#E96F98" fillOpacity="0.8" />

          {/* Mobile Flower 6 (x: 115) */}
          <path d="M 115 160 Q 117 140 114 122" />
          <circle cx="114" cy="117" r="2.5" fill="#D7F23A" />

          {/* Mobile Flower 7 (x: 135) */}
          <path d="M 135 160 Q 132 120 137 82" />
          <path d="M 131 82 C 129 72 134 66 137 66 C 140 66 145 72 143 82 Z" fill="#D7F23A" fillOpacity="0.75" />

          {/* Mobile Flower 8 (x: 158) */}
          <path d="M 158 160 Q 161 142 157 126" />
          <circle cx="157" cy="121" r="2.5" fill="#E96F98" />
          <circle cx="157" cy="116" r="2" />
          <circle cx="157" cy="126" r="2" />

          {/* Mobile Flower 9 (x: 180) */}
          <path d="M 180 160 Q 177 102 182 46" />
          <circle cx="182" cy="40" r="3.5" fill="#D7F23A" />
          <path d="M 182 28 C 178 34 179 37 182 37" />
          <path d="M 182 43 C 178 46 179 49 182 49" />

          {/* Mobile Flower 10 (x: 205) */}
          <path d="M 205 160 Q 202 128 207 94" />
          <path d="M 201 94 C 199 84 204 78 207 78 C 210 78 215 84 213 94 Z" fill="#E96F98" fillOpacity="0.8" />

          {/* Mobile Flower 11 (x: 228) */}
          <path d="M 228 160 Q 230 142 227 126" />
          <circle cx="227" cy="122" r="2.5" fill="#D7F23A" />

          {/* Mobile Flower 12 (x: 250) */}
          <path d="M 250 160 Q 247 112 252 64" />
          <circle cx="252" cy="58" r="3" fill="#E96F98" />
          <path d="M 252 47 C 249 52 249 55 252 55" />
          <path d="M 252 61 C 249 64 249 67 252 67" />

          {/* Mobile Flower 13 (x: 275) */}
          <path d="M 275 160 Q 272 130 277 98" />
          <path d="M 271 98 C 269 88 274 82 277 82 C 280 82 285 88 283 98 Z" fill="#D7F23A" fillOpacity="0.75" />

          {/* Mobile Flower 14 (x: 298) */}
          <path d="M 298 160 Q 300 142 297 124" />
          <circle cx="297" cy="119" r="2.5" fill="#E96F98" />

          {/* Mobile Flower 15 (x: 320) */}
          <path d="M 320 160 Q 317 100 322 44" />
          <path d="M 316 44 C 314 32 319 26 322 26 C 325 26 330 32 328 44 Z" fill="#E96F98" fillOpacity="0.8" />

          {/* Mobile Flower 16 (x: 345) */}
          <path d="M 345 160 Q 348 128 343 96" />
          <circle cx="343" cy="90" r="3" fill="#D7F23A" />

          {/* Mobile Flower 17 (x: 368) */}
          <path d="M 368 160 Q 365 138 370 116" />
          <path d="M 364 116 C 362 106 367 100 370 100 C 373 100 378 106 376 116 Z" fill="#E96F98" fillOpacity="0.75" />

          {/* Mobile Flower 18 (x: 388) */}
          <path d="M 388 160 Q 386 148 389 136" />
          <circle cx="389" cy="133" r="2.5" fill="#D7F23A" />

        </g>

        {/* =========================================================================
           EXACTLY 2 ANIMATED HAND-DRAWN BUTTERFLIES (MOBILE)
           ========================================================================= */}
        
        {/* Mobile Butterfly 1 */}
        <g className="butterfly-group-mobile-1" transform="translate(60, 20)">
          <g stroke="#171515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 12 12 Q 12 17 12 21" />
            <path d="M 12 12 Q 9 8 7 6" />
            <path d="M 12 12 Q 15 8 17 6" />
            <g className="butterfly-wing-left">
              <path d="M 12 14 C 5 7 1 15 10 18 C 3 20 5 26 12 20 Z" fill="#E96F98" fillOpacity="0.85" />
            </g>
            <g className="butterfly-wing-right">
              <path d="M 12 14 C 19 7 23 15 14 18 C 21 20 19 26 12 20 Z" fill="#E96F98" fillOpacity="0.85" />
            </g>
          </g>
        </g>

        {/* Mobile Butterfly 2 */}
        <g className="butterfly-group-mobile-2" transform="translate(260, 15)">
          <g stroke="#171515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 12 12 Q 12 17 12 21" />
            <path d="M 12 12 Q 9 8 7 6" />
            <path d="M 12 12 Q 15 8 17 6" />
            <g className="butterfly-wing-left">
              <path d="M 12 14 C 5 7 1 15 10 18 C 3 20 5 26 12 20 Z" fill="#D7F23A" fillOpacity="0.85" />
            </g>
            <g className="butterfly-wing-right">
              <path d="M 12 14 C 19 7 23 15 14 18 C 21 20 19 26 12 20 Z" fill="#D7F23A" fillOpacity="0.85" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
