import { simulateRequest } from "./mock-transport";
import type { ScalingModel, ScalingPoint } from "@/types/scaling";

/**
 * §06 How Scaling Changes: the old-way-vs-Omnira-way comparison table
 * (CONTENT.md §13–14) plus a devices↔capacity series that a counter-style
 * visual can animate through, proving "more devices → more available
 * compute" mechanically rather than just stating it.
 */
function buildSeries(): ScalingPoint[] {
  const series: ScalingPoint[] = [];
  let devices = 40;
  for (let step = 0; step <= 10; step += 1) {
    series.push({
      step,
      devices: Math.round(devices),
      availableCapacityTeraflops: Math.round(devices * 4.2),
    });
    devices *= 1.55;
  }
  return series;
}

const COMPARISON = [
  {
    dimension: "How you scale",
    oldWay: "Forecast demand, then provision capacity in advance.",
    omniraWay: "Capacity expands automatically as the device ecosystem expands.",
  },
  {
    dimension: "Mechanism",
    oldWay: "Manual scaling — buy and configure additional servers.",
    omniraWay: "More devices join the network → more available compute.",
  },
  {
    dimension: "When you need more",
    oldWay: "Negotiate additional cloud capacity with a provider.",
    omniraWay: "Network capacity already grows with adoption, not negotiation.",
  },
  {
    dimension: "Cost trajectory",
    oldWay: "Costs rise with usage, on top of standing infrastructure.",
    omniraWay: "Elastic cost tied to actual execution, not idle standing capacity.",
  },
  {
    dimension: "Growth ceiling",
    oldWay: "Scale is gated by budget for centralized infrastructure.",
    omniraWay: "Scale is gated by ecosystem size, not centralized investment.",
  },
];

export async function getScalingModel(): Promise<ScalingModel> {
  return simulateRequest(
    {
      series: buildSeries(),
      comparison: COMPARISON,
      generatedAt: new Date().toISOString(),
    },
    {
      latencyMs: [180, 380],
      failureRate: 0.04,
      failure: { code: "scaling_model_unavailable", message: "This model didn't load. Try again." },
    },
  );
}
