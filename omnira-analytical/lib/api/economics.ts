import { simulateRequest } from "./mock-transport";
import { mulberry32, hashSeed } from "@/lib/utils/random";
import type { CloudTaxModel, CloudTaxPoint } from "@/types/economics";

/**
 * "Cloud Tax" comparison for §05: continuously provisioned cloud capacity
 * cost vs. Omnira's elastic, edge-first model. A target operating model,
 * not a historical performance claim — the section copy is responsible for
 * keeping that distinction explicit; this only supplies the illustrative
 * series.
 */
function buildPoints(): CloudTaxPoint[] {
  const rng = mulberry32(hashSeed("cloud-tax-v1"));
  const points: CloudTaxPoint[] = [];
  let alwaysOn = 42000;
  let elastic = 6000;
  for (let month = 1; month <= 12; month += 1) {
    alwaysOn += 1400 + rng() * 900;
    elastic += 260 + rng() * 220;
    points.push({
      month,
      alwaysOnCloudUsd: Math.round(alwaysOn),
      omniraElasticUsd: Math.round(elastic),
    });
  }
  return points;
}

export async function getCloudTaxModel(): Promise<CloudTaxModel> {
  return simulateRequest(
    {
      points: buildPoints(),
      spotDiscountCeilingPct: 90,
      generatedAt: new Date().toISOString(),
    },
    {
      latencyMs: [180, 380],
      failureRate: 0.04,
      failure: { code: "cloud_tax_model_unavailable", message: "This chart didn't load. Try again." },
    },
  );
}
