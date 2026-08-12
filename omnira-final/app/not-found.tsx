import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
      <Link href="/">
        <Logo />
      </Link>
      <p className="font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">404</p>
      <h1 className="text-title font-semibold text-(--color-ink)">This device isn&rsquo;t on the network.</h1>
      <p className="max-w-md text-body text-(--color-ink-muted)">
        The page you&rsquo;re looking for doesn&rsquo;t exist. It might have moved, or the link might be wrong.
      </p>
      <ButtonLink href="/">Back to the homepage</ButtonLink>
    </main>
  );
}
