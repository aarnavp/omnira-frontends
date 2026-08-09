import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

/** One consistent section rhythm (max-width, padding, hairline divider)
 * shared by every numbered section on the page. */
export function SectionShell({
  id,
  children,
  className,
  onDark = false,
  padded = true,
  bleed = false,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  onDark?: boolean;
  padded?: boolean;
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 border-b border-(--color-border)",
        onDark && "border-(--color-ink-800) bg-(--color-ink-950)",
        !onDark && "bg-(--color-surface)",
        className,
      )}
    >
      <div className={cn(!bleed && "mx-auto max-w-6xl", padded && "px-6 py-16 sm:px-8 sm:py-24")}>
        {children}
      </div>
    </section>
  );
}
