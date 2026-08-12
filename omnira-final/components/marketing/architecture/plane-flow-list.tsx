"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import type { ArchitecturePlane, PlaneId } from "@/types/architecture";
import { cn } from "@/lib/utils/cn";

/**
 * The architecture as a vertical, connected flow: Data → Control →
 * Compute/Edge, with Public Cloud as the labeled secondary branch. This is
 * the mobile diagram (restructured, not shrunk) and doubles as the desktop
 * keyboard-navigable / screen-reader fallback for the React Flow canvas.
 */
export function PlaneFlowList({
  planes,
  activeId,
  onActivate,
}: {
  planes: ArchitecturePlane[];
  activeId: PlaneId | null;
  onActivate: (id: PlaneId) => void;
}) {
  return (
    <Accordion
      type="single"
      value={activeId ?? undefined}
      onValueChange={(value) => {
        if (value) onActivate(value as PlaneId);
      }}
      className="relative"
    >
      <div className="pointer-events-none absolute top-8 bottom-8 left-4 w-px bg-(--color-hairline)" aria-hidden />
      {planes.map((plane, index) => (
        <AccordionItem key={plane.id} value={plane.id} className="relative border-b border-(--color-hairline) pl-11 last:border-b-0">
          <span
            aria-hidden
            className={cn(
              "absolute top-4 left-0 flex h-8 w-8 items-center justify-center rounded-(--radius-full) border font-mono text-xs",
              plane.isPrimary
                ? "border-(--color-accent) bg-(--color-brand-surface) text-(--color-accent)"
                : "border-dashed border-(--color-baseline) bg-(--color-ground) text-(--color-baseline-text)",
            )}
          >
            {index + 1}
          </span>
          <AccordionTrigger>
            <span className="flex flex-col gap-0.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-(--color-ink-faint)">
                {plane.role}
              </span>
              <span className="text-sm font-semibold text-(--color-ink)">{plane.name}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>{plane.detail}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {plane.examples.map((example) => (
                <span
                  key={example}
                  className="rounded-(--radius-full) border border-(--color-hairline) px-2.5 py-1 font-mono text-[11px] text-(--color-ink-muted)"
                >
                  {example}
                </span>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
