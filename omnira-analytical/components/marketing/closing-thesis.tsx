import { SectionShell } from "./section-shell";
import { Button } from "@/components/ui/button";

const PILLARS = [
  { label: "Security", statement: "Data remains within the designated enterprise perimeter." },
  { label: "Economics", statement: "~98% distributed edge compute, by target design." },
  { label: "Scale", statement: "Compute capacity grows with the device ecosystem." },
  { label: "Vision", statement: "Compute, delivered like a utility." },
] as const;

/** Closing thesis — CONTENT.md §18's four-pillar summary, carried through
 * near-verbatim (PROMPT §3): the sentence a reader should be able to repeat
 * back after they leave. */
export function ClosingThesis() {
  return (
    <SectionShell id="closing-thesis" onDark padded={false} className="border-b-0">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <p className="font-mono text-sm tracking-wider text-(--color-signal-400)">The thesis, in full</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          We are not building another cloud. We are building the layer that makes most of
          today&apos;s cloud spend unnecessary.
        </h2>

        <dl className="mt-14 grid grid-cols-1 gap-8 border-t border-(--color-ink-800) pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div key={pillar.label}>
              <dt className="font-mono text-xs uppercase tracking-wider text-(--color-signal-400)">{pillar.label}</dt>
              <dd className="mt-2 text-base leading-snug text-white/85">{pillar.statement}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 flex flex-wrap gap-3">
          <Button href="/signup" variant="on-dark" size="lg">
            Create an account
          </Button>
          <Button href="#two-paths" variant="outline-on-dark" size="lg">
            Explore Contribute & Deploy
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
