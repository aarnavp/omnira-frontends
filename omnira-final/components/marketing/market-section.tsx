"use client";

import { SectionShell } from "./section-shell";
import { SectionIndexHeading } from "@/components/ui/section-index-heading";
import { FigureLabel } from "@/components/ui/figure-label";
import { Stat } from "@/components/ui/stat";
import { Badge } from "@/components/ui/badge";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { ErrorState, EmptyState } from "@/components/ui/state-views";
import { Table, Thead, Th, Tbody, Td } from "@/components/ui/table";
import { SourcesNote } from "@/components/ui/sources-note";
import { useMarketModel } from "@/hooks/use-market";

/** §09 Market & competition — two halves, both external context, never
 * blended with a claim about Omnira itself. Data is now a real service
 * (lib/api/market.ts) rather than hardcoded consts. */
export function MarketSection() {
  const { data, error, isLoading, refetch } = useMarketModel();

  return (
    <SectionShell id="market">
      <SectionIndexHeading
        index="09"
        lead="A market that doesn't need"
        muted="Omnira's word for it."
      />

      {isLoading ? (
        <div className="mt-10 flex flex-col gap-6">
          <SkeletonText lines={2} />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-14" />
            ))}
          </div>
          <Skeleton className="h-64 rounded-(--radius-lg)" />
        </div>
      ) : error ? (
        <div className="mt-10">
          <ErrorState title="Market data didn't load" message={error.message} onRetry={refetch} />
        </div>
      ) : !data || data.stats.length === 0 ? (
        <div className="mt-10">
          <EmptyState title="No market data available" message="Market and competitive context will appear here once configured." />
        </div>
      ) : (
        <>
          <div className="mt-10">
            <FigureLabel index="09.1" tone="dim" />
            <Badge tone="baseline" className="mt-3">
              Market / industry context — not an Omnira claim
            </Badge>
            <p className="mt-4 max-w-[70ch] text-base leading-relaxed text-(--color-ink-muted)">
              The growth in AI-driven compute demand is independently reported, not a claim Omnira
              has to make on its own credibility. Demand is outpacing supply under the old
              provisioning model, and the capital scale of the buildout required to keep up is
              enormous.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {data.stats.map((stat) => (
                <Stat key={stat.id} label={stat.label} value={stat.value} tone="baseline" size="sm" />
              ))}
            </div>
            <p className="mt-4 text-sm text-(--color-ink-muted)">
              Vacancy is falling to historic lows alongside that growth — as low as ~6.7% globally,
              near 0% in some U.S. markets — even as new supply comes online, and global data center
              capacity is expected to roughly double (≈103GW → ≈200GW) by 2030, requiring on the
              order of $3T in new infrastructure investment. The global smartphone installed base
              alone runs ~4.7–5.1 billion active devices — texture for the scale of the potential
              Contribute-side device pool, not a claim about Omnira&apos;s current network size (see{" "}
              <a href="#live-network" className="underline decoration-(--color-hairline-strong) underline-offset-2 hover:text-(--color-ink)">
                10 Live Network
              </a>{" "}
              for that).
            </p>
          </div>

          <div className="mt-14">
            <FigureLabel index="09.2" tone="highlight" />
            <p className="mt-3 font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">Competitive landscape</p>
            <p className="mt-2 max-w-[70ch] text-base leading-relaxed text-(--color-ink-muted)">
              A clear-eyed landscape, not a takedown. Three tiers already serve real demand for
              compute outside the traditional hyperscalers — each with a real position, and a real
              gap Omnira is built to close.
            </p>

            <div className="mt-6 overflow-hidden rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-panel)">
              <Table>
                <Thead>
                  <Th>Tier</Th>
                  <Th>Examples</Th>
                  <Th>Hardware source</Th>
                  <Th>Customer base</Th>
                  <Th>Gap Omnira closes</Th>
                </Thead>
                <Tbody>
                  {data.tiers.map((row) => (
                    <tr key={row.id}>
                      <Td className="font-medium text-(--color-ink)">{row.tier}</Td>
                      <Td>{row.examples}</Td>
                      <Td>{row.hardware}</Td>
                      <Td>{row.customers}</Td>
                      <Td className="text-(--color-ink-muted)">{row.gap}</Td>
                    </tr>
                  ))}
                </Tbody>
              </Table>
            </div>
          </div>

          <div className="mt-10">
            <FigureLabel index="09.3" tone="highlight" />
            <p className="mt-3 text-sm font-medium text-(--color-ink)">
              The sharpest single contrast: Golem Network, the closest historical analog.
            </p>
            <p className="mt-2 max-w-[72ch] text-sm leading-relaxed text-(--color-ink-muted)">
              One of the earliest decentralized compute protocols, predating the term
              &ldquo;DePIN.&rdquo; Golem proves the underlying demand for crowdsourced compute is real
              and durable — it has survived multiple market cycles running real jobs — while also
              showing exactly where that model hits a wall with enterprise buyers.
            </p>

            <div className="mt-6 overflow-hidden rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-panel)">
              <Table>
                <Thead>
                  <Th />
                  <Th>Golem Network</Th>
                  <Th>Omnira</Th>
                </Thead>
                <Tbody>
                  {data.golemRows.map((row) => (
                    <tr key={row.id}>
                      <Td className="font-medium text-(--color-ink)">{row.dimension}</Td>
                      <Td className="text-(--color-baseline-text)">{row.golem}</Td>
                      <Td className="text-(--color-accent)">{row.omnira}</Td>
                    </tr>
                  ))}
                </Tbody>
              </Table>
            </div>

            <p className="mt-4 max-w-[72ch] text-sm leading-relaxed text-(--color-ink-muted)">
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
              { label: "Competitive positioning", source: "Internal competitive research, factual positioning cleared for public use." },
            ]}
          />
        </>
      )}
    </SectionShell>
  );
}
