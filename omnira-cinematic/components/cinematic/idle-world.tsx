import { Reveal } from "@/components/ui/reveal";
import { DeviceField } from "./device-field";

/**
 * Act I → II transition. Zooms out from one strained data center to a world
 * view: dim, mostly-idle device silhouettes everywhere. The pivot — the
 * capacity the last section called scarce is already out there, just
 * disconnected.
 */
export function IdleWorld() {
  return (
    <section id="idle-world" className="relative flex min-h-svh items-center overflow-hidden px-6 sm:px-10 lg:px-16">
      <DeviceField seed={7} flickerShare={0.04} className="absolute inset-0 h-full w-full" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent,var(--color-ground)_78%)]"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">
            The Idle World
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-(family-name:--font-display) text-chapter font-medium text-balance text-(--color-ink)">
            The capacity was never missing. It was just disconnected.
          </h2>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="mx-auto mt-8 max-w-[48ch] text-body text-(--color-ink-muted)">
            A laptop closed on a desk. A phone face-down on a counter. A
            server between jobs, a TV that&rsquo;s only ever an input source.
            Billions of devices, almost all of them idle, almost all of the
            time — sitting exactly where the last section said capacity
            couldn&rsquo;t be found.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
