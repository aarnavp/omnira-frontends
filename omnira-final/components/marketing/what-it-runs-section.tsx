import { SectionShell } from "./section-shell";
import { SectionIndexHeading } from "@/components/ui/section-index-heading";
import { FigureLabel } from "@/components/ui/figure-label";
import { Badge } from "@/components/ui/badge";

const WORKLOAD_TYPES = [
  { id: "api", label: "API services" },
  { id: "web", label: "Web applications" },
  { id: "mobile", label: "Mobile applications" },
  { id: "inference", label: "AI inference" },
  { id: "analytics", label: "Analytics" },
  { id: "agents", label: "AI agents" },
];

/** §03 What it runs — CONTENT.md §05: the platform's workload types,
 * rendered as a dense spec-sheet tag row rather than six identical cards —
 * a deliberate application of the "avoid repetitive card grids" rule. */
export function WhatItRunsSection() {
  return (
    <SectionShell id="what-it-runs">
      <SectionIndexHeading
        index="03"
        lead="Every workload here needs"
        muted="two things: data, and compute."
        dek="Omnira runs the same workloads a traditional cloud does — the difference is where the compute half actually happens."
      />

      <div id="runs-workloads" className="mt-8 scroll-mt-24">
        <FigureLabel index="03.1" tone="dim" />
        <div className="mt-3 flex flex-wrap gap-2">
          {WORKLOAD_TYPES.map((workload) => (
            <Badge key={workload.id} tone="neutral">
              {workload.label}
            </Badge>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
