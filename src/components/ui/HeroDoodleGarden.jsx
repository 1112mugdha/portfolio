import React from 'react';

// Type 1 — Simple Tulip (Rounded U-shaped cup, solid fill Pink/Lime, unfilled leaves)
const Tulip = ({ x, h, curve = 0, color = '#E96F98' }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Thin curved stem from baseline Y=160 */}
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY + 12}`} fill="none" />

      {/* Unfilled transparent leaf 1 */}
      <path
        d={`M ${x} ${160 - h * 0.4} Q ${x - 7} ${160 - h * 0.4 - 4} ${x - 9} ${160 - h * 0.4 - 9} Q ${x - 2} ${160 - h * 0.4 - 6} ${x} ${160 - h * 0.4 - 2}`}
        fill="none"
        stroke="#171515"
        strokeWidth="1.1"
      />
      {/* Unfilled transparent leaf 2 for tall stems */}
      {h > 50 && (
        <path
          d={`M ${x} ${160 - h * 0.68} Q ${x + 7} ${160 - h * 0.68 - 4} ${x + 9} ${160 - h * 0.68 - 9} Q ${x + 2} ${160 - h * 0.68 - 6} ${x} ${160 - h * 0.68 - 2}`}
          fill="none"
          stroke="#171515"
          strokeWidth="1.1"
        />
      )}

      {/* U-shaped Tulip Cup completely filled with Pink or Lime */}
      <path
        d={`M ${x - 5} ${topY} C ${x - 6} ${topY + 7} ${x - 4} ${topY + 13} ${x} ${topY + 13} C ${x + 4} ${topY + 13} ${x + 6} ${topY + 7} ${x + 5} ${topY} C ${x + 2} ${topY + 3} ${x} ${topY + 1} ${x - 2} ${topY + 3} Z`}
        fill={color}
        stroke="#171515"
        strokeWidth="1.2"
      />
      <path d={`M ${x - 2} ${topY + 3} Q ${x - 1} ${topY + 8} ${x} ${topY + 13}`} fill="none" stroke="#171515" strokeWidth="0.9" opacity="0.6" />
      <path d={`M ${x + 2} ${topY + 3} Q ${x + 1} ${topY + 8} ${x} ${topY + 13}`} fill="none" stroke="#171515" strokeWidth="0.9" opacity="0.6" />
    </g>
  );
};

// Type 2 — Simple Daisy (6 rounded petals around small lime/pink center)
const Daisy = ({ x, h, curve = 0, color = '#D7F23A' }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY}`} fill="none" />

      {/* Unfilled leaf */}
      <path
        d={`M ${x} ${160 - h * 0.45} Q ${x + 6} ${160 - h * 0.45 - 3} ${x + 8} ${160 - h * 0.45 - 7} Q ${x + 2} ${160 - h * 0.45 - 5} ${x} ${160 - h * 0.45 - 1}`}
        fill="none"
        stroke="#171515"
        strokeWidth="1.1"
      />
      {h > 55 && (
        <path
          d={`M ${x} ${160 - h * 0.72} Q ${x - 6} ${160 - h * 0.72 - 3} ${x - 8} ${160 - h * 0.72 - 7} Q ${x - 2} ${160 - h * 0.72 - 5} ${x} ${160 - h * 0.72 - 1}`}
          fill="none"
          stroke="#171515"
          strokeWidth="1.1"
        />
      )}

      {/* 6 rounded petals */}
      <circle cx={x} cy={topY - 4.5} r="2.2" fill="none" stroke="#171515" />
      <circle cx={x + 4} cy={topY - 2} r="2.2" fill="none" stroke="#171515" />
      <circle cx={x + 4} cy={topY + 2.5} r="2.2" fill="none" stroke="#171515" />
      <circle cx={x} cy={topY + 4.5} r="2.2" fill="none" stroke="#171515" />
      <circle cx={x - 4} cy={topY + 2.5} r="2.2" fill="none" stroke="#171515" />
      <circle cx={x - 4} cy={topY - 2} r="2.2" fill="none" stroke="#171515" />

      {/* Small Lime/Pink Center */}
      <circle cx={x} cy={topY} r="2" fill={color} stroke="#171515" strokeWidth="0.9" />
    </g>
  );
};

