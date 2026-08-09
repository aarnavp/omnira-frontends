"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Every client component that creates a ScrollTrigger calls this first
 * instead of each re-implementing its own "have I registered the plugin
 * yet" guard. `registerPlugin` is idempotent in gsap itself, but centralizing
 * the call keeps it to one obvious place instead of copy-pasted per section.
 */
let registered = false;
export function ensureScrollTrigger(): void {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };
