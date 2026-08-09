"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePinnedProgress } from "@/hooks/use-pinned-progress";
import { useMountedReducedMotion } from "@/hooks/use-mounted-reduced-motion";
import { EASE_SIGNAL } from "@/lib/motion";
import { ComputeMovesDiagram, ControlLayerDiagram, DataStaysDiagram } from "./how-it-works-diagrams";

const STATES = [
  {
    title: "Data stays where you put it.",
    body: "Customer data stays on-premises or in customer-controlled cloud storage. It never has to move for compute to happen.",
    Diagram: DataStaysDiagram,
  },
  {
    title: "Compute happens wherever capacity exists.",
    body: "A workload runs on whichever idle device has room right now — a phone, a laptop, a server between jobs.",
    Diagram: ComputeMovesDiagram,
  },
  {
    title: "A control layer decides which is which, in real time.",
    body: "Scheduling, routing, and policy run continuously, so the right device gets the right task the moment it's ready.",
    Diagram: ControlLayerDiagram,
  },
] as const;

/**
 * "How It Actually Works" — the Data Plane / Compute Plane / Control Plane
 * model compressed into three cinematic states, pinned while the visitor
 * scrolls through them (PROMPT.md §5/§6). The detailed architecture diagram
 * stays on the analytical site; this is one clear visual per idea.
 */
export function HowItWorksSection() {
  const prefersReducedMotion = useMountedReducedMotion();
  const { ref, stage } = usePinnedProgress<HTMLElement>({
    end: "+=200%",
    scrub: 0.5,
    stageCount: STATES.length,
    disabled: prefersReducedMotion,
  });

  if (prefersReducedMotion) {
    return (
      <section id="how-it-works" className="flex flex-col gap-16 px-6 py-24 sm:px-10 lg:px-16">
        <p className="text-center font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">
          How It Actually Works
        </p>
        {STATES.map(({ title, body, Diagram }) => (
          <div key={title} className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 sm:flex-row">
            <div className="h-40 w-40 shrink-0">
              <Diagram animate={false} />
            </div>
            <div>
              <h3 className="font-(family-name:--font-display) text-title font-medium text-balance text-(--color-ink)">
                {title}
              </h3>
              <p className="mt-3 max-w-[46ch] text-body text-(--color-ink-muted)">{body}</p>
            </div>
          </div>
        ))}
      </section>
    );
  }

  const current = STATES[stage];

  return (
    <section id="how-it-works" ref={ref} className="relative flex h-svh flex-col items-center justify-center overflow-hidden px-6 sm:px-10 lg:px-16">
      <p className="absolute top-28 font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">
        How It Actually Works
      </p>

      <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: EASE_SIGNAL }}
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <h3 className="font-(family-name:--font-display) text-title font-medium text-balance text-(--color-ink)">
              {current.title}
            </h3>
            <p className="mx-auto mt-4 max-w-[46ch] text-body text-(--color-ink-muted) lg:mx-0">
              {current.body}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="order-1 mx-auto h-56 w-56 sm:h-64 sm:w-64 lg:order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.45, ease: EASE_SIGNAL }}
              className="h-full w-full"
            >
              <current.Diagram />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-14 flex gap-2">
        {STATES.map((s, i) => (
          <span
            key={s.title}
            className="h-1.5 w-1.5 rounded-full transition-colors duration-300"
            style={{
              backgroundColor: i === stage ? "var(--color-accent)" : "var(--color-mist-700)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
