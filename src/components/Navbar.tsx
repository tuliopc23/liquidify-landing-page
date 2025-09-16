import React, { useEffect, useState } from "react";
import { css, cx } from "../../styled-system/css";
import { button, containerX, navLink } from "../pandaStyles";
import { useTheme, cycleTheme } from "../theme";
import { LiquidifyBrand } from "./BrandAssets";

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
          <button
            onClick={() => setMode(cycleTheme(mode))}
            className={button({ intent: "outline", size: "sm" })}
            aria-label="Toggle theme"
          >
            Theme
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
