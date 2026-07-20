"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTA() {
  return (
    <section className="section-pad relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card relative mx-auto max-w-5xl overflow-hidden !rounded-[2.5rem] px-10 py-20 text-center"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-mesh opacity-70" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-primary/40 blur-[100px]" />

        <span className="eyebrow">Ready when you are</span>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
          Put AI to work across
          <br />
          <span className="text-gradient">your entire operation.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-ink-muted">
          Talk to our team and see a working agent built around your data in
          under 30 minutes.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton>
            Book a Demo <FiArrowRight />
          </MagneticButton>
          <button className="btn-secondary" data-cursor-hover>
            Talk to Sales
          </button>
        </div>
      </motion.div>
    </section>
  );
}
