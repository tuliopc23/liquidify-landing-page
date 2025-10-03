import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  // Generate to styled-system/ per Panda conventions
  outdir: "./styled-system",
  include: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    tokens: {
      colors: {
        // Apple HIG-inspired palette (primary accent is iOS Blue)
        "apple-blue": { value: "#007AFF" },
        "apple-indigo": { value: "#5856D6" },
        // Alias used across components
        "apple-purple": { value: "#5856D6" },
        "apple-pink": { value: "#FF2D55" },
        "apple-red": { value: "#FF3B30" },
        "apple-orange": { value: "#FF9500" },
        "apple-yellow": { value: "#FFCC00" },
        "apple-green": { value: "#4CD964" },
        "apple-teal": { value: "#34AADC" },
        "apple-cyan": { value: "#5AC8FA" },

        // Additional contextual swatches from the provided list
        "apple-red-orange": { value: "#FF1300" },
        "apple-tomato": { value: "#FF3A2D" },
        "apple-pink-light": { value: "#FFD3E0" },
        "apple-taupe": { value: "#D6CEC3" },

        // MB Studio brand colors
        "mb-navy": { value: "#0A1926" },
        "mb-surface": { value: "#183044" },
        "mb-orange": { value: "#CE6C47" },

        // System grays aligned with iOS neutrals
        "system-gray-50": { value: "#F7F7F7" },
        "system-gray-100": { value: "#F7F7F7" },
        "system-gray-200": { value: "#C7C7CC" },
        "system-gray-300": { value: "#BDBEC2" },
        "system-gray-400": { value: "#C7C7CC" },
        "system-gray-500": { value: "#8E8E93" },
        "system-gray-600": { value: "#8E8E93" },
        "system-gray-700": { value: "#636366" },
        "system-gray-800": { value: "#48484A" },
        "system-gray-900": { value: "#1F1F21" },
        white: { value: "#FFFFFF" },
        black: { value: "#000000" },
      },
      fonts: {
        display: {
          value:
            "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, system-ui, sans-serif",
        },
        text: {
          value:
            "'SF Pro Text', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, system-ui, sans-serif",
        },
        // Keep 'sans' as the default body font for backward compatibility
        sans: {
          value:
            "'SF Pro Text', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, system-ui, sans-serif",
        },
        inter: {
          value:
            "'SF Pro Text', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, system-ui, sans-serif",
        },
        mono: {
          value:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        },
        // MB Studio brand fonts
        caladea: {
          value:
            "Caladea, 'Times New Roman', Georgia, serif",
        },
        wixMadefor: {
          value:
            "'Wix Madefor Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, system-ui, sans-serif",
        },
      },
      fontSizes: {
        display: { value: "2.25rem" },
        largeTitle: { value: "2.125rem" },
        title1: { value: "1.75rem" },
        title2: { value: "1.375rem" },
        title3: { value: "1.25rem" },
        headline: { value: "1.0625rem" },
        body: { value: "1.0625rem" },
        callout: { value: "1rem" },
        subheadline: { value: "0.9375rem" },
        footnote: { value: "0.8125rem" },
        caption: { value: "0.75rem" },
      },
      lineHeights: {
        display: { value: "1.1" },
        largeTitle: { value: "1.2" },
        title1: { value: "1.25" },
        title2: { value: "1.27" },
        title3: { value: "1.25" },
        headline: { value: "1.3" },
        body: { value: "1.45" },
        callout: { value: "1.35" },
        subheadline: { value: "1.35" },
        footnote: { value: "1.4" },
        caption: { value: "1.35" },
      },
      letterSpacings: {
        display: { value: "-0.02em" },
        titles: { value: "-0.01em" },
        body: { value: "0em" },
      },
      radii: {
        xl: { value: "0.75rem" },
        "2xl": { value: "1rem" },
        full: { value: "9999px" },
        glass: { value: "1rem" },
      },
      shadows: {
        // Soft luminous shadows that suit glass surfaces
        sm: { value: "0 1px 2px rgba(0,0,0,0.06)" },
        md: { value: "0 10px 20px rgba(0,0,0,0.08)" },
        lg: { value: "0 20px 30px rgba(0,0,0,0.12)" },
        xl: { value: "0 32px 48px rgba(0,0,0,0.16)" },
      },
      blurs: {
        "glass-sm": { value: "12px" },
        "glass-md": { value: "18px" },
        "glass-lg": { value: "28px" },
      },
    },
    semanticTokens: {
      colors: {
        // Text colors
        text: {
          value: {
            base: "#0b0b0d",
            _dark: "#f5f5f7",
          },
        },
        muted: {
          value: {
            base: "{colors.system-gray-600}",
            _dark: "rgba(226,226,235,0.82)",
          },
        },
        link: {
          value: { base: "{colors.apple-blue}", _dark: "{colors.apple-blue}" },
        },

        // Brand / status
        primary: {
          value: { base: "{colors.apple-blue}", _dark: "{colors.apple-blue}" },
        },
        success: {
          value: {
            base: "{colors.apple-green}",
            _dark: "{colors.apple-green}",
          },
        },
        warning: {
          value: {
            base: "{colors.apple-orange}",
            _dark: "{colors.apple-orange}",
          },
        },
        danger: {
          value: { base: "{colors.apple-red}", _dark: "{colors.apple-red}" },
        },
        info: {
          value: {
            base: "{colors.apple-indigo}",
            _dark: "{colors.apple-indigo}",
          },
        },

        // Surfaces
        "bg.canvas": {
          value: { base: "#f5f5f7", _dark: "#050509" },
        },
        "bg.subtle": {
          value: {
            base: "{colors.system-gray-50}",
            _dark: "rgba(255,255,255,0.06)",
          },
        },
        "bg.surface": {
          value: {
            base: "rgba(255,255,255,0.94)",
            _dark: "rgba(22,22,30,0.92)",
          },
        },
        "border.default": {
          value: {
            base: "{colors.system-gray-200}",
            _dark: "rgba(255,255,255,0.18)",
          },
        },

        // Liquid glass tokens
        "glass.bg": {
          value: {
            base: "rgba(255,255,255,0.6)",
            _dark: "rgba(255,255,255,0.08)",
          },
        },
        "glass.border": {
          value: {
            base: "rgba(255,255,255,0.30)",
            _dark: "rgba(255,255,255,0.18)",
          },
        },
        "glass.ring": {
          value: {
            base: "rgba(0,122,255,0.20)",
            _dark: "rgba(0,122,255,0.20)",
          },
        },
        "glass.tint": {
          value: { base: "{colors.apple-blue}", _dark: "{colors.apple-blue}" },
        },
        "glass.stroke": {
          value: {
            base: "rgba(255,255,255,0.45)",
            _dark: "rgba(255,255,255,0.18)",
          },
        },
        "glass.surface": {
          value: {
            base: "rgba(255,255,255,0.72)",
            _dark: "rgba(16,18,28,0.72)",
          },
        },
        "glass.surface-elevated": {
          value: {
            base: "rgba(255,255,255,0.86)",
            _dark: "rgba(14,16,26,0.86)",
          },
        },

        // MB Studio semantic colors
        "mb.bg": {
          value: { base: "#f5f5f7", _dark: "{colors.mb-navy}" },
        },
        "mb.surface": {
          value: {
            base: "rgba(255,255,255,0.94)",
            _dark: "{colors.mb-surface}",
          },
        },
        "mb.accent": {
          value: { base: "{colors.mb-orange}", _dark: "{colors.mb-orange}" },
        },
        "mb.button-primary": {
          value: { base: "#1F1F21", _dark: "{colors.mb-orange}" },
        },
      },
      blurs: {
        "glass.surface": {
          value: { base: "{blurs.glass-md}", _dark: "{blurs.glass-md}" },
        },
        "glass.strong": {
          value: { base: "{blurs.glass-lg}", _dark: "{blurs.glass-lg}" },
        },
      },
      shadows: {
        "elevation.card-compact.base": {
          value: {
            base: "inset 0 1px 0 rgba(255,255,255,0.68), 0 5px 12px rgba(15,23,42,0.06), 0 16px 30px rgba(15,23,42,0.1), 0 30px 52px rgba(15,23,42,0.08)",
            _dark:
              "inset 0 1px 0 rgba(255,255,255,0.08), 0 14px 32px rgba(0,0,0,0.54), 0 32px 68px rgba(0,0,0,0.5), 0 54px 100px rgba(0,0,0,0.48)",
          },
        },
        "elevation.card-standard.base": {
          value: {
            base: "inset 0 1px 0 rgba(255,255,255,0.68), 0 6px 14px rgba(15,23,42,0.08), 0 20px 40px rgba(15,23,42,0.12), 0 40px 70px rgba(15,23,42,0.1)",
            _dark:
              "inset 0 1px 0 rgba(255,255,255,0.08), 0 16px 36px rgba(0,0,0,0.58), 0 36px 78px rgba(0,0,0,0.55), 0 64px 110px rgba(0,0,0,0.52)",
          },
        },
        "elevation.card.hoverInteractive": {
          value: {
            base: "0 14px 32px rgba(15,23,42,0.16), 0 36px 68px rgba(15,23,42,0.18), 0 62px 110px rgba(15,23,42,0.2)",
            _dark:
              "0 20px 48px rgba(0,0,0,0.68), 0 46px 94px rgba(0,0,0,0.72), 0 76px 130px rgba(0,0,0,0.68)",
          },
        },
        "elevation.card.hoverPassive": {
          value: {
            base: "0 10px 24px rgba(15,23,42,0.12), 0 28px 52px rgba(15,23,42,0.14), 0 48px 80px rgba(15,23,42,0.16)",
            _dark:
              "0 16px 40px rgba(0,0,0,0.62), 0 40px 84px rgba(0,0,0,0.66), 0 68px 120px rgba(0,0,0,0.62)",
          },
        },
      },
      gradients: {
        "glass.highlight": {
          value: {
            base: "linear-gradient(180deg, rgba(255,255,255,0.32), rgba(255,255,255,0) 50%), radial-gradient(120% 100% at 0% 0%, color-mix(in oklab, var(--colors-glass-tint), transparent 92%), transparent 65%)",
            _dark:
              "linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0) 55%), radial-gradient(120% 100% at 0% 0%, color-mix(in oklab, var(--colors-glass-tint), transparent 94%), transparent 70%)",
          },
        },
      },
    },
    keyframes: {
      float: {
        "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
        "33%": { transform: "translateY(-30px) rotate(120deg)" },
        "66%": { transform: "translateY(15px) rotate(240deg)" },
      },
      pulse: {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0.5 },
      },
    },
  },
  // Optional: custom utilities placeholder (unused for now)
  utilities: {},
});
