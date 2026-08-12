import { simulateRequest } from "./mock-transport";
import type { ArchitectureModel } from "@/types/architecture";

/**
 * Architecture diagram content for §03. Modeled as a service function (not
 * hardcoded JSX) so a real control-plane API can supply live routing state
 * — which plane a given workload is actually running on — as a drop-in
 * replacement later. Copy sourced from CONTENT.md §04–09, §15–17.
 */
const WORKLOAD_TYPES = [
  { id: "api", label: "API services" },
  { id: "web", label: "Web applications" },
  { id: "mobile", label: "Mobile applications" },
  { id: "inference", label: "AI inference" },
  { id: "analytics", label: "Analytics" },
  { id: "agents", label: "AI agents" },
];

const MODEL: ArchitectureModel = {
  planes: [
    {
      id: "data",
      name: "Data Plane",
      role: "Where master data lives",
      summary: "The customer's controlled storage environment — on-premises or customer-controlled cloud.",
      detail:
        "Master data stays inside the customer's designated perimeter: an on-premises data center, or object storage the customer controls, such as S3, GCS, or R2. Air-gapped and fully isolated deployments are supported. Compute happens elsewhere, on available devices, without requiring the master data to move with it — data stays where the customer controls it, compute moves to where capacity exists.",
      examples: ["On-premises data center", "Amazon S3", "Google Cloud Storage", "Cloudflare R2", "Air-gapped storage"],
      workloadTypeIds: ["api", "web", "mobile", "inference", "analytics", "agents"],
      connectsTo: ["control"],
      isPrimary: true,
    },
    {
      id: "control",
      name: "Control Plane",
      role: "Scheduling, routing, and policy",
      summary: "Decides where each workload runs, and keeps the network accountable while it runs there.",
      detail:
        "A distributed compute network requires centralized orchestration. The Control Plane manages scheduling, routing, policy enforcement, telemetry, billing, and secrets. It determines where a given workload runs — the edge fleet by default, public cloud when the edge can't cover it — and continuously monitors system health and performance across both.",
      examples: ["Scheduling & routing", "Policy enforcement", "Telemetry", "Billing", "Secrets management"],
      workloadTypeIds: ["api", "web", "mobile", "inference", "analytics", "agents"],
      connectsTo: ["data", "compute", "cloud"],
      isPrimary: true,
    },
    {
      id: "compute",
      name: "Compute Plane — Edge Fleet",
      role: "Where ~98% of workloads run",
      summary: "The distributed fleet of everyday devices that do most of the network's computing.",
      detail:
        "The Compute Plane is a distributed fleet of available devices — phones, laptops, smart TVs, IoT devices, and other edge hardware. These devices contribute compute only when they have capacity to spare, turning globally distributed idle hardware into a shared compute layer. This is the network's primary execution layer, targeted at roughly 98% of workloads under the operating model in §05.",
      examples: ["Phones", "Laptops & desktops", "Smart TVs", "IoT & edge hardware"],
      workloadTypeIds: ["api", "web", "mobile", "inference", "analytics", "agents"],
      connectsTo: ["control"],
      isPrimary: true,
    },
    {
      id: "cloud",
      name: "Public Cloud",
      role: "Failover and burst — secondary by design",
      summary: "Public cloud remains part of the architecture, but as a safety net, not the default.",
      detail:
        "Public cloud providers — AWS, GCP, Azure, Cloudflare, Fly.io, Oracle, and others — serve as failover, burst, and durability infrastructure. When the edge fleet can't cover a workload's timing or availability requirements, the Control Plane routes it to public cloud instead. Targeted at ≤2% of workloads: present in the architecture deliberately, never the default compute layer.",
      examples: ["AWS", "GCP", "Azure", "Cloudflare", "Fly.io", "Oracle"],
      workloadTypeIds: ["api", "web", "mobile", "inference", "analytics", "agents"],
      connectsTo: ["control"],
      isPrimary: false,
    },
  ],
  workloadTypes: WORKLOAD_TYPES,
  primaryPath: ["data", "control", "compute"],
  failoverPath: ["control", "cloud"],
  generatedAt: new Date().toISOString(),
};

export async function getArchitectureModel(): Promise<ArchitectureModel> {
  return simulateRequest(MODEL, {
    latencyMs: [200, 420],
    failureRate: 0.04,
    failure: { code: "architecture_model_unavailable", message: "The architecture model didn't load. Try again." },
  });
}
