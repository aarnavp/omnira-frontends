import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/ui/count-up";

const HEADLINE_STATS = [
  {
    value: 98,
    prefix: "",
    label: "Distributed edge compute",
    tone: "text-(--color-accent)",
  },
  {
    value: 2,
    prefix: "≤",
    label: "Public cloud, failover only",
    tone: "text-(--color-baseline-text)",
  },
  {
    value: 0,
    prefix: "",
    label: "Master data stored at the edge",
    tone: "text-(--color-text)",
  },
] as const;

/** The single most important design decision on the page: lead with the
 * model's core claim, in numbers, before any scroll (PROMPT §5 Hero). */
export function Hero() {
  return (
    <section className="border-b border-(--color-border) bg-(--color-surface)">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-20">
        <p className="font-mono text-sm tracking-wider text-(--color-accent)">The infrastructure thesis</p>
        <h1 className="mt-4 max-w-4xl text-hero font-semibold tracking-[-0.02em] text-(--color-text)">
          Every idle device is unbuilt data center capacity.
        </h1>
        <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-(--color-text-muted)">
          Omnira decouples data from compute and routes workloads onto a distributed fleet of
          idle devices, instead of keeping infrastructure provisioned around the clock to cover
          occasional peaks. We are not building another cloud — we are building the layer that
          makes most of today&apos;s cloud spend unnecessary.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#problem" variant="primary" size="lg">
            Read the thesis
          </Button>
          <Button href="#live-network" variant="secondary" size="lg">
            See the live network
          </Button>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-(--color-border) pt-10 sm:grid-cols-3">
          {HEADLINE_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5">
              <dt className="order-2 text-sm text-(--color-text-muted)">{stat.label}</dt>
              <dd className={`order-1 font-mono text-stat font-medium sm:text-5xl ${stat.tone}`}>
                {stat.prefix}
                <CountUp value={stat.value} format="percent0" />
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-(--color-text-faint)">
          The target operating model — see{" "}
          <a href="#economics" className="underline decoration-(--color-border-strong) underline-offset-2 hover:text-(--color-text-muted)">
            05 Economics
          </a>{" "}
          for what kind of number this is.
        </p>
      </div>
    </section>
  );
}
