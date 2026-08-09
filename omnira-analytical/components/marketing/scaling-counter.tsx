"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { CountUp } from "@/components/ui/count-up";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { ScalingPoint } from "@/types/scaling";

/** Steps through the devices↔capacity series once the section scrolls
 * into view, proving "more devices → more available compute" mechanically
 * instead of just stating it (PROMPT §5 §06). Stops at the final step —
 * no idle looping. */
export function ScalingCounter({ series }: { series: ScalingPoint[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const reducedMotion = usePrefersReducedMotion();
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion || !inView || stepIndex >= series.length - 1) return;
    const timer = setTimeout(() => setStepIndex((i) => Math.min(i + 1, series.length - 1)), 480);
    return () => clearTimeout(timer);
  }, [inView, stepIndex, series.length, reducedMotion]);

  // Reduced motion skips straight to the final, settled state instead of
  // stepping through the series — derived at render time, not via effect.
  const effectiveIndex = reducedMotion ? series.length - 1 : stepIndex;
  const point = series[effectiveIndex];
  const progress = ((effectiveIndex + 1) / series.length) * 100;

  return (
    <div ref={ref} className="rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface-raised) p-6">
      <p className="font-mono text-xs uppercase tracking-wider text-(--color-text-faint)">
        As the ecosystem grows
      </p>
      <div className="mt-4 grid grid-cols-2 gap-6" aria-live="polite">
        <div>
          <p className="text-sm text-(--color-text-muted)">Devices in the network</p>
          <p className="mt-1 font-mono text-2xl font-medium text-(--color-text) sm:text-3xl">
            <CountUp value={point.devices} format="number" />
          </p>
        </div>
        <div>
          <p className="text-sm text-(--color-text-muted)">Available capacity (TFLOPS)</p>
          <p className="mt-1 font-mono text-2xl font-medium text-(--color-accent) sm:text-3xl">
            <CountUp value={point.availableCapacityTeraflops} format="number" />
          </p>
        </div>
      </div>
      <div className="mt-5 h-1.5 w-full overflow-hidden rounded-(--radius-full) bg-(--color-surface-sunken)">
        <div
          className="h-full rounded-(--radius-full) bg-(--color-brand) transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-3 text-xs text-(--color-text-muted)">
        Illustrative growth curve — more devices joining the network directly expands available
        compute, with no separate provisioning step.
      </p>
    </div>
  );
}
