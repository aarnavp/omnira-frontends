"use client";

import { getMarketModel } from "@/lib/api/market";
import { useAsyncData } from "./use-async";

export function useMarketModel() {
  return useAsyncData(() => getMarketModel(), []);
}
