"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { ensureScrollTrigger, ScrollTrigger } from "@/lib/gsap";

interface UsePinnedProgressOptions {
  /** Scroll distance to reserve for the pin, GSAP shorthand (e.g. "+=200%"). */
  end?: string;
  scrub?: number | boolean;
  /** When set, also tracks a quantized 0..stageCount-1 `stage`, updated via
   * React state only when it actually changes — for sections that crossfade
   * between a small number of discrete panels rather than reading a
   * continuous progress value every frame. Stages are evenly spaced unless
   * `stageBreakpoints` is also given. */
  stageCount?: number;
  /** Ascending progress values (length `stageCount - 1`) marking where each
   * stage begins, for sections whose beats shouldn't be evenly spaced — e.g.
   * the centerpiece's "one, then a handful, then thousands, then millions"
   * reads wrong at an even 25/50/75% split, since a linear reveal already
   * looks like "thousands" well before the halfway point. */
  stageBreakpoints?: number[];
  disabled?: boolean;
}

function stageFromProgress(progress: number, stageCount: number, breakpoints?: number[]): number {
  if (breakpoints && breakpoints.length === stageCount - 1) {
    let stage = 0;
    for (const breakpoint of breakpoints) {
      if (progress >= breakpoint) stage += 1;
    }
    return stage;
  }
  return Math.min(stageCount - 1, Math.floor(progress * stageCount));
}

/**
 * Shared plumbing behind every GSAP-pinned, scroll-scrubbed section on this
 * page (the centerpiece, the How-It-Works diagram). Pins `ref`'s element for
 * `end` of extra scroll distance and exposes progress two ways: `progressRef`
 * (0–1, mutated every tick, read imperatively inside a `useFrame`/rAF loop
 * so continuous updates never trigger a re-render) and, optionally, a
 * quantized `stage` index for panel-crossfade UIs.
 */
export function usePinnedProgress<T extends HTMLElement>({
  end = "+=200%",
  scrub = 0.5,
  stageCount,
  stageBreakpoints,
  disabled = false,
}: UsePinnedProgressOptions = {}): {
  ref: RefObject<T | null>;
  progressRef: RefObject<number>;
  stage: number;
} {
  const ref = useRef<T>(null);
  const progressRef = useRef(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (disabled || !ref.current) return;
    ensureScrollTrigger();

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top top",
      end,
      pin: true,
      scrub,
      onUpdate: (self) => {
        progressRef.current = self.progress;
        if (stageCount) {
          const next = stageFromProgress(self.progress, stageCount, stageBreakpoints);
          setStage((prev) => (prev === next ? prev : next));
        }
      },
    });

    return () => trigger.kill();
  }, [disabled, end, scrub, stageCount, stageBreakpoints]);

  return { ref, progressRef, stage };
}
