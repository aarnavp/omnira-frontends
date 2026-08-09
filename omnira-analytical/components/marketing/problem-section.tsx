import { SectionShell } from "./section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { DemandChart } from "./demand-chart";

/** §01 The Problem — CONTENT.md §02: workloads need increasing compute;
 * companies keep expensive infrastructure provisioned 24/7 to cover
 * occasional peak demand, on the standing assumption that data and compute
 * must live together. */
export function ProblemSection() {
  return (
    <SectionShell id="problem">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <SectionHeading
          index="01"
          title="Infrastructure is provisioned for the worst day, and idle every other day."
          dek={
            <>
              AI, analytics, and software workloads need a growing amount of computing power.
              Most companies respond by keeping expensive cloud infrastructure running 24 hours a
              day, because they need enough capacity on hand for occasional peaks — a launch, a
              batch job, an end-of-month close. That habit rests on one assumption: that data
              and compute have to live in the same place, all the time. Omnira starts by
              challenging it.
            </>
          }
        />
        <div className="flex flex-col gap-3">
          <DemandChart />
          <p className="text-sm text-(--color-text-muted)">
            Even enterprise and on-premises server fleets run at roughly 10–20% average
            utilization, against 65%+ at hyperscale data centers — idle capacity is not a
            hypothetical, it&apos;s sitting inside most companies already.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
