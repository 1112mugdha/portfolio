import React from 'react';

// Type 1 — Simple Tulip (Delicate 6x8px head, thin stem from Y=160)
const Tulip = ({ x, h, curve = 0, color = '#E96F98' }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY + 7}`} />
      <path d={`M ${x - 3.5} ${topY + 7} C ${x - 4.5} ${topY + 3} ${x - 1.5} ${topY} ${x} ${topY} C ${x + 1.5} ${topY} ${x + 4.5} ${topY + 3} ${x + 3.5} ${topY + 7} Z`} stroke="#171515" />
      <circle cx={x} cy={topY + 4} r="1" fill={color} stroke="none" />
    </g>
  );
};

// Type 2 — Simple Daisy (Delicate 7px head, tiny center dot)
const Daisy = ({ x, h, curve = 0, color = '#D7F23A' }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY}`} />
      <circle cx={x} cy={topY - 3.5} r="1.3" />
      <circle cx={x} cy={topY + 3.5} r="1.3" />
      <circle cx={x - 3.5} cy={topY} r="1.3" />
      <circle cx={x + 3.5} cy={topY} r="1.3" />
      <circle cx={x} cy={topY} r="1.4" fill={color} stroke="#171515" strokeWidth="0.8" />
    </g>
  );
};

// Type 3 — Tiny Wildflower (Delicate 6px 5-dot head)
const Wildflower = ({ x, h, curve = 0, color = '#E96F98' }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY}`} />
      <circle cx={x} cy={topY - 3} r="1.2" />
      <circle cx={x - 3} cy={topY} r="1.2" />
      <circle cx={x + 3} cy={topY} r="1.2" />
      <circle cx={x - 2} cy={topY + 2.5} r="1.2" />
      <circle cx={x + 2} cy={topY + 2.5} r="1.2" />
      <circle cx={x} cy={topY} r="1" fill={color} stroke="none" />
    </g>
  );
};

// Type 4 — Simple 5-Petal Flower (Delicate 7px head)
const FivePetal = ({ x, h, curve = 0, color = '#E96F98' }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY}`} />
      <path d={`M ${x} ${topY - 3.5} C ${x - 1.5} ${topY - 3} ${x - 1.5} ${topY - 1.5} ${x} ${topY}`} />
      <path d={`M ${x + 3.5} ${topY - 1} C ${x + 3} ${topY} ${x + 1.5} ${topY} ${x} ${topY}`} />
      <path d={`M ${x + 2} ${topY + 3} C ${x + 1.5} ${topY + 2} ${x + 1} ${topY + 1} ${x} ${topY}`} />
      <path d={`M ${x - 2} ${topY + 3} C ${x - 1.5} ${topY + 2} ${x - 1} ${topY + 1} ${x} ${topY}`} />
      <path d={`M ${x - 3.5} ${topY - 1} C ${x - 3} ${topY} ${x - 1.5} ${topY} ${x} ${topY}`} />
      <circle cx={x} cy={topY} r="1.2" fill={color} stroke="#171515" strokeWidth="0.7" />
    </g>
  );
};

// Type 5 — Tiny Round/Bud Flower (Delicate 4x5px oval bud)
const BudFlower = ({ x, h, curve = 0, color = '#D7F23A' }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY}`} />
      <ellipse cx={x} cy={topY} rx="2" ry="3" fill={color} fillOpacity="0.75" stroke="#171515" strokeWidth="1" />
    </g>
  );
};

// Type 6 — Simple Little Sprig (Thin stem with 2 tiny leaf buds)
const Sprig = ({ x, h, curve = 0 }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY}`} />
      <path d={`M ${x} ${topY + 10} Q ${x - 3} ${topY + 8} ${x - 4} ${topY + 6}`} />
      <path d={`M ${x} ${topY + 18} Q ${x + 3} ${topY + 16} ${x + 4} ${topY + 14}`} />
      <circle cx={x} cy={topY} r="1.1" fill="#171515" />
    </g>
  );
};

