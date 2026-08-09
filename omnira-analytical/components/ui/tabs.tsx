"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils/cn";

export const Tabs = TabsPrimitive.Root;

export function TabsList({ className, ...props }: TabsPrimitive.TabsListProps) {
  return (
    <TabsPrimitive.List
      className={cn(
        "inline-flex items-center gap-1 rounded-(--radius-full) border border-(--color-border) bg-(--color-surface-raised) p-1",
        className,
      )}
      {...props}
    />
  );
}

export function TabsTrigger({ className, ...props }: TabsPrimitive.TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "rounded-(--radius-full) px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-(--color-text-muted) transition-colors",
        "hover:text-(--color-text) data-[state=active]:bg-(--color-signal-600) data-[state=active]:text-(--color-paper-white)",
        className,
      )}
      {...props}
    />
  );
}

export const TabsContent = TabsPrimitive.Content;