// Type 3 — Tiny Wildflower (Cute 5-petal wildflower with accent center)
const Wildflower = ({ x, h, curve = 0, color = '#E96F98' }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY}`} fill="none" />
      {h > 40 && (
        <path
          d={`M ${x} ${160 - h * 0.5} Q ${x - 6} ${160 - h * 0.5 - 3} ${x - 7} ${160 - h * 0.5 - 7} Q ${x - 2} ${160 - h * 0.5 - 5} ${x} ${160 - h * 0.5 - 1}`}
          fill="none"
          stroke="#171515"
          strokeWidth="1.1"
        />
      )}
      <circle cx={x} cy={topY - 3.5} r="1.8" fill="none" stroke="#171515" />
      <circle cx={x + 3.5} cy={topY - 1} r="1.8" fill="none" stroke="#171515" />
      <circle cx={x + 2} cy={topY + 3.5} r="1.8" fill="none" stroke="#171515" />
      <circle cx={x - 2} cy={topY + 3.5} r="1.8" fill="none" stroke="#171515" />
      <circle cx={x - 3.5} cy={topY - 1} r="1.8" fill="none" stroke="#171515" />
      <circle cx={x} cy={topY} r="1.3" fill={color} stroke="none" />
    </g>
  );
};

// Type 4 — Tiny Bud Flower (Cute small bud with unfilled leaf)
const BudFlower = ({ x, h, curve = 0, color = '#E96F98' }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY}`} fill="none" />
      <path
        d={`M ${x} ${160 - h * 0.5} Q ${x + 6} ${160 - h * 0.5 - 3} ${x + 7} ${160 - h * 0.5 - 7} Q ${x + 2} ${160 - h * 0.5 - 5} ${x} ${160 - h * 0.5 - 1}`}
        fill="none"
        stroke="#171515"
        strokeWidth="1.1"
      />
      <circle cx={x} cy={topY} r="3" fill={color} fillOpacity="0.75" stroke="#171515" strokeWidth="1.1" />
      <path d={`M ${x - 2} ${topY - 1} Q ${x} ${topY - 4} ${x + 2} ${topY - 1}`} fill="none" stroke="#171515" strokeWidth="0.9" />
    </g>
  );
};

