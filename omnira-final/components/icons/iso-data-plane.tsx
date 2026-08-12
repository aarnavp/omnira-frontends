import { cubeFaces } from "./iso";

/** Stacked flat wireframe layers — storage, for §04.1 Data Plane. */
export function IsoDataPlane({ className }: { className?: string }) {
  const layers = [24, 40, 56, 72].map((cy) => cubeFaces(48, cy, 22, 6));

  return (
    <svg viewBox="0 0 96 96" className={className} fill="none" aria-hidden>
      {layers.map((face, i) => (
        <g key={i} strokeWidth="1.4" strokeLinejoin="round">
          <polygon points={face.left} stroke="currentColor" strokeOpacity="0.35" />
          <polygon points={face.right} stroke="currentColor" strokeOpacity="0.55" />
          <polygon points={face.top} stroke="currentColor" strokeOpacity="0.95" />
        </g>
      ))}
    </svg>
  );
}
