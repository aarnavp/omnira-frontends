"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_SIGNAL } from "@/lib/motion";

const STORAGE_KEY = "omnira:cold-open-seen";
const AUTO_DISMISS_MS = 2200;

/**
 * 1–2 seconds max, skipped entirely on repeat visits (session flag) or when
 * `prefers-reduced-motion` is set (PROMPT.md §5). Defaults to *not* showing
 * on the server render — a no-JS or slow-JS visitor sees the real hero
 * immediately instead of a permanently-black screen; JS visitors on a fresh
 * session get the intro via the effect below. Never traps: a skip control is
 * present and focused from the first frame, and any key/scroll/tap dismisses
 * it early.
 */
export function ColdOpen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = sessionStorage.getItem(STORAGE_KEY);
    if (prefersReducedMotion || alreadySeen) return;
    sessionStorage.setItem(STORAGE_KEY, "1");
    // Client-only decision (sessionStorage/matchMedia don't exist on the
    // server) — there's no external system to defer this to.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(true);
  }, []);

  const dismiss = useCallback(() => setVisible(false), []);

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(dismiss, AUTO_DISMISS_MS);
    window.addEventListener("keydown", dismiss);
    window.addEventListener("wheel", dismiss, { passive: true });
    window.addEventListener("touchstart", dismiss, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", dismiss);
      window.removeEventListener("wheel", dismiss);
      window.removeEventListener("touchstart", dismiss);
    };
  }, [visible, dismiss]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          aria-label="Intro. Press any key to skip."
          className="fixed inset-0 z-50 flex items-center justify-center bg-(--color-void-950)"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE_SIGNAL }}
          onClick={dismiss}
        >
          <div
            aria-hidden
            className="absolute h-48 w-48 animate-(--animate-pulse-node) rounded-full bg-(--color-accent)/20 blur-3xl"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="relative px-6 text-center font-(family-name:--font-display) text-lg text-(--color-ink-muted) italic sm:text-xl"
          >
            Somewhere, right now, a device is idle.
          </motion.p>
          <button
            type="button"
            autoFocus
            onClick={(event) => {
              event.stopPropagation();
              dismiss();
            }}
            className="absolute right-6 bottom-6 rounded-(--radius-full) border border-(--color-hairline) px-4 py-2 font-mono text-xs tracking-wider text-(--color-ink-muted) uppercase transition-colors hover:border-(--color-ink-muted) hover:text-(--color-ink) sm:right-8 sm:bottom-8"
          >
            Skip
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
