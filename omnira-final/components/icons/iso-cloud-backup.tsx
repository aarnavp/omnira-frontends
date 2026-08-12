/** A wireframe cloud built from straight facets, not a rounded blob — public
 * cloud as backup, for §04.4. Deliberately faceted so it never reads as a
 * generic rounded SaaS cloud icon. */
export function IsoCloudBackup({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" className={className} fill="none" aria-hidden>
      <polygon
        points="24,58 18,48 26,38 24,28 38,22 48,14 62,20 74,26 80,38 72,46 78,56 66,64 52,70 38,68 26,66"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeOpacity="0.9"
      />
      <path
        d="M24 58 L38 68 M74 26 L48 14"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.35"
        strokeDasharray="1 3"
      />
      <circle cx="48" cy="42" r="3" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.7" />
    </svg>
  );
}
