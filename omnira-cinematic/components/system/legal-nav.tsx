import Link from "next/link";
import { Logo } from "@/components/ui/logo";

/**
 * The minimal header for standalone pages outside the film (Privacy,
 * Terms) — the wordmark links back to the homepage rather than jumping to
 * an in-page chapter that doesn't exist here, unlike `<TopNav>`.
 */
export function LegalNav() {
  return (
    <header className="border-b border-(--color-hairline)">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
}
