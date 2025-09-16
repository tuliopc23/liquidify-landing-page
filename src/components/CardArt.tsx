import React, { useId } from "react";
import { css } from "../../styled-system/css";

type Tone = "light" | "dark";

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

export type CardArtProps = {
  variant: CardArtVariant;
  tone?: Tone;
  scale?: number;
};

const artClass = css({
  width: "100%",
  height: "100%",
  display: "block",
});

const VIEWBOX_WIDTH = 320;
const VIEWBOX_HEIGHT = 180;
const GLYPH_CANVAS_WIDTH = 320;
const GLYPH_CANVAS_HEIGHT = 200;
const OUTER_RADIUS = 28;
const DEFAULT_SCALE = 0.72;

const backgroundStops: Record<
  CardArtVariant,
  Record<Tone, { offset: string; color: string }[]>
> = {
  hig: {
    dark: [
      { offset: "0%", color: "#032c7a" },
      { offset: "55%", color: "#0858d0" },
      { offset: "100%", color: "#2195ff" },
    ],
    light: [
      { offset: "0%", color: "#b9e4ff" },
      { offset: "100%", color: "#0071e3" },
    ],
  },
  apps: {
    dark: [
      { offset: "0%", color: "#2a1a70" },
      { offset: "100%", color: "#6b4dff" },
    ],
    light: [
      { offset: "0%", color: "#d6d5ff" },
      { offset: "100%", color: "#6056ff" },
    ],
  },
  quality: {
    dark: [
      { offset: "0%", color: "#004457" },
      { offset: "100%", color: "#2fb4be" },
    ],
    light: [
      { offset: "0%", color: "#9cf6ff" },
      { offset: "100%", color: "#2e9ea8" },
    ],
  },
  accessibility: {
    dark: [
      { offset: "0%", color: "#002c48" },
      { offset: "100%", color: "#1f8bff" },
    ],
    light: [
      { offset: "0%", color: "#b2e5ff" },
      { offset: "100%", color: "#2b82ff" },
    ],
  },
  responsive: {
    dark: [
      { offset: "0%", color: "#1d0e56" },
      { offset: "100%", color: "#5e3ae0" },
    ],
    light: [
      { offset: "0%", color: "#cbc7ff" },
      { offset: "100%", color: "#5945f5" },
    ],
  },
  interactions: {
    dark: [
      { offset: "0%", color: "#490033" },
      { offset: "100%", color: "#d539ff" },
    ],
    light: [
      { offset: "0%", color: "#ffc4f0" },
      { offset: "100%", color: "#c030ff" },
    ],
  },
  tree: {
    dark: [
      { offset: "0%", color: "#013321" },
      { offset: "100%", color: "#0ba36d" },
    ],
    light: [
      { offset: "0%", color: "#a4f2cd" },
      { offset: "100%", color: "#11ba7a" },
    ],
  },
  tokens: {
    dark: [
      { offset: "0%", color: "#482a00" },
      { offset: "100%", color: "#ff7a18" },
    ],
    light: [
      { offset: "0%", color: "#ffc998" },
      { offset: "100%", color: "#ff8422" },
    ],
  },
  modes: {
    dark: [
      { offset: "0%", color: "#0a0a1a" },
      { offset: "100%", color: "#1f264f" },
    ],
    light: [
      { offset: "0%", color: "#d6d7ff" },
      { offset: "100%", color: "#424978" },
    ],
  },
  performance: {
    dark: [
      { offset: "0%", color: "#31082b" },
      { offset: "100%", color: "#ff5fa3" },
    ],
    light: [
      { offset: "0%", color: "#ffb6d9" },
      { offset: "100%", color: "#ff4f92" },
    ],
  },
  keyboard: {
    dark: [
      { offset: "0%", color: "#141417" },
      { offset: "100%", color: "#3f3f47" },
    ],
    light: [
      { offset: "0%", color: "#e6e6ef" },
      { offset: "100%", color: "#717179" },
    ],
  },
  install: {
    dark: [
      { offset: "0%", color: "#002c54" },
      { offset: "100%", color: "#0085ff" },
    ],
    light: [
      { offset: "0%", color: "#95d8ff" },
      { offset: "100%", color: "#1f8bff" },
    ],
  },
  usage: {
    dark: [
      { offset: "0%", color: "#2b0a47" },
      { offset: "100%", color: "#7821ff" },
    ],
    light: [
      { offset: "0%", color: "#d0b8ff" },
      { offset: "100%", color: "#742fff" },
    ],
  },
  inside: {
    dark: [
      { offset: "0%", color: "#2c0f3a" },
      { offset: "100%", color: "#ce3fff" },
    ],
    light: [
      { offset: "0%", color: "#f2c7ff" },
      { offset: "100%", color: "#a53dff" },
    ],
  },
};

