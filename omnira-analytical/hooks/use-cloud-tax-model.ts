"use client";

import { getCloudTaxModel } from "@/lib/api/economics";
import { useAsyncData } from "./use-async";

export function useCloudTaxModel() {
  return useAsyncData(() => getCloudTaxModel(), []);
}
