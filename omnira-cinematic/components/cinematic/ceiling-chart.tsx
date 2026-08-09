"use client";

import { motion } from "framer-motion";
import { EASE_SIGNAL } from "@/lib/motion";

const RACKS = [
  { x: 20, height: 92 },
  { x: 90, height: 128 },
  { x: 160, height: 74 },
  { x: 230, height: 140 },
  { x: 300, height: 104 },
];

/** Racks under strain: a stepped "capacity" line provisioned in discrete,
 * expensive jumps, with an organic "demand" curve underneath that keeps
 * spiking up to meet it — the shot for CONTENT.md §02's real problem
 * statement, not a generic bar chart. Isolated client leaf (needs
 * `motion.path`'s scroll-triggered draw-on); the copy around it stays a
 * Server Component. */
export function CeilingChart() {
  return (
    <div className="relative w-full max-w-xl">
      <svg viewBox="0 0 400 220" className="w-full" role="img" aria-label="Illustration of a strained data center: a stepped capacity line provisioned in expensive jumps, with demand repeatedly spiking to meet it.">
        {RACKS.map((rack, i) => (
          <g key={rack.x}>
            <motion.rect
              x={rack.x}
              y={200 - rack.height}
              width={50}
              height={rack.height}
              rx={3}
              fill="var(--color-panel-raised)"
              initial={{ opacity: 0, scaleY: 0.6 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: EASE_SIGNAL }}
              style={{ transformOrigin: "bottom" }}
            />
            {Array.from({ length: Math.floor(rack.height / 10) }).map((_, slat) => (
              <rect
                key={slat}
                x={rack.x + 4}
                y={200 - rack.height + 6 + slat * 10}
                width={42}
                height={3}
                fill="var(--color-void-border)"
              />
            ))}
          </g>
        ))}

        {/* Capacity — provisioned in discrete, expensive steps */}
        <motion.path
          d="M10,150 L120,150 L120,100 L230,100 L230,60 L400,60"
          fill="none"
          stroke="var(--color-mist-600)"
          strokeWidth={2}
          strokeDasharray="4 5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, ease: EASE_SIGNAL }}
        />

        {/* Demand — climbs continuously, spiking to meet capacity at peaks */}
        <motion.path
          d="M10,190 C 60,185 90,178 120,155 C 145,138 170,145 190,120 C 205,102 220,108 230,80 C 260,50 320,72 340,55 C 365,44 385,50 400,42"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.6, delay: 0.2, ease: EASE_SIGNAL }}
        />
      </svg>
      <div className="mt-4 flex items-center gap-6 font-mono text-[11px] tracking-wider text-(--color-ink-faint) uppercase">
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-4 bg-(--color-accent)" /> Demand
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-4 border-t-2 border-dashed border-(--color-mist-600)" /> Capacity, provisioned
        </span>
      </div>
    </div>
  );
}
