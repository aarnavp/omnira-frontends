/** Shared source of truth for the two-level numbered index — `0X` per
 * section, `0X.Y` per sub-panel — used by the top nav's jump links, the
 * FIG labels on illustrations, and the footer's numbered index, so none of
 * the three ever drift out of sync. See PROMPT.md §5. */

export interface SubSectionConfig {
  id: string;
  number: string;
  label: string;
}

export interface SectionConfig {
  id: string;
  number: string;
  label: string;
  subs?: SubSectionConfig[];
}

export const SECTIONS: SectionConfig[] = [
  { id: "hero", number: "00", label: "Omnira" },
  {
    id: "problem",
    number: "01",
    label: "The problem",
    subs: [{ id: "problem-capacity", number: "01.1", label: "Idle capacity, everywhere" }],
  },
  {
    id: "paradigm-shift",
    number: "02",
    label: "The paradigm shift",
    subs: [
      { id: "shift-electricity", number: "02.1", label: "Compute, like electricity" },
      { id: "shift-split", number: "02.2", label: "Data plane / compute plane" },
    ],
  },
  {
    id: "what-it-runs",
    number: "03",
    label: "What it runs",
    subs: [{ id: "runs-workloads", number: "03.1", label: "Workload types" }],
  },
  {
    id: "architecture",
    number: "04",
    label: "Architecture",
    subs: [
      { id: "arch-data", number: "04.1", label: "Data plane" },
      { id: "arch-compute", number: "04.2", label: "Compute plane — edge fleet" },
      { id: "arch-control", number: "04.3", label: "Control plane" },
      { id: "arch-cloud", number: "04.4", label: "Public cloud, as backup" },
    ],
  },
  {
    id: "security",
    number: "05",
    label: "Security",
    subs: [
      { id: "security-trust", number: "05.1", label: "The trust question" },
      { id: "security-transient", number: "05.2", label: "Transient edge compute" },
    ],
  },
  {
    id: "economics",
    number: "06",
    label: "Economics",
    subs: [
      { id: "economics-model", number: "06.1", label: "The 98 / 2 / 0 model" },
      { id: "economics-cloud-tax", number: "06.2", label: "The Cloud Tax" },
    ],
  },
  {
    id: "scaling",
    number: "07",
    label: "Scaling",
    subs: [
      { id: "scaling-old-way", number: "07.1", label: "The old way" },
      { id: "scaling-omnira-way", number: "07.2", label: "The Omnira way" },
    ],
  },
  {
    id: "hybrid-infrastructure",
    number: "08",
    label: "True hybrid infrastructure",
    subs: [
      { id: "hybrid-environments", number: "08.1", label: "Three environments" },
      { id: "hybrid-flow", number: "08.2", label: "The infrastructure flow" },
    ],
  },
  {
    id: "market",
    number: "09",
    label: "Market & competition",
    subs: [
      { id: "market-stats", number: "09.1", label: "Market stats" },
      { id: "market-tiers", number: "09.2", label: "Competitive tiers" },
      { id: "market-golem", number: "09.3", label: "Golem Network, head to head" },
    ],
  },
  {
    id: "live-network",
    number: "10",
    label: "Live network",
    subs: [
      { id: "live-stats", number: "10.1", label: "Pulse" },
      { id: "live-devices", number: "10.2", label: "Earnings by device type" },
    ],
  },
  {
    id: "two-paths",
    number: "11",
    label: "Two paths",
    subs: [
      { id: "path-contribute", number: "11.1", label: "Contribute" },
      { id: "path-deploy", number: "11.2", label: "Deploy" },
    ],
  },
  { id: "closing", number: "12", label: "Closing thesis" },
];

/** Nav jump-links skip the hero — it's the top of the page, not a
 * destination to jump to. */
export const NAV_SECTIONS = SECTIONS.filter((s) => s.id !== "hero");
