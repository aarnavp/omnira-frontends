import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

/**
 * Returns to the mission statement (AGENTS.md §1), in the hero's voice —
 * the frame meant to stick after the tab closes. The primary CTA loops back
 * to Two Ways In rather than to a page this pass doesn't build; a visitor
 * convinced by the film lands exactly where the product's two real doors
 * are.
 */
export function ClosingManifesto() {
  return (
    <section
      id="closing"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-24 text-center sm:px-10 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(174,255,46,0.06),transparent)]"
      />

      <Reveal className="max-w-3xl">
        <p className="font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">
          Omnira
        </p>
        <h2 className="mt-6 font-(family-name:--font-display) text-chapter font-medium text-balance text-(--color-ink)">
          Every idle device is infrastructure waiting to happen.
        </h2>
        <p className="mx-auto mt-8 max-w-[52ch] text-lead text-(--color-ink-muted)">
          Omnira is building the network that makes that true — turning the
          world&rsquo;s unused computers into secure, productive capacity, and
          giving the people who own them a share of what it&rsquo;s worth.
        </p>
        <div className="mt-10">
          <ButtonLink href="#two-ways-in" size="lg">
            Choose your way in ↑
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
