import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0b",
        paper: "#ffffff",
        carbon: "#262626"
      },
      fontFamily: {
        sans: ["Inter", "Aptos", "Arial", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 22px 70px rgba(22, 22, 22, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
