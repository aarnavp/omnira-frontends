import { DeviceField } from "../device-field";

/**
 * Reduced-motion path for the centerpiece: a real second layout, not a
 * frozen frame of the WebGL scene. No canvas, no camera-scrub, no looping
 * particle animation — a static, densely-lit device field and the same four
 * narrative beats read in normal document flow instead of crossfading on
 * scroll.
 */
export function NetworkAwakensStatic() {
  return (
    <section
      id="network-awakens"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-24 text-center sm:px-10 lg:px-16"
    >
      <DeviceField seed={31} flickerShare={0.4} animate={false} className="absolute inset-0 h-full w-full" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,transparent,var(--color-ground)_82%)]"
      />

      <div className="relative max-w-2xl">
        <p className="font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">
          The Network Awakens
        </p>
        <h2 className="mt-5 font-(family-name:--font-display) text-chapter font-medium text-balance text-(--color-ink)">
          One device. Then a handful. Then millions.
        </h2>
        <p className="mx-auto mt-8 max-w-[46ch] text-body text-(--color-ink-muted)">
          A single laptop joins the network. Then a phone, a server, a TV.
          The pattern repeats at every scale — one device becomes a handful,
          a handful becomes thousands, and thousands become a fully awake,
          global compute network: millions of live connections, carrying
          real traffic, right now.
        </p>
      </div>
    </section>
  );
}
