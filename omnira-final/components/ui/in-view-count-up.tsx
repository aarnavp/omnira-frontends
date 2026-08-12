"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { CountUp } from "./count-up";
import type { CountFormatKind } from "@/lib/utils/format";

/** Wraps CountUp so headline stats only start animating once the section
 * has actually scrolled into view, then hold — no idle looping. */
export function InViewCountUp({
  value,
  format,
  className,
}: {
  value: number;
  format: CountFormatKind;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <span ref={ref} className="inline-block">
      <CountUp value={inView ? value : 0} format={format} className={className} />
    </span>
  );
}
