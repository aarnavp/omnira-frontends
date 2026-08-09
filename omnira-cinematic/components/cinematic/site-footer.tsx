import Link from "next/link";
import { Logo } from "@/components/ui/logo";

const NAV_COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/#contribute", label: "Contribute" },
      { href: "/#deploy", label: "Deploy" },
      { href: "/#live-pulse", label: "Live network" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

const SOCIAL = ["X", "LinkedIn", "GitHub"];

/**
 * Conventional and calm on purpose — the film is over, this is the
 * credits. No motion, no scroll tricks; a plain `<a href="#id">` is enough
 * for the in-page links (the CSS `scroll-behavior: smooth` rule in
 * globals.css already handles the smoothing, and honors reduced motion).
 * Social links are real product surfaces that don't exist yet in this pass
 * — rendered as visibly inert placeholders rather than `href="#"`, which
 * would silently jump the page to the top.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-(--color-hairline) bg-(--color-void-900)">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-2">
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-(--color-ink-muted)">
              Idle devices, working. A decentralized compute network built
              from hardware people already own.
            </p>
          </div>
          {NAV_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="font-mono text-xs tracking-wider text-(--color-ink-faint) uppercase">
                {column.title}
              </p>
              <ul className="mt-3 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-(--color-ink-muted) hover:text-(--color-accent)"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="font-mono text-xs tracking-wider text-(--color-ink-faint) uppercase">Elsewhere</p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {SOCIAL.map((name) => (
                <li key={name}>
                  <span
                    aria-disabled="true"
                    title="Coming soon"
                    className="cursor-not-allowed text-sm text-(--color-ink-faint)"
                  >
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-(--color-hairline) pt-6 text-xs text-(--color-ink-faint) sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Omnira. All rights reserved.</p>
          <p>Built on idle devices, not idle promises.</p>
        </div>
      </div>
    </footer>
  );
}
