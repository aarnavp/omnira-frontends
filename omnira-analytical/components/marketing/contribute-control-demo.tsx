"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";

/** Contribute's messaging must make the off switch as visible as the
 * earnings pitch (AGENTS §1) — this is a working control, not a promise. */
export function ContributeControlDemo() {
  const [contributing, setContributing] = useState(true);

  return (
    <div className="flex items-center justify-between gap-4 rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface) p-4">
      <div>
        <p className="text-sm font-medium text-(--color-text)">
          {contributing ? "This device is contributing" : "This device is paused"}
        </p>
        <p className="mt-0.5 text-xs text-(--color-text-muted)">
          {contributing
            ? "Earning from spare capacity. Turn off anytime — nothing runs while it's off."
            : "Nothing runs on this device right now. Turn back on whenever you want."}
        </p>
      </div>
      <Switch checked={contributing} onChange={setContributing} label="Toggle this device's contribution to the network" />
    </div>
  );
}
