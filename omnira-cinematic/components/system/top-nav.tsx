"use client";

import { Logo } from "@/components/ui/logo";
import { useScrollTo } from "@/hooks/use-scroll-to";

/**
 * Persistent, minimal top bar — mounted globally so the wordmark and the
 * Contribute/Deploy jump links are reachable from anywhere on the page, at
 * any scroll position, including before the film finishes (hard requirement,
 * PROMPT.md §9). No further nav clutter; this is the film, not a SaaS site.
 */
export function TopNav() {
  const scrollTo = useScrollTo();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-(--color-hairline)/60 bg-(--color-ground)/50 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero");
          }}
        >
          <Logo />
        </a>
        <nav aria-label="Jump to" className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => scrollTo("contribute")}
            className="rounded-(--radius-full) px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-(--color-ink-muted) transition-colors hover:text-(--color-accent)"
          >
            Contribute
          </button>
          <button
            type="button"
            onClick={() => scrollTo("deploy")}
            className="rounded-(--radius-full) px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-(--color-ink-muted) transition-colors hover:text-(--color-accent-motion)"
          >
            Deploy
          </button>
        </nav>
      </div>
    </header>
  );
}
