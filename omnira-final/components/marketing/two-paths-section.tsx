import { SectionShell } from "./section-shell";
import { SectionIndexHeading } from "@/components/ui/section-index-heading";
import { FigureLabel } from "@/components/ui/figure-label";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContributeControlDemo } from "./contribute-control-demo";

const CONTRIBUTE_FEATURES = [
  "Connect your hardware — laptops, desktops, servers, phones — with one lightweight agent.",
  "Earn from unused capacity in plain dollars — no token, no wallet, no crypto onboarding.",
  "Watch device activity and performance: uptime, requests served, and earnings, live.",
  "Stay in control of exactly when your hardware participates — pause any device in one tap.",
];

const DEPLOY_FEATURES = [
  "Ship websites, APIs, and applications onto the network instead of a traditional cloud.",
  "Run AI inference without provisioning and paying for dedicated GPU capacity.",
  "The same Control Plane routing from §04 places your workload on the edge fleet by default, public cloud only as failover.",
  "Usage-based pricing tied to what actually runs, not standing capacity you have to guess at.",
];

/** §11 Two paths — Contribute and Deploy as parallel, feature-level detail
 * (not a vague CTA pair). Contribute's off switch is demonstrated, not just
 * promised (root AGENTS §1). Two asymmetric panels, not matching-height
 * identical cards. */
export function TwoPathsSection() {
  return (
    <SectionShell id="two-paths">
      <SectionIndexHeading
        index="11"
        lead="Two ways in:"
        muted="put hardware to work, or put workloads on it."
        dek="Every screen in the product belongs to one of these two jobs."
      />

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-hairline) lg:grid-cols-2">
        <div id="path-contribute" className="scroll-mt-24 flex flex-col bg-(--color-panel) p-6 sm:p-8">
          <FigureLabel index="11.1" tone="dim" />
          <Badge tone="positive" className="mt-4">Contribute</Badge>
          <h3 className="mt-4 text-2xl font-semibold text-(--color-ink)">Put your hardware to work.</h3>
          <p className="mt-2 text-sm leading-relaxed text-(--color-ink-muted)">
            Connect the devices you already own and earn from the capacity that would otherwise
            sit idle.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {CONTRIBUTE_FEATURES.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-(--color-ink)">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-(--color-brand)" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <ContributeControlDemo />
          </div>

          <ButtonLink href="/signup" variant="primary" size="lg" className="mt-8 self-start">
            Start contributing
          </ButtonLink>
        </div>

        <div id="path-deploy" className="scroll-mt-24 flex flex-col bg-(--color-panel) p-6 sm:p-8">
          <FigureLabel index="11.2" tone="highlight" />
          <Badge tone="baseline" className="mt-4">Deploy</Badge>
          <h3 className="mt-4 text-2xl font-semibold text-(--color-ink)">Put your workloads on it.</h3>
          <p className="mt-2 text-sm leading-relaxed text-(--color-ink-muted)">
            Ship onto the distributed compute network described in §04, instead of a traditional
            cloud provider.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {DEPLOY_FEATURES.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-(--color-ink)">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-(--color-baseline-strong)" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-(--radius-lg) border border-dashed border-(--color-hairline) bg-(--color-ground) p-4 text-xs text-(--color-ink-muted)">
            Deployment dashboards, build pipelines, and framework support are scoped for a
            follow-on release — this section reflects the product direction, not a shipped
            console.
          </div>

          <ButtonLink href="/signup" variant="outline" size="lg" className="mt-8 self-start">
            Deploy on Omnira
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
