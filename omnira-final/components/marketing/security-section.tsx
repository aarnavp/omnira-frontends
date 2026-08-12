import { SectionShell } from "./section-shell";
import { SectionIndexHeading } from "@/components/ui/section-index-heading";
import { FigureLabel } from "@/components/ui/figure-label";
import { IsoLockPerimeter } from "@/components/icons/iso-lock-perimeter";
import { SecurityFlow } from "./security-flow";

/** §05 Security — CONTENT.md §10–11: address the trust objection by name
 * and answer it with specifics, not reassurance. */
export function SecuritySection() {
  return (
    <SectionShell id="security">
      <SectionIndexHeading index="05" lead="The question every enterprise buyer" muted="asks first." />

      <div id="security-trust" className="mt-8 scroll-mt-24 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <div className="rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-panel) p-6">
          <FigureLabel index="05.1" tone="dim" />
          <IsoLockPerimeter className="mt-4 h-14 w-14 text-(--color-accent)" />
          <p className="mt-4 text-lg leading-snug font-semibold text-(--color-ink)">
            &ldquo;Are we putting customer data on random people&apos;s phones?&rdquo;
          </p>
          <p className="mt-3 font-mono text-sm text-(--color-accent)">No.</p>
        </div>

        <div className="flex flex-col gap-4 text-base leading-relaxed text-(--color-ink-muted)">
          <p>
            Customer master data never leaves the customer&apos;s designated perimeter — it stays
            on-premises or in the customer-controlled cloud storage described in §04&apos;s Data
            Plane. Edge devices never receive it.
          </p>
          <p>
            What an edge device receives is a fragmented, transient micro-task, executed inside a{" "}
            <strong className="font-semibold text-(--color-ink)">
              hardened, single-tenant sandbox — MicroVM-style isolation with strict network
              air-gapping
            </strong>
            . Older peer-to-peer compute networks typically run tasks in open P2P sandboxes
            without enterprise-grade isolation; this is where Omnira draws its sharpest line
            against that generation of the model.
          </p>
        </div>
      </div>

      <div id="security-transient" className="mt-12 scroll-mt-24">
        <FigureLabel index="05.2" tone="highlight" />
        <p className="mb-5 mt-3 font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">
          What actually happens to a task fragment
        </p>
        <SecurityFlow />
      </div>
    </SectionShell>
  );
}
