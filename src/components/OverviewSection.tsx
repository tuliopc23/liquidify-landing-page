import React from "react";
import { css, cx } from "../../styled-system/css";
import { containerX, pageSection, typography, button } from "../pandaStyles";
import { LiquidifyBrand } from "./BrandAssets";

const highlights = [
  "React-first architecture with Vite-fast DX and ESM tree-shaking",
  "HIG-aligned typography, color, spacing, and motion tokens",
  "Panda CSS recipes and semantic tokens for consistent theming",
  "Adaptive layouts that scale from mobile to large displays",
  "Accessible, production-ready components for real app workflows",
];

const sectionShell = cx(
  pageSection(),
  css({
    backgroundColor: { base: "bg.canvas", _dark: "rgba(6,6,12,0.96)" },
    color: "text",
  }),
);

const introGrid = css({
  display: "grid",
  gap: "2.5rem",
  maxWidth: "72rem",
  marginX: "auto",
  alignItems: "start",
  rowGap: { base: "2.75rem", lg: "3.25rem" },
  columnGap: { lg: "3rem" },
  gridTemplateColumns: { base: "1fr", lg: "minmax(0, 1.1fr) minmax(0, 0.9fr)" },
});

const copyStack = css({
  display: "grid",
  gap: "1.25rem",
  textAlign: { base: "center", lg: "left" },
  maxWidth: "52rem",
  justifySelf: { base: "center", lg: "stretch" },
});

const overviewLead = cx(
  typography({ role: "title2" }),
  css({
    color: { base: "muted", _dark: "rgba(222,222,234,0.85)" },
    letterSpacing: "-0.02em",
  }),
);

const overviewBody = cx(
  typography({ role: "body" }),
  css({
    fontSize: { base: "1rem", md: "1.0625rem" },
    color: { base: "muted", _dark: "rgba(220,220,232,0.8)" },
    lineHeight: 1.75,
    marginX: { base: "auto", lg: 0 },
    maxWidth: { base: "40rem", lg: "unset" },
  }),
);

const highlightCard = css({
  backgroundColor: {
    base: "rgba(255,255,255,0.94)",
    _dark: "rgba(18,18,24,0.94)",
  },
  borderRadius: "26px",
  overflow: "hidden",
  borderWidth: "1px",
  borderColor: { base: "rgba(10,10,20,0.08)", _dark: "rgba(255,255,255,0.14)" },
  boxShadow: {
    base: "0 20px 40px rgba(15,23,42,0.12)",
    _dark: "0 24px 56px rgba(0,0,0,0.58)",
  },
  padding: { base: "1.75rem", md: "2rem" },
});

const highlightList = css({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "grid",
  gap: "1rem",
});

const listItem = css({
  position: "relative",
  paddingLeft: "1.75rem",
  color: { base: "muted", _dark: "rgba(224,224,235,0.82)" },
  lineHeight: 1.6,
  _before: {
    content: '""',
    position: "absolute",
    left: 0,
    top: "0.6rem",
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "999px",
    background: "apple-blue",
    boxShadow:
      "0 0 0 4px color-mix(in oklab, var(--colors-apple-blue), transparent 70%)",
  },
});

const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className={sectionShell}>
      <div className={containerX}>
        <div className={introGrid}>
          <div className={copyStack}>
            <h2
              className={cx(
                typography({ role: "largeTitle" }),
                css({
                  display: "flex",
                  justifyContent: { base: "center", lg: "flex-start" },
                }),
              )}
            >
              <LiquidifyBrand
                size={56}
                wordmarkRole="largeTitle"
                className={css({ alignItems: "center" })}
              />
            </h2>
            <p className={overviewLead}>
              HIG-aligned React components for the web
            </p>
            <p className={overviewBody}>
              Liquidify brings Apple's latest Human Interface Guidelines to the
              web with a modern React component library. Built with React, Vite,
              and Panda CSS, it's responsive by default and fully
              tree-shakeable, so you ship only what you use.
            </p>
            <p className={overviewBody}>
              Crafted for app developers, Liquidify helps your web experiences
              feel native to iOS and macOS, preserving familiar typography,
              spacing, motion, and interaction patterns for a seamless brand and
              UX across platforms.
            </p>
            <p
              className={cx(
                typography({ role: "body" }),
                css({ fontWeight: 600, color: "apple-blue" }),
              )}
            >
              Free and open source.
            </p>
            <div
              className={css({
                display: "flex",
                flexWrap: "wrap",
                justifyContent: { base: "center", md: "flex-start" },
                gap: "0.75rem",
                mt: "0.5rem",
              })}
            >
              <a
                href="#features"
                className={button({ intent: "primary", size: "md" })}
              >
                Explore highlights
              </a>
              <a
                href="#docs"
                className={button({ intent: "outline", size: "md" })}
              >
                View documentation
              </a>
            </div>
          </div>

          <div className={highlightCard}>
            <h3
              className={cx(
                typography({ role: "title2" }),
                css({
                  marginBottom: "1.25rem",
                  color: { base: "text", _dark: "rgba(244,244,250,0.96)" },
                  letterSpacing: "-0.02em",
                  textAlign: { base: "center", md: "left" },
                }),
              )}
            >
              Highlights
            </h3>
            <ul className={highlightList}>
              {highlights.map((item) => (
                <li
                  key={item}
                  className={cx(typography({ role: "body" }), listItem)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
