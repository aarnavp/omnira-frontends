import { SectionShell } from "./section-shell";
import { SectionIndexHeading } from "@/components/ui/section-index-heading";
import { FigureLabel } from "@/components/ui/figure-label";
import { IsoDataPlane } from "@/components/icons/iso-data-plane";
import { IsoComputeFleet } from "@/components/icons/iso-compute-fleet";

/** §02 The paradigm shift — CONTENT.md §03–04: compute treated like
 * electricity, generated across a distributed grid and routed to demand
 * rather than permanently provisioned; Data Plane and Compute Plane split
 * apart. Kept conceptual — §04 Architecture goes to implementation detail. */
export function ParadigmShiftSection() {
  return (
    <SectionShell id="paradigm-shift">
      <SectionIndexHeading
        index="02"
        lead="Treat computing power like electricity,"
        muted="not like real estate."
      />

      <div id="shift-electricity" className="mt-10 scroll-mt-24">
        <FigureLabel index="02.1" tone="dim" />
        <p className="mt-3 max-w-[68ch] text-base leading-relaxed text-(--color-ink-muted)">
          Electricity isn&apos;t generated on-site and stockpiled — it&apos;s produced across a
          distributed grid and routed to wherever it&apos;s needed, the moment it&apos;s needed.
          Omnira applies the same logic to compute: capacity is distributed across many devices
          and dynamically routed to workloads, rather than permanently provisioned in one place
          and left running.
        </p>
      </div>

      <div id="shift-split" className="mt-14 scroll-mt-24">
        <FigureLabel index="02.2" tone="highlight" />
        <div className="mt-3 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-panel) p-6">
            <IsoDataPlane className="h-16 w-16 text-(--color-accent)" />
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">The Data Plane</p>
            <p className="mt-2 text-lg font-semibold text-(--color-ink)">Where your data stays</p>
            <p className="mt-2 text-sm leading-relaxed text-(--color-ink-muted)">
              Customer data remains on-premises or in customer-controlled cloud storage. It never
              has to move for compute to happen.
            </p>
          </div>

          <div className="flex items-center justify-center py-2 lg:py-0" aria-hidden>
            <svg viewBox="0 0 64 24" className="h-6 w-16 rotate-90 text-(--color-hairline-strong) lg:rotate-0">
              <line x1="2" y1="12" x2="54" y2="12" stroke="currentColor" strokeWidth="1.5" />
              <path d="M48 6l8 6-8 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-panel) p-6">
            <IsoComputeFleet className="h-16 w-16 text-(--color-accent)" />
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">The Compute Plane</p>
            <p className="mt-2 text-lg font-semibold text-(--color-ink)">Where computing happens</p>
            <p className="mt-2 text-sm leading-relaxed text-(--color-ink-muted)">
              Computation runs elsewhere, on available devices — routed dynamically to wherever
              capacity exists, without the master data moving with it.
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-[64ch] text-sm text-(--color-ink-muted)">
          Decoupling data from compute is the mechanism, not the whole story — §04 Architecture
          walks through the full system: the Data Plane, the Control Plane that routes work
          between them, and the Compute Plane / Edge Fleet that runs it.
        </p>
      </div>
    </SectionShell>
  );
}
