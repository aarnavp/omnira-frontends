import { ScrollExperience } from "@/components/system/scroll-experience";
import { TopNav } from "@/components/system/top-nav";
import { ChapterRail } from "@/components/system/chapter-rail";
import { ColdOpen } from "@/components/cinematic/cold-open";
import { HeroManifesto } from "@/components/cinematic/hero-manifesto";
import { ActCeiling } from "@/components/cinematic/act-ceiling";
import { IdleWorld } from "@/components/cinematic/idle-world";
import { TheShift } from "@/components/cinematic/the-shift";
import { NetworkAwakensSection } from "@/components/cinematic/network-awakens/network-awakens-section";
import { HowItWorksSection } from "@/components/cinematic/how-it-works-section";
import { DataNeverLeaves } from "@/components/cinematic/data-never-leaves";
import { TwoWaysIn } from "@/components/cinematic/two-ways-in";
import { LivePulse } from "@/components/cinematic/live-pulse";
import { ClosingManifesto } from "@/components/cinematic/closing-manifesto";
import { SiteFooter } from "@/components/cinematic/site-footer";

/**
 * The film, top to bottom — see PROMPT.md §4 for the twelve-beat structure
 * this mirrors. Composition only: every section decides for itself whether
 * it needs to be a Client Component (AGENTS §2/§8).
 */
export default function Home() {
  return (
    <ScrollExperience>
      <ColdOpen />
      <TopNav />
      <ChapterRail />
      <main>
        <HeroManifesto />
        <ActCeiling />
        <IdleWorld />
        <TheShift />
        <NetworkAwakensSection />
        <HowItWorksSection />
        <DataNeverLeaves />
        <TwoWaysIn />
        <LivePulse />
        <ClosingManifesto />
      </main>
      <SiteFooter />
    </ScrollExperience>
  );
}
