"use client";

import { createContext, useContext } from "react";
import type Lenis from "lenis";

/**
 * Exposes the page's single Lenis instance (or null under reduced motion /
 * before mount) so nav and CTA components can drive weighted scroll-to
 * instead of relying on the browser's instant jump. See
 * `components/system/scroll-experience.tsx` for the provider.
 */
export const LenisContext = createContext<Lenis | null>(null);

export function useLenis(): Lenis | null {
  return useContext(LenisContext);
}
