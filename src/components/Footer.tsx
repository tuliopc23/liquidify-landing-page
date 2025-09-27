import React from "react";
import { css } from "../../styled-system/css";
import { LiquidifyBrand } from "./BrandAssets";

const Footer: React.FC = () => {
  return (
    <footer
      className={css({
        position: "relative",
        isolation: "isolate",
        backgroundColor: "glass.surface",
        backdropFilter: "blur(var(--blurs-glass-surface))",
        paddingY: "4rem",
        color: "text",
        borderTopWidth: "1px",
        borderColor: "glass.stroke",
        boxShadow: "var(--shadows-elevation-card-hoverPassive)",
        overflow: "hidden",
        _before: {
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: "var(--gradients-glass-highlight)",
          opacity: { base: 0.75, _dark: 0.6 },
          zIndex: -1,
        },
      })}
    >
      <div
        className={css({
          maxWidth: "72rem",
          marginX: "auto",
          paddingX: { base: "1rem", sm: "1.5rem", lg: "2rem" },
        })}
      >
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1fr", md: "repeat(4, 1fr)" },
            gap: "2rem",
            marginBottom: "3rem",
          })}
        >
          {/* Brand */}
          <div className={css({ gridColumn: { md: "span 2" } })}>
            <div className={css({ marginBottom: "1rem" })}>
              <LiquidifyBrand
                size={40}
                wordmarkRole="title3"
                className={css({ alignItems: "center" })}
              />
            </div>
            <p
              className={css({
                fontFamily: "sans",
                color: { base: "muted", _dark: "rgba(220,220,230,0.78)" },
                maxWidth: "28rem",
                marginBottom: "1.5rem",
                fontSize: "0.875rem",
                lineHeight: 1.7,
              })}
            >
              Bringing Apple's revolutionary Liquid Glass design language to
              React. Build beautiful, accessible interfaces with 60+ premium
              components.
            </p>
            <div className={css({ display: "flex", columnGap: "0.75rem" })}>
              <a
                href="https://github.com/tuliopc23/LiqUIdify"
                target="_blank"
                rel="noopener noreferrer"
                className={css({
                  width: "2.5rem",
                  height: "2.5rem",
                  backgroundColor: {
                    base: "bg.surface",
                    _dark: "rgba(18,18,26,0.95)",
                  },
                  borderWidth: "1px",
                  borderColor: {
                    base: "border.default",
                    _dark: "rgba(255,255,255,0.16)",
                  },
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition:
                    "background-color 150ms var(--ease-out-quad), border-color 150ms var(--ease-out-quad)",
                  _hover: {
                    backgroundColor: {
                      base: "bg.subtle",
                      _dark: "rgba(26,26,34,0.95)",
                    },
                  },
                })}
              >
                <i
                  className={
                    css({
                      color: { base: "muted", _dark: "rgba(220,220,230,0.8)" },
                    }) + " bi bi-github"
                  }
                ></i>
              </a>
              <a
                href="#"
                className={css({
                  width: "2.5rem",
                  height: "2.5rem",
                  backgroundColor: {
                    base: "bg.surface",
                    _dark: "rgba(18,18,26,0.95)",
                  },
                  borderWidth: "1px",
                  borderColor: {
                    base: "border.default",
                    _dark: "rgba(255,255,255,0.16)",
                  },
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition:
                    "background-color 150ms var(--ease-out-quad), border-color 150ms var(--ease-out-quad)",
                  _hover: {
                    backgroundColor: {
                      base: "bg.subtle",
                      _dark: "rgba(26,26,34,0.95)",
                    },
                  },
                })}
              >
                <i
                  className={
                    css({
                      color: { base: "muted", _dark: "rgba(220,220,230,0.8)" },
                    }) + " bi bi-twitter"
                  }
                ></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              className={css({
                fontFamily: "display",
                fontWeight: 600,
                color: "text",
                letterSpacing: "-0.01em",
                marginBottom: "1rem",
              })}
            >
              Resources
            </h4>
            <ul className={css({ display: "grid", gap: "0.625rem" })}>
              <li>
                <a
                  href="#"
                  className={css({
                    fontFamily: "sans",
                    color: { base: "muted", _dark: "rgba(214,214,226,0.76)" },
                    _hover: { color: "link" },
                    fontSize: "0.875rem",
                    transition: "color 150ms var(--ease-out-quad)",
                  })}
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={css({
                    fontFamily: "sans",
                    color: { base: "muted", _dark: "rgba(214,214,226,0.76)" },
                    _hover: { color: "link" },
                    fontSize: "0.875rem",
                    transition: "color 150ms var(--ease-out-quad)",
                  })}
                >
                  Examples
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={css({
                    fontFamily: "sans",
                    color: { base: "muted", _dark: "rgba(214,214,226,0.76)" },
                    _hover: { color: "link" },
                    fontSize: "0.875rem",
                    transition: "color 150ms var(--ease-out-quad)",
                  })}
                >
                  Playground
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={css({
                    fontFamily: "sans",
                    color: "system-gray-600",

                    _hover: { color: "link" },
                    fontSize: "0.875rem",
                    transition: "color 150ms var(--ease-out-quad)",
                  })}
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className={css({
                fontFamily: "display",
                fontWeight: 600,
                color: "text",
                letterSpacing: "-0.01em",
                marginBottom: "1rem",
              })}
            >
              Community
            </h4>
            <ul className={css({ display: "grid", gap: "0.625rem" })}>
              <li>
                <a
                  href="#"
                  className={css({
                    fontFamily: "sans",
                    color: { base: "muted", _dark: "rgba(214,214,226,0.76)" },
                    _hover: { color: "link" },
                    fontSize: "0.875rem",
                    transition: "color 150ms var(--ease-out-quad)",
                  })}
                >
                  GitHub Issues
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={css({
                    fontFamily: "sans",
                    color: { base: "muted", _dark: "rgba(214,214,226,0.76)" },
                    _hover: { color: "link" },
                    fontSize: "0.875rem",
                    transition: "color 150ms var(--ease-out-quad)",
                  })}
                >
                  Discussions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={css({
                    fontFamily: "sans",
                    color: { base: "muted", _dark: "rgba(214,214,226,0.76)" },
                    _hover: { color: "link" },
                    fontSize: "0.875rem",
                    transition: "color 150ms var(--ease-out-quad)",
                  })}
                >
                  Contributing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={css({
            borderTopWidth: "1px",
            borderColor: "border.default",
            paddingTop: "2rem",
            display: "flex",
            flexDirection: { base: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          })}
        >
          <p
            className={css({
              fontFamily: "sans",
              color: { base: "muted", _dark: "rgba(214,214,226,0.76)" },
              fontSize: "0.875rem",
            })}
          >
            © 2024 Liquidify. Built with care for the React community.
          </p>
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              columnGap: "1.5rem",
              marginTop: { base: "1rem", sm: 0 },
            })}
          >
            <a
              href="#"
              className={css({
                fontFamily: "sans",
                color: { base: "muted", _dark: "rgba(214,214,226,0.76)" },
                _hover: { color: "link" },
                fontSize: "0.875rem",
                transition: "color 150ms var(--ease-out-quad)",
              })}
            >
              Privacy
            </a>
            <a
              href="#"
              className={css({
                fontFamily: "sans",
                color: { base: "muted", _dark: "rgba(214,214,226,0.76)" },
                _hover: { color: "link" },
                fontSize: "0.875rem",
                transition: "color 150ms var(--ease-out-quad)",
              })}
            >
              Terms
            </a>
            <a
              href="#"
              className={css({
                fontFamily: "sans",
                color: { base: "muted", _dark: "rgba(214,214,226,0.76)" },
                _hover: { color: "link" },
                fontSize: "0.875rem",
                transition: "color 150ms var(--ease-out-quad)",
              })}
            >
              MIT License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
