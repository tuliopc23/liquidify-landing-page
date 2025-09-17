import React from "react";
import { css, cx } from "../../styled-system/css";
import { pageSection, typography, containerX } from "../pandaStyles";
import OverviewCard, { type OverviewCardProps } from "./OverviewCard";
import CardArt, { type CardArtVariant } from "./CardArt";
import { useTheme, resolveTheme } from "../theme";

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

const sectionHeading = cx(
  typography({ role: "largeTitle" }),
  css({ marginBottom: "1rem", letterSpacing: "-0.01em" }),
);

const sectionIntro = cx(
  typography({ role: "title3" }),
  css({
    color: { base: "#6e6e73", _dark: "rgba(222,222,234,0.86)" },
    fontWeight: 500,
    maxWidth: "40rem",
    marginX: "auto",
    lineHeight: 1.6,
  }),
);

const subheading = cx(
  typography({ role: "title2" }),
  css({ marginBottom: "0.5rem" }),
);

const subheadingCopy = cx(
  typography({ role: "body" }),
  css({ color: "muted", maxWidth: "32rem", mx: "auto" }),
);

export default function Features() {
  const [mode] = useTheme();
  const resolved = resolveTheme(mode);

  const cards: OverviewCardProps[] = [
    {
      href: "#hig-web",
      cover: <CardArt variant="hig" tone={resolved} scale={0.58} />,
      eyebrow: "Design language",
      title: "HIG principles — on the web",
      summary:
        "SF typography, tempered glass surfaces, and motion curves tuned for browsers.",
      cta: "Explore the guidelines ›",
      theme: resolved,
    },
    {
      href: "#apps-sites",
      cover: <CardArt variant="apps" tone={resolved} scale={0.58} />,
      eyebrow: "Use cases",
      title: "Built for Apple app sites",
      summary:
        "Launch pages and documentation that feel at home across iOS, iPadOS, and macOS.",
      cta: "See example layouts ›",
      theme: resolved,
    },
    {
      href: "#quality",
      cover: <CardArt variant="quality" tone={resolved} scale={0.58} />,
      eyebrow: "Quality",
      title: "Accessible, fast, themable",
      summary:
        "AA contrast defaults, SSR-ready primitives, and Panda tokens for complete control.",
      cta: "Preview theming ›",
      theme: resolved,
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

  const smallFeatures = smallFeaturesBase.map((feature) => {
    const scale = 0.54;
    return {
      ...feature,
      theme: resolved,
      cover: (
        <CardArt variant={feature.variant} tone={resolved} scale={scale} />
      ),
    } satisfies Pick<
      OverviewCardProps,
      "cover" | "eyebrow" | "title" | "summary" | "theme"
    >;
  });

  const rows = [smallFeatures.slice(0, 4), smallFeatures.slice(4, 8)];

  return (
    <section
      id="features"
      className={cx(
        pageSection(),
        css({
          backgroundColor: { base: "bg.subtle", _dark: "#0a0a12" },
          color: "text",
          borderTop: {
            base: "1px solid var(--colors-border-default)",
            _dark: "1px solid rgba(255,255,255,0.06)",
          },
          borderBottom: {
            base: "1px solid var(--colors-border-default)",
            _dark: "1px solid rgba(255,255,255,0.06)",
          },
        }),
      )}
    >
      <div className={containerX}>
        <div className={css({ textAlign: "center", mb: "3rem" })}>
          <h2 className={sectionHeading}>Dive into Liquidify</h2>
          <p className={sectionIntro}>
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
        <div className={css({ textAlign: "center", mt: "4rem", mb: "2rem" })}>
          <h3 className={subheading}>What you get</h3>
          <p className={subheadingCopy}>
            Everything you need to build beautiful, accessible interfaces with
            Apple's design language
          </p>
        </div>
        <div className={smallSection}>
          {rows.map((row, index) => (
            <React.Fragment key={`row-${index}`}>
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
              {index === 0 ? (
                <div className={css({ textAlign: "center", my: "2rem" })}>
                  <h4
                    className={cx(
                      typography({ role: "headline" }),
                      css({ color: "muted" }),
                    )}
                  >
                    Built for performance and accessibility
                  </h4>
                </div>
              ) : null}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
