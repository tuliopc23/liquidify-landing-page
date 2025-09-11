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
        backgroundColor: "apple-blue",
        color: "white",
        _hover: { backgroundColor: "apple-blue" },
      },
      secondary: {
        backgroundColor: "system-gray-100",
        color: "system-gray-900",
        _hover: { backgroundColor: "system-gray-200" },
      },
    },
  },
  defaultVariants: { intent: "primary" },
});

// Card surfaces
export const card = css({
  backgroundColor: "rgba(255,255,255,0.8)",
  backdropFilter: "blur(4px)", // ~backdrop-blur-sm
  borderWidth: "1px",
  borderColor: "system-gray-200",
  borderRadius: "1rem", // ~rounded-2xl
  boxShadow: "0 1px 2px rgba(0,0,0,0.06)", // ~shadow-sm
  transition: "box-shadow 300ms ease, transform 300ms ease",
  _hover: { boxShadow: "0 10px 20px rgba(0,0,0,0.08)" }, // ~shadow-md
});

export const cardGlass = css({
  backgroundColor: "rgba(255,255,255,0.6)",
  backdropFilter: "blur(20px)", // ~backdrop-blur-xl
  borderWidth: "1px",
  borderColor: "rgba(255,255,255,0.3)",
  borderRadius: "1rem",
  boxShadow: "0 10px 15px rgba(0,0,0,0.1)", // ~shadow-lg
  transition: "box-shadow 300ms ease, transform 300ms ease",
  _hover: { boxShadow: "0 20px 25px rgba(0,0,0,0.15)" }, // ~shadow-xl
});

// Common link style (gray → apple-blue on hover)
export const navLink = css({
  fontFamily: "sans",
  color: "system-gray-700",
  transition: "color 150ms ease",
  _hover: { color: "apple-blue" },
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
    "radial-gradient(circle at 1px 1px, rgba(0, 122, 255, 0.1) 1px, transparent 0)",
  backgroundSize: "20px 20px",
});

export const fontSans = css({ fontFamily: "sans" });
export const textGray = (shade: 600 | 700 | 900) =>
  css({ color: `system-gray-${shade}` as any });

export { cx };

