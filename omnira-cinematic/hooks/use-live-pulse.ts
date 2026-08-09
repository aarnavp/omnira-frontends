"use client";

import { useEffect, useState } from "react";
import { getNetworkPulse } from "@/lib/api/network";
import type { PulseScenario } from "@/types/network";
import { useAsyncData } from "./use-async";

const REFRESH_MS = 20_000;

/**
 * QA hook: reading `?pulse=empty` or `?pulse=error` lets the empty and error
 * states be triggered on demand instead of only assumed — see AGENTS §6.
 * `error` is modeled by forcing the failure path client-side rather than in
 * the service function, since `getNetworkPulse` itself only fails randomly.
 */
function readForcedScenario(): PulseScenario | "error" | null {
  if (typeof window === "undefined") return null;
  const value = new URLSearchParams(window.location.search).get("pulse");
  return value === "empty" || value === "error" ? value : null;
}

export function useLivePulse() {
  const [forced, setForced] = useState<PulseScenario | "error" | null>(null);

  useEffect(() => {
    // Client-only decision (reads window.location) — there's no external
    // system to defer this to.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForced(readForcedScenario());
  }, []);

  const state = useAsyncData(async () => {
    if (forced === "error") {
      const { ApiError } = await import("@/types/api");
      throw new ApiError({ code: "server_error", message: "Network telemetry is temporarily unavailable." });
    }
    return getNetworkPulse(forced === "empty" ? "empty" : "normal");
  }, [forced]);

  // Keep the pulse feeling alive during a session without relying on motion.
  useEffect(() => {
    if (forced === "error") return;
    const id = window.setInterval(() => state.refetch(), REFRESH_MS);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forced]);

  return state;
}
