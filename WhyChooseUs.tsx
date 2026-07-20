"use client";

import { motion } from "framer-motion";
import { FiCheck, FiX } from "react-icons/fi";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const rows = [
  { feature: "Deployment time", novamind: "Days, not quarters", legacy: "6–12 month rollouts" },
  { feature: "Model flexibility", novamind: "Bring or fine-tune any LLM", legacy: "Locked to one vendor" },
  { feature: "Human oversight", novamind: "Built-in approval checkpoints", legacy: "Fully opaque automation" },
  { feature: "Pricing model", novamind: "Usage-based, transparent", legacy: "Rigid annual contracts" },
];

const impact: { value: number; suffix: string; label: string; decimals?: number }[] = [
  { value: 68, suffix: "%", label: "Faster time-to-deploy", decimals: 0 },
  { value: 3.4, suffix: "x", label: "ROI within year one", decimals: 1 },
  { value: 99.9, suffix: "%", label: "Platform uptime", decimals: 1 },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad relative">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-[500px] -translate-y-1/2 bg-gradient-mesh opacity-40" />

      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Why NovaMind</span>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Built for teams who can't
          <br />
          <span className="text-gradient">afford to wait.</span>
        </h2>
      </div>

      {/* Comparison table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card mx-auto mt-16 max-w-4xl overflow-hidden !p-0"
      >
        <div className="grid grid-cols-3 border-b border-glass-border bg-white/[0.03] px-6 py-4 text-sm font-display font-semibold">
          <span className="text-ink-muted">Capability</span>
          <span className="text-gradient">NovaMind AI</span>
          <span className="text-ink-muted">Legacy vendors</span>
        </div>
        {rows.map((row, i) => (
          <div
            key={row.feature}
            className={`grid grid-cols-3 items-center px-6 py-5 text-sm ${
              i !== rows.length - 1 ? "border-b border-glass-border" : ""
            }`}
          >
            <span className="text-ink-muted">{row.feature}</span>
            <span className="flex items-center gap-2 font-medium">
              <FiCheck className="shrink-0 text-secondary" /> {row.novamind}
            </span>
            <span className="flex items-center gap-2 text-ink-muted">
              <FiX className="shrink-0 text-ink-muted/60" /> {row.legacy}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Impact counters */}
      <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
        {impact.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-4xl font-bold text-gradient md:text-5xl">
              <AnimatedCounter
                value={item.value}
                suffix={item.suffix}
                decimals={item.decimals ?? 0}
              />
            </p>
            <p className="mt-2 text-sm text-ink-muted">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
