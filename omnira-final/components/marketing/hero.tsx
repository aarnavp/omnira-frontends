import { ButtonLink } from "@/components/ui/button";
import { CountUp } from "@/components/ui/count-up";
import { MixedHeadline } from "@/components/ui/mixed-headline";

const HEADLINE_STATS = [
  { value: 98, prefix: "", label: "Distributed edge compute", tone: "text-(--color-accent)" },
  { value: 2, prefix: "≤", label: "Public cloud, failover only", tone: "text-(--color-baseline-text)" },
  { value: 0, prefix: "", label: "Master data stored at the edge", tone: "text-(--color-ink)" },
] as const;

/** §00 Hero — the single most important design decision on the page: lead
 * with the model's core claim, in numbers, before any scroll. The
 * mixed-weight headline (bold lead clause + muted continuation) replaces a
 * separate display face — see PROMPT.md §2. */
export function Hero() {
  return (
    <section id="hero" className="scroll-mt-20 border-b border-(--color-hairline) bg-(--color-ground)">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-14 sm:px-8 sm:pt-28 sm:pb-20">
        <p className="font-mono text-sm tracking-wider text-(--color-accent)">The infrastructure thesis</p>
        <MixedHeadline
          as="h1"
          size="hero"
          className="mt-4 max-w-4xl"
          lead="Every idle device is unbuilt"
          muted="data center capacity."
        />
        <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-(--color-ink-muted)">
          Omnira decouples data from compute and routes workloads onto a distributed fleet of
          idle devices, instead of keeping infrastructure provisioned around the clock to cover
          occasional peaks. We are not building another cloud — we are building the layer that
          makes most of today&apos;s cloud spend unnecessary.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#problem" variant="primary" size="lg">
            Read the thesis
          </ButtonLink>
          <ButtonLink href="#live-network" variant="outline" size="lg">
            See the live network
          </ButtonLink>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-(--color-hairline) pt-10 sm:grid-cols-3">
          {HEADLINE_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5">
              <dt className="order-2 text-sm text-(--color-ink-muted)">{stat.label}</dt>
              <dd className={`order-1 font-mono text-stat font-medium sm:text-5xl ${stat.tone}`}>
                {stat.prefix}
                <CountUp value={stat.value} format="percent0" />
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-(--color-ink-faint)">
          The target operating model — see{" "}
          <a href="#economics" className="underline decoration-(--color-hairline-strong) underline-offset-2 hover:text-(--color-ink-muted)">
            06 Economics
          </a>{" "}
          for what kind of number this is.
        </p>
      </div>
    </section>
  );
}
