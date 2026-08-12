import { SectionShell } from "./section-shell";
import { ButtonLink } from "@/components/ui/button";
import { MixedHeadline } from "@/components/ui/mixed-headline";

const PILLARS = [
  { label: "Security", statement: "Data remains within the designated enterprise perimeter." },
  { label: "Economics", statement: "~98% distributed edge compute, by target design." },
  { label: "Scale", statement: "Compute capacity grows with the device ecosystem." },
  { label: "Vision", statement: "Compute, delivered like a utility." },
] as const;

/** §12 Closing thesis — CONTENT.md §18's four-pillar summary, carried
 * through near-verbatim: the sentence a reader should be able to repeat
 * back after they leave. */
export function ClosingThesis() {
  return (
    <SectionShell id="closing" onDark padded={false} className="border-b-0">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <p className="font-mono text-sm tracking-wider text-(--color-accent-strong)">The thesis, in full</p>
        <MixedHeadline
          as="h2"
          className="mt-4 max-w-3xl"
          lead="We are not building another cloud."
          muted="We are building the layer that makes most of today's cloud spend unnecessary."
        />

        <dl className="mt-14 grid grid-cols-1 gap-8 border-t border-(--color-hairline) pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div key={pillar.label}>
              <dt className="font-mono text-xs uppercase tracking-wider text-(--color-accent-strong)">{pillar.label}</dt>
              <dd className="mt-2 text-base leading-snug text-(--color-ink)">{pillar.statement}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 flex flex-wrap gap-3">
          <ButtonLink href="/signup" variant="primary" size="lg">
            Create an account
          </ButtonLink>
          <ButtonLink href="#two-paths" variant="outline" size="lg">
            Explore Contribute &amp; Deploy
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
