import type { Timestamp } from "./api";

/**
 * Shape for the Live Pulse module — the one place on this site where the
 * film becomes a real, running product. Mirrors what a real telemetry
 * endpoint would return: a snapshot plus a short recent timeseries.
 */

export type PulseScenario = "normal" | "empty";

export interface PulsePoint {
  timestamp: Timestamp;
  devicesOnline: number;
}

export interface NetworkPulseSnapshot {
  devicesOnlineNow: number;
  requestsServedLastHour: number;
  networkUptimePercent: number;
  recent: PulsePoint[];
  /** True while this is pilot data — carries the same disclaimer register
   * as the brand screenshot's "indicative projections" notice. */
  isIndicative: boolean;
  generatedAt: Timestamp;
}
