"use client";

import { motion } from "framer-motion";

/** Three "diagrams made of light," one per state of `<HowItWorksSection>` —
 * deliberately not a whitepaper figure. Each is a small, self-contained SVG
 * so the section can crossfade between them. Every diagram takes its own
 * `animate` flag: the pinned desktop version passes `true`, the
 * reduced-motion static layout passes `false` and gets a real resting frame
 * instead of a looping animation with `transition: none` slapped on it. */

export function DataStaysDiagram({ animate = true }: { animate?: boolean }) {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" role="presentation" aria-hidden>
      <circle cx={100} cy={80} r={34} fill="none" stroke="var(--color-accent)" strokeWidth={1.5} opacity={0.35} />
      {animate ? (
        <motion.circle
          cx={100}
          cy={80}
          r={34}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={1.5}
          initial={{ opacity: 0.7, scale: 0.85 }}
          animate={{ opacity: 0, scale: 1.35 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          style={{ transformOrigin: "100px 80px" }}
        />
      ) : null}
      <rect x={80} y={60} width={40} height={40} rx={6} fill="var(--color-accent)" />
      <rect x={92} y={70} width={16} height={4} rx={1} fill="var(--color-void-950)" opacity={0.6} />
      <rect x={92} y={78} width={16} height={4} rx={1} fill="var(--color-void-950)" opacity={0.6} />
      <rect x={92} y={86} width={16} height={4} rx={1} fill="var(--color-void-950)" opacity={0.6} />
    </svg>
  );
}

// Five points sampled off the quadratic bezier M40,100 Q100,30 160,60 at
// t = 0, .25, .5, .75, 1 — animating cx/cy keyframes instead of CSS
// offset-path/offset-distance keeps this fully numeric-typed and renders
// identically across browsers for an SVG child.
const ARC_CX = [40, 70, 100, 130, 160];
const ARC_CY = [100, 71.25, 55, 51.25, 60];

export function ComputeMovesDiagram({ animate = true }: { animate?: boolean }) {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" role="presentation" aria-hidden>
      <circle cx={40} cy={100} r={10} fill="var(--color-mist-700)" />
      <circle cx={160} cy={60} r={10} fill="var(--color-mist-700)" />
      <path
        d="M 40 100 Q 100 30 160 60"
        fill="none"
        stroke="var(--color-hairline)"
        strokeWidth={1}
        strokeDasharray="3 5"
      />
      {animate ? (
        <motion.circle
          r={5}
          fill="var(--color-accent-motion)"
          initial={{ cx: ARC_CX[0], cy: ARC_CY[0] }}
          animate={{ cx: ARC_CX, cy: ARC_CY }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : (
        <circle cx={100} cy={55} r={5} fill="var(--color-accent-motion)" />
      )}
    </svg>
  );
}

const SATELLITES = [
  { x: 100, y: 30 },
  { x: 160, y: 70 },
  { x: 140, y: 130 },
  { x: 60, y: 130 },
  { x: 40, y: 70 },
];

export function ControlLayerDiagram({ animate = true }: { animate?: boolean }) {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" role="presentation" aria-hidden>
      {SATELLITES.map((s, i) => (
        <line key={i} x1={100} y1={80} x2={s.x} y2={s.y} stroke="var(--color-hairline)" strokeWidth={1} />
      ))}
      {SATELLITES.map((s, i) =>
        animate ? (
          <motion.circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={5}
            fill="var(--color-accent-motion)"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        ) : (
          <circle key={i} cx={s.x} cy={s.y} r={5} fill="var(--color-accent-motion)" opacity={0.75} />
        ),
      )}
      <circle cx={100} cy={80} r={10} fill="var(--color-accent)" />
    </svg>
  );
}
