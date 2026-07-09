import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: "#0A0A0A",
        graphite: "#1C1C1C",
        gold: "#22C55E",
        silver: "#CFCFCF",
        ivory: "#FFFFFF",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-poppins)", "Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(34, 197, 94, 0.32)",
      },
    },
  },
  plugins: [],
};

export default config;
