"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { formatByKind, type CountFormatKind } from "@/lib/utils/format";

/**
 * Animates a number counting up to `value` on mount/change instead of
 * snapping — used for every headline stat (hero row, economics, live
 * network). Takes a named `format` kind rather than a formatter function:
 * this component is a Client Component leaf rendered from Server
 * Components, and functions can't cross that boundary as props. Falls back
 * to the plain formatted value under reduced motion.
 */
export function CountUp({
  value,
  format,
  className,
}: {
  value: number;
  format: CountFormatKind;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const spring = useSpring(0, { stiffness: 80, damping: 22, mass: 1 });
  const [display, setDisplay] = useState(() => formatByKind(format, 0));

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    // The endorsed shape for this rule: subscribe to an external system
    // (the spring) and call setState from its change callback, not from
    // the effect body itself.
    return spring.on("change", (latest) => setDisplay(formatByKind(format, latest)));
  }, [spring, format]);

  if (reduceMotion) {
    return <span className={className}>{formatByKind(format, value)}</span>;
  }

  return <motion.span className={className}>{display}</motion.span>;
}
