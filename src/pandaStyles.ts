import { css, cva, cx } from "../styled-system/css";

// Reusable buttons
export const button = cva({
  base: {
    fontFamily: "sans",
    fontWeight: 600,
    borderRadius: "full",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.375rem",
    lineHeight: 1.2,
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
    transitionProperty: "all",
    transitionDuration: "180ms",
    transitionTimingFunction: "var(--ease-out-quad)",
    transform: "translateZ(0)",
    _hover: { transform: "translateY(-1px)" },
    _active: { transform: "translateY(0)" },
    _focusVisible: {
      outline: "none",
      boxShadow:
        "0 0 0 3px color-mix(in oklab, var(--colors-apple-blue), transparent 55%)",
    },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
  variants: {
    intent: {
      primary: {
        color: "white",
        borderWidth: "1px",
        borderColor: "apple-blue",
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.05))",
        backgroundColor: "apple-blue",
        boxShadow: "0 14px 38px rgba(10,132,255,0.38)",
        _hover: {
          backgroundColor: "#0a7aff",
          boxShadow: "0 18px 44px rgba(10,132,255,0.42)",
        },
        _dark: {
          backgroundColor: "#0a84ff",
          borderColor: "#0a84ff",
          boxShadow: "0 20px 46px rgba(10,132,255,0.48)",
        },
      },
      neutral: {
        color: { base: "#1d1d1f", _dark: "rgba(240,240,245,0.9)" },
        borderWidth: "1px",
        borderColor: {
          base: "rgba(0,0,0,0.08)",
          _dark: "rgba(255,255,255,0.18)",
        },
        backgroundColor: {
          base: "rgba(255,255,255,0.86)",
          _dark: "rgba(24,24,30,0.9)",
        },
        boxShadow: {
          base: "0 14px 30px rgba(15,23,42,0.12)",
          _dark: "0 20px 48px rgba(0,0,0,0.6)",
        },
        _hover: {
          backgroundColor: {
            base: "rgba(255,255,255,0.94)",
            _dark: "rgba(30,30,38,0.92)",
          },
          boxShadow: {
            base: "0 18px 36px rgba(15,23,42,0.16)",
            _dark: "0 24px 54px rgba(0,0,0,0.64)",
          },
        },
      },
      outline: {
        color: "apple-blue",
        borderWidth: "1px",
        borderColor: "apple-blue",
        backgroundColor: "transparent",
        boxShadow: "none",
        _hover: {
          backgroundColor: "rgba(10,132,255,0.08)",
        },
        _dark: {
          color: "#69b4ff",
          borderColor: "rgba(10,132,255,0.65)",
          _hover: {
            backgroundColor: "rgba(10,132,255,0.12)",
          },
        },
      },
      secondary: {
        color: { base: "#1d1d1f", _dark: "rgba(240,240,245,0.9)" },
        borderWidth: "1px",
        borderColor: "border.default",
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02))",
        backgroundColor: "bg.surface",
        boxShadow: "0 12px 28px rgba(15,23,42,0.1)",
        _hover: {
          backgroundColor: "bg.subtle",
          boxShadow: "0 16px 36px rgba(15,23,42,0.14)",
        },
      },
    },
    size: {
      sm: {
        px: "1rem",
        py: "0.5rem",
        fontSize: "0.875rem",
        minHeight: "2.75rem",
      },
      md: {
        px: "1.25rem",
        py: "0.6875rem",
        fontSize: "1rem",
        minHeight: "2.75rem",
      },
      lg: {
        px: "1.625rem",
        py: "0.875rem",
        fontSize: "1.0625rem",
        minHeight: "3rem",
      },
    },
  },
  defaultVariants: { intent: "primary", size: "md" },
});

// Card surfaces
export const card = css({
  position: "relative",
  isolation: "isolate",
  backgroundColor: "glass.surface",
  backdropFilter: "blur(var(--blurs-glass-surface))",
  borderWidth: "1px",
  borderColor: "glass.stroke",
  borderRadius: "26px",
  boxShadow: "var(--shadows-elevation-card-standard-base)",
  transition:
    "box-shadow 280ms var(--ease-out-quad), transform 280ms var(--ease-out-quad)",
  _hover: { boxShadow: "var(--shadows-elevation-card-hoverPassive)" },
});

export const cardGlass = css({
  // HIG-friendly neutral liquid glass surface
  position: "relative",
  isolation: "isolate",
  backgroundColor: "glass.surface",
  backdropFilter: "blur(var(--blurs-glass-strong))",
  borderWidth: "1px",
  borderColor: "glass.stroke",
  borderRadius: "glass",
  boxShadow: "var(--shadows-elevation-card-standard-base)",
  overflow: "hidden",
  transition:
    "box-shadow 280ms var(--ease-out-quad), transform 280ms var(--ease-out-quad)",
  _before: {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    pointerEvents: "none",
    backgroundImage: "var(--gradients-glass-highlight)",
    opacity: { base: 0.9, _dark: 0.85 },
  },
  _after: {
    content: '""',
    position: "absolute",
    inset: "-1px",
    borderRadius: "inherit",
    pointerEvents: "none",
    border: "1px solid rgba(255,255,255,0.14)",
    mixBlendMode: "overlay",
    opacity: { base: 0.4, _dark: 0.2 },
  },
  _hover: { boxShadow: "var(--shadows-elevation-card-hoverInteractive)" },
});

