"use client";

import { useCallback } from "react";

/**
 * One place both the top nav and every in-page jump link route through to
 * scroll to a section id. Native `scrollIntoView` — `globals.css` sets
 * `scroll-behavior: smooth` (and drops to instant under
 * `prefers-reduced-motion`), so there's no Lenis/GSAP smooth-scroll layer
 * to maintain here, unlike omnira-cinematic.
 */
export function useScrollTo() {
  return useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ block: "start" });
  }, []);
}
