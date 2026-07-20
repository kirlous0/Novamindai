"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import MagneticButton from "@/components/ui/MagneticButton";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

// react-three-fiber needs the DOM, so the whole scene is client-only
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

const stats = [
  { label: "Enterprise clients", value: 420, suffix: "+" },
  { label: "Workflows automated", value: 12, suffix: "M+" },
  { label: "Avg. accuracy uplift", value: 94, suffix: "%" },
];

const logos = ["Orbital", "Halcyon", "Vertex Labs", "Meridian", "Kinetic", "Northstar"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-32">
      {/* Aurora / gradient mesh backdrop */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-primary/30 blur-[120px] animate-aurora-move" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-secondary/20 blur-[120px] animate-aurora-move [animation-delay:3s]" />
      <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-accent/25 blur-[120px] animate-aurora-move [animation-delay:6s]" />

      <div className="section-pad relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:py-0">
        {/* Copy column */}
        <div className="relative z-10">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="eyebrow"
          >
            Enterprise Artificial Intelligence
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            Intelligence,
            <br />
            <span className="text-gradient">engineered to act.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-md text-lg text-ink-muted"
          >
            NovaMind AI builds autonomous agents, predictive systems, and
            custom LLM infrastructure that run your operations — not just
            answer questions.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              Start Building <FiArrowRight />
            </MagneticButton>
            <button className="btn-secondary" data-cursor-hover>
              <FiPlay size={14} /> Watch Demo
            </button>
          </motion.div>

          {/* Live stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-glass-border pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold md:text-3xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs text-ink-muted">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3D scene + floating glass cards */}
        <div className="relative z-10 h-[420px] md:h-[560px]">
          <HeroScene />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="glass absolute right-2 top-4 animate-float rounded-2xl px-4 py-3 shadow-glow-cyan md:right-6"
          >
            <p className="text-xs text-ink-muted">Model latency</p>
            <p className="font-display text-lg font-semibold text-secondary">118ms</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="glass absolute bottom-8 left-0 animate-float rounded-2xl px-4 py-3 shadow-glow-purple [animation-delay:1.5s] md:left-2"
          >
            <p className="text-xs text-ink-muted">Agents active</p>
            <p className="font-display text-lg font-semibold text-accent">2,481</p>
          </motion.div>
        </div>
      </div>

      {/* Trusted-by marquee */}
      <div className="section-pad relative z-10 !py-10">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-ink-muted">
          Trusted by teams building the future
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display text-xl font-semibold text-ink-muted/50"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
