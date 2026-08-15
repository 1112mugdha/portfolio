import React from 'react';

// Type 1 — Simple Tulip (Small 8x10px head, thin stem from Y=160)
const Tulip = ({ x, h, curve = 0, color = '#E96F98' }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY + 10}`} />
      <path d={`M ${x} ${160 - h * 0.45} Q ${x + 6} ${160 - h * 0.45 - 4} ${x + 7} ${160 - h * 0.45 - 8} Q ${x + 2} ${160 - h * 0.45 - 6} ${x} ${160 - h * 0.45 - 2}`} fill="#D7F23A" fillOpacity="0.4" strokeWidth="1.1" />
      <path d={`M ${x - 5} ${topY + 10} C ${x - 6} ${topY + 4} ${x - 2} ${topY} ${x} ${topY} C ${x + 2} ${topY} ${x + 6} ${topY + 4} ${x + 5} ${topY + 10} Z`} stroke="#171515" />
      <path d={`M ${x - 2} ${topY + 10} L ${x} ${topY + 3} L ${x + 2} ${topY + 10}`} stroke="#171515" />
      <circle cx={x} cy={topY + 6} r="1.5" fill={color} stroke="none" />
    </g>
  );
};

// Type 2 — Simple Daisy (Small 10px head, 6 petals, tiny center dot)
const Daisy = ({ x, h, curve = 0, color = '#D7F23A' }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY}`} />
      <circle cx={x} cy={topY - 5} r="2" />
      <circle cx={x} cy={topY + 5} r="2" />
      <circle cx={x - 5} cy={topY} r="2" />
      <circle cx={x + 5} cy={topY} r="2" />
      <circle cx={x - 3.5} cy={topY - 3.5} r="1.8" />
      <circle cx={x + 3.5} cy={topY + 3.5} r="1.8" />
      <circle cx={x + 3.5} cy={topY - 3.5} r="1.8" />
      <circle cx={x - 3.5} cy={topY + 3.5} r="1.8" />
      <circle cx={x} cy={topY} r="2" fill={color} stroke="#171515" strokeWidth="1" />
    </g>
  );
};

// Type 3 — Tiny Wildflower (Delicate 8px head with accent dot)
const Wildflower = ({ x, h, curve = 0, color = '#E96F98' }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY}`} />
      <circle cx={x} cy={topY - 4} r="1.8" />
      <circle cx={x - 4} cy={topY} r="1.8" />
      <circle cx={x + 4} cy={topY} r="1.8" />
      <circle cx={x - 2.5} cy={topY + 3} r="1.8" />
      <circle cx={x + 2.5} cy={topY + 3} r="1.8" />
      <circle cx={x} cy={topY} r="1.4" fill={color} stroke="none" />
    </g>
  );
};

// Type 4 — Simple 5-Petal Flower (Small 10px head, curved stem)
const FivePetal = ({ x, h, curve = 0, color = '#E96F98' }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY}`} />
      <path d={`M ${x} ${topY - 5} C ${x - 2} ${topY - 4} ${x - 2} ${topY - 2} ${x} ${topY}`} />
      <path d={`M ${x + 5} ${topY - 1} C ${x + 4} ${topY} ${x + 2} ${topY} ${x} ${topY}`} />
      <path d={`M ${x + 3} ${topY + 4} C ${x + 2} ${topY + 3} ${x + 1} ${topY + 1} ${x} ${topY}`} />
      <path d={`M ${x - 3} ${topY + 4} C ${x - 2} ${topY + 3} ${x - 1} ${topY + 1} ${x} ${topY}`} />
      <path d={`M ${x - 5} ${topY - 1} C ${x - 4} ${topY} ${x - 2} ${topY} ${x} ${topY}`} />
      <circle cx={x} cy={topY} r="1.8" fill={color} stroke="#171515" strokeWidth="0.9" />
    </g>
  );
};

