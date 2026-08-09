import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export function Logo({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center gap-2 text-[15px] font-semibold tracking-tight", className)}
    >
      <span
        className="relative flex h-5 w-5 items-center justify-center rounded-[5px]"
        style={{ backgroundColor: "var(--color-ink-950)" }}
        aria-hidden
      >
        <span className="h-2 w-2 rounded-[2px] bg-(--color-signal-400)" />
      </span>
      <span className={onDark ? "text-white" : "text-(--color-text)"}>
        Omnira<span className="align-super text-[0.55em]">™</span>
      </span>
    </Link>
  );
}
