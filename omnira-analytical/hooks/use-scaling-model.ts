"use client";

import { getScalingModel } from "@/lib/api/scaling";
import { useAsyncData } from "./use-async";

export function useScalingModel() {
  return useAsyncData(() => getScalingModel(), []);
}
