import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6C63FF",
          50: "#EFEEFF",
          100: "#DEDCFF",
          300: "#ADA6FF",
          500: "#6C63FF",
          700: "#4038B8",
          900: "#221D66",
        },
        secondary: {
          DEFAULT: "#00D4FF",
          300: "#7EEBFF",
          500: "#00D4FF",
          700: "#0089A6",
        },
        accent: {
          DEFAULT: "#A855F7",
          300: "#D3A6FB",
          500: "#A855F7",
          700: "#7622C4",
        },
        bg: {
          DEFAULT: "#070B18",
          surface: "#0B1120",
          light: "#F7F8FC",
        },
        glass: "rgba(255,255,255,0.06)",
        "glass-border": "rgba(255,255,255,0.12)",
        ink: {
          DEFAULT: "#F5F6FA",
          muted: "#9CA3C4",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Satoshi", "sans-serif"],
        body: ["var(--font-inter)", "Satoshi", "sans-serif"],
      },
      backgroundImage: {
        "gradient-mesh":
          "radial-gradient(at 20% 20%, rgba(108,99,255,0.35) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(0,212,255,0.25) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(168,85,247,0.30) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(236,72,153,0.18) 0px, transparent 50%)",
        "aurora-1": "linear-gradient(135deg, #6C63FF 0%, #00D4FF 50%, #A855F7 100%)",
        noise: "url('/noise.svg')",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(108,99,255,0.55)",
        "glow-cyan": "0 0 40px -8px rgba(0,212,255,0.55)",
        "glow-purple": "0 0 40px -8px rgba(168,85,247,0.55)",
        "glass-inset": "inset 0 1px 0 0 rgba(255,255,255,0.08)",
      },
      backdropBlur: {
        glass: "20px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "aurora-move": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(4%,6%) scale(1.08)" },
          "66%": { transform: "translate(-4%,-4%) scale(0.96)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "reveal-up": {
          "0%": { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "aurora-move": "aurora-move 18s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3.5s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "reveal-up": "reveal-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
