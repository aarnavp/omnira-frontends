import { cubeFaces } from "./iso";

/** A scatter of small wireframe cubes at varied heights — the edge fleet,
 * for §04.2 Compute Plane and reused at §07 Scaling. Fixed composition. */
const CUBES = [
  { cx: 26, cy: 40, s: 10, h: 10 },
  { cx: 48, cy: 28, s: 8, h: 8 },
  { cx: 66, cy: 44, s: 12, h: 14 },
  { cx: 34, cy: 62, s: 9, h: 9 },
  { cx: 58, cy: 66, s: 7, h: 7 },
];

export function IsoComputeFleet({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" className={className} fill="none" aria-hidden>
      {CUBES.map((cube, i) => {
        const face = cubeFaces(cube.cx, cube.cy, cube.s, cube.h);
        return (
          <g key={i} strokeWidth="1.3" strokeLinejoin="round">
            <polygon points={face.left} stroke="currentColor" strokeOpacity="0.35" />
            <polygon points={face.right} stroke="currentColor" strokeOpacity="0.55" />
            <polygon points={face.top} stroke="currentColor" strokeOpacity="0.95" />
          </g>
        );
      })}
    </svg>
  );
}
