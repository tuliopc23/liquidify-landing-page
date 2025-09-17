import React, { useEffect, useState } from "react";
import { css, cx } from "../../styled-system/css";
import { containerX, navLink } from "../pandaStyles";
import { useTheme } from "../theme";
import type { ThemeMode } from "../theme";
import { LiquidifyBrand } from "./BrandAssets";

const themeOptions: Array<{ mode: ThemeMode; label: string }> = [
  { mode: "light", label: "Light" },
  { mode: "dark", label: "Dark" },
  { mode: "system", label: "Auto" },
];

const toggleRoot = css({
  display: "inline-flex",
  alignItems: "center",
  padding: "0.125rem",
  borderRadius: "999px",
  borderWidth: "1px",
  borderColor: "apple-blue",
  backgroundColor: {
    base: "rgba(255,255,255,0.82)",
    _dark: "rgba(14,14,22,0.88)",
  },
  boxShadow: "0 12px 28px rgba(10,132,255,0.24)",
  gap: "0.25rem",
});

const toggleOption = css({
  paddingInline: "0.875rem",
  paddingBlock: "0.35rem",
  borderRadius: "999px",
  border: "none",
  backgroundColor: "transparent",
  color: { base: "apple-blue", _dark: "#69b4ff" },
  fontFamily: "text",
  fontSize: "0.875rem",
  fontWeight: 500,
  lineHeight: 1.2,
  cursor: "pointer",
  transition:
    "background-color 150ms ease, color 150ms ease, box-shadow 150ms ease",
  WebkitTapHighlightColor: "transparent",
  _hover: { backgroundColor: "rgba(10,132,255,0.1)" },
  _focusVisible: {
    outline: "none",
    boxShadow:
      "0 0 0 2px color-mix(in oklab, var(--colors-apple-blue), transparent 55%)",
  },
});

const toggleOptionActive = css({
  backgroundColor: "apple-blue",
  color: "white",
  boxShadow: "0 12px 26px rgba(10,132,255,0.36)",
  _hover: { backgroundColor: "#0a7aff" },
  _dark: {
    backgroundColor: "#0a84ff",
    boxShadow: "0 14px 30px rgba(10,132,255,0.44)",
  },
});

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mode, setMode] = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBase = css({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "background-color 240ms ease, box-shadow 240ms ease",
    backdropFilter: "blur(24px)",
    borderBottomWidth: "1px",
    borderColor: { base: "rgba(0,0,0,0.06)", _dark: "rgba(255,255,255,0.14)" },
    backgroundColor: {
      base: "rgba(255,255,255,0.65)",
      _dark: "rgba(8,8,14,0.65)",
    },
    boxShadow: "none",
  });

  const navSolid = css({
    backgroundColor: {
      base: "rgba(255,255,255,0.92)",
      _dark: "rgba(12,12,18,0.9)",
    },
    boxShadow: "0 18px 44px rgba(15,23,42,0.08)",
  });

  return (
    <nav
      className={cx(navBase, isScrolled ? navSolid : undefined)}
      aria-label="Global"
    >
      <div
        className={cx(
          containerX,
          css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: "0.75rem",
          }),
        )}
      >
        <a
          href="/"
          className={css({
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            color: "text",
            _hover: { color: "text" },
          })}
          aria-label="Liquidify home"
        >
          <LiquidifyBrand size={32} wordmarkRole="headline" />
        </a>
        <div
          className={css({
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          })}
        >
          <a href="#features" className={navLink}>
            Features
          </a>
          <a href="#docs" className={navLink}>
            Docs
          </a>
          <div role="radiogroup" aria-label="Theme mode" className={toggleRoot}>
            {themeOptions.map((option) => {
              const selected = mode === option.mode;
              return (
                <button
                  key={option.mode}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  aria-label={`${option.label} theme`}
                  className={cx(
                    toggleOption,
                    selected ? toggleOptionActive : undefined,
                  )}
                  data-state={selected ? "on" : "off"}
                  onClick={() => {
                    if (!selected) setMode(option.mode);
                  }}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
