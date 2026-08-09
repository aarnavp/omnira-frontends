/** Formatting helpers. Money and performance numbers are the emotional core
 * of this product, so every place that shows them routes through here —
 * one decision about precision and units, not one per component. */

export function formatUsd(value: number, options: { precise?: boolean } = {}): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: options.precise ? 4 : 2,
    maximumFractionDigits: options.precise ? 4 : 2,
  }).format(value);
}

export function formatCompactNumber(value: number): string {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(
    value,
  );
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}

export function formatPercent(value: number, digits = 0): string {
  return `${value.toFixed(digits)}%`;
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(
    new Date(iso),
  );
}

export function formatDateTime(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso));
}

/**
 * Named format "kinds" for <CountUp>/<InViewCountUp>. Those are Client
 * Components; a Server Component can't hand them a closure (functions
 * aren't serializable across the RSC boundary), so callers pass a kind
 * string instead and the client component resolves it to a formatter here.
 */
export type CountFormatKind = "percent0" | "usd" | "usd-precise" | "number" | "compact";

export function formatByKind(kind: CountFormatKind, value: number): string {
  switch (kind) {
    case "percent0":
      return formatPercent(value, 0);
    case "usd":
      return formatUsd(value);
    case "usd-precise":
      return formatUsd(value, { precise: true });
    case "number":
      return formatNumber(value);
    case "compact":
      return formatCompactNumber(value);
  }
}
