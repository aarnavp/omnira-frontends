import { Reveal } from "@/components/ui/reveal";
import { DeviceField } from "./device-field";

/**
 * Act II — The Shift. The electricity-grid metaphor from CONTENT.md §03,
 * stated directly. Visually: the same device field, now flickering on
 * individually and unconnected — the handoff into the centerpiece, where
 * they connect.
 */
export function TheShift() {
  return (
    <section id="the-shift" className="relative flex min-h-svh items-center overflow-hidden px-6 sm:px-10 lg:px-16">
      <DeviceField seed={19} flickerShare={0.16} className="absolute inset-0 h-full w-full" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent,var(--color-ground)_78%)]"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">
            Act II — The Shift
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-(family-name:--font-display) text-chapter font-medium text-balance text-(--color-ink)">
            Compute can work like electricity.
          </h2>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="mx-auto mt-8 max-w-[48ch] text-body text-(--color-ink-muted)">
            Electricity isn&rsquo;t generated in one place and shipped
            everywhere — it&rsquo;s generated across a grid, and routed to
            wherever it&rsquo;s needed. Computing power can work the same
            way: capacity distributed across many devices, routed to a
            workload the moment it needs it, then released.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
