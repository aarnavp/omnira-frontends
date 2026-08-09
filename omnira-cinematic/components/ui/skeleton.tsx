import { cn } from "@/lib/utils/cn";

/** Shimmer placeholder matching the final layout's dimensions — never a
 * bare spinner. See AGENTS §4: loading states must match the final shape. */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      role="presentation"
      className={cn(
        "animate-(--animate-shimmer) rounded-(--radius-md) bg-[linear-gradient(90deg,var(--color-panel)_25%,var(--color-panel-raised)_50%,var(--color-panel)_75%)] bg-[length:200%_100%]",
        className,
      )}
    />
  );
}
