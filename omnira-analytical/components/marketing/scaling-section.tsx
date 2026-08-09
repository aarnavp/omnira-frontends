import { SectionShell } from "./section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScalingContent } from "./scaling-content";

/** §06 How Scaling Changes — CONTENT.md §13–14: the old way (forecast,
 * provision, negotiate, scale gated by budget) against Omnira's way
 * (capacity expands as the device ecosystem expands). */
export function ScalingSection() {
  return (
    <SectionShell id="scaling">
      <SectionHeading
        index="06"
        title="Scaling used to mean buying more. Now it means more devices joining."
        dek={
          <>
            Traditional infrastructure requires forecasting demand and provisioning capacity in
            advance — manual scaling, additional servers, cloud renegotiation, costs that rise
            with usage. Omnira&apos;s capacity expands as the device ecosystem expands: more
            participating devices means more available compute, automatically.
          </>
        }
      />
      <ScalingContent />
    </SectionShell>
  );
}
