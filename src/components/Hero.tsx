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

const heroSection = css({
  position: "relative",
  minHeight: "100vh",
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
  textAlign: "center",
  py: "6rem",
  px: "1rem",
  backgroundColor: { base: "bg.canvas", _dark: "#050509" },
  color: "text",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

const heroInner = css({
  display: "grid",
  justifyItems: "center",
  gap: "1rem",
  maxWidth: "64rem",
  marginX: "auto",
});

const heroCopy = css({
  maxWidth: { base: "40rem", lg: "46rem" },
  marginX: "auto",
});

const heroActions = css({
  display: "inline-flex",
  gap: "0.75rem",
  mt: "1.25rem",
  flexWrap: "wrap",
  justifyContent: "center",
});

const Hero: React.FC = () => {
  return (
    <section className={heroSection}>
      <div
        className={css({
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        })}
      >
        <div className={gridPattern} aria-hidden="true" />
      </div>
      <div className={css({ zIndex: 1, width: "100%" })}>
        <div className={cx(heroInner, css({ mb: "2rem" }))}>
          <LiquidifyBrand
            size={96}
            direction="column"
            className={css({ alignItems: "center", gap: "0.625rem" })}
            wordmarkRole="title2"
            wordmarkClassName={css({
              textAlign: "center",
              letterSpacing: "-0.015em",
            })}
          />
          <span
            className={cx(
              typography({ role: "footnote" }),
              css({
                color: { base: "muted", _dark: "rgba(222,222,234,0.82)" },
                textTransform: "uppercase",
                letterSpacing: "0.16em",
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
        <div className={heroCopy}>
          <h1
            className={cx(
              typography({ role: "display" }),
              css({
                letterSpacing: "-0.02em",
                lineHeight: 1.06,
                marginX: "auto",
                maxWidth: { base: "20ch", md: "none" },
                fontSize: { md: "3.375rem", lg: "4.375rem" },
                whiteSpace: { md: "nowrap" },
              }),
            )}
          >
            HIG-Inspired{" "}
            <span className={css({ color: "apple-blue" })}>Liquid Glass</span>
          </h1>
          <p
            className={cx(
              typography({ role: "headline" }),
              css({
                color: { base: "muted", _dark: "rgba(222,222,234,0.86)" },
                mt: "0.875rem",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }),
            )}
          >
            A React component library that brings Human Interface Guidelines to
            the web with Liquid Glass materials — fast, accessible, and
            themable.
          </p>
        </div>
        <div className={heroActions}>
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

      <div
        className={cx(
          floatingElement("apple-teal"),
          css({
            w: "10rem",
            h: "10rem",
            top: "14%",
            left: "16%",
            filter: "blur(18px)",
          }),
        )}
        style={{ animationDelay: "2.2s" }}
      />
      <div
        className={cx(
          floatingElement("apple-pink"),
          css({
            w: "16rem",
            h: "16rem",
            bottom: "8%",
            right: "10%",
            filter: "blur(20px)",
          }),
        )}
        style={{ animationDelay: "5.4s" }}
      />
      <div
        className={cx(
          floatingElement("apple-indigo"),
          css({
            w: "12rem",
            h: "12rem",
            top: "32%",
            right: "34%",
            filter: "blur(20px)",
          }),
        )}
        style={{ animationDelay: "8.6s" }}
      />
      <style>{`@media (prefers-reduced-motion: reduce) {
          .reduce-motion * { animation: none !important; transition: none !important; }
        }`}</style>
    </section>
  );
};

export default Hero;
