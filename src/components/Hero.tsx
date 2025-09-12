import React from "react";
import { css, cx } from "../../styled-system/css";
import {
  button,
  cardGlass,
  floatingElement,
  gridPattern,
  typography,
} from "../pandaStyles";

const Hero: React.FC = () => {
  return (
    <section
      className={css({
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "4rem",
        backgroundColor: "bg.canvas",
      })}
    >
      {/* Enhanced Background with iCloud-inspired elements */}
      <div
        className={css({
          position: "absolute",
          inset: 0,
          // layer 1: subtle SVG backdrop; layer 2: existing gradient
          backgroundImage:
            "url(/bg/hero-light.svg), linear-gradient(to bottom right, color-mix(in oklab, var(--colors-primary), white 92%), color-mix(in oklab, var(--colors-apple-indigo), white 95%))",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "center, center",
          backgroundSize: "cover, cover",
          _dark: {
            backgroundImage:
              "url(/bg/hero-dark.svg), linear-gradient(to bottom right, color-mix(in oklab, var(--colors-primary), black 88%), color-mix(in oklab, var(--colors-apple-indigo), black 90%))",
          },
        })}
      >
        {/* Floating geometric elements */}
        <div
          className={cx(
            floatingElement("apple-blue"),
            css({ width: "24rem", height: "24rem", top: "25%", left: "25%" }),
          )}
          style={{ animationDelay: "0s" }}
        />
        <div
          className={cx(
            floatingElement("apple-indigo"),
            css({ width: "20rem", height: "20rem", top: "33%", right: "25%" }),
          )}
          style={{ animationDelay: "7s" }}
        />
        <div
          className={cx(
            floatingElement("apple-teal"),
            css({
              width: "16rem",
              height: "16rem",
              bottom: "25%",
              left: "33%",
            }),
          )}
          style={{ animationDelay: "14s" }}
        />

        {/* Subtle grid pattern */}
        <div
          className={cx(
            css({ position: "absolute", inset: 0, opacity: 0.4 }),
            gridPattern,
          )}
        ></div>
      </div>

      <div
        className={css({
          position: "relative",
          zIndex: 10,
          maxWidth: "64rem",
          marginX: "auto",
          paddingX: { base: "1rem", sm: "1.5rem", lg: "2rem" },
          textAlign: "center",
        })}
      >
        <div className={css({ marginBottom: "2rem" })}>
          {/* Enhanced hero content */}
          <div
            className={css({
              display: "inline-flex",
              alignItems: "center",
              columnGap: "0.5rem",
              backgroundColor: "glass.bg",
              backdropFilter: "blur(8px)",
              borderWidth: "1px",
              borderColor: "glass.border",
              borderRadius: "9999px",
              paddingX: "1rem",
              paddingY: "0.5rem",
              marginBottom: "2rem",
            })}
          >
            <div
              className={css({
                width: "0.5rem",
                height: "0.5rem",
                backgroundColor: "apple-green",
                borderRadius: "9999px",
                animation: "pulse 2s infinite",
              })}
            ></div>
            <span
              className={cx(
                typography({ role: "subheadline" }),
                css({ color: "muted" }),
              )}
            >
              Now available for React
            </span>
          </div>

          <h1
            className={cx(
              typography({ role: "display" }),
              css({ color: "text", marginBottom: "1.5rem" }),
            )}
          >
            Build with
            <br />
            <span className={css({ color: "primary" })}>Liquid Glass</span>
          </h1>

          <p
            className={cx(
              typography({ role: "body" }),
              css({
                color: "muted",
                marginBottom: "2rem",
                maxWidth: "48rem",
                marginX: "auto",
              }),
            )}
          >
            60+ opinionated React components that bring Apple's revolutionary
            Liquid Glass design language to the web. Crafted with precision
            following Apple HIG guidelines.
          </p>

          <div
            className={css({
              display: "flex",
              flexDirection: { base: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "4rem",
            })}
          >
            <button
              className={cx(
                button({ intent: "primary" }),
                css({
                  fontSize: "1rem",
                  px: "2rem",
                  py: "1rem",
                  boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                }),
              )}
            >
              <i
                className="bi bi-download"
                style={{ marginRight: "0.5rem" }}
              ></i>
              Install LiqUIdify
            </button>
            <a
              href="https://github.com/tuliopc23/LiqUIdify"
              target="_blank"
              rel="noopener noreferrer"
              className={cx(
                button({ intent: "secondary" }),
                css({
                  fontSize: "1rem",
                  px: "2rem",
                  py: "1rem",
                  display: "inline-flex",
                  alignItems: "center",
                  boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                }),
              )}
            >
              <i className="bi bi-github" style={{ marginRight: "0.5rem" }}></i>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Enhanced Featured Cards with iCloud-style layout */}
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1fr", md: "repeat(3, 1fr)" },
            gap: "1.5rem",
            maxWidth: "56rem",
            marginX: "auto",
          })}
        >
          <div
            className={cx(
              cardGlass,
              css({
                padding: "2rem",
                textAlign: "left",
                transition: "all 300ms ease",
                _hover: { transform: "scale(1.05)" },
              }),
            )}
          >
            <div
              className={css({
                width: "3.5rem",
                height: "3.5rem",
                backgroundImage:
                  "linear-gradient(to bottom right, var(--colors-apple-blue), rgba(0,122,255,0.8))",
                borderRadius: "1rem",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                transition: "box-shadow 300ms ease",
              })}
            >
              <i
                className={
                  css({ color: "white", fontSize: "1.25rem" }) +
                  " bi bi-ui-checks"
                }
              ></i>
            </div>
            <h3
              className={css({
                fontFamily: "sans",
                fontWeight: 600,
                fontSize: "1.125rem",
                color: "system-gray-900",
                marginBottom: "0.75rem",
                _dark: { color: "white" },
              })}
            >
              Interactive Components
            </h3>
            <p
              className={css({
                fontFamily: "sans",
                color: "system-gray-600",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                _dark: { color: "system-gray-300" },
              })}
            >
              Buttons, forms, modals with liquid glass effects and smooth
              animations
            </p>
          </div>

          <div
            className={cx(
              cardGlass,
              css({
                padding: "2rem",
                textAlign: "left",
                transition: "all 300ms ease",
                _hover: { transform: "scale(1.05)" },
              }),
            )}
          >
            <div
              className={css({
                width: "3.5rem",
                height: "3.5rem",
                backgroundImage:
                  "linear-gradient(to bottom right, var(--colors-apple-purple), rgba(175,82,222,0.8))",
                borderRadius: "1rem",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                transition: "box-shadow 300ms ease",
              })}
            >
              <i
                className={
                  css({ color: "white", fontSize: "1.25rem" }) +
                  " bi bi-layout-text-window-reverse"
                }
              ></i>
            </div>
            <h3
              className={css({
                fontFamily: "sans",
                fontWeight: 600,
                fontSize: "1.125rem",
                color: "system-gray-900",
                marginBottom: "0.75rem",
                _dark: { color: "white" },
              })}
            >
              Layout Systems
            </h3>
            <p
              className={css({
                fontFamily: "sans",
                color: "system-gray-600",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                _dark: { color: "system-gray-300" },
              })}
            >
              Grids, containers, and responsive layouts that adapt beautifully
            </p>
          </div>

          <div
            className={cx(
              cardGlass,
              css({
                padding: "2rem",
                textAlign: "left",
                transition: "all 300ms ease",
                _hover: { transform: "scale(1.05)" },
              }),
            )}
          >
            <div
              className={css({
                width: "3.5rem",
                height: "3.5rem",
                backgroundImage:
                  "linear-gradient(to bottom right, var(--colors-apple-green), rgba(52,199,89,0.8))",
                borderRadius: "1rem",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                transition: "box-shadow 300ms ease",
              })}
            >
              <i
                className={
                  css({ color: "white", fontSize: "1.25rem" }) +
                  " bi bi-palette"
                }
              ></i>
            </div>
            <h3
              className={css({
                fontFamily: "sans",
                fontWeight: 600,
                fontSize: "1.125rem",
                color: "system-gray-900",
                marginBottom: "0.75rem",
                _dark: { color: "white" },
              })}
            >
              Design Tokens
            </h3>
            <p
              className={css({
                fontFamily: "sans",
                color: "system-gray-600",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                _dark: { color: "system-gray-300" },
              })}
            >
              Colors, typography, and spacing system following Apple guidelines
            </p>
          </div>
        </div>

        {/* Code preview snippet */}
        <div
          className={css({
            marginTop: "4rem",
            maxWidth: "42rem",
            marginX: "auto",
          })}
        >
          <iframe
            src="/codeblocs/Heroblock.html"
            className={css({
              width: "100%",
              height: "200px",
              border: "none",
              borderRadius: "0.75rem",
              boxShadow: "0 20px 25px rgba(0,0,0,0.15)",
              backgroundColor: "transparent",
            })}
            title="Code Example"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
