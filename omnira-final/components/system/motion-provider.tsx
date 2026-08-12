"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

/**
 * Root-level Framer Motion configuration. `reducedMotion="user"` makes every
 * Framer Motion animation in the tree respect the OS `prefers-reduced-motion`
 * setting automatically — transform-driven motion (slide/scale) is stripped,
 * opacity fades still play. This covers all the small reveals; the big
 * scroll-scrubbed sequences (R3F centerpiece, GSAP-pinned sections) aren't
 * Framer Motion and need their own explicit reduced-motion branches — see
 * `hooks/use-reduced-motion.ts`.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
