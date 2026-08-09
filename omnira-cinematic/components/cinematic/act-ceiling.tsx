import { Reveal } from "@/components/ui/reveal";
import { CeilingChart } from "./ceiling-chart";

/**
 * Act I — The Ceiling. The real problem statement from CONTENT.md §02, not
 * generic "cloud is broken" copy: companies keep expensive infrastructure
 * running 24/7 to cover occasional peaks, because the old rule assumed data
 * and compute have to live together.
 */
export function ActCeiling() {
  return (
    <section
      id="the-ceiling"
      className="relative flex min-h-svh flex-col justify-center gap-14 px-6 py-24 sm:px-10 lg:flex-row lg:items-center lg:gap-20 lg:px-16"
    >
      <div className="max-w-xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">
            Act I — The Ceiling
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-(family-name:--font-display) text-chapter font-medium text-balance text-(--color-ink)">
            You provision for the worst day. You pay for it every day.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[52ch] text-body text-(--color-ink-muted)">
            Modern AI, analytics, and software workloads need more computing
            power every year. So companies keep expensive infrastructure
            running around the clock — not because they need all of it most
            of the time, but because occasionally, they need every bit of it.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-4 max-w-[52ch] text-body text-(--color-ink-muted)">
            The old rule was simple: data and compute have to live in the
            same place. That assumption is what makes it expensive.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-9 inline-flex max-w-md items-start gap-3 rounded-(--radius-md) border border-(--color-hairline) bg-(--color-panel) px-4 py-3">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-accent)" />
            <p className="font-mono text-xs leading-relaxed text-(--color-ink-faint)">
              AI-driven demand for data center capacity is growing an
              estimated 23–30% a year through 2030, pushing global vacancy
              toward historic lows. — CBRE, Global Data Center Trends 2026
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="flex justify-center lg:justify-end">
        <CeilingChart />
      </Reveal>
    </section>
  );
}
