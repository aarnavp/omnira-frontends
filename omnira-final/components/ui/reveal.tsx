"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUpItem, revealVariants, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils/cn";

/**
 * Scroll-triggered rise + fade for a single block. Respects reduced motion
 * globally via `MotionConfig reducedMotion="user"` in the root layout — the
 * translate is dropped automatically, the fade still plays once.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Component = motion.div,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: typeof motion.div;
}) {
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={revealVariants}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

/** Staggers its direct `motion` children in on scroll — headline word groups,
 * multi-line copy, stat rows. */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(stagger)}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUpItem}>
      {children}
    </motion.div>
  );
}
