"use client";

import { useCallback } from "react";
import { useLenis } from "@/components/system/lenis-context";

/**
 * One place both the top nav and every in-page CTA route through to jump to
 * a section id. Uses Lenis' weighted scroll when it's running; falls back to
 * native `scrollIntoView` (smooth, or instant under reduced motion — see the
 * `scroll-behavior` rule in globals.css) when it isn't.
 */
export function useScrollTo() {
  const lenis = useLenis();

  return useCallback(
    (id: string) => {
      const target = document.getElementById(id);
      if (!target) return;
      if (lenis) {
        lenis.scrollTo(target, { offset: -24, duration: 1.4 });
      } else {
        target.scrollIntoView({ block: "start" });
      }
    },
    [lenis],
  );
}
