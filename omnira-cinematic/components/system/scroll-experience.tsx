"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { ensureScrollTrigger, gsap, ScrollTrigger } from "@/lib/gsap";
import { LenisContext } from "./lenis-context";

/**
 * Mounts once at the page root and owns the two pieces of global scroll
 * infrastructure this variant needs:
 *
 * 1. Lenis, for weighted smooth scroll — scroll IS the interaction model
 *    here, not a nicety (see PROMPT.md §6).
 * 2. GSAP's ScrollTrigger plugin registration + its sync to Lenis' ticker,
 *    so every section's own `ScrollTrigger.create(...)` (in the centerpiece,
 *    the How-It-Works pin, etc.) reads a consistent scroll position.
 *
 * Under `prefers-reduced-motion: reduce` neither is created — this is a real
 * second code path (native scroll, `LenisContext` stays null so
 * `useScrollTo` falls back to `scrollIntoView`), not a CSS patch.
 */
export function ScrollExperience({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    ensureScrollTrigger();

    const instance = new Lenis({
      duration: 1.15,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    // Publishing a newly constructed client-only instance to context — there's
    // no external system to defer this to.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLenis(instance);

    instance.on("scroll", ScrollTrigger.update);
    const tickerCallback = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
