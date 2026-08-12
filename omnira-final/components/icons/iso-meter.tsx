/** A wireframe dial/gauge — utilization, for §06 Economics. */
export function IsoMeter({ className }: { className?: string }) {
  const ticks = Array.from({ length: 9 }, (_, i) => {
    const angle = Math.PI * (1 + i / 8);
    const inner = 26;
    const outer = i % 2 === 0 ? 32 : 30;
    const cx = 48;
    const cy = 56;
    return {
      x1: cx + Math.cos(angle) * inner,
      y1: cy + Math.sin(angle) * inner,
      x2: cx + Math.cos(angle) * outer,
      y2: cy + Math.sin(angle) * outer,
    };
  });
  const needleAngle = Math.PI * 1.62;
  const needleX = 48 + Math.cos(needleAngle) * 22;
  const needleY = 56 + Math.sin(needleAngle) * 22;

  return (
    <svg viewBox="0 0 96 96" className={className} fill="none" aria-hidden>
      <path
        d="M16 56 A32 32 0 0 1 80 56"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeOpacity="0.9"
      />
      {ticks.map((t, i) => (
        <line
          key={i}
          x1={t.x1}
          y1={t.y1}
          x2={t.x2}
          y2={t.y2}
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
      ))}
      <line x1="48" y1="56" x2={needleX} y2={needleY} stroke="currentColor" strokeWidth="1.6" strokeOpacity="1" />
      <circle cx="48" cy="56" r="3" stroke="currentColor" strokeWidth="1.4" strokeOpacity="1" />
    </svg>
  );
}
