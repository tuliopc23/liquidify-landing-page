const tokens = {
  "colors.apple-blue": {
    "value": "#007aff",
    "variable": "var(--colors-apple-blue)"
  },
  "colors.apple-purple": {
    "value": "#af52de",
    "variable": "var(--colors-apple-purple)"
  },
  "colors.apple-pink": {
    "value": "#ff2d92",
    "variable": "var(--colors-apple-pink)"
  },
  "colors.apple-red": {
    "value": "#ff3b30",
    "variable": "var(--colors-apple-red)"
  },
  "colors.apple-orange": {
    "value": "#ff9500",
    "variable": "var(--colors-apple-orange)"
  },
  "colors.apple-yellow": {
    "value": "#ffcc00",
    "variable": "var(--colors-apple-yellow)"
  },
  "colors.apple-green": {
    "value": "#34c759",
    "variable": "var(--colors-apple-green)"
  },
  "colors.apple-mint": {
    "value": "#00c7be",
    "variable": "var(--colors-apple-mint)"
  },
  "colors.apple-teal": {
    "value": "#30b0c7",
    "variable": "var(--colors-apple-teal)"
  },
  "colors.apple-cyan": {
    "value": "#32d74b",
    "variable": "var(--colors-apple-cyan)"
  },
  "colors.apple-indigo": {
    "value": "#5856d6",
    "variable": "var(--colors-apple-indigo)"
  },
  "colors.system-gray-50": {
    "value": "#f9f9f9",
    "variable": "var(--colors-system-gray-50)"
  },
  "colors.system-gray-100": {
    "value": "#f2f2f7",
    "variable": "var(--colors-system-gray-100)"
  },
  "colors.system-gray-200": {
    "value": "#e5e5ea",
    "variable": "var(--colors-system-gray-200)"
  },
  "colors.system-gray-300": {
    "value": "#d1d1d6",
    "variable": "var(--colors-system-gray-300)"
  },
  "colors.system-gray-400": {
    "value": "#c7c7cc",
    "variable": "var(--colors-system-gray-400)"
  },
  "colors.system-gray-500": {
    "value": "#aeaeb2",
    "variable": "var(--colors-system-gray-500)"
  },
  "colors.system-gray-600": {
    "value": "#8e8e93",
    "variable": "var(--colors-system-gray-600)"
  },
  "colors.system-gray-700": {
    "value": "#636366",
    "variable": "var(--colors-system-gray-700)"
  },
  "colors.system-gray-800": {
    "value": "#48484a",
    "variable": "var(--colors-system-gray-800)"
  },
  "colors.system-gray-900": {
    "value": "#1c1c1e",
    "variable": "var(--colors-system-gray-900)"
  },
  "fonts.inter": {
    "value": "Inter, system-ui, sans-serif",
    "variable": "var(--fonts-inter)"
  },
  "fonts.sans": {
    "value": "Inter, system-ui, sans-serif",
    "variable": "var(--fonts-sans)"
  },
  "radii.xl": {
    "value": "0.75rem",
    "variable": "var(--radii-xl)"
  },
  "radii.2xl": {
    "value": "1rem",
    "variable": "var(--radii-2xl)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar