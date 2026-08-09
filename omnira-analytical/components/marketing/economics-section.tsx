import { SectionShell } from "./section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { InViewCountUp } from "@/components/ui/in-view-count-up";
import { CloudTaxChart } from "./cloud-tax-chart";
import { SourcesNote } from "@/components/ui/sources-note";

const MODEL_STATS = [
  { value: 98, prefix: "", label: "Distributed edge compute", tone: "text-(--color-accent)" },
  { value: 2, prefix: "≤", label: "Public cloud — failover & burst", tone: "text-(--color-baseline-text)" },
  { value: 0, prefix: "", label: "Master data stored at the edge", tone: "text-(--color-text)" },
] as const;

/** §05 Economics — CONTENT.md §09/§12: the 98/2/0 model as the section's
 * spine, plus the "Cloud Tax" comparison and the Spot-discount ceiling as a
 * sourced anchor for what "a better cloud discount" actually tops out at. */
export function EconomicsSection() {
  return (
    <SectionShell id="economics">
      <SectionHeading
        index="05"
        title="The target operating model: 98 / 2 / 0."
        dek={
          <>
            This is the model Omnira is built to run at — a target, not a historical performance
            claim. Replacing continuously provisioned cloud capacity with distributed idle
            compute is what removes most of the traditional &ldquo;Cloud Tax.&rdquo;
          </>
        }
      />

      <dl className="mt-10 grid grid-cols-1 gap-6 border-y border-(--color-border) py-8 sm:grid-cols-3">
        {MODEL_STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1.5">
            <dt className="order-2 text-sm text-(--color-text-muted)">{stat.label}</dt>
            <dd className={`order-1 font-mono text-stat font-medium ${stat.tone}`}>
              {stat.prefix}
              <InViewCountUp value={stat.value} format="percent0" />
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10">
        <CloudTaxChart />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[auto_1fr] lg:items-start">
        <div className="rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface-raised) px-6 py-5 lg:w-64">
          <p className="font-mono text-xs uppercase tracking-wider text-(--color-text-faint)">
            Even the cloud&apos;s best discount
          </p>
          <p className="mt-2 font-mono text-stat font-medium text-(--color-text)">
            <InViewCountUp value={90} format="percent0" />
          </p>
          <p className="mt-1 text-xs text-(--color-text-muted)">Ceiling off on-demand pricing, AWS Spot</p>
        </div>
        <p className="text-base leading-relaxed text-(--color-text-muted)">
          Public cloud&apos;s own discount tier — spot or interruptible instances — tops out around
          a 90% reduction off on-demand pricing, and that capacity can still be reclaimed
          without notice when a full-price customer needs it. Omnira&apos;s pitch is a different
          shape entirely: recovering cost on hardware a company already owns, not renting a
          better discount tier on hardware someone else owns and can take back.
        </p>
      </div>

      <SourcesNote
        className="mt-10"
        sources={[
          { label: "AWS EC2 Spot Instances", source: "up to 90% off on-demand, reclaimable without notice — AWS public pricing documentation." },
        ]}
      />
    </SectionShell>
  );
}
