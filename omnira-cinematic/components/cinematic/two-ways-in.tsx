import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

/**
 * The story splits. First moment the page behaves like a product rather
 * than a film — the two real doors the product has. Both CTAs are in-page:
 * they carry the visitor to Live Pulse, the proof that the film wasn't
 * fiction, rather than to a page this pass doesn't build (see AGENTS §5 —
 * no backend, no invented destinations).
 */
export function TwoWaysIn() {
  return (
    <section id="two-ways-in" className="relative border-y border-(--color-hairline)">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-2">
        <div
          id="contribute"
          className="flex flex-col justify-center gap-6 border-b border-(--color-hairline) px-6 py-24 sm:px-10 lg:border-r lg:border-b-0 lg:px-16 lg:py-32"
        >
          <Reveal>
            <p className="font-mono text-xs tracking-[0.2em] text-(--color-accent) uppercase">
              Contribute
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="max-w-md font-(family-name:--font-display) text-title font-medium text-balance text-(--color-ink)">
              Your devices are already capable of this.
            </h3>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-md text-body text-(--color-ink-muted)">
              Turn on the hardware you already own. Every idle cycle becomes
              something the network can route work to — and you&rsquo;re paid
              for it in plain U.S. dollars. No token, no wallet, no crypto
              step.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ButtonLink href="#live-pulse" variant="outline" className="mt-2 w-fit hover:bg-(--color-accent)/10">
              See the network live ↓
            </ButtonLink>
          </Reveal>
        </div>

        <div
          id="deploy"
          className="flex flex-col justify-center gap-6 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
        >
          <Reveal>
            <p className="font-mono text-xs tracking-[0.2em] text-(--color-accent-motion) uppercase">
              Deploy
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="max-w-md font-(family-name:--font-display) text-title font-medium text-balance text-(--color-ink)">
              Ship on the network instead of a data center.
            </h3>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-md text-body text-(--color-ink-muted)">
              Run APIs, applications, and models on distributed capacity
              instead of infrastructure you provision and pay for around the
              clock — with public cloud as the safety net, not the default.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ButtonLink
              href="#live-pulse"
              variant="outline"
              className="mt-2 w-fit border-(--color-accent-motion)/40 hover:bg-(--color-accent-motion)/10 hover:text-(--color-accent-motion)"
            >
              See what&rsquo;s running ↓
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
