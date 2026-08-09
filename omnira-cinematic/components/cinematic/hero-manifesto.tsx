import { Reveal } from "@/components/ui/reveal";

/**
 * Full-viewport hero. One sentence doing the job of "here's what's about to
 * happen to computing," a quiet supporting line, and a scroll cue built from
 * the token system (no bouncing-arrow cliché). Server Component — the fades
 * are the only motion here, handled by the client `<Reveal>` leaf.
 */
export function HeroManifesto() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 pt-14 sm:px-10 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(174,255,46,0.08),transparent)]"
      />

      <Reveal>
        <p className="font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">
          A film about the next decade of computing
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="mt-6 max-w-[18ch] font-(family-name:--font-display) text-hero font-medium text-balance text-(--color-ink)">
          The world&rsquo;s next data center is already idle.
        </h1>
      </Reveal>

      <Reveal delay={0.25}>
        <p className="mt-8 max-w-[46ch] text-lead text-(--color-ink-muted)">
          Omnira turns unused laptops, phones, and servers into one living
          compute network — earning for the people who own them, running the
          software that needs them.
        </p>
      </Reveal>

      <div className="absolute bottom-10 left-6 flex items-center gap-3 sm:left-10 lg:left-16">
        <span
          aria-hidden
          className="relative h-16 w-px overflow-hidden bg-(--color-hairline)"
        >
          <span className="absolute inset-x-0 top-0 h-6 animate-(--animate-drift-line) bg-linear-to-b from-transparent via-(--color-accent) to-transparent" />
        </span>
        <span className="font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">
          Scroll
        </span>
      </div>
    </section>
  );
}
