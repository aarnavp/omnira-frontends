import { cubeFaces } from "./iso";

/** A wireframe hub with radiating spokes — orchestration, for §04.3
 * Control Plane. */
const NODES: [number, number][] = [
  [48, 16],
  [78, 34],
  [78, 66],
  [48, 84],
  [18, 66],
  [18, 34],
];

export function IsoControlPlane({ className }: { className?: string }) {
  const hub = cubeFaces(48, 44, 10, 8);

  return (
    <svg viewBox="0 0 96 96" className={className} fill="none" aria-hidden>
      {NODES.map(([x, y], i) => (
        <line
          key={i}
          x1="48"
          y1="52"
          x2={x}
          y2={y}
          stroke="currentColor"
          strokeOpacity="0.4"
          strokeWidth="1"
          strokeDasharray="1 3.5"
        />
      ))}
      {NODES.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.3" />
      ))}
      <g strokeWidth="1.4" strokeLinejoin="round">
        <polygon points={hub.left} stroke="currentColor" strokeOpacity="0.4" />
        <polygon points={hub.right} stroke="currentColor" strokeOpacity="0.6" />
        <polygon points={hub.top} stroke="currentColor" strokeOpacity="1" />
      </g>
    </svg>
  );
}
