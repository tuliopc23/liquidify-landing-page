/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        apple: {
          blue: "#007AFF",
          purple: "#AF52DE",
          pink: "#FF2D92",
          red: "#FF3B30",
          orange: "#FF9500",
          yellow: "#FFCC00",
          green: "#34C759",
          mint: "#00C7BE",
          teal: "#30B0C7",
          cyan: "#32D74B",
          indigo: "#5856D6",
        },
        system: {
          gray: {
            50: "#F9F9F9",
            100: "#F2F2F7",
            200: "#E5E5EA",
            300: "#D1D1D6",
            400: "#C7C7CC",
            500: "#AEAEB2",
            600: "#8E8E93",
            700: "#636366",
            800: "#48484A",
            900: "#1C1C1E",
          },
        },
      },
      backgroundImage: {
        "subtle-gradient":
          "linear-gradient(180deg, rgba(0,122,255,0.05) 0%, rgba(175,82,222,0.05) 100%)",
      },
    },
  },
  plugins: [],
};
