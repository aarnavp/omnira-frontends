"use client";

import { useEffect, useState } from "react";

/**
 * Drives the mobile motion budget (§6/§9 of the build brief): below this
 * width the R3F centerpiece renders fewer particles, a simplified shader
 * pass, and a capped device pixel ratio, instead of the full desktop scene
 * at a crawl. 768px matches Tailwind's `md` breakpoint, so this lines up
 * with every other responsive decision in the layout.
 */
const MOBILE_BREAKPOINT_PX = 768;

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_PX - 1}px)`);
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isMobile;
}
