"use client";

import { useMemo, useRef, type MutableRefObject } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import * as THREE from "three";
import { buildParticleField } from "./particle-field";
import { getSceneState } from "./scene-state";

// Shader colors mirror the CSS tokens `--color-accent` (#AEFF2E) and
// `--color-accent-motion` (#5FE6FF) — WebGL uniforms can't read CSS custom
// properties, so these three constants are the one deliberate exception to
// "no hardcoded color values" and must be kept in sync with globals.css by
// hand if either token changes.
const COLOR_SIGNAL = new THREE.Color(0.682, 1.0, 0.18);
const COLOR_CURRENT = new THREE.Color(0.373, 0.902, 1.0);
const BACKGROUND = "#05070a"; // --color-void-950

const VERTEX_SHADER = /* glsl */ `
  attribute vec3 aStart;
  attribute vec3 aEnd;
  attribute float aActivation;
  attribute float aPhase;
  attribute float aIsCurrent;

  uniform float uSpread;
  uniform float uReveal;
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;

  varying float vAlpha;
  varying float vIsCurrent;

  void main() {
    vec3 pos = mix(aStart, aEnd, uSpread);
    // Named "revealAmount", not "active": active is a reserved word in
    // GLSL ES (reserved for a future keyword) and fails to compile on some
    // drivers even though others silently accept it.
    float revealAmount = smoothstep(aActivation - 0.06, aActivation, uReveal);
    float pulse = 0.7 + 0.3 * sin(uTime * 1.6 + aPhase);
    vAlpha = revealAmount * pulse;
    vIsCurrent = aIsCurrent;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    // Clamped, not just attenuated by distance: at the close starting camera
    // (z ~3.4, "a single device") an unclamped 1/z falloff blows a point up
    // to hundreds of pixels wide, so the very first "one node lights up"
    // beat rendered as one full-screen blurred disc instead of a point.
    float sizePx = uSize * uPixelRatio * (1.0 + aIsCurrent * 0.7) * (18.0 / max(-mvPosition.z, 1.0));
    gl_PointSize = clamp(sizePx, 1.5, 14.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision mediump float;
  uniform vec3 uColorSignal;
  uniform vec3 uColorCurrent;
  varying float vAlpha;
  varying float vIsCurrent;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float glow = smoothstep(0.5, 0.0, d);
    vec3 color = mix(uColorSignal, uColorCurrent, vIsCurrent);
    gl_FragColor = vec4(color, glow * vAlpha);
  }
`;

function GlobeScene({
  progressRef,
  count,
  size,
}: {
  progressRef: MutableRefObject<number>;
  count: number;
  size: number;
}) {
  const field = useMemo(() => buildParticleField(count, 8, 11), [count]);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const groupRef = useRef<THREE.Group>(null);

  const uniforms = useMemo(
    () => ({
      uSpread: { value: 0 },
      uReveal: { value: 0 },
      uTime: { value: 0 },
      uSize: { value: size },
      uPixelRatio: { value: 1 },
      uColorSignal: { value: COLOR_SIGNAL },
      uColorCurrent: { value: COLOR_CURRENT },
    }),
    [size],
  );

  useFrame((state: RootState, delta: number) => {
    const scene = getSceneState(progressRef.current);
    state.camera.position.set(0, scene.cameraY, scene.cameraZ);
    state.camera.lookAt(0, 0, 0);
    if (groupRef.current) groupRef.current.rotation.y = scene.rotationY;
    if (materialRef.current) {
      materialRef.current.uniforms.uSpread.value = scene.spread;
      materialRef.current.uniforms.uReveal.value = scene.reveal;
      materialRef.current.uniforms.uTime.value += delta;
      materialRef.current.uniforms.uPixelRatio.value = state.viewport.dpr;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[field.end, 3]} />
          <bufferAttribute attach="attributes-aStart" args={[field.start, 3]} />
          <bufferAttribute attach="attributes-aEnd" args={[field.end, 3]} />
          <bufferAttribute attach="attributes-aActivation" args={[field.activation, 1]} />
          <bufferAttribute attach="attributes-aPhase" args={[field.phase, 1]} />
          <bufferAttribute attach="attributes-aIsCurrent" args={[field.isCurrent, 1]} />
        </bufferGeometry>
        <shaderMaterial
          ref={materialRef}
          uniforms={uniforms}
          vertexShader={VERTEX_SHADER}
          fragmentShader={FRAGMENT_SHADER}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

/**
 * The centerpiece scene. Isolated client component, documented API: a
 * `progressRef` (0–1, mutated imperatively by the pinned ScrollTrigger in
 * `NetworkAwakensSection` so updates never trigger a React re-render) goes
 * in; `getSceneState` (see `scene-state.ts`) turns that into camera position
 * and particle spread/reveal every frame. `quality` drives the mobile
 * motion budget: fewer points, capped DPR, smaller draw size.
 */
export function ParticleGlobe({
  progressRef,
  quality,
}: {
  progressRef: MutableRefObject<number>;
  quality: "full" | "lite";
}) {
  const count = quality === "full" ? 16000 : 3200;
  const size = quality === "full" ? 5.5 : 6.5;
  const maxDpr = quality === "full" ? 2 : 1;

  return (
    <Canvas
      camera={{ fov: 50, position: [0, 0.3, 3.4], near: 0.1, far: 100 }}
      dpr={[1, maxDpr]}
      gl={{ antialias: false, alpha: false }}
    >
      <color attach="background" args={[BACKGROUND]} />
      <GlobeScene progressRef={progressRef} count={count} size={size} />
    </Canvas>
  );
}
