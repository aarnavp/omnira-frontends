import { cn } from "@/lib/utils/cn";

export interface Source {
  label: string;
  source: string;
}

/** A compact "Sources" footnote under a section, the way a real research
 * memo would cite market/industry figures — see AGENTS "Cite what you cite." */
export function SourcesNote({ sources, className }: { sources: Source[]; className?: string }) {
  return (
    <div className={cn("border-t border-(--color-border) pt-4", className)}>
      <p className="font-mono text-[11px] uppercase tracking-wider text-(--color-text-faint)">Sources</p>
      <ul className="mt-2 flex flex-col gap-1">
        {sources.map((item) => (
          <li key={item.label} className="text-xs text-(--color-text-muted)">
            <span className="text-(--color-text)">{item.label}</span> — {item.source}
          </li>
        ))}
      </ul>
    </div>
  );
}
