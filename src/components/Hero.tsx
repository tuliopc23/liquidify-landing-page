import React from "react";
import { css, cx } from "../../styled-system/css";
import {
  button,
  heroBadge,
  floatingElement,
  gridPattern,
  typography,
} from "../pandaStyles";
import { LiquidifyBrand, LiquidifyLogomark } from "./BrandAssets";

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
        backgroundColor: "bg.canvas",
        color: "text",
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
        <div
          className={css({
            display: "grid",
            justifyItems: "center",
            gap: "0.75rem",
            mb: "2rem",
          })}
        >
          <LiquidifyBrand
            size={96}
            direction="column"
            className={css({ alignItems: "center", gap: "0.75rem" })}
            wordmarkRole="title2"
            wordmarkClassName={css({ textAlign: "center" })}
          />
          <span
            className={cx(
              typography({ role: "callout" }),
              css({
                color: { base: "muted", _dark: "rgba(222,222,234,0.82)" },
                textTransform: "uppercase",
              }),
            )}
          >
            React component library
          </span>
        </div>
        <div className={css({ mb: "0.75rem" })}>
          <span className={cx(heroBadge(), css({ gap: "0.35rem" }))}>
            <LiquidifyLogomark size={18} />
            Brand kit ready
          </span>
        </div>

        <h1 className={cx(typography({ role: "display" }))}>
          Apple HIG in{" "}
          <span className={css({ color: "apple-blue" })}>Liquid Glass</span>
        </h1>
        <p
          className={cx(
            typography({ role: "title2" }),
            css({
              color: { base: "muted", _dark: "rgba(222,222,234,0.82)" },
              mt: "0.5rem",
            }),
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
          <a href="#docs" className={button({ intent: "outline", size: "lg" })}>
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
