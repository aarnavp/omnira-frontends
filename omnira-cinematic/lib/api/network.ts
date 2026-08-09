import { simulateRequest } from "./mock-transport";
import { mulberry32, hashSeed } from "@/lib/utils/random";
import type { NetworkPulseSnapshot, PulsePoint, PulseScenario } from "@/types/network";

const RECENT_POINTS = 24;
const RECENT_STEP_MS = 5 * 60 * 1000; // one point every 5 minutes

function buildRecent(rng: () => number, base: number): PulsePoint[] {
  const now = Date.now();
  const points: PulsePoint[] = [];
  let value = Math.max(0, base - 6);
  for (let i = RECENT_POINTS; i >= 0; i -= 1) {
    value = Math.max(0, value + (rng() - 0.42) * 3);
    points.push({
      timestamp: new Date(now - i * RECENT_STEP_MS).toISOString(),
      devicesOnline: Math.round(value),
    });
  }
  // Land the series on `base` so the sparkline's end matches the headline figure.
  points[points.length - 1].devicesOnline = base;
  return points;
}

/**
 * Live Pulse snapshot: devices online now, requests served, and network
 * uptime — the same register of honest, unglamorous numbers the brand
 * screenshot used, pulled through a service function exactly like a real
 * telemetry endpoint would be.
 *
 * `scenario` defaults to "normal" and exists for deliberate QA of the empty
 * state (devices-online can legitimately be zero between pilot sessions) —
 * the client passes it through from a `?pulse=empty` query param so the
 * empty state can be triggered on demand rather than only assumed. It is
 * never randomized on its own; a quiet network is a real state to design
 * for, not noise to simulate.
 */
export async function getNetworkPulse(
  scenario: PulseScenario = "normal",
): Promise<NetworkPulseSnapshot> {
  const rng = mulberry32(hashSeed(`pulse-${Math.floor(Date.now() / 60000)}`));

  if (scenario === "empty") {
    return simulateRequest(
      {
        devicesOnlineNow: 0,
        requestsServedLastHour: 0,
        networkUptimePercent: 99.8,
        recent: buildRecent(rng, 0),
        isIndicative: true,
        generatedAt: new Date().toISOString(),
      },
      { latencyMs: [260, 520] },
    );
  }

  const devicesOnlineNow = 60 + Math.round(rng() * 45);
  const requestsServedLastHour = 180_000 + Math.round(rng() * 60_000);
  const networkUptimePercent = 99.9 + rng() * 0.09;

  return simulateRequest(
    {
      devicesOnlineNow,
      requestsServedLastHour,
      networkUptimePercent,
      recent: buildRecent(rng, devicesOnlineNow),
      isIndicative: true,
      generatedAt: new Date().toISOString(),
    },
    {
      latencyMs: [320, 680],
      failureRate: 0.07,
      failure: {
        code: "server_error",
        message: "Network telemetry is temporarily unavailable.",
      },
    },
  );
}
