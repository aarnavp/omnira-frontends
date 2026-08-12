import { SectionShell } from "./section-shell";
import { SectionIndexHeading } from "@/components/ui/section-index-heading";
import { LiveNetworkContent } from "./live-network-content";

/** §10 Live network — the direct evolution of the brand screenshot's
 * dashboard, proving everything above isn't just a thesis: it's running. */
export function LiveNetworkSection() {
  return (
    <SectionShell id="live-network">
      <SectionIndexHeading
        index="10"
        lead="Real devices,"
        muted="serving real traffic."
        dek="Phones, computers, TVs, and edge hardware — devices serving right now, plus everything the network has earned so far."
      />
      <LiveNetworkContent />
    </SectionShell>
  );
}
