import { Card } from "@/components/ui/card";
import type { ArchitecturePlane } from "@/types/architecture";

export function PlaneDetailPanel({ plane }: { plane: ArchitecturePlane }) {
  return (
    <Card className="p-5" aria-live="polite">
      <p className="font-mono text-[11px] uppercase tracking-wider text-(--color-text-faint)">{plane.role}</p>
      <h3 className="mt-1 text-lg font-semibold text-(--color-text)">{plane.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-(--color-text-muted)">{plane.detail}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {plane.examples.map((example) => (
          <span
            key={example}
            className="rounded-(--radius-full) border border-(--color-border) px-2.5 py-1 font-mono text-[11px] text-(--color-text-muted)"
          >
            {example}
          </span>
        ))}
      </div>
    </Card>
  );
}
