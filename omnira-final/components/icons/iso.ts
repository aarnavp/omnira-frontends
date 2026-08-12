/**
 * Shared isometric projection helper for the icon set (§4.3 of the build
 * plan). A 2:1 iso grid — right/left-down vectors of (±s, s/2) — computed
 * once so every icon's cube faces stay visually consistent. Fixed,
 * hand-placed compositions, not a generative/seeded system (that's reserved
 * for data-driven visuals — see lib/utils/random.ts).
 */

type Point = [number, number];

function pts(points: Point[]): string {
  return points.map((p) => p.join(",")).join(" ");
}

/** The three visible faces of an isometric box, as polygon point strings. */
export function cubeFaces(cx: number, cy: number, s: number, h: number) {
  const N: Point = [cx, cy];
  const E: Point = [cx + s, cy + s * 0.5];
  const S: Point = [cx, cy + s];
  const W: Point = [cx - s, cy + s * 0.5];
  const Wd: Point = [cx - s, cy + s * 0.5 + h];
  const Sd: Point = [cx, cy + s + h];
  const Ed: Point = [cx + s, cy + s * 0.5 + h];

  return {
    top: pts([N, E, S, W]),
    left: pts([W, S, Sd, Wd]),
    right: pts([S, E, Ed, Sd]),
  };
}
