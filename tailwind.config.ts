import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#07090e",
        surface: "#0d111a",
        surfaceCard: "#101522",
        emeraldGlow: "#10b981",
        cyanGlow: "#06b6d4",
        violetGlow: "#8b5cf6",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        heading: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 8s infinite alternate ease-in-out",
      },
      keyframes: {
        glowPulse: {
          "0%": { transform: "scale(0.95)", opacity: "0.6" },
          "100%": { transform: "scale(1.1)", opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
