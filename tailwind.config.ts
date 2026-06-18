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
        background: "#FAF6EF",
        foreground: "#342820",
        primary: {
          DEFAULT: "#872F38",
          foreground: "#FBF7F0",
        },
        muted: {
          DEFAULT: "#EDE6DA",
          foreground: "#75685C",
        },
        card: {
          DEFAULT: "#FFFCF7",
          foreground: "#342820",
        },
        border: "#E2D6C8",
        burgundy: "#872F38",
        gold: "#B08D4F",
        cream: "#FAF6EF",
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
