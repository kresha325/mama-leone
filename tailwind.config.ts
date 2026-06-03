import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F1E9",
        foreground: "#2A1F1A",
        primary: {
          DEFAULT: "#9B393E",
          foreground: "#F5F1E9",
        },
        muted: {
          DEFAULT: "#E8E0D4",
          foreground: "#6B5E54",
        },
        card: {
          DEFAULT: "#FAF7F0",
          foreground: "#2A1F1A",
        },
        border: "#D9CFC0",
        burgundy: "#9B393E",
        gold: "#A88442",
        cream: "#F5F1E9",
      },
      fontFamily: {
        script: ["var(--font-great-vibes)", "cursive"],
        display: ["var(--font-playfair)", "serif"],
        menu: ["var(--font-oswald)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "ken-burns": "kenBurns 1.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
