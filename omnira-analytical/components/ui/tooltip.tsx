"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils/cn";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export function TooltipContent({ className, sideOffset = 8, ...props }: TooltipPrimitive.TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          "z-50 max-w-xs rounded-(--radius-md) bg-(--color-ink-950) px-3 py-2 text-xs leading-relaxed text-(--color-paper-white) shadow-(--shadow-hairline-raised)",
          className,
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
}
