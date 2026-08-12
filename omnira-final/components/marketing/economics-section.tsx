import { SectionShell } from "./section-shell";
import { SectionIndexHeading } from "@/components/ui/section-index-heading";
import { FigureLabel } from "@/components/ui/figure-label";
import { IsoMeter } from "@/components/icons/iso-meter";
import { InViewCountUp } from "@/components/ui/in-view-count-up";
import { CloudTaxChart } from "./cloud-tax-chart";
import { SourcesNote } from "@/components/ui/sources-note";

const MODEL_STATS = [
  { value: 98, prefix: "", label: "Distributed edge compute", tone: "text-(--color-accent)" },
  { value: 2, prefix: "≤", label: "Public cloud — failover & burst", tone: "text-(--color-baseline-text)" },
  { value: 0, prefix: "", label: "Master data stored at the edge", tone: "text-(--color-ink)" },
] as const;

/** §06 Economics — CONTENT.md §09/§12: the 98/2/0 model as the section's
 * spine, plus the "Cloud Tax" comparison and the Spot-discount ceiling as a
 * sourced anchor for what "a better cloud discount" actually tops out at. */
export function EconomicsSection() {
  return (
    <SectionShell id="economics">
      <SectionIndexHeading
        index="06"
        lead="The target operating model:"
        muted="98 / 2 / 0."
        dek={
          <>
            This is the model Omnira is built to run at — a target, not a historical performance
            claim. Replacing continuously provisioned cloud capacity with distributed idle
            compute is what removes most of the traditional &ldquo;Cloud Tax.&rdquo;
          </>
        }
      />

      <div id="economics-model" className="mt-10 scroll-mt-24">
        <FigureLabel index="06.1" tone="dim" />
        <dl className="mt-3 grid grid-cols-1 gap-6 border-y border-(--color-hairline) py-8 sm:grid-cols-3">
          {MODEL_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5">
              <dt className="order-2 text-sm text-(--color-ink-muted)">{stat.label}</dt>
              <dd className={`order-1 font-mono text-stat font-medium ${stat.tone}`}>
                {stat.prefix}
                <InViewCountUp value={stat.value} format="percent0" />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div id="economics-cloud-tax" className="mt-10 scroll-mt-24">
        <FigureLabel index="06.2" tone="highlight" />
        <div className="mt-3">
          <CloudTaxChart />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[auto_1fr] lg:items-start">
        <div className="rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-panel) px-6 py-5 lg:w-64">
          <IsoMeter className="h-10 w-10 text-(--color-ink-faint)" />
          <p className="mt-3 font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">
            Even the cloud&apos;s best discount
          </p>
          <p className="mt-2 font-mono text-stat font-medium text-(--color-ink)">
            <InViewCountUp value={90} format="percent0" />
          </p>
          <p className="mt-1 text-xs text-(--color-ink-muted)">Ceiling off on-demand pricing, AWS Spot</p>
        </div>
        <p className="text-base leading-relaxed text-(--color-ink-muted)">
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
