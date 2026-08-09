import { SectionShell } from "./section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  "The same Control Plane routing from §03 places your workload on the edge fleet by default, public cloud only as failover.",
  "Usage-based pricing tied to what actually runs, not standing capacity you have to guess at.",
];

/** §09 Two Paths — Contribute and Deploy as parallel, feature-level detail
 * (not a vague CTA pair). Contribute's off switch is demonstrated, not just
 * promised (AGENTS §1). */
export function TwoPathsSection() {
  return (
    <SectionShell id="two-paths">
      <SectionHeading
        index="09"
        title="Two ways in: put hardware to work, or put workloads on it."
        dek="Every screen in the product belongs to one of these two jobs."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="flex flex-col p-6 sm:p-8">
          <Badge tone="positive">Contribute</Badge>
          <h3 className="mt-4 text-2xl font-semibold text-(--color-text)">Put your hardware to work.</h3>
          <p className="mt-2 text-sm leading-relaxed text-(--color-text-muted)">
            Connect the devices you already own and earn from the capacity that would otherwise
            sit idle.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {CONTRIBUTE_FEATURES.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-(--color-text)">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-(--color-brand)" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <ContributeControlDemo />
          </div>

          <Button href="/signup" variant="primary" size="lg" className="mt-8 self-start">
            Start contributing
          </Button>
        </Card>

        <Card className="flex flex-col p-6 sm:p-8">
          <Badge tone="baseline">Deploy</Badge>
          <h3 className="mt-4 text-2xl font-semibold text-(--color-text)">Put your workloads on it.</h3>
          <p className="mt-2 text-sm leading-relaxed text-(--color-text-muted)">
            Ship onto the distributed compute network described in §03, instead of a traditional
            cloud provider.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {DEPLOY_FEATURES.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-(--color-text)">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-(--color-baseline-strong)" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-(--radius-lg) border border-dashed border-(--color-border) bg-(--color-surface) p-4 text-xs text-(--color-text-muted)">
            Deployment dashboards, build pipelines, and framework support are scoped for a
            follow-on release — this section reflects the product direction, not a shipped
            console.
          </div>

          <Button href="/signup" variant="secondary" size="lg" className="mt-8 self-start">
            Deploy on Omnira
          </Button>
        </Card>
      </div>
    </SectionShell>
  );
}