// Type 5 — Simple 5-Petal Flower (Clean cute 5-petal flower)
const FivePetal = ({ x, h, curve = 0, color = '#E96F98' }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY}`} fill="none" />
      {h > 45 && (
        <path
          d={`M ${x} ${160 - h * 0.45} Q ${x - 6} ${160 - h * 0.45 - 3} ${x - 8} ${160 - h * 0.45 - 7} Q ${x - 2} ${160 - h * 0.45 - 5} ${x} ${160 - h * 0.45 - 1}`}
          fill="none"
          stroke="#171515"
          strokeWidth="1.1"
        />
      )}
      <path d={`M ${x} ${topY - 4} C ${x - 2} ${topY - 3} ${x - 2} ${topY - 1.5} ${x} ${topY}`} fill="none" />
      <path d={`M ${x + 4} ${topY - 1} C ${x + 3} ${topY} ${x + 1.5} ${topY} ${x} ${topY}`} fill="none" />
      <path d={`M ${x + 2.5} ${topY + 3.5} C ${x + 1.5} ${topY + 2.5} ${x + 1} ${topY + 1} ${x} ${topY}`} fill="none" />
      <path d={`M ${x - 2.5} ${topY + 3.5} C ${x - 1.5} ${topY + 2.5} ${x - 1} ${topY + 1} ${x} ${topY}`} fill="none" />
      <path d={`M ${x - 4} ${topY - 1} C ${x - 3} ${topY} ${x - 1.5} ${topY} ${x} ${topY}`} fill="none" />
      <circle cx={x} cy={topY} r="1.5" fill={color} stroke="#171515" strokeWidth="0.8" />
    </g>
  );
};

// Type 6 — Simple Little Sprig (Thin stem with 3-4 unfilled leaves)
const Sprig = ({ x, h, curve = 0 }) => {
  const topY = 160 - h;
  return (
    <g stroke="#171515" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d={`M ${x} 160 Q ${x + curve} ${160 - h / 2} ${x} ${topY}`} />
      <path d={`M ${x} ${topY + 10} Q ${x - 5} ${topY + 7} ${x - 7} ${topY + 4}`} />
      <path d={`M ${x} ${topY + 18} Q ${x + 5} ${topY + 15} ${x + 7} ${topY + 12}`} />
      <path d={`M ${x} ${topY + 26} Q ${x - 5} ${topY + 23} ${x - 6} ${topY + 20}`} />
      <circle cx={x} cy={topY} r="1.3" fill="#171515" />
    </g>
  );
};

export default function HeroDoodleGarden() {
  return (
    <div className="hero-doodle-garden-container">
      {/* =========================================================================
         SINGLE RESPONSIVE DOODLE GARDEN & BUTTERFLIES
         viewBox="0 0 1200 160" — All stems anchored to Y=160.
         Height capped at max 82px (top Y >= 78px), staying in bottom 25-30% of hero.
         ========================================================================= */}
      <svg
        viewBox="0 0 1200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[160px] pointer-events-none block"
        preserveAspectRatio="none"
      >
        {/* DASHED FLIGHT TRAILS FOR BUTTERFLIES */}
        <path d="M 120 95 Q 160 70 200 62 Q 240 54 260 60" stroke="#171515" strokeWidth="0.8" strokeDasharray="2 3" fill="none" opacity="0.45" />
        <path d="M 720 90 Q 760 72 800 60 Q 840 50 870 58" stroke="#171515" strokeWidth="0.8" strokeDasharray="2 3" fill="none" opacity="0.45" />

        {/* Continuous organic garden across width (Anchored at Y=160) */}
        <Tulip x={25} h={52} curve={-3} color="#E96F98" />
        <Daisy x={55} h={75} curve={4} color="#D7F23A" />
        <Wildflower x={85} h={35} curve={-2} color="#E96F98" />
        <Sprig x={115} h={58} curve={3} />
        <FivePetal x={145} h={82} curve={-4} color="#E96F98" />
        <BudFlower x={175} h={40} curve={2} color="#D7F23A" />
        <Tulip x={205} h={68} curve={-2} color="#D7F23A" />
        <Daisy x={240} h={54} curve={3} color="#E96F98" />
        <Wildflower x={270} h={32} curve={-1} color="#E96F98" />
        <FivePetal x={300} h={84} curve={-3} color="#E96F98" />
        <Sprig x={335} h={48} curve={2} />
        <BudFlower x={365} h={60} curve={-2} color="#E96F98" />
        <Tulip x={400} h={78} curve={4} color="#E96F98" />
        <Daisy x={430} h={44} curve={-2} color="#D7F23A" />
        <Wildflower x={460} h={66} curve={3} color="#E96F98" />
        <Sprig x={495} h={36} curve={-1} />
        <FivePetal x={525} h={85} curve={-4} color="#E96F98" />
        <BudFlower x={555} h={54} curve={2} color="#D7F23A" />
        <Tulip x={590} h={72} curve={-3} color="#D7F23A" />
        <Daisy x={625} h={42} curve={3} color="#E96F98" />
        <Wildflower x={655} h={80} curve={-2} color="#E96F98" />
        <Sprig x={690} h={56} curve={4} />
        <FivePetal x={720} h={38} curve={-2} color="#E96F98" />
        <BudFlower x={750} h={82} curve={3} color="#E96F98" />
        <Tulip x={785} h={64} curve={-3} color="#D7F23A" />
        <Daisy x={820} h={85} curve={4} color="#D7F23A" />
        <Wildflower x={850} h={32} curve={-1} color="#E96F98" />
        <Sprig x={880} h={50} curve={2} />
        <FivePetal x={910} h={74} curve={-3} color="#E96F98" />
        <BudFlower x={945} h={44} curve={2} color="#D7F23A" />
        <Tulip x={975} h={80} curve={-4} color="#E96F98" />
        <Daisy x={1010} h={52} curve={3} color="#D7F23A" />
        <Wildflower x={1040} h={70} curve={-2} color="#E96F98" />
        <Sprig x={1075} h={40} curve={1} />
        <FivePetal x={1105} h={84} curve={-3} color="#E96F98" />
        <BudFlower x={1140} h={46} curve={2} color="#D7F23A" />
        <Tulip x={1170} h={65} curve={-2} color="#E96F98" />

        {/* =========================================================================
           EXACTLY 2 TINY ANIMATED BUTTERFLIES WITH DASHED TRAILS
           Hovering strictly in middle-lower area (Y=50px to Y=65px) so they are NEVER cut off!
           ========================================================================= */}
        
        {/* BUTTERFLY 1: Left / Center Region */}
        <g className="butterfly-group-1" transform="translate(240, 58)">
          <g transform="translate(0, 0)">
            {/* Body */}
            <path d="M 0 -6 L 0 5" stroke="#171515" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 0 -6 C -2 -9 -3 -11 -4 -12" stroke="#171515" strokeWidth="0.9" strokeLinecap="round" fill="none" />
            <path d="M 0 -6 C 2 -9 3 -11 4 -12" stroke="#171515" strokeWidth="0.9" strokeLinecap="round" fill="none" />
            
            {/* Left Wing (Hinge at (0, -1)) */}
            <g className="butterfly-wing-l">
              <path d="M 0 -1 C -6 -7 -10 1 -3 3 C -8 5 -6 11 0 2 Z" stroke="#171515" strokeWidth="1" fill="#E96F98" fillOpacity="0.85" strokeLinejoin="round" />
            </g>
            
            {/* Right Wing (Hinge at (0, -1)) */}
            <g className="butterfly-wing-r">
              <path d="M 0 -1 C 6 -7 10 1 3 3 C 8 5 6 11 0 2 Z" stroke="#171515" strokeWidth="1" fill="#E96F98" fillOpacity="0.85" strokeLinejoin="round" />
            </g>
          </g>
        </g>

        {/* BUTTERFLY 2: Center / Right Region */}
        <g className="butterfly-group-2" transform="translate(820, 52)">
          <g transform="translate(0, 0)">
            {/* Body */}
            <path d="M 0 -6 L 0 5" stroke="#171515" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 0 -6 C -2 -9 -3 -11 -4 -12" stroke="#171515" strokeWidth="0.9" strokeLinecap="round" fill="none" />
            <path d="M 0 -6 C 2 -9 3 -11 4 -12" stroke="#171515" strokeWidth="0.9" strokeLinecap="round" fill="none" />
            
            {/* Left Wing (Hinge at (0, -1)) */}
            <g className="butterfly-wing-l">
              <path d="M 0 -1 C -6 -7 -10 1 -3 3 C -8 5 -6 11 0 2 Z" stroke="#171515" strokeWidth="1" fill="#D7F23A" fillOpacity="0.85" strokeLinejoin="round" />
            </g>
            
            {/* Right Wing (Hinge at (0, -1)) */}
            <g className="butterfly-wing-r">
              <path d="M 0 -1 C 6 -7 10 1 3 3 C 8 5 6 11 0 2 Z" stroke="#171515" strokeWidth="1" fill="#D7F23A" fillOpacity="0.85" strokeLinejoin="round" />
            </g>
          </g>
        </g>

      </svg>
    </div>
  );
}
