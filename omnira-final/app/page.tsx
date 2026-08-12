import { TopNav } from "@/components/system/top-nav";
import { FooterIndex } from "@/components/system/footer-index";
import { Hero } from "@/components/marketing/hero";
import { ProblemSection } from "@/components/marketing/problem-section";
import { ParadigmShiftSection } from "@/components/marketing/paradigm-shift-section";
import { WhatItRunsSection } from "@/components/marketing/what-it-runs-section";
import { ArchitectureSection } from "@/components/marketing/architecture-section";
import { SecuritySection } from "@/components/marketing/security-section";
import { EconomicsSection } from "@/components/marketing/economics-section";
import { ScalingSection } from "@/components/marketing/scaling-section";
import { HybridInfrastructureSection } from "@/components/marketing/hybrid-infrastructure-section";
import { MarketSection } from "@/components/marketing/market-section";
import { LiveNetworkSection } from "@/components/marketing/live-network-section";
import { TwoPathsSection } from "@/components/marketing/two-paths-section";
import { ClosingThesis } from "@/components/marketing/closing-thesis";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <ProblemSection />
        <ParadigmShiftSection />
        <WhatItRunsSection />
        <ArchitectureSection />
        <SecuritySection />
        <EconomicsSection />
        <ScalingSection />
        <HybridInfrastructureSection />
        <MarketSection />
        <LiveNetworkSection />
        <TwoPathsSection />
        <ClosingThesis />
      </main>
      <FooterIndex />
    </>
  );
}