export default function HeroDoodleGarden() {
  return (
    <div className="hero-doodle-garden-container">
      {/* =========================================================================
         SINGLE RESPONSIVE DOODLE GARDEN & BUTTERFLIES
         viewBox="0 0 1200 160" — All stems anchored to Y=160.
         Height strictly capped at max 52px (top Y >= 108px), occupying ONLY bottom ~25% of hero.
         ========================================================================= */}
      <svg
        viewBox="0 0 1200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[160px] pointer-events-none block"
        preserveAspectRatio="none"
      >
        {/* Single row of delicate small flowers anchored to Y=160 */}
        <Tulip x={25} h={32} curve={-2} color="#E96F98" />
        <Daisy x={60} h={48} curve={3} color="#D7F23A" />
        <Wildflower x={95} h={22} curve={-1} color="#E96F98" />
        <Sprig x={130} h={38} curve={2} />
        <FivePetal x={165} h={52} curve={-3} color="#E96F98" />
        <BudFlower x={200} h={26} curve={1} color="#D7F23A" />
        <Tulip x={235} h={44} curve={-2} color="#E96F98" />
        <Daisy x={275} h={35} curve={2} color="#D7F23A" />
        <Wildflower x={310} h={20} curve={-1} color="#E96F98" />
        <FivePetal x={345} h={54} curve={-3} color="#E96F98" />
        <Sprig x={385} h={30} curve={2} />
        <BudFlower x={420} h={40} curve={-2} color="#D7F23A" />
        <Tulip x={460} h={50} curve={3} color="#E96F98" />
        <Daisy x={495} h={28} curve={-2} color="#D7F23A" />
        <Wildflower x={530} h={45} curve={2} color="#E96F98" />
        <Sprig x={570} h={24} curve={-1} />
        <FivePetal x={605} h={55} curve={-3} color="#E96F98" />
        <BudFlower x={640} h={34} curve={2} color="#D7F23A" />
        <Tulip x={680} h={46} curve={-2} color="#E96F98" />
        <Daisy x={715} h={26} curve={2} color="#D7F23A" />
        <Wildflower x={750} h={50} curve={-2} color="#E96F98" />
        <Sprig x={790} h={36} curve={3} />
        <FivePetal x={825} h={24} curve={-1} color="#E96F98" />
        <BudFlower x={860} h={52} curve={2} color="#D7F23A" />
        <Tulip x={900} h={40} curve={-2} color="#E96F98" />
        <Daisy x={935} h={54} curve={3} color="#D7F23A" />
        <Wildflower x={970} h={20} curve={-1} color="#E96F98" />
        <Sprig x={1005} h={32} curve={2} />
        <FivePetal x={1040} h={48} curve={-2} color="#E96F98" />
        <BudFlower x={1080} h={28} curve={1} color="#D7F23A" />
        <Tulip x={1115} h={52} curve={-3} color="#E96F98" />
        <Daisy x={1150} h={30} curve={2} color="#D7F23A" />
        <Sprig x={1180} h={42} curve={-1} />

        {/* =========================================================================
           EXACTLY 2 TINY ANIMATED BUTTERFLIES
           Each butterfly is ONE SINGLE GROUP with body + left wing + right wing attached.
           ========================================================================= */}
        
        {/* BUTTERFLY 1: Left / Center Flight Path */}
        <g className="butterfly-group-1" transform="translate(220, 30)">
          <g transform="translate(0, 0)">
            {/* Antennae & Body */}
            <path d="M 0 -7 L 0 6" stroke="#171515" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 0 -7 C -3 -10 -4 -12 -5 -13" stroke="#171515" strokeWidth="1" strokeLinecap="round" />
            <path d="M 0 -7 C 3 -10 4 -12 5 -13" stroke="#171515" strokeWidth="1" strokeLinecap="round" />
            
            {/* Left Wing (Hinge at (0, -1)) */}
            <g className="butterfly-wing-l">
              <path d="M 0 -1 C -7 -8 -12 1 -3 4 C -10 6 -7 13 0 2 Z" stroke="#171515" strokeWidth="1.1" fill="#E96F98" fillOpacity="0.85" strokeLinejoin="round" />
            </g>
            
            {/* Right Wing (Hinge at (0, -1)) */}
            <g className="butterfly-wing-r">
              <path d="M 0 -1 C 7 -8 12 1 3 4 C 10 6 7 13 0 2 Z" stroke="#171515" strokeWidth="1.1" fill="#E96F98" fillOpacity="0.85" strokeLinejoin="round" />
            </g>
          </g>
        </g>

        {/* BUTTERFLY 2: Center / Right Flight Path */}
        <g className="butterfly-group-2" transform="translate(820, 25)">
          <g transform="translate(0, 0)">
            {/* Antennae & Body */}
            <path d="M 0 -7 L 0 6" stroke="#171515" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 0 -7 C -3 -10 -4 -12 -5 -13" stroke="#171515" strokeWidth="1" strokeLinecap="round" />
            <path d="M 0 -7 C 3 -10 4 -12 5 -13" stroke="#171515" strokeWidth="1" strokeLinecap="round" />
            
            {/* Left Wing (Hinge at (0, -1)) */}
            <g className="butterfly-wing-l">
              <path d="M 0 -1 C -7 -8 -12 1 -3 4 C -10 6 -7 13 0 2 Z" stroke="#171515" strokeWidth="1.1" fill="#D7F23A" fillOpacity="0.85" strokeLinejoin="round" />
            </g>
            
            {/* Right Wing (Hinge at (0, -1)) */}
            <g className="butterfly-wing-r">
              <path d="M 0 -1 C 7 -8 12 1 3 4 C 10 6 7 13 0 2 Z" stroke="#171515" strokeWidth="1.1" fill="#D7F23A" fillOpacity="0.85" strokeLinejoin="round" />
            </g>
          </g>
        </g>

      </svg>
    </div>
  );
}
