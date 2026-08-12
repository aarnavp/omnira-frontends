import type { ReactNode } from "react";
import { Button } from "./button";

/**
 * Shared shapes for the error and empty states every async surface needs.
 * Errors say what broke and the next move; empty states invite action.
 */

export function ErrorState({
  title = "Couldn't load this",
  message,
  onRetry,
}: {
  title?: string;
  message: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-panel) p-8">
      <p className="text-base font-semibold text-(--color-ink)">{title}</p>
      <p className="text-sm text-(--color-ink-muted)">{message}</p>
      {onRetry ? (
        <Button variant="outline" size="sm" onClick={onRetry}>
          Try again
        </Button>
      ) : null}
    </div>
  );
}

export function EmptyState({
  title,
  message,
  action,
  icon,
}: {
  title: string;
  message: string;
  action?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-(--radius-lg) border border-dashed border-(--color-hairline) bg-(--color-ground) p-8">
      {icon ? <div className="text-(--color-ink-faint)">{icon}</div> : null}
      <p className="text-base font-semibold text-(--color-ink)">{title}</p>
      <p className="max-w-md text-sm text-(--color-ink-muted)">{message}</p>
      {action ? <div className="mt-1">{action}</div> : null}
    </div>
  );
}
