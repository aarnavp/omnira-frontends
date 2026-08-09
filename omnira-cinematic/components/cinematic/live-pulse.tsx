"use client";

import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorState, EmptyState } from "@/components/ui/state-views";
import { CountUp } from "@/components/ui/count-up";
import { Sparkline } from "@/components/ui/sparkline";
import { useLivePulse } from "@/hooks/use-live-pulse";
import { formatCompactNumber, formatDateTime, formatNumber, formatPercent } from "@/lib/utils/format";

/**
 * The bridge between "cinematic story" and "this is a real, running
 * product." Restrained on purpose — a pulse, not a dashboard. Pulled
 * through `lib/api/network.ts` exactly like every other async surface:
 * real loading skeletons, a real error state, and a real empty state
 * (devices-online can legitimately be zero — see the hook for how to force
 * it during QA).
 */
export function LivePulse() {
  const { data, error, isLoading, refetch } = useLivePulse();

  return (
    <section id="live-pulse" className="flex flex-col items-center px-6 py-28 sm:px-10 lg:px-16">
      <Reveal className="w-full max-w-3xl text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">
          Live · The Omnira Network
        </p>
        <h2 className="mt-5 font-(family-name:--font-display) text-title font-medium text-balance text-(--color-ink)">
          Real devices, working right now.
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] text-body text-(--color-ink-muted)">
          Not a mockup — a limited pilot. The figures below are indicative
          projections of what devices could earn once paid services launch,
          not actual payouts. No cash is paid during the pilot.
        </p>
      </Reveal>

      <div className="mt-14 w-full max-w-3xl">
        {error ? (
          <ErrorState
            message="We couldn't reach network telemetry. This is a display issue only — the network is still running."
            onRetry={refetch}
          />
        ) : isLoading || !data ? (
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-24 w-full" />
              ))}
            </div>
            <Skeleton className="h-32 w-full" />
          </div>
        ) : data.devicesOnlineNow === 0 ? (
          <EmptyState
            title="The network is quiet right now"
            message="Devices come and go as people opt in and out. There's nothing wrong — check back in a few minutes, or contribute a device yourself."
          />
        ) : (
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <PulseStat
                label="Devices online now"
                value={<CountUp value={data.devicesOnlineNow} format={formatNumber} />}
              />
              <PulseStat
                label="Requests served, last hour"
                value={<CountUp value={data.requestsServedLastHour} format={formatCompactNumber} />}
              />
              <PulseStat
                label="Network uptime"
                value={<CountUp value={data.networkUptimePercent} format={(v) => formatPercent(v, 2)} />}
              />
            </div>

            <div>
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">
                Devices online · recent
              </p>
              <Sparkline
                data={data.recent.map((p) => ({ x: p.timestamp, y: p.devicesOnline }))}
                formatValue={(v) => `${formatNumber(v)} devices`}
                formatX={formatDateTime}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function PulseStat({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-panel) px-5 py-5">
      <p className="font-mono text-[11px] tracking-wider text-(--color-ink-faint) uppercase">{label}</p>
      <p className="mt-2 font-mono text-data font-medium text-(--color-ink)">{value}</p>
    </div>
  );
}
