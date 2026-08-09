"use client";

import { useEffect } from "react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
      <Logo />
      <p className="font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">Error</p>
      <h1 className="font-(family-name:--font-display) text-title font-medium text-(--color-ink)">
        Something broke on our end.
      </h1>
      <p className="max-w-md text-body text-(--color-ink-muted)">
        The page hit an unexpected error. It&rsquo;s not something you did —
        try again in a moment.
      </p>
      <Button onClick={reset}>Try again</Button>
    </main>
  );
}
