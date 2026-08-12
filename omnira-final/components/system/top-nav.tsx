"use client";

import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { NAV_SECTIONS } from "@/lib/section-config";
import { cn } from "@/lib/utils/cn";

/** Sticky top nav: numbered jump links to every section (§0X, via
 * NAV_SECTIONS) instead of a conventional marketing menu, with
 * Contribute/Deploy and the two stub auth entry points always present
 * (root AGENTS §5 — the affordance must exist even though sign-in/sign-up
 * are stubbed). Translucent-over-dark, matching the inspo's own nav. */
export function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-(--color-hairline) bg-(--color-ground)/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 sm:px-8">
        <Logo />

        <nav aria-label="Section index" className="hidden min-w-0 flex-1 xl:block">
          <TooltipProvider delayDuration={200}>
            <ol className="flex items-center gap-0.5">
              {NAV_SECTIONS.map((s) => (
                <li key={s.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={`#${s.id}`}
                        aria-label={s.label}
                        className="flex items-center justify-center rounded-(--radius-md) px-2 py-1.5 font-mono text-xs text-(--color-ink-faint) transition-colors hover:bg-(--color-panel) hover:text-(--color-ink)"
                      >
                        {s.number}
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>{s.label}</TooltipContent>
                  </Tooltip>
                </li>
              ))}
            </ol>
          </TooltipProvider>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <a
            href="#two-paths"
            className="rounded-(--radius-md) px-3 py-2 text-sm font-medium text-(--color-ink-muted) transition-colors hover:text-(--color-ink)"
          >
            Contribute
          </a>
          <a
            href="#two-paths"
            className="rounded-(--radius-md) px-3 py-2 text-sm font-medium text-(--color-ink-muted) transition-colors hover:text-(--color-ink)"
          >
            Deploy
          </a>
          <div className="mx-1 h-5 w-px bg-(--color-hairline)" aria-hidden />
          <ButtonLink href="/login" variant="ghost" size="sm">
            Sign in
          </ButtonLink>
          <ButtonLink href="/signup" variant="primary" size="sm">
            Create account
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-(--radius-md) text-(--color-ink) xl:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav-panel"
        className={cn(
          "overflow-hidden border-t border-(--color-hairline) bg-(--color-ground) transition-[max-height] duration-300 ease-out xl:hidden",
          open ? "max-h-[calc(100vh-4rem)] overflow-y-auto" : "max-h-0",
        )}
      >
        <nav aria-label="Section index" className="flex flex-col px-6 py-4 sm:px-8">
          {NAV_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 border-b border-(--color-hairline) py-3 text-sm text-(--color-ink)"
            >
              <span className="font-mono text-(--color-ink-faint)">{s.number}</span>
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2 px-6 pb-6 sm:px-8">
          <div className="flex gap-2">
            <a
              href="#two-paths"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-(--radius-md) border border-(--color-hairline) py-2 text-center text-sm font-medium text-(--color-ink)"
            >
              Contribute
            </a>
            <a
              href="#two-paths"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-(--radius-md) border border-(--color-hairline) py-2 text-center text-sm font-medium text-(--color-ink)"
            >
              Deploy
            </a>
          </div>
          <ButtonLink href="/login" variant="outline">
            Sign in
          </ButtonLink>
          <ButtonLink href="/signup" variant="primary">
            Create account
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
