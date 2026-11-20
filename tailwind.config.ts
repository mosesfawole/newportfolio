import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: "#ffffff",
        ink: "#111111",
        surface: "#f0f0ee",
        "surface-dark": "#1a1a1a",
        muted: "#626662",
        border: "#e0e0de",
        "border-dark": "#2a2a2a",
      },
      fontFamily: {
        display: ["var(--font-heading)", "sans-serif"],
        body: ["-apple-system", "BlinkMacSystemFont", "Segoe UI Variable", "Segoe UI", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
