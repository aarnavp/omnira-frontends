import { mulberry32 } from "@/lib/utils/random";

export interface ParticleField {
  start: Float32Array;
  end: Float32Array;
  activation: Float32Array;
  phase: Float32Array;
  isCurrent: Float32Array;
}

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

/** Fibonacci-sphere lattice — an even, natural-looking distribution of N
 * points over a sphere surface with no clustering at the poles. This is
 * every point's *final* position once the network is fully awake. */
function fibonacciSpherePoint(index: number, total: number, radius: number): [number, number, number] {
  const y = 1 - (index / Math.max(total - 1, 1)) * 2;
  const r = Math.sqrt(Math.max(0, 1 - y * y));
  const theta = GOLDEN_ANGLE * index;
  return [Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius];
}

/**
 * Builds every per-point attribute the centerpiece shader needs, once, up
 * front. Deterministic (`seed`) so the same "random" activation order and
 * device mix render identically on every load — see `lib/utils/random.ts`.
 */
export function buildParticleField(count: number, radius: number, seed = 1): ParticleField {
  const rng = mulberry32(seed);
  const start = new Float32Array(count * 3);
  const end = new Float32Array(count * 3);
  const activation = new Float32Array(count);
  const phase = new Float32Array(count);
  const isCurrent = new Float32Array(count);

  for (let i = 0; i < count; i += 1) {
    // Start clustered near the origin — "a single device" — with just
    // enough jitter that points don't z-fight once the shader draws them.
    const clusterRadius = 0.08 + rng() * 0.14;
    const clusterTheta = rng() * Math.PI * 2;
    const clusterPhi = Math.acos(rng() * 2 - 1);
    start[i * 3] = clusterRadius * Math.sin(clusterPhi) * Math.cos(clusterTheta);
    start[i * 3 + 1] = clusterRadius * Math.cos(clusterPhi);
    start[i * 3 + 2] = clusterRadius * Math.sin(clusterPhi) * Math.sin(clusterTheta);

    const [ex, ey, ez] = fibonacciSpherePoint(i, count, radius);
    end[i * 3] = ex;
    end[i * 3 + 1] = ey;
    end[i * 3 + 2] = ez;

    // Random (not index-ordered) activation threshold — one, then a
    // handful, then thousands light up in no visible pattern, not a sweep.
    activation[i] = rng();
    phase[i] = rng() * Math.PI * 2;
    isCurrent[i] = rng() < 0.12 ? 1 : 0;
  }

  return { start, end, activation, phase, isCurrent };
}
