import { SectionShell } from "./section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { LiveNetworkContent } from "./live-network-content";

/** §08 Live Network — the direct evolution of the brand screenshot's
 * dashboard, proving everything above isn't just a thesis: it's running. */
export function LiveNetworkSection() {
  return (
    <SectionShell id="live-network">
      <SectionHeading
        index="08"
        title="Real devices, serving real traffic."
        dek="Phones, computers, TVs, and edge hardware — devices serving right now, plus everything the network has earned so far."
      />
      <LiveNetworkContent />
    </SectionShell>
  );
}
