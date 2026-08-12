import type { ReactNode } from "react";
import { Logo } from "@/components/ui/logo";

/** Minimal auth shell — a stub per root AGENTS §5 (sign in/sign up screens
 * can be stubbed, but the affordance and the shape must exist). */
export function AuthShell({
  eyebrow,
  title,
  subtitle,
  children,
  footer,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col bg-(--color-ground)">
      <div className="px-6 py-6 sm:px-8">
        <Logo />
      </div>
      <div className="flex flex-1 items-center justify-center px-6 pb-16">
        <div className="w-full max-w-sm">
          <p className="font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">{eyebrow}</p>
          <h1 className="mt-2 text-2xl font-semibold text-(--color-ink)">{title}</h1>
          <p className="mt-1.5 text-sm text-(--color-ink-muted)">{subtitle}</p>
          <div className="mt-8 rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-panel) p-6 shadow-(--shadow-hairline)">
            {children}
          </div>
          <p className="mt-6 text-center text-sm text-(--color-ink-muted)">{footer}</p>
        </div>
      </div>
    </div>
  );
}
