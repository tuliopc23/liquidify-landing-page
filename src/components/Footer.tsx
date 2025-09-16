import React from "react";
import { css } from "../../styled-system/css";
import { LiquidifyBrand } from "./BrandAssets";

const Footer: React.FC = () => {
  return (
    <footer
      className={css({
        backgroundColor: {
          base: "rgba(245,246,255,0.96)",
          _dark: "rgba(6,6,12,0.96)",
        },
        paddingY: "4rem",
        color: "text",
        borderTopWidth: "1px",
        borderColor: {
          base: "rgba(0,0,0,0.05)",
          _dark: "rgba(255,255,255,0.12)",
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
                    "background-color 150ms ease, border-color 150ms ease",
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
                    "background-color 150ms ease, border-color 150ms ease",
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
                fontFamily: "sans",
                fontWeight: 500,
                color: "text",
                marginBottom: "1rem",
              })}
            >
              Resources
            </h4>
            <ul className={css({ display: "grid", gap: "0.5rem" })}>
              <li>
                <a
                  href="#"
                  className={css({
                    fontFamily: "sans",
                    color: { base: "muted", _dark: "rgba(214,214,226,0.76)" },
                    _hover: { color: "link" },
                    fontSize: "0.875rem",
                    transition: "color 150ms ease",
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
                    transition: "color 150ms ease",
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
                    transition: "color 150ms ease",
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
                    transition: "color 150ms ease",
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
                fontFamily: "sans",
                fontWeight: 500,
                color: "text",
                marginBottom: "1rem",
              })}
            >
              Community
            </h4>
            <ul className={css({ display: "grid", gap: "0.5rem" })}>
              <li>
                <a
                  href="#"
                  className={css({
                    fontFamily: "sans",
                    color: { base: "muted", _dark: "rgba(214,214,226,0.76)" },
                    _hover: { color: "link" },
                    fontSize: "0.875rem",
                    transition: "color 150ms ease",
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
                    transition: "color 150ms ease",
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
                    transition: "color 150ms ease",
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
                transition: "color 150ms ease",
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
                transition: "color 150ms ease",
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
                transition: "color 150ms ease",
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
