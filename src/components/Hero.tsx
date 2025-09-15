import React from "react";
import { css, cx } from "../../styled-system/css";
import {
  button,
  heroBadge,
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
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        textAlign: "center",
        py: "6rem",
        px: "1rem",
      })}
    >
      <div
        className={css({
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        })}
      >
        <div className={gridPattern} aria-hidden="true" />
      </div>

      <div className={css({ zIndex: 1 })}>
        <div className={css({ mb: "0.75rem" })}>
          <span className={cx(heroBadge())}>
            <span
              className={css({
                w: "0.5rem",
                h: "0.5rem",
                borderRadius: "9999px",
                bg: "apple-blue",
              })}
            />
            Liquidify React
          </span>
        </div>

        <h1 className={cx(typography({ role: "display" }))}>
          Apple HIG in{" "}
          <span className={css({ color: "apple-blue" })}>Liquid Glass</span>
        </h1>
        <p
          className={cx(
            typography({ role: "title2" }),
            css({ color: "muted", mt: "0.5rem" }),
          )}
        >
          A React component library that brings Apple’s Human Interface
          Guidelines to the web with Liquid Glass materials — fast, accessible,
          and themable.
        </p>
        <div
          className={css({
            display: "inline-flex",
            gap: "0.75rem",
            mt: "1.25rem",
          })}
        >
          <a
            href="#features"
            className={button({ intent: "primary", size: "lg" })}
          >
            Explore components
          </a>
          <a href="#docs" className={button({ intent: "neutral", size: "lg" })}>
            Read the docs
          </a>
        </div>
      </div>

      {/* Floating glass blobs (existing) */}
      <div
        className={cx(
          floatingElement("apple-teal"),
          css({ w: "12rem", h: "12rem", top: "12%", left: "18%" }),
        )}
        style={{ animationDelay: "3s" }}
      />
      <div
        className={cx(
          floatingElement("apple-pink"),
          css({ w: "18rem", h: "18rem", bottom: "6%", right: "12%" }),
        )}
        style={{ animationDelay: "6s" }}
      />
      <div
        className={cx(
          floatingElement("apple-indigo"),
          css({ w: "14rem", h: "14rem", top: "30%", right: "35%" }),
        )}
        style={{ animationDelay: "9s" }}
      />
    </section>
  );
};

export default Hero;
