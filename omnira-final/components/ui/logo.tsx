import { cn } from "@/lib/utils/cn";

/** The wordmark from the brand screenshot, reinterpreted for a dark canvas:
 * a small glowing mark plus "Omnira" set in the site's one grotesk — no
 * separate display face here (see PROMPT.md §3). */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden
        className="h-2.5 w-2.5 rounded-full bg-(--color-accent) shadow-[0_0_12px_var(--color-signal-glow)]"
      />
      <span className="text-base font-semibold tracking-tight text-(--color-ink)">Omnira</span>
    </span>
  );
}
