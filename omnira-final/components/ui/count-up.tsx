"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { formatByKind, type CountFormatKind } from "@/lib/utils/format";

/**
 * Animates a number counting up to `value` whenever it changes, instead of
 * snapping. Takes a named `format` kind rather than a formatter closure —
 * a Server Component can't hand a Client Component a closure (functions
 * aren't serializable across the RSC boundary), so every call site,
 * including ones rendered straight from a Server Component like Hero,
 * passes a plain string and this component resolves it via
 * `formatByKind`. Falls back to the plain formatted value under reduced
 * motion.
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
  const spring = useSpring(value, { stiffness: 90, damping: 24, mass: 1 });
  const [display, setDisplay] = useState(() => formatByKind(format, value));

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
