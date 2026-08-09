import { Logo } from "./logo";
import { SECTIONS } from "@/lib/section-config";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-(--color-ink-800) bg-(--color-ink-950)">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo onDark />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              A decentralized global computing network built from the world&apos;s idle devices —
              secure, productive infrastructure that pays the people who run it.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button href="/login" variant="outline-on-dark" size="sm">
                Sign in
              </Button>
              <Button href="/signup" variant="on-dark" size="sm">
                Create account
              </Button>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-white/40">The memo</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-sm text-white/70 transition-colors hover:text-white">
                    <span className="font-mono text-white/35">{s.number}</span> {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-white/40">Product</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a href="#two-paths" className="text-sm text-white/70 transition-colors hover:text-white">
                  Contribute
                </a>
              </li>
              <li>
                <a href="#two-paths" className="text-sm text-white/70 transition-colors hover:text-white">
                  Deploy
                </a>
              </li>
              <li>
                <a href="#live-network" className="text-sm text-white/70 transition-colors hover:text-white">
                  Live network
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-(--color-ink-800) pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Omnira. All figures marked indicative are a target operating model, not measured results.</p>
          <p>Built as an infrastructure thesis — analytical variant.</p>
        </div>
      </div>
    </footer>
  );
}
