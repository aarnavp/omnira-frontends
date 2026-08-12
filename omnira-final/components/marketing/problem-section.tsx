import { SectionShell } from "./section-shell";
import { SectionIndexHeading } from "@/components/ui/section-index-heading";
import { FigureLabel } from "@/components/ui/figure-label";
import { DemandChart } from "./demand-chart";
import { SourcesNote } from "@/components/ui/sources-note";

/** §01 The problem — CONTENT.md §02: workloads need increasing compute;
 * companies keep expensive infrastructure provisioned 24/7 to cover
 * occasional peak demand, on the standing assumption that data and compute
 * must live together. Omnira starts by challenging it. */
export function ProblemSection() {
  return (
    <SectionShell id="problem">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <SectionIndexHeading
          index="01"
          lead="Infrastructure is provisioned for the worst day,"
          muted="and idle every other day."
          dek="AI, analytics, and software workloads need a growing amount of computing power. Most companies respond by keeping expensive cloud infrastructure running 24 hours a day, because they need enough capacity on hand for occasional peaks — a launch, a batch job, an end-of-month close. That habit rests on one assumption: that data and compute have to live in the same place, all the time. Omnira starts by challenging it."
        />
        <div id="problem-capacity" className="flex scroll-mt-24 flex-col gap-3">
          <FigureLabel index="01.1" tone="dim" />
          <DemandChart />
          <p className="text-sm text-(--color-ink-muted)">
            Even enterprise and on-premises server fleets run at roughly 10–20% average
            utilization, against 65%+ at hyperscale data centers — idle capacity is not a
            hypothetical, it&apos;s sitting inside most companies already.
          </p>
        </div>
      </div>

      <SourcesNote
        className="mt-12"
        sources={[
          { label: "Enterprise / on-prem server utilization", source: "Industry server-utilization research (Uptime Institute-style studies, Hyperview, Middleware.io)." },
        ]}
      />
    </SectionShell>
  );
}
