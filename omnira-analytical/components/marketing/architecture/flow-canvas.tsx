"use client";

import { useMemo } from "react";
import { Position, ReactFlow, type EdgeTypes, type NodeTypes } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import type { ArchitectureModel, PlaneId } from "@/types/architecture";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { PlaneNode, type PlaneNodeType } from "./plane-node";
import { PacketEdge, type PacketEdgeType } from "./packet-edge";
import "./flow-canvas.css";

const POSITIONS: Record<PlaneId, { x: number; y: number }> = {
  data: { x: 0, y: 130 },
  control: { x: 300, y: 130 },
  compute: { x: 600, y: 20 },
  cloud: { x: 600, y: 240 },
};

const nodeTypes: NodeTypes = { plane: PlaneNode };
const edgeTypes: EdgeTypes = { packet: PacketEdge };

export function FlowCanvas({
  model,
  activeId,
  onActivate,
  activePath,
}: {
  model: ArchitectureModel;
  activeId: PlaneId | null;
  onActivate: (id: PlaneId) => void;
  activePath: "primary" | "failover";
}) {
  const reducedMotion = usePrefersReducedMotion();

  const isNeighbor = useMemo(() => {
    return (a: PlaneId, b: PlaneId) => {
      const planeA = model.planes.find((p) => p.id === a);
      const planeB = model.planes.find((p) => p.id === b);
      return Boolean(planeA?.connectsTo.includes(b) || planeB?.connectsTo.includes(a));
    };
  }, [model.planes]);

  const nodes: PlaneNodeType[] = useMemo(
    () =>
      model.planes.map((plane) => {
        const hasIncoming = plane.id !== "data";
        const hasOutgoing = plane.id === "data" || plane.id === "control";
        return {
          id: plane.id,
          type: "plane",
          position: POSITIONS[plane.id],
          sourcePosition: hasOutgoing ? Position.Right : undefined,
          targetPosition: hasIncoming ? Position.Left : undefined,
          data: {
            plane,
            active: activeId === plane.id,
            dimmed: activeId !== null && activeId !== plane.id && !isNeighbor(activeId, plane.id),
            onActivate,
          },
          draggable: false,
          // NOT false: React Flow sets `pointer-events: none` on a node's
          // wrapper when it's unselectable, which would swallow clicks/
          // hover before they reach our own <button> inside PlaneNode.
          selectable: true,
          focusable: false,
          ariaRole: "group",
        };
      }),
    [model.planes, activeId, isNeighbor, onActivate],
  );

  const edges: PacketEdgeType[] = useMemo(() => {
    const base: { id: string; source: PlaneId; target: PlaneId; dashed: boolean }[] = [
      { id: "data-control", source: "data", target: "control", dashed: false },
      { id: "control-compute", source: "control", target: "compute", dashed: false },
      { id: "control-cloud", source: "control", target: "cloud", dashed: true },
    ];

    return base.map((edge) => {
      // The routed path currently "running": Data -> Control -> Compute by
      // default, or Data -> Control -> Public Cloud when failover is shown.
      const isActivePathEdge =
        edge.id === "data-control" ||
        (activePath === "primary" ? edge.id === "control-compute" : edge.id === "control-cloud");
      const connectedToHover = activeId !== null && (edge.source === activeId || edge.target === activeId);

      return {
        id: edge.id,
        source: edge.source,
        target: edge.target,
        type: "packet",
        focusable: false,
        selectable: false,
        data: {
          active: activeId !== null ? connectedToHover : isActivePathEdge,
          dashed: edge.dashed,
          reducedMotion,
        },
      };
    });
  }, [activeId, activePath, reducedMotion]);

  return (
    <div className="h-[380px] rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface-sunken)">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.25 }}
        nodesDraggable={false}
        nodesConnectable={false}
        nodesFocusable={false}
        edgesFocusable={false}
        elementsSelectable
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        preventScrolling={false}
        aria-label="Omnira architecture diagram: Data Plane, Control Plane, Compute Plane, and Public Cloud"
      />
    </div>
  );
}
