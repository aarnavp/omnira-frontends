import { cubeFaces } from "./iso";

/** A wireframe cube with a perimeter/gate outline — the trust boundary,
 * for §05 Security. */
export function IsoLockPerimeter({ className }: { className?: string }) {
  const core = cubeFaces(48, 42, 14, 14);

  return (
    <svg viewBox="0 0 96 96" className={className} fill="none" aria-hidden>
      <rect
        x="14"
        y="14"
        width="68"
        height="68"
        rx="2"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.3"
        strokeDasharray="2 4"
      />
      <g strokeWidth="1.4" strokeLinejoin="round">
        <polygon points={core.left} stroke="currentColor" strokeOpacity="0.4" />
        <polygon points={core.right} stroke="currentColor" strokeOpacity="0.6" />
        <polygon points={core.top} stroke="currentColor" strokeOpacity="1" />
      </g>
      <path
        d="M40 70 v-8 a8 8 0 0 1 16 0 v8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeOpacity="0.85"
      />
      <rect x="36" y="70" width="24" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" strokeOpacity="0.85" />
    </svg>
  );
}
