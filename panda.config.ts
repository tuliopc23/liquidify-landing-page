import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  // Generate to styled-system/ per Panda conventions
  outdir: "./styled-system",
  include: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    tokens: {
      colors: {
        // Mirror Tailwind tokens from src/index.css @theme
        "apple-blue": { value: "#007aff" },
        "apple-purple": { value: "#af52de" },
        "apple-pink": { value: "#ff2d92" },
        "apple-red": { value: "#ff3b30" },
        "apple-orange": { value: "#ff9500" },
        "apple-yellow": { value: "#ffcc00" },
        "apple-green": { value: "#34c759" },
        "apple-mint": { value: "#00c7be" },
        "apple-teal": { value: "#30b0c7" },
        "apple-cyan": { value: "#32d74b" },
        "apple-indigo": { value: "#5856d6" },
        "system-gray-50": { value: "#f9f9f9" },
        "system-gray-100": { value: "#f2f2f7" },
        "system-gray-200": { value: "#e5e5ea" },
        "system-gray-300": { value: "#d1d1d6" },
        "system-gray-400": { value: "#c7c7cc" },
        "system-gray-500": { value: "#aeaeb2" },
        "system-gray-600": { value: "#8e8e93" },
        "system-gray-700": { value: "#636366" },
        "system-gray-800": { value: "#48484a" },
        "system-gray-900": { value: "#1c1c1e" },
      },
      fonts: {
        inter: { value: 'Inter, system-ui, sans-serif' },
        sans: { value: 'Inter, system-ui, sans-serif' },
      },
      radii: {
        xl: { value: "0.75rem" },
        '2xl': { value: "1rem" },
      },
    },
  },
  // Optional: custom utilities that mirror Tailwind-y shorthands we use often
  utilities: {
    // Example utility for grid-pattern background if needed later
  },
});

