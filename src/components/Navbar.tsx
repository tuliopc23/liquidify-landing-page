import React, { useEffect, useState } from "react";
import { css, cx } from "../../styled-system/css";
import { button, containerX, navLink } from "../pandaStyles";
import { useTheme, cycleTheme } from "../theme";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mode, setMode] = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={css({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transitionProperty: "all",
        transitionDuration: "300ms",
        backgroundColor: isScrolled ? "glass.bg" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : undefined,
        borderBottomWidth: isScrolled ? "1px" : undefined,
        borderColor: isScrolled ? "border.default" : undefined,
      })}
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
            fontFamily: "display",
            fontWeight: 700,
            letterSpacing: "titles",
          })}
        >
          Liquidify
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
            className={button({ intent: "neutral", size: "sm" })}
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
