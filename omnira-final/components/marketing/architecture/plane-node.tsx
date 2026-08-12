"use client";

import { Handle, type Node, type NodeProps } from "@xyflow/react";
import type { ArchitecturePlane, PlaneId } from "@/types/architecture";
import { cn } from "@/lib/utils/cn";

export type PlaneNodeData = {
  plane: ArchitecturePlane;
  active: boolean;
  dimmed: boolean;
  onActivate: (id: PlaneId) => void;
};

export type PlaneNodeType = Node<PlaneNodeData, "plane">;

const handleClass = "!h-2 !w-2 !border-none !bg-(--color-hairline-strong)";

/** Custom systems-diagram node. The interactive surface is a real <button>
 * so keyboard users tabbing through the canvas land on something operable —
 * React Flow's own node-focus wrapper is disabled at the canvas level. */
export function PlaneNode({ data, sourcePosition, targetPosition }: NodeProps<PlaneNodeType>) {
  const { plane, active, dimmed, onActivate } = data;

  return (
    <>
      {targetPosition ? <Handle type="target" position={targetPosition} className={handleClass} /> : null}
      <button
        type="button"
        onMouseEnter={() => onActivate(plane.id)}
        onFocus={() => onActivate(plane.id)}
        onClick={() => onActivate(plane.id)}
        aria-pressed={active}
        className={cn(
          "w-[188px] rounded-(--radius-lg) border bg-(--color-panel) px-4 py-3 text-left shadow-(--shadow-hairline) transition-all duration-200",
          !plane.isPrimary && "border-dashed",
          active ? "border-(--color-accent) shadow-(--shadow-hairline-raised)" : "border-(--color-hairline)",
          dimmed ? "opacity-35" : "opacity-100",
        )}
      >
        <p className="font-mono text-[10px] uppercase tracking-wider text-(--color-ink-faint)">{plane.role}</p>
        <p className="mt-1 text-sm leading-snug font-semibold text-(--color-ink)">{plane.name}</p>
        <span
          className={cn(
            "mt-2 inline-flex items-center gap-1 rounded-(--radius-full) px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide",
            plane.isPrimary ? "bg-(--color-brand-surface) text-(--color-accent)" : "bg-(--color-panel-inset) text-(--color-baseline-text)",
          )}
        >
          {plane.isPrimary ? "Primary" : "Secondary · failover"}
        </span>
      </button>
      {sourcePosition ? <Handle type="source" position={sourcePosition} className={handleClass} /> : null}
    </>
  );
}
