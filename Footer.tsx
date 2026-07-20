"use client";

import { FiTwitter, FiLinkedin, FiGithub, FiArrowRight } from "react-icons/fi";

const columns = [
  {
    title: "Product",
    links: ["AI Agents", "Automation", "Predictive Analytics", "Computer Vision", "Pricing"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Case Studies", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Status", "Security", "FAQ"],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-glass-border">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-mesh opacity-30" />

      <div className="section-pad !pb-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand + newsletter */}
          <div>
            <a href="#top" className="flex w-fit items-center gap-2" data-cursor-hover>
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-aurora-1 font-display text-sm font-bold text-white">
                N
              </span>
              <span className="font-display text-lg font-semibold">
                NovaMind <span className="text-gradient">AI</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-ink-muted">
              Enterprise-grade AI agents, automation, and predictive systems —
              built to run in production, not just a demo.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass mt-6 flex max-w-sm items-center gap-2 rounded-full p-1.5 pl-4"
            >
              <input
                type="email"
                required
                placeholder="Your work email"
                className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-aurora-1 text-white transition-transform hover:scale-105"
                data-cursor-hover
              >
                <FiArrowRight size={15} />
              </button>
            </form>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-display text-sm font-semibold">{col.title}</p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-ink-muted transition-colors hover:text-ink"
                        data-cursor-hover
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-glass-border pt-8 sm:flex-row">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} NovaMind AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[FiTwitter, FiLinkedin, FiGithub].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="glass flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-secondary"
                data-cursor-hover
                aria-label="Social link"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
