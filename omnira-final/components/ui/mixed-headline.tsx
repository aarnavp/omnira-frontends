import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

/**
 * The one typographic device carried over from the inspo: a headline that
 * mixes a full-weight, full-contrast lead clause with a muted continuation
 * clause, in the same line. Used on the hero and every numbered section
 * header instead of a separate display face — see PROMPT.md §2.
 */
export function MixedHeadline({
  lead,
  muted,
  as: Component = "h2",
  size = "title",
  className,
}: {
  lead: ReactNode;
  muted?: ReactNode;
  as?: ElementType;
  size?: "hero" | "title";
  className?: string;
}) {
  return (
    <Component
      className={cn(
        "text-balance",
        size === "hero"
          ? "text-hero leading-(--text-hero--line-height) tracking-(--text-hero--letter-spacing)"
          : "text-title leading-(--text-title--line-height) tracking-(--text-title--letter-spacing)",
        className,
      )}
    >
      <span className="font-semibold text-(--color-ink)">{lead}</span>
      {muted ? <span className="font-normal text-(--color-ink-faint)"> {muted}</span> : null}
    </Component>
  );
}