// Type 5 — Tiny Round/Bud Flower (Simple oval bud 6x8px)
const BudFlower = ({ x, h, curve = 0, color = '#D7F23A' }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY}`} />
      <path d={`M ${x} ${160 - h * 0.5} Q ${x - 5} ${160 - h * 0.5 - 3} ${x - 6} ${160 - h * 0.5 - 6}`} strokeWidth="1.1" fill="#D7F23A" fillOpacity="0.4" />
      <ellipse cx={x} cy={topY} rx="3" ry="4" fill={color} fillOpacity="0.75" stroke="#171515" strokeWidth="1.2" />
    </g>
  );
};

// Type 6 — Simple Little Sprig (Leaves/buds only, no big flower head)
const Sprig = ({ x, h, curve = 0 }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY}`} />
      <path d={`M ${x} ${topY + 14} Q ${x - 5} ${topY + 10} ${x - 7} ${topY + 8}`} fill="#D7F23A" fillOpacity="0.4" />
      <path d={`M ${x} ${topY + 24} Q ${x + 5} ${topY + 20} ${x + 7} ${topY + 18}`} fill="#D7F23A" fillOpacity="0.4" />
      <circle cx={x} cy={topY} r="1.5" fill="#171515" />
    </g>
  );
};

export default function HeroDoodleGarden() {
  return (
    <div className="hero-doodle-garden-container">
      {/* =========================================================================
         DESKTOP DOODLE GARDEN (Screen Width >= 640px)
         All stems anchored to Y=160. Uneven heights (25px to 78px max).
         ========================================================================= */}
      <svg
        viewBox="0 0 1200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden sm:block w-full h-auto max-h-[160px] pointer-events-none"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Continuous organic garden across desktop width */}
        <Tulip x={25} h={45} curve={-3} color="#E96F98" />
        <Daisy x={55} h={68} curve={4} color="#D7F23A" />
        <Wildflower x={85} h={30} curve={-2} color="#E96F98" />
        <Sprig x={115} h={52} curve={3} />
        <FivePetal x={145} h={75} curve={-4} color="#E96F98" />
        <BudFlower x={175} h={35} curve={2} color="#D7F23A" />
        <Tulip x={205} h={62} curve={-2} color="#E96F98" />
        <Daisy x={240} h={48} curve={3} color="#D7F23A" />
        <Wildflower x={270} h={28} curve={-1} color="#E96F98" />
        <FivePetal x={300} h={78} curve={-3} color="#E96F98" />
        <Sprig x={335} h={42} curve={2} />
        <BudFlower x={365} h={55} curve={-2} color="#D7F23A" />
        <Tulip x={400} h={70} curve={4} color="#E96F98" />
        <Daisy x={430} h={38} curve={-2} color="#D7F23A" />
        <Wildflower x={460} h={60} curve={3} color="#E96F98" />
        <Sprig x={495} h={30} curve={-1} />
        <FivePetal x={525} h={76} curve={-4} color="#E96F98" />
        <BudFlower x={555} h={48} curve={2} color="#D7F23A" />
        <Tulip x={590} h={64} curve={-3} color="#E96F98" />
        <Daisy x={625} h={35} curve={3} color="#D7F23A" />
        <Wildflower x={655} h={72} curve={-2} color="#E96F98" />
        <Sprig x={690} h={50} curve={4} />
        <FivePetal x={720} h={32} curve={-2} color="#E96F98" />
        <BudFlower x={750} h={74} curve={3} color="#D7F23A" />
        <Tulip x={785} h={56} curve={-3} color="#E96F98" />
        <Daisy x={820} h={78} curve={4} color="#D7F23A" />
        <Wildflower x={850} h={26} curve={-1} color="#E96F98" />
        <Sprig x={880} h={44} curve={2} />
        <FivePetal x={910} h={66} curve={-3} color="#E96F98" />
        <BudFlower x={945} h={38} curve={2} color="#D7F23A" />
        <Tulip x={975} h={72} curve={-4} color="#E96F98" />
        <Daisy x={1010} h={46} curve={3} color="#D7F23A" />
        <Wildflower x={1040} h={64} curve={-2} color="#E96F98" />
        <Sprig x={1075} h={34} curve={1} />
        <FivePetal x={1105} h={75} curve={-3} color="#E96F98" />
        <BudFlower x={1140} h={40} curve={2} color="#D7F23A" />
        <Tulip x={1170} h={58} curve={-2} color="#E96F98" />

        {/* EXACTLY TWO TINY DESKTOP BUTTERFLIES */}
        <g className="butterfly-group-1" transform="translate(190, 18)">
          <g stroke="#171515" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 12 12 Q 12 18 12 22" />
            <path d="M 12 12 Q 9 8 7 6" />
            <path d="M 12 12 Q 15 8 17 6" />
            <g className="butterfly-wing-left">
              <path d="M 12 14 C 4 6 0 14 10 18 C 2 20 4 26 12 20 Z" fill="#E96F98" fillOpacity="0.8" />
            </g>
            <g className="butterfly-wing-right">
              <path d="M 12 14 C 20 6 24 14 14 18 C 22 20 20 26 12 20 Z" fill="#E96F98" fillOpacity="0.8" />
            </g>
          </g>
        </g>

        <g className="butterfly-group-2" transform="translate(810, 15)">
          <g stroke="#171515" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 12 12 Q 12 18 12 22" />
            <path d="M 12 12 Q 9 8 7 6" />
            <path d="M 12 12 Q 15 8 17 6" />
            <g className="butterfly-wing-left">
              <path d="M 12 14 C 4 6 0 14 10 18 C 2 20 4 26 12 20 Z" fill="#D7F23A" fillOpacity="0.8" />
            </g>
            <g className="butterfly-wing-right">
              <path d="M 12 14 C 20 6 24 14 14 18 C 22 20 20 26 12 20 Z" fill="#D7F23A" fillOpacity="0.8" />
            </g>
          </g>
        </g>
      </svg>

      {/* =========================================================================
         DEDICATED MOBILE DOODLE GARDEN (Screen Width < 640px)
         Single row anchored to Y=160. Uneven heights.
         ========================================================================= */}
      <svg
        viewBox="0 0 400 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block sm:hidden w-full h-auto max-h-[160px] pointer-events-none"
        preserveAspectRatio="xMidYMax meet"
      >
        <Tulip x={15} h={48} curve={-2} color="#E96F98" />
        <Daisy x={35} h={68} curve={3} color="#D7F23A" />
        <Wildflower x={55} h={28} curve={-1} color="#E96F98" />
        <Sprig x={75} h={45} curve={2} />
        <FivePetal x={95} h={74} curve={-3} color="#E96F98" />
        <BudFlower x={115} h={35} curve={1} color="#D7F23A" />
        <Tulip x={135} h={62} curve={-2} color="#E96F98" />
        <Daisy x={158} h={42} curve={3} color="#D7F23A" />
        <Wildflower x={180} h={76} curve={-2} color="#E96F98" />
        <Sprig x={202} h={30} curve={1} />
        <FivePetal x={222} h={65} curve={-3} color="#E96F98" />
        <BudFlower x={242} h={40} curve={2} color="#D7F23A" />
        <Tulip x={262} h={72} curve={-3} color="#E96F98" />
        <Daisy x={285} h={46} curve={3} color="#D7F23A" />
        <Wildflower x={308} h={60} curve={-2} color="#E96F98" />
        <Sprig x={330} h={32} curve={1} />
        <FivePetal x={350} h={75} curve={-3} color="#E96F98" />
        <BudFlower x={372} h={38} curve={2} color="#D7F23A" />
        <Tulip x={390} h={52} curve={-2} color="#E96F98" />

        {/* EXACTLY TWO TINY MOBILE BUTTERFLIES */}
        <g className="butterfly-group-mobile-1" transform="translate(50, 18)">
          <g stroke="#171515" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 10 10 Q 10 15 10 18" />
            <path d="M 10 10 Q 7 6 5 4" />
            <path d="M 10 10 Q 13 6 15 4" />
            <g className="butterfly-wing-left">
              <path d="M 10 12 C 3 5 0 12 8 15 C 1 17 3 22 10 17 Z" fill="#E96F98" fillOpacity="0.8" />
            </g>
            <g className="butterfly-wing-right">
              <path d="M 10 12 C 17 5 20 12 12 15 C 19 17 17 22 10 17 Z" fill="#E96F98" fillOpacity="0.8" />
            </g>
          </g>
        </g>

        <g className="butterfly-group-mobile-2" transform="translate(250, 15)">
          <g stroke="#171515" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 10 10 Q 10 15 10 18" />
            <path d="M 10 10 Q 7 6 5 4" />
            <path d="M 10 10 Q 13 6 15 4" />
            <g className="butterfly-wing-left">
              <path d="M 10 12 C 3 5 0 12 8 15 C 1 17 3 22 10 17 Z" fill="#D7F23A" fillOpacity="0.8" />
            </g>
            <g className="butterfly-wing-right">
              <path d="M 10 12 C 17 5 20 12 12 15 C 19 17 17 22 10 17 Z" fill="#D7F23A" fillOpacity="0.8" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
