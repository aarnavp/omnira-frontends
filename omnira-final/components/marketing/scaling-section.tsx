import { SectionShell } from "./section-shell";
import { SectionIndexHeading } from "@/components/ui/section-index-heading";
import { ScalingContent } from "./scaling-content";

/** §07 Scaling — CONTENT.md §13–14: the old way (forecast, provision,
 * negotiate, scale gated by budget) against Omnira's way (capacity expands
 * as the device ecosystem expands). */
export function ScalingSection() {
  return (
    <SectionShell id="scaling">
      <div id="scaling-old-way" className="scroll-mt-24">
        <SectionIndexHeading
          index="07"
          lead="Scaling used to mean buying more."
          muted="Now it means more devices joining."
          dek={
            <>
              Traditional infrastructure requires forecasting demand and provisioning capacity in
              advance — manual scaling, additional servers, cloud renegotiation, costs that rise
              with usage. Omnira&apos;s capacity expands as the device ecosystem expands: more
              participating devices means more available compute, automatically.
            </>
          }
        />
      </div>
      <div id="scaling-omnira-way" className="scroll-mt-24">
        <ScalingContent />
      </div>
    </SectionShell>
  );
}
