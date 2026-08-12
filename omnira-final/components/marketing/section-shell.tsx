import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

/** One consistent section rhythm (max-width, padding, hairline divider)
 * shared by every numbered section on the page. `onDark` deepens the
 * ground for the closing section — a small "the credits are different"
 * beat, not a light/dark split (the whole site is already dark). */
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
        "scroll-mt-20 border-b border-(--color-hairline)",
        onDark ? "bg-(--color-void-900)" : "bg-(--color-ground)",
        className,
      )}
    >
      <div className={cn(!bleed && "mx-auto max-w-6xl", padded && "px-6 py-16 sm:px-8 sm:py-24")}>
        {children}
      </div>
    </section>
  );
}
