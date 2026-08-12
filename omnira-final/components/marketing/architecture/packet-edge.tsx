"use client";

import { BaseEdge, getSmoothStepPath, type Edge, type EdgeProps } from "@xyflow/react";

export type PacketEdgeData = {
  active: boolean;
  dashed: boolean;
  reducedMotion: boolean;
};

export type PacketEdgeType = Edge<PacketEdgeData, "packet">;

/** Custom edge that draws the routed connection and, when it's the active
 * path, an SVG-native <animateMotion> dot travelling along it — the packet
 * moving through the system, built on the network's own geometry rather
 * than a decorative overlay. */
export function PacketEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}: EdgeProps<PacketEdgeType>) {
  const [path] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius: 14,
  });

  const active = data?.active ?? false;
  const dashed = data?.dashed ?? false;
  const reducedMotion = data?.reducedMotion ?? false;
  const stroke = dashed ? "var(--color-baseline)" : "var(--color-brand)";

  return (
    <>
      <BaseEdge
        id={id}
        path={path}
        style={{
          stroke,
          strokeWidth: active ? 2 : 1.25,
          strokeDasharray: dashed ? "5 5" : undefined,
          opacity: active ? 1 : 0.32,
          transition: "opacity 200ms ease, stroke-width 200ms ease",
        }}
      />
      {active && !reducedMotion ? (
        <circle r={3.5} fill={dashed ? "var(--color-baseline-strong)" : "var(--color-brand-strong)"}>
          <animateMotion dur="2.4s" repeatCount="indefinite" path={path} />
        </circle>
      ) : null}
    </>
  );
}
