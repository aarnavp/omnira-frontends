import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-(--radius-full) font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-(--color-accent) disabled:pointer-events-none disabled:opacity-40";

const VARIANTS = {
  primary:
    "bg-(--color-accent) text-(--color-void-950) hover:bg-(--color-accent-strong) shadow-[0_0_0_1px_rgba(174,255,46,0.25),0_16px_40px_-12px_var(--color-signal-glow)]",
  outline:
    "border border-(--color-hairline) text-(--color-ink) hover:border-(--color-accent) hover:text-(--color-accent)",
  ghost: "text-(--color-ink-muted) hover:text-(--color-ink)",
} as const;

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
} as const;

interface SharedProps {
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: SharedProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(BASE, VARIANTS[variant], SIZES[size], className)} {...props} />
  );
}

/** Same visual system as `Button`, as an anchor — for same-page hash CTAs
 * (this variant keeps every call to action in-page; see PROMPT.md §5/§9). */
export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: SharedProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cn(BASE, VARIANTS[variant], SIZES[size], className)} {...props} />;
}
