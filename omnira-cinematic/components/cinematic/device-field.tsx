"use client";

import { useMemo } from "react";
import { mulberry32, seededPick } from "@/lib/utils/random";
import { useMountedReducedMotion } from "@/hooks/use-mounted-reduced-motion";

type DeviceKind = "laptop" | "phone" | "tv" | "server";

interface DeviceDot {
  x: number;
  y: number;
  kind: DeviceKind;
  scale: number;
  delay: number;
  flickers: boolean;
}

const KINDS: DeviceKind[] = ["laptop", "phone", "tv", "server"];
const COUNT = 160;

function buildField(seed: number, flickerShare: number): DeviceDot[] {
  const rng = mulberry32(seed);
  const dots: DeviceDot[] = [];
  for (let i = 0; i < COUNT; i += 1) {
    // Bias toward a horizontal band so the scatter reads as "a world," not a
    // uniform grid — abstract, not a literal map (see PROMPT.md §5, Idle World).
    const band = (rng() + rng() + rng()) / 3;
    dots.push({
      x: rng() * 100,
      y: 14 + band * 72,
      kind: seededPick(rng, KINDS),
      scale: 0.45 + rng() * 0.55,
      delay: rng() * -8,
      flickers: rng() < flickerShare,
    });
  }
  return dots;
}

function DeviceGlyph({ kind }: { kind: DeviceKind }) {
  switch (kind) {
    case "laptop":
      return <rect x={-4} y={-2.5} width={8} height={5} rx={1} />;
    case "phone":
      return <rect x={-1.6} y={-3} width={3.2} height={6} rx={0.8} />;
    case "tv":
      return <rect x={-4.5} y={-3} width={9} height={6} rx={0.6} />;
    case "server":
      return <rect x={-2} y={-4.5} width={4} height={9} rx={0.6} />;
  }
}

/**
 * The idle-world device scatter — laptops, phones, TVs, servers, mostly dim,
 * a share of them individually flickering. Reused by both `<IdleWorld>`
 * (`flickerShare` low — "almost all idle") and `<TheShift>` (higher —
 * "nodes begin to flicker on, individually, unconnected"). Deterministic
 * per `seed` so it renders the same on every load without needing real
 * geodata — the geographic *claim* stays in the copy, the visual abstracts
 * it (PROMPT.md §9: cinematic license applies to how, not to what).
 */
export function DeviceField({
  seed,
  flickerShare = 0.05,
  animate,
  className,
}: {
  seed: number;
  flickerShare?: number;
  /** When false, renders a fixed frame instead of the looping pulse — the
   * reduced-motion path uses this so "awake" reads through brightness, not
   * an autoplaying animation (PROMPT.md §6). Left unset, `<DeviceField>`
   * decides for itself from `prefers-reduced-motion` — the plain
   * `animation-duration: 0.001ms` override in globals.css isn't enough on
   * its own here, since without `animation-fill-mode` it snaps back to this
   * component's un-animated *base* opacity (1, the brightest flicker frame)
   * once the near-instant animation ends, rather than settling dim. */
  animate?: boolean;
  className?: string;
}) {
  const prefersReducedMotion = useMountedReducedMotion();
  const shouldAnimate = animate ?? !prefersReducedMotion;
  const dots = useMemo(() => buildField(seed, flickerShare), [seed, flickerShare]);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="presentation"
      aria-hidden
    >
      {dots.map((dot, i) => (
        <g
          key={i}
          transform={`translate(${dot.x} ${dot.y}) scale(${dot.scale})`}
          className={dot.flickers && shouldAnimate ? "animate-(--animate-pulse-node)" : undefined}
          style={{
            animationDelay: dot.flickers && shouldAnimate ? `${dot.delay}s` : undefined,
            // Animated dots pulse up to full opacity; the static (reduced-
            // motion) frame holds at 0.62 instead of 1 — at flicker shares
            // as high as NetworkAwakensStatic's, full-opacity glyphs read as
            // solid overlapping blocks rather than a densely lit field.
            opacity: dot.flickers ? (shouldAnimate ? 1 : 0.62) : 0.16,
          }}
          fill={dot.flickers ? "var(--color-accent)" : "var(--color-mist-600)"}
        >
          <DeviceGlyph kind={dot.kind} />
        </g>
      ))}
    </svg>
  );
}
