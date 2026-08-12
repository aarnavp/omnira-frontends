import { SectionShell } from "./section-shell";
import { SectionIndexHeading } from "@/components/ui/section-index-heading";
import { FigureLabel } from "@/components/ui/figure-label";

const ENVIRONMENTS = [
  { id: "data", label: "Data", detail: "On-premises, or customer-controlled cloud storage." },
  { id: "primary", label: "Primary compute", detail: "Distributed edge — the device fleet, routed by the Control Plane." },
  { id: "backup", label: "Backup compute", detail: "Public cloud, for failover and burst only." },
];

const FLOW_STEPS = [
  "A workload arrives at the Data Plane, where the master data already lives.",
  "The Control Plane decides where the work should run and what it needs.",
  "The Edge Fleet computes it — a fragmented, transient task, never the full dataset.",
  "Public cloud steps in only as failover or burst, not as the default path.",
];

/** §08 True hybrid infrastructure — CONTENT.md §15–16: the three
 * environments the system actually runs across, and the routing chain
 * between them. A compact spec list, echoing §03's tag-row rhythm rather
 * than inventing a fourth layout idiom. */
export function HybridInfrastructureSection() {
  return (
    <SectionShell id="hybrid-infrastructure">
      <SectionIndexHeading index="08" lead="True hybrid infrastructure," muted="not a metaphor." />

      <div id="hybrid-environments" className="mt-10 scroll-mt-24">
        <FigureLabel index="08.1" tone="dim" />
        <dl className="mt-3 grid grid-cols-1 gap-6 border-y border-(--color-hairline) py-8 sm:grid-cols-3">
          {ENVIRONMENTS.map((env) => (
            <div key={env.id} className="flex flex-col gap-1.5">
              <dt className="font-mono text-sm text-(--color-accent)">{env.label}</dt>
              <dd className="text-sm leading-relaxed text-(--color-ink-muted)">{env.detail}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div id="hybrid-flow" className="mt-12 scroll-mt-24">
        <FigureLabel index="08.2" tone="highlight" />
        <p className="mt-3 mb-5 font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">
          The infrastructure flow
        </p>
        <ol className="flex flex-col divide-y divide-(--color-hairline) border-y border-(--color-hairline)">
          {FLOW_STEPS.map((step, index) => (
            <li key={step} className="flex items-start gap-4 py-4">
              <span className="mt-0.5 font-mono text-xs text-(--color-ink-faint)">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-sm leading-relaxed text-(--color-ink-muted)">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
