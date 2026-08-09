"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/section-config";
import { cn } from "@/lib/utils/cn";

/** Slim doc-style reading-position rail, similar to how technical
 * documentation sites show scroll position — reinforces the memo framing.
 * Desktop-only supplement; the nav's jump links carry this job on
 * touch/small screens. */
export function SectionProgress() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Reading position"
      className="fixed top-1/2 right-6 z-30 hidden -translate-y-1/2 xl:block"
    >
      <ol className="flex flex-col items-end gap-3">
        {SECTIONS.map((s) => {
          const active = s.id === activeId;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active ? "true" : undefined}
                className="group flex items-center gap-2 py-0.5"
              >
                <span
                  className={cn(
                    "font-mono text-[10px] tracking-wide transition-opacity",
                    active
                      ? "text-(--color-accent) opacity-100"
                      : "text-(--color-text-faint) opacity-0 group-hover:opacity-100",
                  )}
                >
                  {s.number}
                </span>
                <span
                  className={cn(
                    "h-1.5 rounded-(--radius-full) bg-(--color-border-strong) transition-all duration-300",
                    active ? "w-6 bg-(--color-accent)" : "w-1.5 group-hover:bg-(--color-text-muted)",
                  )}
                />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
