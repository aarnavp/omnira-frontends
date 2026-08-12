import { simulateRequest } from "./mock-transport";
import { mulberry32, hashSeed } from "@/lib/utils/random";
import type {
  NetworkEarningsByKind,
  NetworkSnapshot,
  NetworkStatsWindow,
  NetworkTimeseriesPoint,
} from "@/types/network";

const WINDOW_POINTS: Record<NetworkStatsWindow, number> = {
  "10m": 10,
  "30m": 30,
  "1h": 60,
  "1w": 7,
  "30d": 30,
  all: 42,
};

const WINDOW_STEP_MS: Record<NetworkStatsWindow, number> = {
  "10m": 60 * 1000,
  "30m": 60 * 1000,
  "1h": 60 * 1000,
  "1w": 24 * 60 * 60 * 1000,
  "30d": 24 * 60 * 60 * 1000,
  all: 24 * 60 * 60 * 1000,
};

function buildTimeseries(window: NetworkStatsWindow): NetworkTimeseriesPoint[] {
  const rng = mulberry32(hashSeed(`analytical-timeseries-${window}`));
  const points = WINDOW_POINTS[window];
  const stepMs = WINDOW_STEP_MS[window];
  const now = Date.now();
  const series: NetworkTimeseriesPoint[] = [];
  let earnings = 3.1;
  let requests = 900;
  for (let i = points; i >= 0; i -= 1) {
    const growth = 1 + (points - i) / points;
    earnings += rng() * 9 * growth;
    requests += rng() * 72000 * growth;
    series.push({
      timestamp: new Date(now - i * stepMs).toISOString(),
      earningsUsd: Number(earnings.toFixed(4)),
      requestsServed: Math.round(requests),
    });
  }
  return series;
}

const DEVICE_KIND_META: { kind: NetworkEarningsByKind["kind"]; label: string; share: number }[] = [
  { kind: "computer", label: "Computers", share: 0.44 },
  { kind: "phone", label: "Phones", share: 0.27 },
  { kind: "tv", label: "TVs & streamers", share: 0.14 },
  { kind: "iot", label: "IoT & edge hardware", share: 0.08 },
  { kind: "cloud", label: "Public cloud (failover)", share: 0.07 },
];

function buildTotalsAndBreakdown(window: NetworkStatsWindow): {
  totals: NetworkSnapshot["totals"];
  byDeviceKind: NetworkEarningsByKind[];
} {
  const rng = mulberry32(hashSeed(`analytical-totals-${window}`));
  const networkEarnedIndicativeUsd = 2114.62 + rng() * 55;
  const requestsServedAllTime = 31_400_000 + Math.round(rng() * 60000);

  const byDeviceKind = DEVICE_KIND_META.map(({ kind, label, share }) => ({
    kind,
    label,
    earnedUsd: Number((networkEarnedIndicativeUsd * share).toFixed(4)),
    requestsServed: Math.round(requestsServedAllTime * share),
    devicesServingNow: kind === "cloud" ? 0 : Math.round(rng() * 9),
    devicesAllTime: kind === "cloud" ? Math.round(2 + rng() * 3) : Math.round(6 + rng() * 46),
  }));

  return {
    totals: {
      devicesOnlineNow: byDeviceKind.reduce((sum, item) => sum + item.devicesServingNow, 0),
      devicesAllTime: byDeviceKind.reduce((sum, item) => sum + item.devicesAllTime, 0),
      servicesLive: 204 + Math.round(rng() * 14),
      networkEarnedIndicativeUsd,
      requestsServedAllTime,
    },
    byDeviceKind,
  };
}

/** Live network snapshot — devices online, requests served, indicative
 * earnings, and the per-device-type breakdown shown in §08. Mirrors the
 * shape a real telemetry/billing endpoint would return. */
export async function getNetworkSnapshot(
  window: NetworkStatsWindow = "all",
): Promise<NetworkSnapshot> {
  const { totals, byDeviceKind } = buildTotalsAndBreakdown(window);
  return simulateRequest(
    {
      window,
      totals,
      timeseries: buildTimeseries(window),
      byDeviceKind,
      generatedAt: new Date().toISOString(),
    },
    {
      latencyMs: [240, 520],
      failureRate: 0.06,
      failure: { code: "network_stats_unavailable", message: "Network stats are temporarily unavailable." },
    },
  );
}
