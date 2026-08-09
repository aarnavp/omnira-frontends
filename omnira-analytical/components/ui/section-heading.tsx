import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

/**
 * The "01 — The Problem" style header used at the top of every numbered
 * memo section (AGENTS/PROMPT §2 — section numbering mirrors CONTENT.md's
 * own document structure).
 */
export function SectionHeading({
  index,
  title,
  dek,
  align = "left",
  onDark = false,
  className,
}: {
  index: string;
  title: ReactNode;
  dek?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p
        className={cn(
          "font-mono text-sm tracking-wider",
          onDark ? "text-(--color-signal-400)" : "text-(--color-accent)",
        )}
      >
        {index}
      </p>
      <h2
        className={cn(
          "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl",
          onDark ? "text-white" : "text-(--color-text)",
        )}
      >
        {title}
      </h2>
      {dek ? (
        <p
          className={cn(
            "mt-4 max-w-[68ch] text-base leading-relaxed sm:text-lg",
            onDark ? "text-white/70" : "text-(--color-text-muted)",
            align === "center" && "mx-auto",
          )}
        >
          {dek}
        </p>
      ) : null}
    </div>
  );
}
