import { Nav } from "@/components/marketing/nav";
import { SectionProgress } from "@/components/marketing/section-progress";
import { Hero } from "@/components/marketing/hero";
import { ProblemSection } from "@/components/marketing/problem-section";
import { SolutionSection } from "@/components/marketing/solution-section";
import { ArchitectureSection } from "@/components/marketing/architecture-section";
import { SecuritySection } from "@/components/marketing/security-section";
import { EconomicsSection } from "@/components/marketing/economics-section";
import { ScalingSection } from "@/components/marketing/scaling-section";
import { MarketSection } from "@/components/marketing/market-section";
import { LiveNetworkSection } from "@/components/marketing/live-network-section";
import { TwoPathsSection } from "@/components/marketing/two-paths-section";
import { ClosingThesis } from "@/components/marketing/closing-thesis";
import { SiteFooter } from "@/components/marketing/site-footer";

export default function Home() {
  return (
    <>
      <Nav />
      <SectionProgress />
      <main className="flex flex-col">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ArchitectureSection />
        <SecuritySection />
        <EconomicsSection />
        <ScalingSection />
        <MarketSection />
        <LiveNetworkSection />
        <TwoPathsSection />
        <ClosingThesis />
      </main>
      <SiteFooter />
    </>
  );
}
