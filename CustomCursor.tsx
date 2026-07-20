"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Ripple = { id: number; x: number; y: number };

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Ring lags slightly behind the raw pointer for a "magnetic glow" feel
  const ringX = useSpring(x, { damping: 28, stiffness: 280, mass: 0.4 });
  const ringY = useSpring(y, { damping: 28, stiffness: 280, mass: 0.4 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setIsTouch(!hasFinePointer);
    if (!hasFinePointer) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button, [role='button'], input, textarea, [data-cursor-hover]"));
    };

    const click = (e: MouseEvent) => {
      const id = Date.now();
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", click);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", click);
    };
  }, [x, y]);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90]" aria-hidden="true">
      {/* Core dot: tracks the raw pointer, no lag */}
      <motion.div
        className="fixed left-0 top-0 h-2 w-2 rounded-full bg-white"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />

      {/* Glowing ring: lags behind, expands on hover */}
      <motion.div
        className="fixed left-0 top-0 rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: isHovering ? "#00D4FF" : "rgba(255,255,255,0.5)",
          boxShadow: isHovering
            ? "0 0 24px 4px rgba(0,212,255,0.55)"
            : "0 0 16px 2px rgba(108,99,255,0.35)",
        }}
        animate={{
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />

      {ripples.map((r) => (
        <motion.div
          key={r.id}
          className="fixed left-0 top-0 rounded-full border border-secondary/70"
          style={{ x: r.x, y: r.y, translateX: "-50%", translateY: "-50%" }}
          initial={{ width: 0, height: 0, opacity: 0.6 }}
          animate={{ width: 80, height: 80, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
