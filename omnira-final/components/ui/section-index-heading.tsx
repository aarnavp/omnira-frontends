import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { MixedHeadline } from "./mixed-headline";

/**
 * The numbered header at the top of every major section — "04" as a large
 * mono numeral beside the title, extending the inspo's "5.0 Monitor" pattern
 * into the connective tissue for the whole page (see PROMPT.md §5, and
 * lib/section-config.ts for the numbering source of truth).
 */
export function SectionIndexHeading({
  index,
  lead,
  muted,
  dek,
  className,
}: {
  index: string;
  lead: ReactNode;
  muted?: ReactNode;
  dek?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-baseline sm:gap-6", className)}>
      <p
        aria-hidden
        className="shrink-0 font-mono text-2xl text-(--color-ink-faint) sm:text-3xl"
      >
        {index}
      </p>
      <div className="max-w-3xl">
        <MixedHeadline lead={lead} muted={muted} />
        {dek ? (
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-(--color-ink-muted) sm:text-lg">
            {dek}
          </p>
        ) : null}
      </div>
    </div>
  );
}
