"use client";

import { Reveal } from "@/components/ui/reveal";
import { useMountedReducedMotion } from "@/hooks/use-mounted-reduced-motion";
import { VaultDiagram } from "./vault-diagram";

/**
 * The trust beat, addressed head-on and briefly (CONTENT.md §10–11): master
 * data stays inside its own perimeter; edge devices only ever receive small,
 * transient, fragmented tasks that live in memory and are wiped after
 * execution. No percentages here — that's the analytical site's job.
 */
export function DataNeverLeaves() {
  const prefersReducedMotion = useMountedReducedMotion();

  return (
    <section
      id="data-never-leaves"
      className="flex min-h-svh flex-col items-center justify-center gap-14 px-6 py-24 sm:px-10 lg:flex-row lg:gap-20 lg:px-16"
    >
      <div className="order-2 h-56 w-56 shrink-0 sm:h-72 sm:w-72 lg:order-1">
        <VaultDiagram animate={!prefersReducedMotion} />
      </div>

      <div className="order-1 max-w-xl text-center lg:order-2 lg:text-left">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">
            Your Data Never Leaves
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-(family-name:--font-display) text-chapter font-medium text-balance text-(--color-ink)">
            The question isn&rsquo;t rude. It&rsquo;s the right one.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-[50ch] text-body text-(--color-ink-muted) lg:mx-0">
            &ldquo;Are you putting our data on random people&rsquo;s phones?&rdquo;
            No. Your master data stays inside your own perimeter — on-premises
            or in storage you control. Devices on the network only ever
            receive small, temporary fragments of a task. They run in memory
            and are wiped the moment the work is done.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
