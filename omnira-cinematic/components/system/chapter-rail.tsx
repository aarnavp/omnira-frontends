"use client";

import { useEffect, useState } from "react";
import { CHAPTERS } from "./sections";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { cn } from "@/lib/utils/cn";

/**
 * Thin progress rail down the right edge, doubling as chapter jump links —
 * the "skip/jump affordance" required so a returning or impatient visitor
 * can skip straight to Two Ways In or Live Pulse without replaying the whole
 * film (PROMPT.md §6/§9). Active chapter tracked with an IntersectionObserver
 * rather than tying it to the GSAP/Lenis scroll machinery, so it keeps
 * working exactly the same under reduced motion.
 *
 * Hidden below `lg` — on narrow viewports the rail would sit on top of copy
 * that's already full-width; the top nav's Contribute/Deploy links remain
 * the mobile skip affordance.
 */
export function ChapterRail() {
  const [activeId, setActiveId] = useState<string>(CHAPTERS[0].id);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Chapters"
      className="fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex xl:right-8"
    >
      {CHAPTERS.map((chapter) => {
        const isActive = chapter.id === activeId;
        return (
          <button
            key={chapter.id}
            type="button"
            onClick={() => scrollTo(chapter.id)}
            aria-current={isActive ? "true" : undefined}
            aria-label={chapter.label}
            className="group relative flex items-center justify-center p-1.5"
          >
            <span
              className={cn(
                "block rounded-(--radius-full) transition-all duration-300",
                isActive
                  ? "h-2.5 w-2.5 bg-(--color-accent) shadow-[0_0_10px_var(--color-signal-glow)]"
                  : "h-1.5 w-1.5 bg-(--color-mist-600) group-hover:bg-(--color-mist-300)",
              )}
            />
            <span
              role="tooltip"
              className="pointer-events-none absolute right-full mr-3 rounded-(--radius-sm) border border-(--color-hairline) bg-(--color-panel) px-2.5 py-1 font-mono text-[11px] whitespace-nowrap text-(--color-ink-muted) opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              {chapter.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
