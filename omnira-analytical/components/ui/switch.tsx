"use client";

import { cn } from "@/lib/utils/cn";

/** People pause a device; they don't "toggle the node scheduler daemon" —
 * this is the control behind every "stop contributing" affordance. Never
 * bury it (AGENTS §1). */
export function Switch({
  checked,
  onChange,
  label,
  disabled,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative h-6 w-11 shrink-0 rounded-(--radius-full) transition-colors disabled:opacity-50",
        checked ? "bg-(--color-signal-600)" : "bg-(--color-paper-200)",
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 h-5 w-5 rounded-full bg-(--color-paper-white) shadow-sm transition-transform",
          checked ? "translate-x-[22px]" : "translate-x-0.5",
        )}
      />
    </button>
  );
}
