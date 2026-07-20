"use client";

import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "NovaMind's agents cut our support backlog in half within three weeks — without us writing a single line of orchestration code.",
    name: "Amara Chen",
    role: "VP Operations, Orbital",
  },
  {
    quote:
      "We replaced four disconnected tools with one workflow layer. Onboarding a new automation now takes hours, not sprints.",
    name: "Diego Ferreira",
    role: "Head of Data, Meridian",
  },
  {
    quote:
      "The computer vision pipeline caught defects our manual QA process missed for two years. It paid for itself in a month.",
    name: "Priya Nair",
    role: "COO, Vertex Labs",
  },
  {
    quote:
      "Their custom LLM integration finally let us ground responses in our own data — accuracy went from 'good enough' to trusted.",
    name: "Tomás Alvarez",
    role: "CTO, Kinetic",
  },
];

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="glass-card mx-3 w-[360px] shrink-0 p-7" data-cursor-hover>
      <div className="flex gap-1 text-secondary">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar key={i} size={14} fill="currentColor" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink">"{t.quote}"</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-aurora-1 font-display text-sm font-semibold text-white">
          {t.name.charAt(0)}
        </div>
        <div>
          <p className="font-display text-sm font-medium">{t.name}</p>
          <p className="text-xs text-ink-muted">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="mx-auto mb-14 max-w-2xl px-6 text-center">
        <span className="eyebrow">Trusted in production</span>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Teams that ship with <span className="text-gradient">NovaMind.</span>
        </h2>
      </div>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
