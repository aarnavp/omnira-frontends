"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Like framer-motion's `useReducedMotion`, but safe for branching an entire
 * subtree rather than just an animation's parameters. `useReducedMotion`
 * returns `null` during SSR, which reads as falsy — a component that does
 * `if (prefersReducedMotion) return <Static />` therefore renders the
 * *animated* tree on the server no matter what the visitor's OS setting is,
 * then may swap to a structurally different client tree on mount, which
 * React flags as a hydration mismatch.
 *
 * This hook instead returns `true` (the safe / no-motion branch) for the
 * server render and the first client render — identical output, so
 * hydration always matches — then updates to the real value once mounted.
 * The centerpiece, the How-It-Works pin, and the vault diagram all branch
 * their structure on this instead of the raw hook.
 */
export function useMountedReducedMotion(): boolean {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Flips the initial "assume reduced motion" default to the real
    // client-only value — there's no external system to defer this to.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return !mounted || Boolean(prefersReducedMotion);
}
