import React from "react";
import { css, cx } from "../../styled-system/css";
import {
  sectionTitle,
  sectionLead,
  pageSection,
  docsCard,
  typography,
  symbolTile,
} from "../pandaStyles";
import OverviewCard, { type OverviewCardProps } from "./OverviewCard";
import {
  Apple,
  AppWindowMac,
  MonitorSmartphone,
  Accessibility,
  Sparkles,
  Zap,
  Palette,
  Layers,
  ShieldCheck,
  Command,
  TreePine,
} from "lucide-react";

const grid = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "28px",
  mt: "1.5rem",
});

export default function Features() {
  const cards: OverviewCardProps[] = [
    {
      href: "#hig-web",
      icon: <Apple aria-hidden />,
      tint: "blue" as const,
      eyebrow: "Design language",
      title: "Apple HIG — on the web",
      summary:
        "SF type, hairline borders, fluid motion, and glass surfaces tuned for browsers.",
    },
    {
      href: "#apps-sites",
      icon: <AppWindowMac aria-hidden />,
      tint: "indigo" as const,
      eyebrow: "Use cases",
      title: "Built for Apple app sites",
      summary:
        "Craft launch pages and docs for iOS, iPadOS, and macOS apps with a native feel.",
    },
    {
      href: "#quality",
      icon: <ShieldCheck aria-hidden />,
      tint: "teal" as const,
      eyebrow: "Quality",
      title: "Accessible, fast, themable",
      summary:
        "WCAG AA targets, SSR‑safe, tokens for theming, and production‑ready ergonomics.",
      theme: "light" as const,
    },
  ];

  return (
    <section id="features" className={cx(pageSection())}>
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
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem",
        })}
      >
        {[
          {
            label: "Accessibility",
            icon: <Accessibility aria-hidden />,
            tint: "blue" as const,
          },
          {
            label: "Responsive",
            icon: <MonitorSmartphone aria-hidden />,
            tint: "indigo" as const,
          },
          {
            label: "Micro‑interactions",
            icon: <Sparkles aria-hidden />,
            tint: "pink" as const,
          },
          {
            label: "Tree‑shakeable",
            icon: <TreePine aria-hidden />,
            tint: "green" as const,
          },
          {
            label: "Design tokens",
            icon: <Palette aria-hidden />,
            tint: "orange" as const,
          },
          {
            label: "Light/Dark",
            icon: <Layers aria-hidden />,
            tint: "teal" as const,
          },
          {
            label: "Performance",
            icon: <Zap aria-hidden />,
            tint: "blue" as const,
          },
          {
            label: "Keyboard first",
            icon: <Command aria-hidden />,
            tint: "indigo" as const,
          },
        ].map((f) => (
          <div key={f.label} className={cx(docsCard({ padded: true }))}>
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              })}
            >
              <span className={cx(symbolTile({ tint: f.tint }))}>{f.icon}</span>
              <span className={cx(typography({ role: "callout" }))}>
                {f.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
