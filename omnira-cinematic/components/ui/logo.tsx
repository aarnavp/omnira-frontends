import { cn } from "@/lib/utils/cn";

/** Keeps the wordmark logic from the brand screenshot — a small mark plus
 * "Omnira" — reinterpreted for a dark canvas: the mark now glows. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden
        className="h-2.5 w-2.5 rounded-full bg-(--color-accent) shadow-[0_0_12px_var(--color-signal-glow)]"
      />
      <span className="font-(family-name:--font-display) text-base font-semibold tracking-tight text-(--color-ink)">
        Omnira
      </span>
    </span>
  );
}
