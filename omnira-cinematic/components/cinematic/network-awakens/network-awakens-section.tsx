"use client";

import type { RefObject } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { usePinnedProgress } from "@/hooks/use-pinned-progress";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useMountedReducedMotion } from "@/hooks/use-mounted-reduced-motion";
import { EASE_SIGNAL } from "@/lib/motion";
import { NetworkAwakensStatic } from "./network-awakens-static";

// WebGL only exists client-side; keep it out of the server bundle entirely.
const ParticleGlobe = dynamic(() => import("./particle-globe").then((m) => m.ParticleGlobe), {
  ssr: false,
});

const CAPTIONS = [
  "One node lights up.",
  "Then a handful.",
  "Then thousands.",
  "Then it's the whole network — millions of live connections.",
];

// Deliberately uneven — the particle reveal is roughly linear with scroll
// progress, so an even quarter-split caption would already look like
// "thousands" while still reading "then a handful." These line the copy up
// with what's actually on screen at each point.
const CAPTION_BREAKPOINTS = [0.03, 0.13, 0.45];

// Kept as its own leaf only so `useIsMobile` (which reads `window` in an
// effect) stays scoped to the piece that needs it, without adding a
// re-render dependency to the pinned section root below.
function ParticleGlobeMobileAware({ progressRef }: { progressRef: RefObject<number> }) {
  const isMobile = useIsMobile();
  return <ParticleGlobe progressRef={progressRef} quality={isMobile ? "lite" : "full"} />;
}

/**
 * The centerpiece: a single node pulling back into a full, breathing globe
 * as the visitor scrolls — the "camera move" of the site. Pins for 260% of
 * a viewport height (`usePinnedProgress`) and hands scroll progress to
 * `<ParticleGlobe>` through a ref (not React state) so the WebGL scene
 * updates every tick without forcing a re-render; the caption below is the
 * only thing that triggers React state, and only when its stage changes.
 *
 * Reduced motion renders `<NetworkAwakensStatic>` instead — no pin, no
 * canvas mounted at all, which also means zero WebGL cost for those
 * visitors. Mobile (<768px) keeps the pinned scrub but drops to
 * `quality="lite"` — a lighter shader pass, fewer points, capped device
 * pixel ratio — instead of the full desktop scene at a crawl.
 */
export function NetworkAwakensSection() {
  const prefersReducedMotion = useMountedReducedMotion();
  const { ref, progressRef, stage } = usePinnedProgress<HTMLElement>({
    end: "+=260%",
    scrub: 0.5,
    stageCount: CAPTIONS.length,
    stageBreakpoints: CAPTION_BREAKPOINTS,
    disabled: prefersReducedMotion,
  });

  if (prefersReducedMotion) {
    return <NetworkAwakensStatic />;
  }

  return (
    <section id="network-awakens" ref={ref} className="relative h-svh overflow-hidden">
      <div className="absolute inset-0">
        <ParticleGlobeMobileAware progressRef={progressRef} />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 px-6 pt-28 text-center sm:px-10 lg:px-16">
        <p className="font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">
          Act II — The Network Awakens
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-16 z-10 flex justify-center px-6 sm:px-10 lg:px-16">
        <AnimatePresence mode="wait">
          <motion.p
            key={stage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: EASE_SIGNAL }}
            className="max-w-lg font-(family-name:--font-display) text-title font-medium text-balance text-(--color-ink)"
          >
            {CAPTIONS[stage]}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
