"use client";

import { motion } from "framer-motion";
import {
  FiCpu,
  FiGitMerge,
  FiMessageSquare,
  FiEye,
  FiBarChart2,
  FiZap,
} from "react-icons/fi";
import { cn } from "@/lib/utils";

const solutions = [
  {
    icon: FiCpu,
    title: "AI Agents",
    desc: "Autonomous agents that plan, execute, and self-correct across your tools — with a human always able to step in.",
    glow: "shadow-glow",
  },
  {
    icon: FiGitMerge,
    title: "Workflow Automation",
    desc: "Turn multi-step operational processes into reliable, monitored pipelines that run themselves.",
    glow: "shadow-glow-cyan",
  },
  {
    icon: FiZap,
    title: "Custom LLM Integration",
    desc: "Fine-tuned and RAG-grounded models wired directly into your existing systems and data.",
    glow: "shadow-glow-purple",
  },
  {
    icon: FiBarChart2,
    title: "Predictive Analytics",
    desc: "Forecasting models that turn historical data into decisions you can act on today.",
    glow: "shadow-glow",
  },
  {
    icon: FiEye,
    title: "Computer Vision",
    desc: "Real-time visual inspection, detection, and understanding at production scale.",
    glow: "shadow-glow-cyan",
  },
  {
    icon: FiMessageSquare,
    title: "Conversational AI",
    desc: "Support and sales chatbots that resolve real requests, not just deflect them.",
    glow: "shadow-glow-purple",
  },
];

export default function AISolutions() {
  return (
    <section id="solutions" className="section-pad relative">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">What we build</span>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
          One platform, <span className="text-gradient">six ways to deploy AI.</span>
        </h2>
        <p className="mt-4 text-ink-muted">
          Every solution shares the same core infrastructure — so what you
          build today scales into whatever you need tomorrow.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: (i % 3) * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6 }}
            className="glass-card group relative overflow-hidden p-7"
            data-cursor-hover
          >
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl bg-aurora-1 transition-transform duration-500 group-hover:scale-110",
                s.glow
              )}
            >
              <s.icon size={20} className="text-white" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{s.desc}</p>

            {/* Animated glowing border sweep on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 rounded-2xl bg-aurora-1 [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] p-px [mask-composite:exclude] opacity-40" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