const stopEls = (id: string, stops: { offset: string; color: string }[]) => (
  <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
    {stops.map((s) => (
      <stop key={`${id}-${s.offset}`} offset={s.offset} stopColor={s.color} />
    ))}
  </linearGradient>
);

const roundedRect = (tone: Tone) =>
  tone === "light" ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.1)";

const softStroke = (tone: Tone) =>
  tone === "light" ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)";

const glyphFill = (tone: Tone) =>
  tone === "light" ? "rgba(0,0,0,0.82)" : "rgba(255,255,255,0.94)";

const glyphSubFill = (tone: Tone) =>
  tone === "light" ? "rgba(0,0,0,0.48)" : "rgba(255,255,255,0.68)";

type GlyphProps = { tone: Tone; accentId: string };

type GlyphComponent = React.FC<GlyphProps>;

const HigGlyph: GlyphComponent = ({ tone, accentId }) => (
  <g>
    <defs>
      <linearGradient id={accentId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
      </linearGradient>
    </defs>
    <rect
      x={54}
      y={36}
      width={212}
      height={128}
      rx={28}
      fill={`url(#${accentId})`}
      stroke={softStroke(tone)}
      strokeWidth={3}
    />
    <rect
      x={96}
      y={70}
      width={136}
      height={28}
      rx={14}
      fill={glyphSubFill(tone)}
    />
    <rect
      x={96}
      y={112}
      width={88}
      height={20}
      rx={10}
      fill={glyphFill(tone)}
      opacity={0.82}
    />
    <rect
      x={196}
      y={112}
      width={36}
      height={20}
      rx={10}
      fill={glyphFill(tone)}
      opacity={0.4}
    />
    <rect
      x={84}
      y={46}
      width={44}
      height={8}
      rx={4}
      fill={glyphSubFill(tone)}
      opacity={0.6}
    />
    <rect
      x={138}
      y={46}
      width={20}
      height={8}
      rx={4}
      fill={glyphSubFill(tone)}
      opacity={0.45}
    />
  </g>
);

const AppsGlyph: GlyphComponent = ({ tone, accentId }) => (
  <g>
    <defs>
      <radialGradient id={accentId} cx="50%" cy="30%" r="90%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
      </radialGradient>
    </defs>
    <rect
      x={56}
      y={42}
      width={208}
      height={116}
      rx={26}
      fill={`url(#${accentId})`}
      stroke={softStroke(tone)}
      strokeWidth={3}
    />
    <rect
      x={78}
      y={64}
      width={48}
      height={10}
      rx={5}
      fill={glyphSubFill(tone)}
    />
    <circle cx={88} cy={52} r={6} fill={glyphFill(tone)} opacity={0.35} />
    <circle cx={110} cy={52} r={6} fill={glyphFill(tone)} opacity={0.2} />
    <circle cx={132} cy={52} r={6} fill={glyphFill(tone)} opacity={0.2} />
    <rect
      x={146}
      y={64}
      width={98}
      height={64}
      rx={18}
      fill={glyphFill(tone)}
      opacity={0.86}
    />
    <rect
      x={72}
      y={98}
      width={58}
      height={44}
      rx={16}
      fill={glyphFill(tone)}
      opacity={0.55}
    />
    <rect
      x={88}
      y={106}
      width={26}
      height={6}
      rx={3}
      fill={roundedRect(tone)}
    />
  </g>
);

const QualityGlyph: GlyphComponent = ({ tone }) => (
  <g fill={glyphFill(tone)}>
    <path
      d="M160 50c-32 0-58 26-58 58 0 44.5 47.7 68.6 54.4 71.5a8 8 0 0 0 7.2 0c6.7-2.9 54.4-27 54.4-71.5 0-32-26-58-58-58Z"
      opacity={0.85}
    />
    <path
      d="M160 70c-21.5 0-39 17.5-39 39 0 27.8 30.3 44.3 36.2 47a6 6 0 0 0 5.6 0c5.9-2.7 36.2-19.2 36.2-47 0-21.5-17.5-39-39-39Zm0 24a15 15 0 1 1 0 30 15 15 0 0 1 0-30Z"
      fill={glyphSubFill(tone)}
    />
    <circle cx={160} cy={109} r={12} fill={glyphFill(tone)} />
  </g>
);

const AccessibilityGlyph: GlyphComponent = ({ tone }) => (
  <g fill={glyphFill(tone)}>
    <circle cx={160} cy={64} r={18} opacity={0.88} />
    <path
      d="M104 94c0-4.4 3.6-8 8-8h96c4.4 0 8 3.6 8 8s-3.6 8-8 8h-36v70c0 4.4-3.6 8-8 8s-8-3.6-8-8v-42h-8v42c0 4.4-3.6 8-8 8s-8-3.6-8-8v-70h-36c-4.4 0-8-3.6-8-8Z"
      opacity={0.82}
    />
  </g>
);

const ResponsiveGlyph: GlyphComponent = ({ tone }) => (
  <g>
    <rect
      x={70}
      y={62}
      width={100}
      height={76}
      rx={18}
      fill={glyphFill(tone)}
      opacity={0.75}
    />
    <rect
      x={84}
      y={78}
      width={56}
      height={12}
      rx={6}
      fill={roundedRect(tone)}
    />
    <rect
      x={84}
      y={98}
      width={68}
      height={8}
      rx={4}
      fill={roundedRect(tone)}
      opacity={0.7}
    />
    <rect
      x={182}
      y={50}
      width={70}
      height={112}
      rx={20}
      fill={glyphFill(tone)}
      opacity={0.88}
    />
    <rect
      x={198}
      y={68}
      width={38}
      height={10}
      rx={5}
      fill={roundedRect(tone)}
    />
    <rect
      x={198}
      y={86}
      width={46}
      height={8}
      rx={4}
      fill={roundedRect(tone)}
      opacity={0.7}
    />
  </g>
);

const InteractionsGlyph: GlyphComponent = ({ tone }) => (
  <g fill={glyphFill(tone)}>
    <path
      d="M160 54 170.6 88.5H206l-28.3 20.6 10.8 34.5L160 122l-28.5 21.6 10.8-34.5L114 88.5h35.3Z"
      opacity={0.9}
    />
    <circle cx={200} cy={68} r={10} fill={glyphSubFill(tone)} />
    <circle cx={122} cy={142} r={8} fill={glyphSubFill(tone)} opacity={0.6} />
  </g>
);

const TreeGlyph: GlyphComponent = ({ tone }) => (
  <g fill={glyphFill(tone)}>
    <path
      d="M160 54c-28 0-52 22-52 48 0 17.2 10.2 32.4 24.8 41.1L124 172h72l-8.8-28.9c14.6-8.7 24.8-23.9 24.8-41.1 0-26-24-48-52-48Z"
      opacity={0.92}
    />
    <rect
      x={150}
      y={148}
      width={20}
      height={30}
      rx={10}
      fill={glyphSubFill(tone)}
    />
  </g>
);

const TokensGlyph: GlyphComponent = ({ tone }) => (
  <g>
    <rect
      x={92}
      y={56}
      width={64}
      height={64}
      rx={18}
      fill={glyphFill(tone)}
      opacity={0.78}
    />
    <rect
      x={148}
      y={64}
      width={80}
      height={50}
      rx={18}
      fill={glyphFill(tone)}
      opacity={0.62}
    />
    <rect
      x={112}
      y={120}
      width={112}
      height={44}
      rx={20}
      fill={glyphFill(tone)}
      opacity={0.86}
    />
    <circle cx={124} cy={76} r={8} fill={roundedRect(tone)} />
    <rect
      x={108}
      y={140}
      width={96}
      height={10}
      rx={5}
      fill={roundedRect(tone)}
      opacity={0.8}
    />
  </g>
);

const ModesGlyph: GlyphComponent = ({ tone }) => (
  <g>
    <path
      d="M160 48a72 72 0 1 1 0 144c-39.8 0-72-32.2-72-72s32.2-72 72-72Zm0 20v104c28.7 0 52-23.3 52-52s-23.3-52-52-52Z"
      fill={glyphFill(tone)}
      opacity={0.9}
    />
    <circle cx={160} cy={120} r={26} fill={glyphSubFill(tone)} />
  </g>
);

const PerformanceGlyph: GlyphComponent = ({ tone }) => (
  <g fill={glyphFill(tone)}>
    <path d="M148 38 88 140h54l-12 58 70-104h-46l16-56Z" opacity={0.9} />
    <circle cx={212} cy={78} r={12} fill={glyphSubFill(tone)} />
  </g>
);

const KeyboardGlyph: GlyphComponent = ({ tone }) => (
  <g fill={glyphFill(tone)}>
    <rect x={86} y={88} width={148} height={64} rx={18} opacity={0.88} />
    <path
      d="M136 88v64M184 88v64M86 120h148M160 88v64"
      stroke={glyphSubFill(tone)}
      strokeWidth={8}
      strokeLinecap="round"
    />
  </g>
);

const InstallGlyph: GlyphComponent = ({ tone }) => (
  <g fill={glyphFill(tone)}>
    <rect x={110} y={48} width={100} height={40} rx={14} opacity={0.35} />
    <path
      d="M160 68v84m0 0 26-28m-26 28-26-28"
      stroke={glyphFill(tone)}
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={122}
      y={156}
      width={76}
      height={14}
      rx={7}
      fill={glyphSubFill(tone)}
    />
  </g>
);

const UsageGlyph: GlyphComponent = ({ tone }) => (
  <g>
    <rect
      x={90}
      y={56}
      width={140}
      height={100}
      rx={20}
      fill={glyphFill(tone)}
      opacity={0.72}
    />
    <path
      d="M124 76h72M124 100h56"
      stroke={roundedRect(tone)}
      strokeWidth={10}
      strokeLinecap="round"
    />
    <path
      d="m174 88 42 66"
      stroke={glyphFill(tone)}
      strokeWidth={12}
      strokeLinecap="round"
    />
    <circle cx={196} cy={128} r={22} fill={glyphFill(tone)} />
    <path
      d="m206 138-12-20-12 20"
      stroke={roundedRect(tone)}
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
);

const InsideGlyph: GlyphComponent = ({ tone }) => (
  <g>
    <rect
      x={82}
      y={62}
      width={72}
      height={72}
      rx={20}
      fill={glyphFill(tone)}
      opacity={0.7}
    />
    <rect
      x={170}
      y={62}
      width={72}
      height={48}
      rx={20}
      fill={glyphFill(tone)}
      opacity={0.6}
    />
    <rect
      x={170}
      y={118}
      width={72}
      height={48}
      rx={20}
      fill={glyphFill(tone)}
      opacity={0.85}
    />
    <circle cx={118} cy={98} r={12} fill={roundedRect(tone)} />
    <rect
      x={102}
      y={128}
      width={56}
      height={12}
      rx={6}
      fill={roundedRect(tone)}
      opacity={0.7}
    />
    <circle cx={204} cy={86} r={10} fill={roundedRect(tone)} />
    <rect
      x={188}
      y={134}
      width={40}
      height={10}
      rx={5}
      fill={roundedRect(tone)}
      opacity={0.8}
    />
  </g>
);

const glyphMap: Record<CardArtVariant, GlyphComponent> = {
  hig: HigGlyph,
  apps: AppsGlyph,
  quality: QualityGlyph,
  accessibility: AccessibilityGlyph,
  responsive: ResponsiveGlyph,
  interactions: InteractionsGlyph,
  tree: TreeGlyph,
  tokens: TokensGlyph,
  modes: ModesGlyph,
  performance: PerformanceGlyph,
  keyboard: KeyboardGlyph,
  install: InstallGlyph,
  usage: UsageGlyph,
  inside: InsideGlyph,
};

const ArtFrame: React.FC<{
  tone: Tone;
  variant: CardArtVariant;
  scale?: number;
}> = ({ tone, variant, scale }) => {
  const gradientId = useId();
  const clipId = useId();
  const accentId = useId();
  const stops = backgroundStops[variant][tone];

  const artScale = scale ?? DEFAULT_SCALE;
  const translateX = (VIEWBOX_WIDTH - GLYPH_CANVAS_WIDTH * artScale) / 2;
  const translateY = (VIEWBOX_HEIGHT - GLYPH_CANVAS_HEIGHT * artScale) / 2;
  const centeredScale = `translate(${GLYPH_CANVAS_WIDTH / 2} ${GLYPH_CANVAS_HEIGHT / 2}) scale(${artScale}) translate(${-GLYPH_CANVAS_WIDTH / 2} ${-GLYPH_CANVAS_HEIGHT / 2})`;

  const GradientGlyph = glyphMap[variant];

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      className={artClass}
      role="presentation"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {stopEls(gradientId, stops)}
        <clipPath id={clipId}>
          <rect
            width={VIEWBOX_WIDTH}
            height={VIEWBOX_HEIGHT}
            rx={OUTER_RADIUS}
            ry={OUTER_RADIUS}
          />
        </clipPath>
      </defs>
      <rect
        width={VIEWBOX_WIDTH}
        height={VIEWBOX_HEIGHT}
        rx={OUTER_RADIUS}
        ry={OUTER_RADIUS}
        fill={`url(#${gradientId})`}
      />
      <g clipPath={`url(#${clipId})`}>
        <g transform={`translate(${translateX} ${translateY})`}>
          <g transform={centeredScale}>
            <GradientGlyph tone={tone} accentId={accentId} />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const CardArt: React.FC<CardArtProps> = ({
  variant,
  tone = "dark",
  scale,
}) => <ArtFrame tone={tone} variant={variant} scale={scale} />;

export default CardArt;
