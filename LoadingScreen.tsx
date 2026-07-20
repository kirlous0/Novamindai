"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let raf: number;
    const start = performance.now();
    const duration = 1800; // ms

    const tick = (now: number) => {
      const elapsed = now - start;
      // Ease-out so the counter settles rather than ticking linearly
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = "";
        }, 350);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          exit={{
            opacity: 0,
            filter: "blur(12px)",
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          <div className="absolute inset-0 bg-gradient-mesh animate-aurora-move opacity-60" />

          <motion.div
            className="relative flex h-24 w-24 items-center justify-center rounded-3xl"
            initial={{ borderRadius: "24%" }}
            animate={{
              borderRadius: ["24%", "50%", "16%", "24%"],
              rotate: [0, 90, 180, 360],
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(135deg, #6C63FF, #00D4FF, #A855F7)",
              boxShadow: "0 0 60px -10px rgba(108,99,255,0.8)",
            }}
          >
            <span className="font-display text-2xl font-bold text-white">N</span>
          </motion.div>

          <div className="relative mt-10 font-display text-5xl font-bold tabular-nums text-gradient">
            {progress}%
          </div>

          <p className="relative mt-3 text-sm tracking-[0.3em] uppercase text-ink-muted">
            NovaMind AI
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
