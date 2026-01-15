import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "neutral-offwhite": "var(--neutral-offwhite)",
        "neutral-dark-gray": "var(--neutral-dark-gray)",
        "neutral-black": "var(--neutral-black)",
        "neutral-gray": "var(--neutral-gray)",
      },
      fontFamily: {
        bebas: ["var(--font-bebas-neue)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
