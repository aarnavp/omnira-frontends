/** Single source of truth for chapter ids/labels — used by the top nav's
 * quick links, the chapter rail, and each section's own `id` attribute. */
export const CHAPTERS = [
  { id: "hero", label: "Start" },
  { id: "the-ceiling", label: "The Ceiling" },
  { id: "idle-world", label: "The Idle World" },
  { id: "the-shift", label: "The Shift" },
  { id: "network-awakens", label: "The Network Awakens" },
  { id: "how-it-works", label: "How It Works" },
  { id: "data-never-leaves", label: "Your Data" },
  { id: "two-ways-in", label: "Two Ways In" },
  { id: "live-pulse", label: "Live Pulse" },
  { id: "closing", label: "Closing" },
] as const;

export type ChapterId = (typeof CHAPTERS)[number]["id"];
