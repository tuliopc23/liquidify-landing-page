import React, { type CSSProperties } from "react";
import { css } from "../../styled-system/css";
import HIGPrinciples from "../icons/HIGPrinciples";
import BuiltForApple from "../icons/BuiltForApple";
import AccessibleFastThemable from "../icons/AccessibleFastThemable";
import Accessibility from "../icons/Accessibility";
import AccessibilityResponsive from "../icons/AccessibilityResponsive";
import MicroInteractions from "../icons/MicroInteractions";
import TreeShakeable from "../icons/TreeShakeable";
import SystemizedStyling from "../icons/SystemizedStyling";
import LightDark from "../icons/LightDark";
import InstantLoad from "../icons/InstantLoad";
import KeyboardFirst from "../icons/KeyboardFirst";
import InstallDownload from "../icons/InstallDownload";
import Use from "../icons/Use";
import WhatsInside from "../icons/WhatsInside";

export type CardArtVariant =
  | "hig"
  | "apps"
  | "quality"
  | "accessibility"
  | "responsive"
  | "interactions"
  | "tree"
  | "tokens"
  | "modes"
  | "performance"
  | "keyboard"
  | "install"
  | "usage"
  | "inside";

type Tone = "light" | "dark";

export type CardArtProps = {
  variant: CardArtVariant;
  tone?: Tone;
  scale?: number;
};

type IconMeta = {
  component: () => JSX.Element;
  /** Scale keeps each illustration harmonized within the card frame. */
  scale?: number;
};

const frameClass = css({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  isolation: "isolate",
  overflow: "hidden",
  borderRadius: "24px",
  padding: "clamp(0.75rem, 2.4vw, 1.15rem)",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "transparent",
  transition:
    "background 220ms var(--ease-out-quad), box-shadow 220ms var(--ease-out-quad), border-color 220ms var(--ease-out-quad)",
});

const iconShell = css({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  transition: "transform 260ms var(--ease-out-quad)",
  position: "relative",
  zIndex: 1,
});

const iconBase = css({
  width: "100%",
  height: "auto",
  maxWidth: "100%",
  maxHeight: "100%",
  display: "block",
  filter: "drop-shadow(0 16px 26px rgba(6, 11, 17, 0.2))",
});

const iconMap: Record<CardArtVariant, IconMeta> = {
  hig: { component: HIGPrinciples, scale: 0.94 },
  apps: { component: BuiltForApple, scale: 0.94 },
  quality: { component: AccessibleFastThemable, scale: 0.92 },
  accessibility: { component: Accessibility, scale: 0.68 },
  responsive: { component: AccessibilityResponsive, scale: 0.92 },
  interactions: { component: MicroInteractions, scale: 0.88 },
  tree: { component: TreeShakeable, scale: 0.9 },
  tokens: { component: SystemizedStyling, scale: 0.9 },
  modes: { component: LightDark, scale: 0.9 },
  performance: { component: InstantLoad, scale: 0.88 },
  keyboard: { component: KeyboardFirst, scale: 0.88 },
  install: { component: InstallDownload, scale: 0.9 },
  usage: { component: Use, scale: 0.9 },
  inside: { component: WhatsInside, scale: 0.88 },
};

const backgroundVarMap: Record<CardArtVariant, string> = {
  hig: "--card-art-hig-bg",
  apps: "--card-art-apps-bg",
  quality: "--card-art-quality-bg",
  accessibility: "--card-art-accessibility-bg",
  responsive: "--card-art-responsive-bg",
  interactions: "--card-art-interactions-bg",
  tree: "--card-art-tree-bg",
  tokens: "--card-art-tokens-bg",
  modes: "--card-art-modes-bg",
  performance: "--card-art-performance-bg",
  keyboard: "--card-art-keyboard-bg",
  install: "--card-art-install-bg",
  usage: "--card-art-usage-bg",
  inside: "--card-art-inside-bg",
};

const clampScale = (value: number) => Math.min(Math.max(value, 0.5), 0.98);

const buildSurfaceStyle = (tone: Tone, colorVar: string): CSSProperties => {
  return {
    backgroundColor: `var(${colorVar})`,
    borderColor:
      tone === "light"
        ? `color-mix(in oklab, var(${colorVar}), white 64%)`
        : `color-mix(in oklab, var(${colorVar}), black 52%)`,
    boxShadow:
      tone === "light"
        ? "0 16px 36px rgba(15, 23, 42, 0.12)"
        : "0 18px 42px rgba(0, 0, 0, 0.32)",
  } satisfies CSSProperties;
};

const CardArt: React.FC<CardArtProps> = ({ variant, tone = "dark", scale }) => {
  const meta = iconMap[variant];
  const IconComponent = meta.component;
  const resolvedScale = clampScale(scale ?? meta.scale ?? 0.9);
  const iconElement = React.cloneElement(<IconComponent />, {
    className: iconBase,
    "aria-hidden": true,
    focusable: false,
    role: "presentation",
  });

  const colorVar = backgroundVarMap[variant] ?? "--card-art-accessibility-bg";
  const surfaceStyle = buildSurfaceStyle(tone, colorVar);

  return (
    <div
      className={frameClass}
      data-tone={tone}
      data-variant={variant}
      aria-hidden={true}
      role="presentation"
      style={surfaceStyle}
    >
      <div
        className={iconShell}
        style={{
          transform: `scale(${resolvedScale})`,
          transformOrigin: "center",
        }}
      >
        {iconElement}
      </div>
    </div>
  );
};

export default CardArt;
