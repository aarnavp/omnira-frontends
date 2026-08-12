import { cn } from "@/lib/utils/cn";

/**
 * `FIG 0X.Y` micro-label — sits above an illustration or data panel. `dim`
 * is the default (most labels); `highlight` puts it on the periwinkle
 * index chip for emphasis — use on alternating occurrences in a row, never
 * every label, or the highlight stops meaning anything (see inspo screenshot
 * 2: FIG 0.2 stays dim, FIG 0.3/0.4 are highlighted).
 */
export function FigureLabel({
  index,
  tone = "dim",
  className,
}: {
  index: string;
  tone?: "dim" | "highlight";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-(--radius-sm) px-2 py-1 font-mono text-[11px] tracking-[0.14em] uppercase",
        tone === "highlight"
          ? "bg-(--color-index-chip) text-(--color-index-300)"
          : "text-(--color-ink-faint)",
        className,
      )}
    >
      Fig {index}
    </span>
  );
}
