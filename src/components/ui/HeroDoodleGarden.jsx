import React from 'react';

export default function HeroDoodleGarden() {
  return (
    <div className="hero-doodle-garden-container">
      <svg
        viewBox="0 0 1200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[160px] block pointer-events-none"
        preserveAspectRatio="none"
      >
        {/* =========================================================================
           HAND-DRAWN DOODLE GARDEN — ALL STEMS ANCHORED AT BASELINE Y = 160
           Stroke: #171515, Accents: #E96F98 (Pink), #D7F23A (Lime)
           ========================================================================= */}
        <g stroke="#171515" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          
          {/* FLOWER 01 (x: 25) — Medium Tulip */}
          <path d="M 25 160 Q 22 130 26 102" />
          <path d="M 25 135 Q 10 128 17 118 Q 25 124 25 135" fill="#D7F23A" fillOpacity="0.4" />
          <path d="M 16 102 C 14 86 21 78 26 78 C 31 78 38 86 36 102 Z" fill="#E96F98" fillOpacity="0.85" />
          <path d="M 26 102 L 26 80" />

          {/* FLOWER 02 (x: 65) — Tiny 5-Petal Wildflower */}
          <path d="M 65 160 Q 67 142 64 125" />
          <circle cx="64" cy="120" r="4" fill="#D7F23A" />
          <circle cx="64" cy="112" r="3" />
          <circle cx="64" cy="128" r="3" />
          <circle cx="56" cy="120" r="3" />
          <circle cx="72" cy="120" r="3" />

          {/* FLOWER 03 (x: 105) — Tall Irregular Daisy */}
          <path d="M 105 160 Q 102 120 108 72" />
          <path d="M 106 130 Q 124 122 116 112 Q 106 119 106 130" fill="#D7F23A" fillOpacity="0.4" />
          <circle cx="108" cy="66" r="7" fill="#D7F23A" />
          <path d="M 108 48 C 103 54 104 59 108 59" />
          <path d="M 108 73 C 103 78 104 84 108 84" />
          <path d="M 90 66 C 96 61 101 62 101 66" />
          <path d="M 115 66 C 120 61 126 62 126 66" />
          <path d="M 95 53 C 100 57 103 60 103 60" />
          <path d="M 113 72 C 116 75 121 79 121 79" />

          {/* FLOWER 04 (x: 145) — Small Leafy Stem */}
          <path d="M 145 160 Q 148 135 142 110" />
          <path d="M 145 145 Q 132 138 138 130 Q 145 135 145 145" fill="#D7F23A" fillOpacity="0.4" />
          <path d="M 144 125 Q 158 118 152 110 Q 144 116 144 125" fill="#D7F23A" fillOpacity="0.4" />
          <circle cx="142" cy="106" r="4" fill="#E96F98" />

          {/* FLOWER 05 (x: 185) — Extra Tall Tulip */}
          <path d="M 185 160 Q 182 115 188 62" />
          <path d="M 184 128 Q 166 122 172 112 Q 183 118 184 128" fill="#D7F23A" fillOpacity="0.4" />
          <path d="M 178 62 C 176 44 183 36 188 36 C 193 36 200 44 198 62 Z" fill="#E96F98" fillOpacity="0.85" />
          <path d="M 188 62 L 188 38" />

          {/* FLOWER 06 (x: 225) — Small 5-Petal Flower */}
          <path d="M 225 160 Q 227 138 223 118" />
          <circle cx="223" cy="112" r="5" fill="#E96F98" />
          <path d="M 223 98 C 219 104 220 107 223 107" />
          <path d="M 223 117 C 219 120 220 125 223 125" />

          {/* FLOWER 07 (x: 265) — Medium Irregular Daisy */}
          <path d="M 265 160 Q 262 125 267 82" />
          <path d="M 264 128 Q 282 120 274 110 Q 264 118 264 128" fill="#D7F23A" fillOpacity="0.4" />
          <circle cx="267" cy="76" r="6" fill="#E96F98" fillOpacity="0.9" />
          <path d="M 267 60 C 262 65 263 70 267 70" />
          <path d="M 267 82 C 262 87 263 92 267 92" />
          <path d="M 251 76 C 256 71 261 72 261 76" />
          <path d="M 273 76 C 278 71 283 72 283 76" />

          {/* FLOWER 08 (x: 310) — Medium Tulip */}
          <path d="M 310 160 Q 314 135 308 102" />
          <path d="M 312 135 Q 296 128 302 118 Q 311 124 312 135" fill="#D7F23A" fillOpacity="0.4" />
          <path d="M 298 102 C 296 86 303 78 308 78 C 313 78 320 86 318 102 Z" fill="#D7F23A" fillOpacity="0.85" />
          <path d="M 308 102 L 308 80" />

          {/* FLOWER 09 (x: 350) — Tiny Sprout Wildflower */}
          <path d="M 350 160 Q 348 142 352 128" />
          <circle cx="352" cy="122" r="4" fill="#E96F98" />

          {/* FLOWER 10 (x: 390) — Super Tall Daisy */}
          <path d="M 390 160 Q 394 115 388 56" />
          <path d="M 392 125 Q 410 118 402 108 Q 392 115 392 125" fill="#D7F23A" fillOpacity="0.4" />
          <circle cx="388" cy="48" r="8" fill="#D7F23A" />
          <path d="M 388 28 C 382 35 383 40 388 40" />
          <path d="M 388 56 C 382 61 383 66 388 66" />
          <path d="M 368 48 C 374 42 380 43 380 48" />
          <path d="M 396 48 C 402 42 408 43 408 48" />
          <path d="M 374 34 C 380 39 383 42 383 42" />
          <path d="M 393 54 C 396 57 402 62 402 62" />

          {/* FLOWER 11 (x: 435) — Medium Tulip */}
          <path d="M 435 160 Q 432 130 437 92" />
          <path d="M 434 130 Q 418 122 424 112 Q 433 118 434 130" fill="#D7F23A" fillOpacity="0.4" />
          <path d="M 427 92 C 425 76 432 68 437 68 C 442 68 449 76 447 92 Z" fill="#E96F98" fillOpacity="0.85" />
          <path d="M 437 92 L 437 70" />

          {/* FLOWER 12 (x: 475) — Small 5-Petal Flower */}
          <path d="M 475 160 Q 478 140 473 118" />
          <circle cx="473" cy="112" r="5" fill="#D7F23A" />
          <path d="M 473 98 C 469 104 470 107 473 107" />

          {/* FLOWER 13 (x: 515) — Tall Tulip */}
          <path d="M 515 160 Q 512 118 517 68" />
          <path d="M 514 125 Q 532 118 524 108 Q 514 115 514 125" fill="#D7F23A" fillOpacity="0.4" />
          <path d="M 507 68 C 505 52 512 44 517 44 C 522 44 529 52 527 68 Z" fill="#E96F98" fillOpacity="0.85" />
          <path d="M 517 68 L 517 46" />

          {/* FLOWER 14 (x: 560) — Medium Daisy */}
          <path d="M 560 160 Q 564 132 558 98" />
          <path d="M 562 130 Q 578 122 570 112 Q 561 118 562 130" fill="#D7F23A" fillOpacity="0.4" />
          <circle cx="558" cy="92" r="7" fill="#D7F23A" />
          <path d="M 558 74 C 553 80 554 85 558 85" />
          <path d="M 558 99 C 553 104 554 109 558 109" />
          <path d="M 540 92 C 546 87 551 88 551 92" />
          <path d="M 565 92 C 571 87 576 88 576 92" />

          {/* FLOWER 15 (x: 605) — Tiny Sprout Wildflower */}
          <path d="M 605 160 Q 602 142 607 126" />
          <path d="M 605 140 Q 592 134 597 126 Q 604 131 605 140" fill="#D7F23A" fillOpacity="0.4" />
          <circle cx="607" cy="120" r="4" fill="#E96F98" />

          {/* FLOWER 16 (x: 645) — Ultra Tall Daisy */}
          <path d="M 645 160 Q 649 112 641 52" />
          <path d="M 646 122 Q 664 114 656 104 Q 646 112 646 122" fill="#D7F23A" fillOpacity="0.4" />
          <circle cx="641" cy="44" r="8" fill="#E96F98" fillOpacity="0.9" />
          <path d="M 641 24 C 635 31 636 36 641 36" />
          <path d="M 641 52 C 635 57 636 62 641 62" />
          <path d="M 621 44 C 627 38 633 39 633 44" />
          <path d="M 649 44 C 655 38 661 39 661 44" />

          {/* FLOWER 17 (x: 690) — Medium Tulip */}
          <path d="M 690 160 Q 687 130 692 88" />
          <path d="M 689 128 Q 673 120 679 110 Q 688 116 689 128" fill="#D7F23A" fillOpacity="0.4" />
          <path d="M 682 88 C 680 72 687 64 692 64 C 697 64 704 72 702 88 Z" fill="#D7F23A" fillOpacity="0.85" />
          <path d="M 692 88 L 692 66" />

          {/* FLOWER 18 (x: 735) — Small 5-Petal Flower */}
          <path d="M 735 160 Q 738 140 732 120" />
          <circle cx="732" cy="114" r="5" fill="#E96F98" />
          <path d="M 732 100 C 728 106 729 109 732 109" />

          {/* FLOWER 19 (x: 775) — Extra Tall Tulip */}
          <path d="M 775 160 Q 772 115 778 62" />
          <path d="M 774 125 Q 792 118 784 108 Q 774 115 774 125" fill="#D7F23A" fillOpacity="0.4" />
          <path d="M 768 62 C 766 44 773 36 778 36 C 783 36 790 44 788 62 Z" fill="#E96F98" fillOpacity="0.85" />
          <path d="M 778 62 L 778 38" />

          {/* FLOWER 20 (x: 820) — Medium Daisy */}
          <path d="M 820 160 Q 824 132 818 95" />
          <path d="M 822 128 Q 838 120 830 110 Q 821 116 822 128" fill="#D7F23A" fillOpacity="0.4" />
          <circle cx="818" cy="88" r="7" fill="#D7F23A" />
          <path d="M 818 70 C 813 76 814 81 818 81" />
          <path d="M 818 95 C 813 100 814 105 818 105" />
          <path d="M 800 88 C 806 83 811 84 811 88" />
          <path d="M 825 88 C 831 83 836 84 836 88" />

          {/* FLOWER 21 (x: 865) — Tiny Wildflower Sprout */}
          <path d="M 865 160 Q 862 142 867 124" />
          <circle cx="867" cy="118" r="4" fill="#E96F98" />

          {/* FLOWER 22 (x: 905) — Super Tall Daisy */}
          <path d="M 905 160 Q 909 115 903 54" />
          <path d="M 907 122 Q 925 114 917 104 Q 907 112 907 122" fill="#D7F23A" fillOpacity="0.4" />
          <circle cx="903" cy="46" r="8" fill="#E96F98" fillOpacity="0.9" />
          <path d="M 903 26 C 897 33 898 38 903 38" />
          <path d="M 903 54 C 897 59 898 64 903 64" />
          <path d="M 883 46 C 889 40 895 41 895 46" />
          <path d="M 911 46 C 917 40 923 41 923 46" />

          {/* FLOWER 23 (x: 950) — Medium Tulip */}
          <path d="M 950 160 Q 947 130 952 88" />
          <path d="M 949 128 Q 933 120 939 110 Q 948 116 949 128" fill="#D7F23A" fillOpacity="0.4" />
          <path d="M 942 88 C 940 72 947 64 952 64 C 957 64 964 72 962 88 Z" fill="#D7F23A" fillOpacity="0.85" />
          <path d="M 952 88 L 952 66" />

          {/* FLOWER 24 (x: 995) — Small 5-Petal Flower */}
          <path d="M 995 160 Q 998 140 992 118" />
          <circle cx="992" cy="112" r="5" fill="#E96F98" />
          <path d="M 992 98 C 988 104 989 107 992 107" />

          {/* FLOWER 25 (x: 1040) — Tall Tulip */}
          <path d="M 1040 160 Q 1037 118 1043 68" />
          <path d="M 1039 125 Q 1057 118 1049 108 Q 1039 115 1039 125" fill="#D7F23A" fillOpacity="0.4" />
          <path d="M 1033 68 C 1031 52 1038 44 1043 44 C 1048 44 1055 52 1053 68 Z" fill="#E96F98" fillOpacity="0.85" />
          <path d="M 1043 68 L 1043 46" />

          {/* FLOWER 26 (x: 1085) — Medium Daisy */}
          <path d="M 1085 160 Q 1089 135 1082 100" />
          <path d="M 1087 130 Q 1103 122 1095 112 Q 1086 118 1087 130" fill="#D7F23A" fillOpacity="0.4" />
          <circle cx="1082" cy="94" r="7" fill="#D7F23A" />
          <path d="M 1082 76 C 1077 82 1078 87 1082 87" />
          <path d="M 1082 101 C 1077 106 1078 111 1082 111" />
          <path d="M 1064 94 C 1070 89 1075 90 1075 94" />
          <path d="M 1089 94 C 1095 89 1100 90 1100 94" />

          {/* FLOWER 27 (x: 1130) — Tiny Wildflower Sprout */}
          <path d="M 1130 160 Q 1127 142 1132 126" />
          <circle cx="1132" cy="120" r="4" fill="#E96F98" />

          {/* FLOWER 28 (x: 1170) — Medium Tulip */}
          <path d="M 1170 160 Q 1173 125 1168 82" />
          <path d="M 1171 125 Q 1155 117 1161 107 Q 1170 113 1171 125" fill="#D7F23A" fillOpacity="0.4" />
          <path d="M 1158 82 C 1156 66 1163 58 1168 58 C 1173 58 1180 66 1178 82 Z" fill="#E96F98" fillOpacity="0.85" />
          <path d="M 1168 82 L 1168 60" />

        </g>

        {/* =========================================================================
           EXACTLY 2 ANIMATED HAND-DRAWN BUTTERFLIES (FLYING GENTLY OVER THE GARDEN)
           ========================================================================= */}
        
        {/* BUTTERFLY 1: Floating across Left / Center Region */}
        <g className="butterfly-group-1" transform="translate(220, 25)">
          <g stroke="#171515" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Antennae & Body */}
            <path d="M 20 20 Q 20 28 20 34" />
            <path d="M 20 20 Q 16 13 13 11" />
            <path d="M 20 20 Q 24 13 27 11" />
            
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

        {/* BUTTERFLY 2: Floating across Center / Right Region */}
        <g className="butterfly-group-2" transform="translate(840, 20)">
          <g stroke="#171515" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Antennae & Body */}
            <path d="M 20 20 Q 20 28 20 34" />
            <path d="M 20 20 Q 16 13 13 11" />
            <path d="M 20 20 Q 24 13 27 11" />
            
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
