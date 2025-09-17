import React from "react";
import { css, cx } from "../../styled-system/css";
import {
  sectionTitle,
  sectionLead,
  pageSection,
  typography,
  containerX,
} from "../pandaStyles";
import OverviewCard, { type OverviewCardProps } from "./OverviewCard";
import CardArt, { type CardArtVariant } from "./CardArt";

const grid = css({
  display: "grid",
  gridTemplateColumns: {
    base: "1fr",
    md: "repeat(2, 1fr)",
    xl: "repeat(3, 1fr)",
  },
  gap: "24px",
  mt: "1.5rem",
});

const smallSection = css({
  display: "flex",
  flexDirection: "column",
  gap: "1.75rem",
  mt: "2.75rem",
});

const smallRow = css({
  display: "grid",
  gap: "1.25rem",
  gridTemplateColumns: {
    base: "repeat(1, minmax(0, 1fr))",
    sm: "repeat(2, minmax(0, 1fr))",
    lg: "repeat(3, minmax(0, 1fr))",
    xl: "repeat(4, minmax(0, 1fr))",
  },
});

const rowDivider = css({
  height: "1px",
  backgroundColor: "glass.border",
  opacity: 0.6,
  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
});

export default function Features() {
  const cards: OverviewCardProps[] = [
    {
      href: "#hig-web",
      cover: <CardArt variant="hig" tone="light" scale={0.62} />,
      eyebrow: "Design language",
      title: "Apple HIG — on the web",
      summary:
        "SF typography, tempered glass surfaces, and motion curves tuned for browsers.",
      cta: "Explore the guidelines ›",
      theme: "light",
    },
    {
      href: "#apps-sites",
      cover: <CardArt variant="apps" tone="dark" scale={0.62} />,
      eyebrow: "Use cases",
      title: "Built for Apple app sites",
      summary:
        "Launch pages and documentation that feel at home across iOS, iPadOS, and macOS.",
      cta: "See example layouts ›",
      theme: "dark",
    },
    {
      href: "#quality",
      cover: <CardArt variant="quality" tone="dark" scale={0.62} />,
      eyebrow: "Quality",
      title: "Accessible, fast, themable",
      summary:
        "AA contrast defaults, SSR-ready primitives, and Panda tokens for complete control.",
      cta: "Preview theming ›",
      theme: "dark",
    },
  ];

  const smallFeaturesBase: Array<{
    eyebrow: string;
    title: string;
    summary: string;
    variant: CardArtVariant;
  }> = [
    {
      eyebrow: "Inclusive by default",
      title: "Accessibility",
      summary:
        "Keyboard focus rings, ARIA hooks, and motion preferences ship ready to go.",
      variant: "accessibility",
    },
    {
      eyebrow: "Fluid layouts",
      title: "Responsive",
      summary:
        "Adaptive breakpoints and clamp utilities scale content from phone to desktop.",
      variant: "responsive",
    },
    {
      eyebrow: "Motion",
      title: "Micro‑interactions",
      summary:
        "Subtle easing curves, focus reveals, and Framer Motion hooks baked in.",
      variant: "interactions",
    },
    {
      eyebrow: "Bundles",
      title: "Tree‑shakeable",
      summary:
        "Import only what you use with per-component entry points and dead-code elimination.",
      variant: "tree",
    },
    {
      eyebrow: "Design tokens",
      title: "Systemized styling",
      summary:
        "Radii, color, and typography tokens mirror Apple’s palette for instant consistency.",
      variant: "tokens",
    },
    {
      eyebrow: "Themes",
      title: "Light & Dark",
      summary:
        "System detection with manual overrides keeps contrast perfect in every mode.",
      variant: "modes",
    },
    {
      eyebrow: "Performance",
      title: "Instant load",
      summary:
        "Minified ESM output, lazy code-split demos, and tuned Vite configuration.",
      variant: "performance",
    },
    {
      eyebrow: "Input",
      title: "Keyboard first",
      summary:
        "Ark UI behaviors respect shortcuts, roving tabindex, and command palette patterns.",
      variant: "keyboard",
    },
  ];

  const smallFeatures = smallFeaturesBase.map((feature, index) => {
    const theme = index % 2 === 0 ? "dark" : "light";
    const tone = theme === "light" ? "light" : "dark";
    const scale = 0.56;
    return {
      ...feature,
      theme,
      cover: <CardArt variant={feature.variant} tone={tone} scale={scale} />,
    } satisfies Pick<
      OverviewCardProps,
      "cover" | "eyebrow" | "title" | "summary" | "theme"
    >;
  });

  const rows = [smallFeatures.slice(0, 4), smallFeatures.slice(4)];

  return (
    <section
      id="features"
      className={cx(
        pageSection(),
        css({
          backgroundColor: { base: "bg.subtle", _dark: "rgba(10,10,18,0.92)" },
          color: "text",
        }),
      )}
    >
      <div className={containerX}>
        <div className={css({ textAlign: "center", mb: "2.5rem" })}>
          <h2 className={cx(sectionTitle())}>Dive into Liquidify</h2>
          <p className={cx(sectionLead())}>
            Built with meticulous attention to detail — close to Apple's HIG,
            adapted to the web.
          </p>
        </div>
        <div className={grid}>
          {cards.map((c) => (
            <OverviewCard key={c.title} {...c} />
          ))}
        </div>

        {/* Small feature cards */}
        <div className={css({ textAlign: "center", mt: "3rem", mb: "1rem" })}>
          <h3 className={cx(typography({ role: "headline" }))}>What you get</h3>
        </div>
        <div className={smallSection}>
          {rows.map((row, index) => (
            <React.Fragment key={`row-${index}`}>
              {index === 1 ? <div className={rowDivider} aria-hidden /> : null}
              <div className={smallRow}>
                {row.map((item) => (
                  <OverviewCard
                    key={item.title}
                    cover={item.cover}
                    eyebrow={item.eyebrow}
                    title={item.title}
                    summary={item.summary}
                    cta={null}
                    size="compact"
                    theme={item.theme}
                  />
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
