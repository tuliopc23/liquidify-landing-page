import React, { useState, useEffect } from "react";
import { css, cx } from "../../styled-system/css";
import { button, containerX, navLink } from "../pandaStyles";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        backgroundColor: isScrolled ? "rgba(255,255,255,0.8)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : undefined,
        borderBottomWidth: isScrolled ? "1px" : undefined,
        borderColor: isScrolled ? "system-gray-200" : undefined,
      })}
    >
      <div className={containerX}>
        <div className={css({ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4rem" })}>
          <div className={css({ display: "flex", alignItems: "center", columnGap: "0.75rem" })}>
            <div className={css({ width: "2rem", height: "2rem", backgroundColor: "apple-blue", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" })}>
              <i className={css({ color: "white", fontSize: "0.875rem" }) + " bi bi-droplet-fill"}></i>
            </div>
            <span className={css({ fontFamily: "sans", fontWeight: 600, fontSize: "1.25rem", color: "system-gray-900" })}>
              LiqUIdify
            </span>
          </div>

          {/* Desktop Menu */}
          <div className={css({ display: { base: "none", md: "flex" }, alignItems: "center", columnGap: "2rem" })}>
            <a href="#components" className={navLink}>Components</a>
            <a href="#features" className={navLink}>Features</a>
            <a href="#docs" className={navLink}>Documentation</a>
            <a
              href="https://github.com/tuliopc23/LiqUIdify"
              target="_blank"
              rel="noopener noreferrer"
              className={cx(css({ display: "flex", alignItems: "center", columnGap: "0.5rem" }), navLink)}
            >
              <i className="bi bi-github"></i>
              <span>GitHub</span>
            </a>
            <button className={button({ intent: "primary" }) + " " + css({ fontSize: "0.875rem" })}>Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={css({ display: { base: "block", md: "none" }, padding: "0.5rem" })}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={cx("bi", isMobileMenuOpen ? "bi-x" : "bi-list", css({ fontSize: "1.25rem", color: "system-gray-900" }))}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={cx(css({ display: { base: "block", md: "none" }, marginTop: "0.5rem", padding: "1rem" }), /* glass card */ css({
            backgroundColor: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(20px)",
            borderWidth: "1px",
            borderColor: "rgba(255,255,255,0.3)",
            borderRadius: "1rem",
          }))}>
            <div className={css({ display: "flex", flexDirection: "column", rowGap: "1rem" })}>
              <a href="#components" className={navLink}>Components</a>
              <a href="#features" className={navLink}>Features</a>
              <a href="#docs" className={navLink}>Documentation</a>
              <a
                href="https://github.com/tuliopc23/LiqUIdify"
                target="_blank"
                rel="noopener noreferrer"
                className={cx(css({ display: "flex", alignItems: "center", columnGap: "0.5rem" }), navLink)}
              >
                <i className="bi bi-github"></i>
                <span>GitHub</span>
              </a>
              <button className={button({ intent: "primary" }) + " " + css({ fontSize: "0.875rem", width: "100%" })}>Get Started</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
