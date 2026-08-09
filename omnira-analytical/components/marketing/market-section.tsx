import { SectionShell } from "./section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stat } from "@/components/ui/stat";
import { Badge } from "@/components/ui/badge";
import { Table, Thead, Th, Tbody, Td } from "@/components/ui/table";
import { SourcesNote } from "@/components/ui/sources-note";

const MARKET_STATS = [
  { label: "AI-driven data center demand growth, annually through 2030", value: "23–30%" },
  { label: "Planned 2026 AI data-center capacity projected to slip to 2028", value: "30–50%" },
  { label: "AI infrastructure spend, 2026 → 2030", value: "$76B → $224B" },
];

const COMPETITIVE_TIERS = [
  {
    tier: "DePIN networks",
    examples: "Akash Network, Render Network, io.net",
    hardware: "Crypto-mining farms, independent data centers, retail GPUs",
    customers: "AI startups, Web3 developers, VFX studios",
    gap: "Enterprise CISO-grade compliance, security isolation, and simple B2B onboarding are generally not their focus.",
  },
  {
    tier: "AI-specialized neoclouds",
    examples: "CoreWeave, Lambda Labs",
    hardware: "Newly purchased dedicated GPU data centers",
    customers: "Enterprise AI labs, LLM trainers",
    gap: "High cost, rigid contract lock-in, and heavy capital expenditure — they're buying new hardware, not monetizing idle hardware.",
  },
  {
    tier: "Traditional hyperscalers",
    examples: "AWS, GCP, Azure",
    hardware: "Proprietary centralized data centers",
    customers: "Mainstream enterprise IT",
    gap: "Expensive base rates, proprietary lock-in, and capacity that can be reclaimed at any time via spot/interruptible pricing.",
  },
];

const GOLEM_ROWS = [
  { dimension: "Primary supply target", golem: "Consumer PCs, retail crypto miners, small node operators", omnira: "Enterprise IT hardware already owned (mid-market, universities, studios) alongside everyday consumer devices" },
  { dimension: "Payout / settlement", golem: "GLM token (crypto settlement)", omnira: "Plain-dollar accounting — no token, no wallet, no crypto onboarding step" },
  { dimension: "Security & compliance", golem: "Open peer-to-peer sandbox execution", omnira: "Hardened, single-tenant isolation with strict network air-gapping" },
  { dimension: "Positioning", golem: "“Join a decentralized Web3 compute network”", omnira: "Recover cost on capacity you already own and control, without adopting crypto-native tooling" },
];

/** §07 Market Opportunity & Competitive Landscape — two halves, both
 * sourced (PROMPT §10 Appendix). Market context is explicitly labeled as
 * industry data, never blended with a claim about Omnira itself. */
export function MarketSection() {
  return (
    <SectionShell id="market">
      <SectionHeading index="07" title="A market that doesn't need Omnira's word for it." />

      <div className="mt-10">
        <Badge tone="baseline">Market / industry context — not an Omnira claim</Badge>
        <p className="mt-4 max-w-[70ch] text-base leading-relaxed text-(--color-text-muted)">
          The growth in AI-driven compute demand is independently reported, not a claim Omnira
          has to make on its own credibility. Demand is outpacing supply under the old
          provisioning model, and the capital scale of the buildout required to keep up is
          enormous.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {MARKET_STATS.map((stat) => (
            <Stat key={stat.label} label={stat.label} value={stat.value} tone="baseline" size="sm" />
          ))}
        </div>
        <p className="mt-4 text-sm text-(--color-text-muted)">
          Vacancy is falling to historic lows alongside that growth — as low as ~6.7% globally,
          near 0% in some U.S. markets — even as new supply comes online, and global data center
          capacity is expected to roughly double (≈103GW → ≈200GW) by 2030, requiring on the
          order of $3T in new infrastructure investment. The global smartphone installed base
          alone runs ~4.7–5.1 billion active devices — texture for the scale of the potential
          Contribute-side device pool, not a claim about Omnira&apos;s current network size (see{" "}
          <a href="#live-network" className="underline decoration-(--color-border-strong) underline-offset-2 hover:text-(--color-text)">
            08 Live Network
          </a>{" "}
          for that).
        </p>
      </div>

      <div className="mt-14">
        <p className="font-mono text-xs uppercase tracking-wider text-(--color-text-faint)">Competitive landscape</p>
        <p className="mt-2 max-w-[70ch] text-base leading-relaxed text-(--color-text-muted)">
          A clear-eyed landscape, not a takedown. Three tiers already serve real demand for
          compute outside the traditional hyperscalers — each with a real position, and a real
          gap Omnira is built to close.
        </p>

        <div className="mt-6 overflow-hidden rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface-raised)">
          <Table>
            <Thead>
              <Th>Tier</Th>
              <Th>Examples</Th>
              <Th>Hardware source</Th>
              <Th>Customer base</Th>
              <Th>Gap Omnira closes</Th>
            </Thead>
            <Tbody>
              {COMPETITIVE_TIERS.map((row) => (
                <tr key={row.tier}>
                  <Td className="font-medium text-(--color-text)">{row.tier}</Td>
                  <Td>{row.examples}</Td>
                  <Td>{row.hardware}</Td>
                  <Td>{row.customers}</Td>
                  <Td className="text-(--color-text-muted)">{row.gap}</Td>
                </tr>
              ))}
            </Tbody>
          </Table>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-sm font-medium text-(--color-text)">
          The sharpest single contrast: Golem Network, the closest historical analog.
        </p>
        <p className="mt-2 max-w-[72ch] text-sm leading-relaxed text-(--color-text-muted)">
          One of the earliest decentralized compute protocols, predating the term
          &ldquo;DePIN.&rdquo; Golem proves the underlying demand for crowdsourced compute is real
          and durable — it has survived multiple market cycles running real jobs — while also
          showing exactly where that model hits a wall with enterprise buyers.
        </p>

        <div className="mt-6 overflow-hidden rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface-raised)">
          <Table>
            <Thead>
              <Th />
              <Th>Golem Network</Th>
              <Th>Omnira</Th>
            </Thead>
            <Tbody>
              {GOLEM_ROWS.map((row) => (
                <tr key={row.dimension}>
                  <Td className="font-medium text-(--color-text)">{row.dimension}</Td>
                  <Td className="text-(--color-baseline-text)">{row.golem}</Td>
                  <Td className="text-(--color-accent)">{row.omnira}</Td>
                </tr>
              ))}
            </Tbody>
          </Table>
        </div>

        <p className="mt-4 max-w-[72ch] text-sm leading-relaxed text-(--color-text-muted)">
          What has kept this model out of mainstream corporate IT is crypto-first onboarding and
          consumer-grade trust assumptions — exactly the gap Omnira&apos;s enterprise-grade,
          non-crypto approach is built to close.
        </p>
      </div>

      <SourcesNote
        className="mt-12"
        sources={[
          { label: "AI-driven data center demand & vacancy", source: "CBRE, Global Data Center Trends 2026." },
          { label: "2026 AI capacity slipping to 2028", source: "JLL, 2026 Global Data Center Market Outlook." },
          { label: "AI infrastructure spend & capacity growth", source: "JLL and multiple industry AI-data-center market reports, 2026." },
          { label: "Smartphone installed base", source: "TechInsights and industry mobile-market tracking, 2026." },
          { label: "Competitive positioning", source: "COMPETITION.MD — factual competitive positioning cleared for public use." },
        ]}
      />
    </SectionShell>
  );
}
