import { cn } from "@/lib/utils/cn";

export interface Source {
  label: string;
  source: string;
}

/** A compact "Sources" footnote under a section, the way a real research
 * memo would cite market/industry figures — ported as a structural shell
 * only; the actual sourced figures are compiled separately (see the
 * standalone sources register), not duplicated here. */
export function SourcesNote({ sources, className }: { sources: Source[]; className?: string }) {
  return (
    <div className={cn("border-t border-(--color-hairline) pt-4", className)}>
      <p className="font-mono text-[11px] uppercase tracking-wider text-(--color-ink-faint)">Sources</p>
      <ul className="mt-2 flex flex-col gap-1">
        {sources.map((item) => (
          <li key={item.label} className="text-xs text-(--color-ink-muted)">
            <span className="text-(--color-ink)">{item.label}</span> — {item.source}
          </li>
        ))}
      </ul>
    </div>
  );
}
