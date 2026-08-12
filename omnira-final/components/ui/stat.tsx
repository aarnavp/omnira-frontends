import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

/** A labeled mono-numeral stat — the recurring "big number, small label"
 * unit inherited from omnira-analytical, used in the hero row, Economics,
 * and Live Network. */
export function Stat({
  label,
  value,
  trend,
  tone = "default",
  size = "md",
  className,
}: {
  label: ReactNode;
  value: ReactNode;
  trend?: ReactNode;
  tone?: "default" | "positive" | "baseline";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <p className="font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">{label}</p>
      <p
        className={cn(
          "font-mono font-medium",
          size === "sm" && "text-xl sm:text-2xl",
          size === "md" && "text-2xl sm:text-stat",
          size === "lg" && "text-stat sm:text-5xl",
          tone === "positive"
            ? "text-(--color-accent)"
            : tone === "baseline"
              ? "text-(--color-baseline-text)"
              : "text-(--color-ink)",
        )}
      >
        {value}
      </p>
      {trend ? <p className="font-mono text-xs text-(--color-ink-muted)">{trend}</p> : null}
    </div>
  );
}
