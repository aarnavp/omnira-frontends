"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useNetworkSnapshot } from "@/hooks/use-network";
import { Badge } from "@/components/ui/badge";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { ErrorState, EmptyState } from "@/components/ui/state-views";
import { CountUp } from "@/components/ui/count-up";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, Thead, Th, Tbody, Td } from "@/components/ui/table";
import { formatCompactNumber, formatDateTime, formatNumber, formatUsd } from "@/lib/utils/format";
import type { NetworkStatsWindow } from "@/types/network";

const WINDOWS: { value: NetworkStatsWindow; label: string }[] = [
  { value: "10m", label: "10m" },
  { value: "30m", label: "30m" },
  { value: "1h", label: "1h" },
  { value: "1w", label: "1w" },
  { value: "30d", label: "30d" },
  { value: "all", label: "All" },
];

function MiniAreaChart({
  data,
  dataKey,
  color,
  valueFormatter,
}: {
  data: { timestamp: string; value: number }[];
  dataKey: string;
  color: string;
  valueFormatter: (value: number) => string;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={`fill-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.28} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="timestamp" hide />
        <YAxis hide domain={["auto", "auto"]} />
        <Tooltip
          labelFormatter={(label) => formatDateTime(String(label))}
          formatter={(value) => [valueFormatter(Number(value)), ""]}
          contentStyle={{
            background: "var(--color-panel-inset)",
            border: "1px solid var(--color-hairline)",
            borderRadius: "var(--radius-md)",
            fontSize: 12,
          }}
          itemStyle={{ color: "var(--color-ink)" }}
          labelStyle={{ color: "var(--color-ink)", fontFamily: "var(--font-mono)", fontSize: 11 }}
        />
        <Area type="monotone" dataKey="value" stroke={color} strokeWidth={2} fill={`url(#fill-${dataKey})`} isAnimationActive />
      </AreaChart>
    </ResponsiveContainer>
  );
}

/** §10 Live Network — deliberately not a grid of identical bordered cards:
 * headline numbers sit bare (like the hero), the two trend charts share one
 * panel split by a hairline, matching the inspo's asymmetric status/trend
 * pairing rather than a repeated stat-card grid. */
export function LiveNetworkContent() {
  const { data, error, isLoading, refetch, window, setWindow } = useNetworkSnapshot("all");

  if (isLoading) {
    return (
      <div className="mt-10 flex flex-col gap-6">
        <Skeleton className="h-16 w-full max-w-xl rounded-(--radius-lg)" />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-14" />
          ))}
        </div>
        <Skeleton className="h-56 rounded-(--radius-lg)" />
        <SkeletonText lines={4} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-10">
        <ErrorState title="The live network didn't load" message={error.message} onRetry={refetch} />
      </div>
    );
  }

  if (!data || data.byDeviceKind.length === 0) {
    return (
      <div className="mt-10">
        <EmptyState
          title="No devices have joined yet"
          message="Once devices connect to the network, activity and earnings appear here in real time."
        />
      </div>
    );
  }

  const { totals, byDeviceKind, timeseries } = data;
  const maxEarned = Math.max(...byDeviceKind.map((d) => d.earnedUsd), 1);

  return (
    <div className="mt-10 flex flex-col gap-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Badge tone="positive" dot pulse>
          Live · The Omnira Network
        </Badge>
        <Badge tone="neutral" aria-live="polite">
          {formatNumber(totals.devicesOnlineNow)} devices online now
        </Badge>
      </div>

      <div className="rounded-(--radius-lg) border border-(--color-warning-text)/40 bg-(--color-warning-surface) px-5 py-4 text-sm text-(--color-warning-text)">
        <strong className="font-semibold">Limited pilot</strong> — the dollar figures below are{" "}
        <strong className="font-semibold">indicative projections</strong> of what devices could earn
        once paid services launch, not actual payouts. No cash is paid during the pilot.
      </div>

      <dl id="live-stats" className="scroll-mt-24 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-(--color-hairline) py-8 sm:grid-cols-4">
        <div className="flex flex-col gap-1.5">
          <dt className="order-2 font-mono text-[11px] uppercase tracking-wider text-(--color-ink-faint)">
            Network earned (indicative) · 365d
          </dt>
          <dd className="order-1 font-mono text-xl font-medium text-(--color-accent) sm:text-2xl">
            <CountUp value={totals.networkEarnedIndicativeUsd} format="usd-precise" />
          </dd>
        </div>
        <div className="flex flex-col gap-1.5">
          <dt className="order-2 font-mono text-[11px] uppercase tracking-wider text-(--color-ink-faint)">
            Requests served
          </dt>
          <dd className="order-1 font-mono text-xl font-medium text-(--color-ink) sm:text-2xl">
            <CountUp value={totals.requestsServedAllTime} format="number" />
          </dd>
        </div>
        <div className="flex flex-col gap-1.5">
          <dt className="order-2 font-mono text-[11px] uppercase tracking-wider text-(--color-ink-faint)">
            Devices · all-time
          </dt>
          <dd className="order-1 font-mono text-xl font-medium text-(--color-ink) sm:text-2xl">
            <CountUp value={totals.devicesAllTime} format="number" />
          </dd>
        </div>
        <div className="flex flex-col gap-1.5">
          <dt className="order-2 font-mono text-[11px] uppercase tracking-wider text-(--color-ink-faint)">
            Services live
          </dt>
          <dd className="order-1 font-mono text-xl font-medium text-(--color-ink) sm:text-2xl">
            <CountUp value={totals.servicesLive} format="number" />
          </dd>
        </div>
      </dl>

      <div className="flex items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">Window</span>
        <Tabs value={window} onValueChange={(value) => setWindow(value as NetworkStatsWindow)}>
          <TabsList>
            {WINDOWS.map((w) => (
              <TabsTrigger key={w.value} value={w.value}>
                {w.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 divide-y divide-(--color-hairline) overflow-hidden rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-panel) sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <div className="p-4">
          <p className="font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">Money earned · recent</p>
          <div className="mt-2 h-40">
            <MiniAreaChart
              data={timeseries.map((p) => ({ timestamp: p.timestamp, value: p.earningsUsd }))}
              dataKey="earnings"
              color="var(--color-brand)"
              valueFormatter={(v) => formatUsd(v, { precise: true })}
            />
          </div>
        </div>
        <div className="p-4">
          <p className="font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">Requests served · recent</p>
          <div className="mt-2 h-40">
            <MiniAreaChart
              data={timeseries.map((p) => ({ timestamp: p.timestamp, value: p.requestsServed }))}
              dataKey="requests"
              color="var(--color-baseline-strong)"
              valueFormatter={(v) => formatCompactNumber(v)}
            />
          </div>
        </div>
      </div>

      <div id="live-devices" className="scroll-mt-24">
        <p className="mb-1 font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">
          Earnings by device type · last 365 days
        </p>
        <p className="mb-4 text-sm text-(--color-ink-muted)">Every kind of device earns — no data center required.</p>
        <div className="overflow-hidden rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-panel)">
          <Table>
            <Thead>
              <Th>Device type</Th>
              <Th>Earned (indicative)</Th>
              <Th>Requests served</Th>
              <Th>Devices — now · all-time</Th>
            </Thead>
            <Tbody>
              {byDeviceKind.map((row) => (
                <tr key={row.kind}>
                  <Td className="min-w-[220px]">
                    <p className="font-medium text-(--color-ink)">{row.label}</p>
                    <div className="mt-1.5 h-1.5 w-full max-w-[180px] overflow-hidden rounded-(--radius-full) bg-(--color-panel-sunken)">
                      <div
                        className="h-full rounded-(--radius-full) bg-(--color-brand)"
                        style={{ width: `${Math.max((row.earnedUsd / maxEarned) * 100, 2)}%` }}
                      />
                    </div>
                  </Td>
                  <Td className="font-mono">{formatUsd(row.earnedUsd, { precise: true })}</Td>
                  <Td className="font-mono">{formatNumber(row.requestsServed)}</Td>
                  <Td className="font-mono">
                    {row.devicesServingNow} · {row.devicesAllTime}
                  </Td>
                </tr>
              ))}
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
