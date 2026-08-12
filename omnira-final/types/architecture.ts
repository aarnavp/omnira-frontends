import type { Timestamp } from "./api";

export type PlaneId = "data" | "control" | "compute" | "cloud";

export interface WorkloadType {
  id: string;
  label: string;
}

export interface ArchitecturePlane {
  id: PlaneId;
  name: string;
  role: string;
  summary: string;
  detail: string;
  examples: string[];
  workloadTypeIds: string[];
  connectsTo: PlaneId[];
  isPrimary: boolean;
}

export interface ArchitectureModel {
  planes: ArchitecturePlane[];
  workloadTypes: WorkloadType[];
  /** Ordered node ids describing the primary routed path an animated
   * packet travels: Data -> Control -> Compute/Edge. */
  primaryPath: PlaneId[];
  /** Alternate routed path for failover/burst: Control -> Public Cloud. */
  failoverPath: PlaneId[];
  generatedAt: Timestamp;
}
