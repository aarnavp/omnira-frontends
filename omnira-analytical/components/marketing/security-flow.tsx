"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    title: "A fragment is cut",
    detail: "The Control Plane splits a task into a fragmented, transient micro-task — never the full dataset.",
  },
  {
    title: "Sent to a sandbox",
    detail: "The fragment lands inside a hardened, single-tenant MicroVM on the device, air-gapped from its network.",
  },
  {
    title: "Executed in memory",
    detail: "It runs entirely in memory. No disk write, no cache file, nothing the device's owner can browse to.",
  },
  {
    title: "Wiped on completion",
    detail: "The result returns to the Control Plane and the sandbox is torn down. Zero master data at the edge.",
  },
];

/** The task-fragment lifecycle for §04 Security — makes "zero master data
 * at the edge" concrete instead of asserted, per PROMPT §5. */
export function SecurityFlow() {
  return (
    <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((step, index) => (
        <motion.li
          key={step.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col gap-2 rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface-raised) p-5"
        >
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-(--radius-full) bg-(--color-ink-950) font-mono text-[11px] text-(--color-paper-white)">
              {index + 1}
            </span>
            {index < STEPS.length - 1 ? (
              <span className="hidden h-px flex-1 bg-(--color-border) sm:block lg:hidden" aria-hidden />
            ) : null}
          </div>
          <p className="text-sm font-semibold text-(--color-text)">{step.title}</p>
          <p className="text-sm leading-relaxed text-(--color-text-muted)">{step.detail}</p>
        </motion.li>
      ))}
    </ol>
  );
}
