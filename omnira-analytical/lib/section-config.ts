/** Shared source of truth for the doc-style section index — used by the
 * nav's jump links and the sticky section-progress rail so the two never
 * drift out of sync. */
export interface SectionConfig {
  id: string;
  number: string;
  label: string;
}

export const SECTIONS: SectionConfig[] = [
  { id: "problem", number: "01", label: "The problem" },
  { id: "solution", number: "02", label: "The solution" },
  { id: "architecture", number: "03", label: "Architecture" },
  { id: "security", number: "04", label: "Security" },
  { id: "economics", number: "05", label: "Economics" },
  { id: "scaling", number: "06", label: "How scaling changes" },
  { id: "market", number: "07", label: "Market & competition" },
  { id: "live-network", number: "08", label: "Live network" },
  { id: "two-paths", number: "09", label: "Two paths" },
];