// Common link style (gray → apple-blue on hover)
export const navLink = css({
  fontFamily: "sans",
  display: "inline-flex",
  alignItems: "center",
  color: { base: "muted", _dark: "rgba(232,232,237,0.78)" },
  paddingInline: "0.5rem",
  paddingBlock: "0.375rem",
  borderRadius: "0.5rem",
  textDecoration: "none",
  backgroundImage: "linear-gradient(currentColor, currentColor)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0 100%",
  backgroundSize: "0% 1px",
  transition:
    "color 150ms var(--ease-out-quad), background-color 150ms var(--ease-out-quad), background-size 180ms var(--ease-out-quad)",
  _hover: {
    color: "link",
    backgroundColor: {
      base: "rgba(0,0,0,0.04)",
      _dark: "rgba(255,255,255,0.08)",
    },
    backgroundSize: "100% 1px",
  },
});

// Helpers
export const containerX = css({
  maxWidth: "72rem", // ~max-w-6xl
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  sm: { paddingLeft: "1.5rem", paddingRight: "1.5rem" },
  lg: { paddingLeft: "2rem", paddingRight: "2rem" },
});

export const floatingElement = (bg: string) =>
  css({
    position: "absolute",
    borderRadius: "9999px",
    filter: "blur(24px)", // ~blur-3xl
    opacity: 0.3,
    backgroundColor: bg,
    animation: "float 20s var(--ease-in-out-quad) infinite",
  });

export const gridPattern = css({
  backgroundImage:
    "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--colors-primary), transparent 90%) 1px, transparent 0)",
  backgroundSize: "20px 20px",
  maskImage:
    "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.2) 40%, rgba(0,0,0,0))",
  WebkitMaskImage:
    "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.2) 40%, rgba(0,0,0,0))",
});

export const fontSans = css({ fontFamily: "sans" });
export const fontText = css({ fontFamily: "text" });
export const fontDisplay = css({ fontFamily: "display" });
// Semantic typography aligned to Apple iOS Text Styles
export const typography = cva({
  base: {
    color: "text",
  },
  variants: {
    role: {
      display: {
        fontFamily: "display",
        fontWeight: 700,
        fontSize: { base: "display", sm: "3rem", md: "3.75rem", lg: "4.5rem" },
        lineHeight: "display",
        letterSpacing: "display",
      },
      largeTitle: {
        fontFamily: "display",
        fontWeight: 600,
        fontSize: "largeTitle",
        lineHeight: "largeTitle",
        letterSpacing: "titles",
      },
      title1: {
        fontFamily: "display",
        fontWeight: 600,
        fontSize: "title1",
        lineHeight: "title1",
        letterSpacing: "titles",
      },
      title2: {
        fontFamily: "display",
        fontWeight: 600,
        fontSize: "title2",
        lineHeight: "title2",
        letterSpacing: "titles",
      },
      title3: {
        fontFamily: "display",
        fontWeight: 600,
        fontSize: "title3",
        lineHeight: "title3",
        letterSpacing: "titles",
      },
      headline: {
        fontFamily: "text",
        fontWeight: 600,
        fontSize: "headline",
        lineHeight: "headline",
        letterSpacing: "body",
      },
      body: {
        fontFamily: "text",
        fontWeight: 400,
        fontSize: "body",
        lineHeight: "body",
        letterSpacing: "body",
      },
      callout: {
        fontFamily: "text",
        fontWeight: 400,
        fontSize: "callout",
        lineHeight: "callout",
        letterSpacing: "body",
      },
      subheadline: {
        fontFamily: "text",
        fontWeight: 400,
        fontSize: "subheadline",
        lineHeight: "subheadline",
        letterSpacing: "body",
      },
      footnote: {
        fontFamily: "text",
        fontWeight: 400,
        fontSize: "footnote",
        lineHeight: "footnote",
        letterSpacing: "body",
      },
      caption: {
        fontFamily: "text",
        fontWeight: 400,
        fontSize: "caption",
        lineHeight: "caption",
        letterSpacing: "body",
      },
    },
  },
  defaultVariants: { role: "body" },
});
export const textGray = (shade: 600 | 700 | 900) =>
  css({ color: `system-gray-${shade}` as unknown as string });

export { cx };

/* -------------------------
 * Apple Docs-like enhancements
 * ------------------------- */

/** Pill for "New", "Now available", etc — tinted glass */
export const heroBadge = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    borderRadius: "9999px",
    px: "0.75rem",
    py: "0.375rem",
    fontFamily: "text",
    fontWeight: 600,
    fontSize: "caption",
    color: "text",
    backgroundColor: "glass.bg",
    borderWidth: "1px",
    borderColor: "glass.border",
    backdropFilter: "blur(20px)",
    boxShadow: "sm",
  },
  variants: {
    tone: {
      neutral: {},
      blue: {
        color: "white",
        backgroundColor: "apple-blue",
        _dark: { backgroundColor: "apple-blue" },
      },
      indigo: {
        color: "white",
        backgroundColor: "apple-indigo",
        _dark: { backgroundColor: "apple-indigo" },
      },
    },
  },
  defaultVariants: { tone: "neutral" },
});

/** Standard page section with vertical rhythm aligned to Apple docs */
export const pageSection = cva({
  base: {
    paddingY: "5rem",
    scrollMarginTop: "6rem",
    backgroundColor: {
      base: "bg.canvas",
      _dark: "#050509",
    },
  },
});

/** Section headline hierarchy (display-like spacing/weights) */
export const sectionTitle = cva({
  base: {
    fontFamily: "display",
    fontWeight: 700,
    letterSpacing: "titles",
    color: "text",
    marginBottom: "1rem",
    fontSize: { base: "title1", md: "2rem" },
  },
});

export const sectionLead = cva({
  base: {
    fontFamily: "text",
    color: "muted",
    maxWidth: "42rem",
    marginX: "auto",
  },
});
