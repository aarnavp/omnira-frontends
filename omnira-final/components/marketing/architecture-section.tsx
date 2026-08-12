"use client";

import { useState } from "react";
import { SectionShell } from "./section-shell";
import { SectionIndexHeading } from "@/components/ui/section-index-heading";
import { FigureLabel } from "@/components/ui/figure-label";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorState, EmptyState } from "@/components/ui/state-views";
import { Reveal } from "@/components/ui/reveal";
import { useArchitectureModel } from "@/hooks/use-architecture";
import { FlowCanvas } from "./architecture/flow-canvas";
import { PlaneFlowList } from "./architecture/plane-flow-list";
import { PlaneDetailPanel } from "./architecture/plane-detail-panel";
import type { PlaneId } from "@/types/architecture";
import { cn } from "@/lib/utils/cn";

/** §04 Architecture — the one signature animated centerpiece: an
 * interactive Data/Control/Compute diagram plus Public Cloud as an
 * explicitly secondary node. Reveals once on scroll-into-view, then the
 * existing packet-along-edge animation continues — no pin, no scrub. */
export function ArchitectureSection() {
  const { data, error, isLoading, refetch } = useArchitectureModel();
  const [activeId, setActiveId] = useState<PlaneId>("control");
  const [activePath, setActivePath] = useState<"primary" | "failover">("primary");

  const activePlane = data?.planes.find((plane) => plane.id === activeId) ?? data?.planes[0];

  return (
    <SectionShell id="architecture">
      <SectionIndexHeading
        index="04"
        lead="Four planes, one system:"
        muted="data, control, compute, and a safety net."
        dek="This is the mechanism behind §02's reframe, drawn the way an infrastructure engineer would draw it. Hover or tap a layer to see what it does and where work is routed next — Public Cloud is deliberately drawn as secondary, not a peer to the other three."
      />

      {isLoading ? (
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Skeleton className="h-[380px] w-full rounded-(--radius-lg)" />
          <Skeleton className="h-[380px] w-full rounded-(--radius-lg)" />
        </div>
      ) : error ? (
        <div className="mt-12">
          <ErrorState title="The architecture diagram didn't load" message={error.message} onRetry={refetch} />
        </div>
      ) : !data || data.planes.length === 0 ? (
        <div className="mt-12">
          <EmptyState title="No architecture model available" message="The system diagram will appear here once it's configured." />
        </div>
      ) : (
        <>
          <FigureLabel index="04" tone="dim" className="mt-10" />
          <div className="mt-3 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="hidden md:block">
                <Reveal>
                  <FlowCanvas model={data} activeId={activeId} onActivate={setActiveId} activePath={activePath} />
                </Reveal>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">
                    Routed path
                  </span>
                  <div role="group" aria-label="Routed path" className="inline-flex gap-1 rounded-(--radius-full) border border-(--color-hairline) p-1">
                    <button
                      type="button"
                      aria-pressed={activePath === "primary"}
                      onClick={() => setActivePath("primary")}
                      className={cn(
                        "rounded-(--radius-full) px-3 py-1.5 font-mono text-xs transition-colors",
                        activePath === "primary"
                          ? "bg-(--color-accent) text-(--color-on-brand)"
                          : "text-(--color-ink-muted) hover:text-(--color-ink)",
                      )}
                    >
                      Primary — edge fleet
                    </button>
                    <button
                      type="button"
                      aria-pressed={activePath === "failover"}
                      onClick={() => setActivePath("failover")}
                      className={cn(
                        "rounded-(--radius-full) px-3 py-1.5 font-mono text-xs transition-colors",
                        activePath === "failover"
                          ? "bg-(--color-baseline-strong) text-(--color-ink)"
                          : "text-(--color-ink-muted) hover:text-(--color-ink)",
                      )}
                    >
                      Failover — public cloud
                    </button>
                  </div>
                </div>
              </div>

              <div className="md:hidden">
                <p className="mb-4 text-sm text-(--color-ink-muted)">
                  Tap each layer to see what it does and where work is routed next.
                </p>
                <PlaneFlowList planes={data.planes} activeId={activeId} onActivate={setActiveId} />
              </div>
            </div>

            <div className="hidden md:block lg:sticky lg:top-24 lg:self-start">
              {activePlane ? <PlaneDetailPanel plane={activePlane} /> : null}
            </div>
          </div>

          <div className="mt-10 border-t border-(--color-hairline) pt-6">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">
              Runs on this architecture
            </p>
            <div className="flex flex-wrap gap-2">
              {data.workloadTypes.map((workload) => (
                <Badge key={workload.id} tone="neutral">
                  {workload.label}
                </Badge>
              ))}
            </div>
          </div>
        </>
      )}
    </SectionShell>
  );
}
