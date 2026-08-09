"use client";

import { getDemandModel } from "@/lib/api/demand";
import { useAsyncData } from "./use-async";

export function useDemandModel() {
  return useAsyncData(() => getDemandModel(), []);
}
