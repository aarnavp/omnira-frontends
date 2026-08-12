import type { Transition, Variants } from "framer-motion";

/** Shared easing used anywhere a reveal should feel considered, not linear. */
export const EASE_SIGNAL: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const springy: Transition = { type: "spring", stiffness: 220, damping: 26, mass: 0.9 };

/** Standard scroll-reveal: rise + fade. Used by <Reveal>. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_SIGNAL } },
};

/** Parent variant for staggered children reveals. */
export function staggerContainer(stagger = 0.12, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_SIGNAL } },
};
