import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Tone = "neutral" | "positive" | "warning" | "danger" | "accent" | "baseline";

const tones: Record<Tone, string> = {
  neutral: "bg-(--color-panel-sunken) text-(--color-ink-muted)",
  positive: "bg-(--color-brand-surface) text-(--color-accent)",
  warning: "bg-(--color-warning-surface) text-(--color-warning-text)",
  danger: "bg-(--color-danger-surface) text-(--color-danger)",
  accent: "bg-(--color-accent) text-(--color-on-brand)",
  baseline: "bg-(--color-panel-inset) text-(--color-baseline-text)",
};

export function Badge({
  tone = "neutral",
  dot = false,
  pulse = false,
  children,
  className,
  ...rest
}: {
  tone?: Tone;
  dot?: boolean;
  /** Adds a radar-ping animation to the dot — reserve for genuinely live/real-time state. */
  pulse?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, "className" | "children">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-(--radius-full) px-2.5 py-1 font-mono text-xs uppercase tracking-wide",
        tones[tone],
        className,
      )}
      {...rest}
    >
      {dot ? (
        <span className="relative flex h-1.5 w-1.5" aria-hidden>
          {pulse ? (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60 motion-reduce:hidden" />
          ) : null}
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      ) : null}
      {children}
    </span>
  );
}
