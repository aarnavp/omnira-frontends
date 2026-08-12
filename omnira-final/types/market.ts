/** §09 Market & competition — promoted out of hardcoded component consts
 * (as omnira-analytical had them) into a proper typed service, per root
 * AGENTS §5/§8 "Don't hardcode data inside components." All figures here
 * are external market/industry context, sourced separately (see the
 * standalone sources register) — never a claim about Omnira itself. */

export interface MarketStat {
  id: string;
  label: string;
  value: string;
}

export interface CompetitiveTier {
  id: string;
  tier: string;
  examples: string;
  hardware: string;
  customers: string;
  gap: string;
}

export interface GolemComparisonRow {
  id: string;
  dimension: string;
  golem: string;
  omnira: string;
}

export interface MarketModel {
  stats: MarketStat[];
  tiers: CompetitiveTier[];
  golemRows: GolemComparisonRow[];
}
