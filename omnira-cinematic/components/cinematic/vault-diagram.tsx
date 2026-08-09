"use client";

import { motion } from "framer-motion";

const ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

function pointAt(angleDeg: number, radius: number): [number, number] {
  const rad = (angleDeg * Math.PI) / 180;
  return [100 + Math.cos(rad) * radius, 80 + Math.sin(rad) * radius];
}

/**
 * The perimeter stays solid and closed; small fragments dart out to the
 * network and dissolve — the trust beat for "Your Data Never Leaves"
 * (CONTENT.md §10–11). `animate={false}` (the reduced-motion path) freezes
 * a handful of fragments mid-journey at fixed opacity instead of looping.
 */
export function VaultDiagram({ animate = true }: { animate?: boolean }) {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" role="presentation" aria-hidden>
      {ANGLES.map((angle, i) => {
        if (!animate) {
          if (i % 2 !== 0) return null;
          const [x, y] = pointAt(angle, 52);
          return <circle key={angle} cx={x} cy={y} r={3} fill="var(--color-accent-motion)" opacity={0.45} />;
        }
        const [sx, sy] = pointAt(angle, 36);
        const [ex, ey] = pointAt(angle, 74);
        return (
          <motion.circle
            key={angle}
            r={3}
            fill="var(--color-accent-motion)"
            initial={{ cx: sx, cy: sy, opacity: 0 }}
            animate={{ cx: [sx, ex], cy: [sy, ey], opacity: [0, 1, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: (i / ANGLES.length) * 2.4,
              ease: "easeOut",
            }}
          />
        );
      })}

      <rect
        x={70}
        y={50}
        width={60}
        height={60}
        rx={14}
        fill="var(--color-panel)"
        stroke="var(--color-accent)"
        strokeWidth={2}
      />
      <rect x={88} y={68} width={24} height={24} rx={4} fill="none" stroke="var(--color-accent)" strokeWidth={1.5} opacity={0.6} />
      <circle cx={100} cy={80} r={3} fill="var(--color-accent)" />
    </svg>
  );
}
