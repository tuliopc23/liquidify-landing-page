import { css, cva, cx } from "../styled-system/css";

// Reusable buttons
export const button = cva({
  base: {
    fontFamily: "sans",
    fontWeight: 500,
    px: "1.5rem", // ~px-6
    py: "0.75rem", // ~py-3
    borderRadius: "1rem", // ~rounded-xl
    transitionProperty: "all",
    transitionDuration: "200ms",
    transform: "translateZ(0)",
    _hover: { transform: "scale(1.05)" },
  },
  variants: {
    intent: {
      primary: {
        backgroundColor: "primary",
        color: "white",
        boxShadow: "lg",
        _hover: { backgroundColor: "primary" },
      },
      secondary: {
        backgroundColor: "bg.surface",
        color: "text",
        borderWidth: "1px",
        borderColor: "border.default",
        _hover: { backgroundColor: "bg.subtle" },
      },
    },
  },
  defaultVariants: { intent: "primary" },
});

// Card surfaces
export const card = css({
  backgroundColor: "bg.surface",
  backdropFilter: "blur(4px)", // ~backdrop-blur-sm
  borderWidth: "1px",
  borderColor: "border.default",
  borderRadius: "1rem", // ~rounded-2xl
  boxShadow: "sm",
  transition: "box-shadow 300ms ease, transform 300ms ease",
  _hover: { boxShadow: "md" },
});

export const cardGlass = css({
  // HIG-friendly neutral liquid glass surface
  position: "relative",
  backgroundColor: "glass.bg",
  backdropFilter: "blur(20px)", // ~backdrop-blur-xl
  borderWidth: "1px",
  borderColor: "glass.border",
  borderRadius: "glass",
  boxShadow: "lg",
  transition: "box-shadow 300ms ease, transform 300ms ease",
  _before: {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    pointerEvents: "none",
    backgroundImage:
      "linear-gradient(180deg, rgba(255,255,255,.35), transparent 40%), radial-gradient(120% 100% at 0% 0%, color-mix(in oklab, var(--colors-glass-tint), transparent 92%), transparent 60%)",
  },
  _hover: { boxShadow: "xl" },
});

// Common link style (gray → apple-blue on hover)
export const navLink = css({
  fontFamily: "sans",
  color: "muted",
  transition: "color 150ms ease",
  _hover: { color: "link" },
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
    animation: "float 20s ease-in-out infinite",
  });

export const gridPattern = css({
  backgroundImage:
    "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--colors-primary), transparent 90%) 1px, transparent 0)",
  backgroundSize: "20px 20px",
});

export const fontSans = css({ fontFamily: "sans" });
export const fontText = css({ fontFamily: "text" });
export const fontDisplay = css({ fontFamily: "display" });
// Semantic typography aligned to Apple iOS Text Styles
export const typography = cva({
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
