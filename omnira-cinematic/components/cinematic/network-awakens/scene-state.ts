/**
 * Pure "progress in, camera/particle state out" mapping for the centerpiece
 * — the documented API PROMPT.md §8 asks for. Kept as a standalone function
 * so it's testable and swappable without touching the R3F plumbing around
 * it: given a scroll progress 0–1, this is the *only* place that decides
 * where the camera sits and how spread-out / revealed the particle field is.
 */
export interface SceneState {
  /** Camera distance from the origin — starts close on a single node, ends
   * pulled back over a full globe (the "dolly/zoom-out" camera move). */
  cameraZ: number;
  cameraY: number;
  /** 0 = every point clustered at the origin (a single device). 1 = every
   * point at its final position on the globe. */
  spread: number;
  /** 0 = no points active. 1 = every point active. Combined with each
   * point's own random activation threshold, this staggers "one, then a
   * handful, then thousands, then millions." */
  reveal: number;
  rotationY: number;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

// Travel finishes at 85% of the pinned scroll range, so the last stretch of
// the section holds a wide, breathing view of the fully awake network
// instead of animating right up to the moment it unpins.
const TRAVEL_END = 0.85;

export function getSceneState(progressRaw: number): SceneState {
  const progress = Math.min(Math.max(progressRaw, 0), 1);
  const travel = Math.min(progress / TRAVEL_END, 1);
  const eased = easeOutCubic(travel);
  return {
    cameraZ: lerp(3.4, 30, eased),
    cameraY: lerp(0.3, 3.2, eased),
    spread: easeOutCubic(Math.min(travel * 1.2, 1)),
    reveal: travel,
    rotationY: travel * Math.PI * 0.55,
  };
}
