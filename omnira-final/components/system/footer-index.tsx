import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { NAV_SECTIONS } from "@/lib/section-config";

/**
 * The numbered footer index — an evolution of the inspo's "5.1 Pulse  5.2
 * Insights  5.3 Dashboards" row, extended across every section's sub-panels
 * instead of one. Horizontal and airy, not a vertical link column — see
 * PROMPT.md §5. Combined with the logo/description/auth scaffolding both
 * sibling sites carry in their footers.
 */
export function FooterIndex() {
  return (
    <footer className="border-t border-(--color-hairline) bg-(--color-void-900)">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-(--color-ink-muted)">
              A decentralized global computing network built from the world&apos;s idle devices —
              secure, productive infrastructure that pays the people who run it.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <ButtonLink href="/login" variant="outline" size="sm">
                Sign in
              </ButtonLink>
              <ButtonLink href="/signup" variant="primary" size="sm">
                Create account
              </ButtonLink>
            </div>
          </div>

          <nav aria-label="Full section index" className="flex-1 sm:max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">Index</p>
            <div className="mt-4 flex flex-col gap-5">
              {NAV_SECTIONS.map((section) => (
                <div key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="font-mono text-xs text-(--color-ink-muted) transition-colors hover:text-(--color-ink)"
                  >
                    <span className="text-(--color-ink)">{section.number}</span> {section.label}
                  </a>
                  {section.subs ? (
                    <div className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1">
                      {section.subs.map((sub) => (
                        <a
                          key={sub.id}
                          href={`#${sub.id}`}
                          className="font-mono text-[11px] text-(--color-ink-faint) transition-colors hover:text-(--color-ink-muted)"
                        >
                          {sub.number} {sub.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-(--color-hairline) pt-6 text-xs text-(--color-ink-faint) sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Omnira. All figures marked indicative are a target operating
            model, not measured results.
          </p>
          <p>Built on idle devices, not idle promises.</p>
        </div>
      </div>
    </footer>
  );
}
