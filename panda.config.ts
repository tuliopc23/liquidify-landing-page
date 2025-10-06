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
        // SF Pro fonts from fontapi.ir - available cross-platform
        display: {
          value:
            "'SF Pro Display', 'SF UI Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, system-ui, sans-serif",
        },
        text: {
          value:
            "'SF UI Text', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, system-ui, sans-serif",
        },
        // Keep 'sans' as the default body font for backward compatibility
        sans: {
          value:
            "'SF UI Text', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, system-ui, sans-serif",
        },
        // Inter alias now points to SF fonts for consistency
        inter: {
          value:
            "'SF UI Text', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, system-ui, sans-serif",
        },
        mono: {
          value:
            "'SF Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        },
      },
      fontSizes: {
        // HIG-precise typography (17pt base at 16px = 1.0625rem)
        // Exact point values from Apple Human Interface Guidelines
        display: { value: "2.25rem" }, // 36pt
        largeTitle: { value: "2.125rem" }, // 34pt
        title1: { value: "1.75rem" }, // 28pt
        title2: { value: "1.375rem" }, // 22pt
        title3: { value: "1.25rem" }, // 20pt
        headline: { value: "1.0625rem" }, // 17pt (Semibold)
        body: { value: "1.0625rem" }, // 17pt (Regular) - HIG standard
        callout: { value: "1rem" }, // 16pt
        subheadline: { value: "0.9375rem" }, // 15pt
        footnote: { value: "0.8125rem" }, // 13pt
        caption: { value: "0.75rem" }, // 12pt
      },
      durations: {
        // Standardized motion timing per Apple conventions
        instant: { value: "0ms" },
        fast: { value: "150ms" }, // Color transitions
        normal: { value: "250ms" }, // Transform, layout
        slow: { value: "350ms" }, // Page transitions
        slower: { value: "500ms" }, // Major state changes
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
        // Official Apple semantic color naming (HIG-aligned)
        // Primary text hierarchy
        label: {
          value: {
            base: "#1d1d1f", // Apple's exact primary text
            _dark: "#f5f5f7",
          },
        },
        secondaryLabel: {
          value: {
            base: "rgba(60,60,67,0.6)", // 60% opacity
            _dark: "rgba(235,235,245,0.6)",
          },
        },
        tertiaryLabel: {
          value: {
            base: "rgba(60,60,67,0.3)", // 30% opacity
            _dark: "rgba(235,235,245,0.3)",
          },
        },
        quaternaryLabel: {
          value: {
            base: "rgba(60,60,67,0.18)", // 18% opacity
            _dark: "rgba(235,235,245,0.18)",
          },
        },

        // Legacy aliases for backward compatibility
        text: {
          value: "{colors.label}",
        },
        muted: {
          value: "{colors.secondaryLabel}",
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

        // Background hierarchy (Apple semantic naming)
        systemBackground: {
          value: { base: "#ffffff", _dark: "#000000" },
        },
        secondarySystemBackground: {
          value: { base: "#f2f2f7", _dark: "#1c1c1e" },
        },
        tertiarySystemBackground: {
          value: { base: "#ffffff", _dark: "#2c2c2e" },
        },

        // Legacy aliases
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

        // OFFICIAL LIQUID GLASS VARIANTS (HIG-Compliant)
        // Reference: https://developer.apple.com/design/human-interface-guidelines/materials#Liquid-Glass

        // glass.regular - For text-heavy controls (navigation, alerts, sidebars)
        "glass.regular": {
          value: {
            base: "rgba(255,255,255,0.72)", // More opaque for text legibility
            _dark: "rgba(16,18,28,0.72)",
          },
        },

        // glass.clear - For media-rich backgrounds (video controls, photo overlays)
        "glass.clear": {
          value: {
            base: "rgba(255,255,255,0.4)", // Highly translucent
            _dark: "rgba(16,18,28,0.4)",
          },
        },

        // Standard materials for CONTENT (not Liquid Glass)
        "material.ultraThin": {
          value: {
            base: "rgba(255,255,255,0.78)",
            _dark: "rgba(22,22,30,0.74)",
          },
        },
        "material.thin": {
          value: {
            base: "rgba(255,255,255,0.84)",
            _dark: "rgba(22,22,30,0.80)",
          },
        },
        "material.regular": {
          value: {
            base: "rgba(255,255,255,0.90)",
            _dark: "rgba(22,22,30,0.86)",
          },
        },
        "material.thick": {
          value: {
            base: "rgba(255,255,255,0.96)",
            _dark: "rgba(22,22,30,0.92)",
          },
        },

        // Legacy Liquid Glass tokens (backward compatibility)
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
          value: "{colors.glass.regular}", // Alias to official variant
        },
        "glass.surface-elevated": {
          value: {
            base: "rgba(255,255,255,0.86)",
            _dark: "rgba(14,16,26,0.86)",
          },
        },
      },
      blurs: {
        // Official Liquid Glass blur variants
        "glass.regular": {
          value: { base: "18px", _dark: "20px" }, // Standard for navigation
        },
        "glass.clear": {
          value: { base: "12px", _dark: "14px" }, // Less blur for media
        },

        // Standard material blurs (for content)
        "material.standard": {
          value: { base: "12px", _dark: "12px" },
        },

        // Legacy aliases
        "glass.surface": {
          value: "{blurs.glass.regular}",
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
