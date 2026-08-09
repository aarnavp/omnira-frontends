"use client";

import { getArchitectureModel } from "@/lib/api/architecture";
import { useAsyncData } from "./use-async";

export function useArchitectureModel() {
  return useAsyncData(() => getArchitectureModel(), []);
}
