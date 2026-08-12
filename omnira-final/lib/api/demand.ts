import { simulateRequest } from "./mock-transport";
import { mulberry32, hashSeed } from "@/lib/utils/random";
import type { DemandModel, ProvisioningPoint } from "@/types/economics";

/**
 * Illustrative demand-vs-provisioning series for §01 Problem: a spiky,
 * occasional-peak demand curve against the flat, always-on capacity a
 * company has to provision to cover it. This is a conceptual model, not a
 * measurement of any real deployment — labeled as such in the section copy.
 */
function buildPoints(): ProvisioningPoint[] {
  const rng = mulberry32(hashSeed("demand-provisioning-v1"));
  const days = 30;
  const points: ProvisioningPoint[] = [];
  const provisioned = 96;
  for (let day = 1; day <= days; day += 1) {
    const isPeak = day % 7 === 0 || day === 15 || day === 30;
    const base = 18 + rng() * 10;
    const spike = isPeak ? 68 + rng() * 20 : rng() * 8;
    const demand = Math.min(100, base + spike);
    points.push({ label: `Day ${day}`, demand: Number(demand.toFixed(1)), provisioned });
  }
  return points;
}

function computeWaste(points: ProvisioningPoint[]): number {
  const totalGap = points.reduce((sum, point) => sum + (point.provisioned - point.demand), 0);
  const totalProvisioned = points.reduce((sum, point) => sum + point.provisioned, 0);
  return Number(((totalGap / totalProvisioned) * 100).toFixed(1));
}

export async function getDemandModel(): Promise<DemandModel> {
  const points = buildPoints();
  return simulateRequest(
    {
      points,
      wastedCapacityPct: computeWaste(points),
      generatedAt: new Date().toISOString(),
    },
    {
      latencyMs: [180, 380],
      failureRate: 0.04,
      failure: { code: "demand_model_unavailable", message: "This chart didn't load. Try again." },
    },
  );
}
