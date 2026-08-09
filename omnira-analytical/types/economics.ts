import type { Timestamp } from "./api";

export interface ProvisioningPoint {
  label: string;
  demand: number;
  provisioned: number;
}

export interface DemandModel {
  points: ProvisioningPoint[];
  /** Share of provisioned capacity that sits unused across the period, 0-100. */
  wastedCapacityPct: number;
  generatedAt: Timestamp;
}

export interface CloudTaxPoint {
  month: number;
  alwaysOnCloudUsd: number;
  omniraElasticUsd: number;
}

export interface CloudTaxModel {
  points: CloudTaxPoint[];
  /** The ceiling AWS Spot/interruptible pricing offers off on-demand, for
   * comparison — sourced, not an Omnira claim. */
  spotDiscountCeilingPct: number;
  generatedAt: Timestamp;
}
