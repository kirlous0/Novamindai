"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiChevronDown, FiGlobe } from "react-icons/fi";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import MagneticButton from "@/components/ui/MagneticButton";

const solutions = [
  { name: "AI Agents", desc: "Autonomous agents that get work done" },
  { name: "Workflow Automation", desc: "Orchestrate multi-step business logic" },
  { name: "Predictive Analytics", desc: "Forecast trends before they happen" },
  { name: "Computer Vision", desc: "See and understand the physical world" },
  { name: "Custom LLM Integration", desc: "Bring frontier models into your stack" },
  { name: "Conversational AI", desc: "Chatbots that actually resolve issues" },
];

const links = ["About", "Solutions", "Pricing", "Case Studies", "Blog"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "AR">("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-premium",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 transition-all duration-500 ease-premium",
          scrolled ? "glass py-2.5 shadow-glow" : "py-2 bg-transparent border border-transparent"
        )}
        style={{ marginInline: "1.5rem" }}
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2" data-cursor-hover>
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-aurora-1 font-display text-sm font-bold text-white">
            N
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            NovaMind <span className="text-gradient">AI</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) =>
            link === "Solutions" ? (
              <div
                key={link}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-ink"
                  data-cursor-hover
                >
                  {link}
                  <FiChevronDown
                    size={14}
                    className={cn("transition-transform", megaOpen && "rotate-180")}
                  />
                </button>

                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="glass absolute left-1/2 top-full mt-4 grid w-[560px] -translate-x-1/2 grid-cols-2 gap-2 rounded-2xl p-4"
                    >
                      {solutions.map((s) => (
                        <a
                          key={s.name}
                          href="#solutions"
                          className="rounded-xl p-3 transition-colors hover:bg-white/5"
                          data-cursor-hover
                        >
                          <p className="font-display text-sm font-medium">{s.name}</p>
                          <p className="mt-1 text-xs text-ink-muted">{s.desc}</p>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
                data-cursor-hover
              >
                {link}
              </a>
            )
          )}
        </nav>

        {/* Right side controls */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => setLang(lang === "EN" ? "AR" : "EN")}
            className="glass flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-medium"
            data-cursor-hover
            aria-label="Switch language"
          >
            <FiGlobe size={13} />
            {lang}
          </button>
          <ThemeToggle />
          <MagneticButton className="!px-5 !py-2.5 !text-sm">Book a Demo</MagneticButton>
        </div>

        {/* Mobile toggle */}
        <button
          className="glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-cursor-hover
        >
          {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass mx-6 mt-3 overflow-hidden rounded-3xl lg:hidden"
          >
            <div className="flex flex-col gap-1 p-6">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="rounded-xl px-3 py-3 text-sm text-ink-muted hover:bg-white/5 hover:text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
              <MagneticButton className="mt-3 w-full">Book a Demo</MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
