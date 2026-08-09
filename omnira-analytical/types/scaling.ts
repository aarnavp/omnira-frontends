import type { Timestamp } from "./api";

export interface ScalingPoint {
  step: number;
  devices: number;
  availableCapacityTeraflops: number;
}

export interface ScalingComparisonRow {
  dimension: string;
  oldWay: string;
  omniraWay: string;
}

export interface ScalingModel {
  series: ScalingPoint[];
  comparison: ScalingComparisonRow[];
  generatedAt: Timestamp;
}
