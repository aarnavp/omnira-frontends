import { SectionShell } from "./section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { SecurityFlow } from "./security-flow";

/** §04 Security — CONTENT.md §10–11: address the trust objection by name
 * and answer it with specifics, not reassurance. */
export function SecuritySection() {
  return (
    <SectionShell id="security">
      <SectionHeading index="04" title="The question every enterprise buyer asks first." />

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <div className="rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface-raised) p-6">
          <p className="text-lg leading-snug font-semibold text-(--color-text)">
            &ldquo;Are we putting customer data on random people&apos;s phones?&rdquo;
          </p>
          <p className="mt-3 font-mono text-sm text-(--color-accent)">No.</p>
        </div>

        <div className="flex flex-col gap-4 text-base leading-relaxed text-(--color-text-muted)">
          <p>
            Customer master data never leaves the customer&apos;s designated perimeter — it stays
            on-premises or in the customer-controlled cloud storage described in §03&apos;s Data
            Plane. Edge devices never receive it.
          </p>
          <p>
            What an edge device receives is a fragmented, transient micro-task, executed inside a{" "}
            <strong className="font-semibold text-(--color-text)">
              hardened, single-tenant sandbox — MicroVM-style isolation with strict network
              air-gapping
            </strong>
            . Older peer-to-peer compute networks typically run tasks in open P2P sandboxes
            without enterprise-grade isolation; this is where Omnira draws its sharpest line
            against that generation of the model.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <p className="mb-5 font-mono text-xs uppercase tracking-wider text-(--color-text-faint)">
          What actually happens to a task fragment
        </p>
        <SecurityFlow />
      </div>
    </SectionShell>
  );
}
