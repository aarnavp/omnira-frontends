import { simulateRequest } from "./mock-transport";
import type { MarketModel } from "@/types/market";

/**
 * §09 Market & competition data. omnira-analytical kept this as hardcoded
 * consts inside market-section.tsx; promoted to a service function here so
 * it's swappable for a real endpoint the same way every other section's
 * data is (see root AGENTS §5). The figures themselves are external
 * market/industry context — see the standalone sources register for
 * citations — never a claim about Omnira's own performance.
 */
export async function getMarketModel(): Promise<MarketModel> {
  return simulateRequest<MarketModel>({
    stats: [
      { id: "demand-growth", label: "AI-driven data center demand growth, annually through 2030", value: "23–30%" },
      { id: "capacity-slip", label: "Planned 2026 AI data-center capacity projected to slip to 2028", value: "30–50%" },
      { id: "infra-spend", label: "AI infrastructure spend, 2026 → 2030", value: "$76B → $224B" },
    ],
    tiers: [
      {
        id: "depin",
        tier: "DePIN networks",
        examples: "Akash Network, Render Network, io.net",
        hardware: "Crypto-mining farms, independent data centers, retail GPUs",
        customers: "AI startups, Web3 developers, VFX studios",
        gap: "Enterprise CISO-grade compliance, security isolation, and simple B2B onboarding are generally not their focus.",
      },
      {
        id: "neoclouds",
        tier: "AI-specialized neoclouds",
        examples: "CoreWeave, Lambda Labs",
        hardware: "Newly purchased dedicated GPU data centers",
        customers: "Enterprise AI labs, LLM trainers",
        gap: "High cost, rigid contract lock-in, and heavy capital expenditure — they're buying new hardware, not monetizing idle hardware.",
      },
      {
        id: "hyperscalers",
        tier: "Traditional hyperscalers",
        examples: "AWS, GCP, Azure",
        hardware: "Proprietary centralized data centers",
        customers: "Mainstream enterprise IT",
        gap: "Expensive base rates, proprietary lock-in, and capacity that can be reclaimed at any time via spot/interruptible pricing.",
      },
    ],
    golemRows: [
      {
        id: "supply",
        dimension: "Primary supply target",
        golem: "Consumer PCs, retail crypto miners, small node operators",
        omnira: "Enterprise IT hardware already owned (mid-market, universities, studios) alongside everyday consumer devices",
      },
      {
        id: "payout",
        dimension: "Payout / settlement",
        golem: "GLM token (crypto settlement)",
        omnira: "Plain-dollar accounting — no token, no wallet, no crypto onboarding step",
      },
      {
        id: "security",
        dimension: "Security & compliance",
        golem: "Open peer-to-peer sandbox execution",
        omnira: "Hardened, single-tenant isolation with strict network air-gapping",
      },
      {
        id: "positioning",
        dimension: "Positioning",
        golem: "“Join a decentralized Web3 compute network”",
        omnira: "Recover cost on capacity you already own and control, without adopting crypto-native tooling",
      },
    ],
  });
}
