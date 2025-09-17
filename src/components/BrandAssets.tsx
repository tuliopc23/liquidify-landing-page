import React, { useId } from "react";
import { css, cx } from "../../styled-system/css";
import { typography } from "../pandaStyles";

type LiquidifyWordmarkRole =
  | "display"
  | "largeTitle"
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "headline"
  | "body"
  | "callout"
  | "subhead"
  | "footnote"
  | "caption1"
  | "caption2";

export interface LiquidifyLogomarkProps {
  size?: number;
  className?: string;
  ariaLabel?: string;
}

export const LiquidifyLogomark: React.FC<LiquidifyLogomarkProps> = ({
  size = 40,
  className,
  ariaLabel,
}) => {
  const cornerRadius = size * 0.225;
  const uniqueId = useId();
  const isCompact = size <= 36;

  const gradientIds = {
    base: `liquidify-base-${uniqueId}`,
    glass1: `liquidify-glass1-${uniqueId}`,
    glass2: `liquidify-glass2-${uniqueId}`,
    orb: `liquidify-orb-${uniqueId}`,
    orbCore: `liquidify-orb-core-${uniqueId}`,
    drop1: `liquidify-drop1-${uniqueId}`,
    drop2: `liquidify-drop2-${uniqueId}`,
    drop3: `liquidify-drop3-${uniqueId}`,
    highlight: `liquidify-highlight-${uniqueId}`,
    shadow: `liquidify-shadow-${uniqueId}`,
  };

  const filterIds = {
    soft: `liquidify-soft-${uniqueId}`,
    glow: `liquidify-glow-${uniqueId}`,
  };

  const clipId = `liquidify-clip-${uniqueId}`;

  const filterFrame = {
    x: -size * 0.45,
    y: -size * 0.45,
    width: size * 1.9,
    height: size * 1.9,
  };

  const outerShadowDeviation = isCompact ? size * 0.08 : size * 0.12;
  const outerShadowSpread = isCompact ? size * 0.12 : size * 0.18;

  const labelled = Boolean(ariaLabel);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      role={labelled ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={labelled ? undefined : true}
      focusable="false"
    >
      {labelled ? <title>{ariaLabel}</title> : null}
      <defs>
        <linearGradient
          id={gradientIds.base}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="55%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient
          id={gradientIds.glass1}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={gradientIds.glass2}
          x1="0%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#000000" stopOpacity="0.22" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.08" />
        </linearGradient>
        <radialGradient id={gradientIds.orb} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={gradientIds.orbCore} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.82" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
        </radialGradient>
        <radialGradient id={gradientIds.drop1} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
        </radialGradient>
        <radialGradient id={gradientIds.drop2} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.12" />
        </radialGradient>
        <radialGradient id={gradientIds.drop3} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
        </radialGradient>
        <linearGradient
          id={gradientIds.highlight}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={gradientIds.shadow}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
        </linearGradient>
        <filter
          id={filterIds.soft}
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
          x={filterFrame.x}
          y={filterFrame.y}
          width={filterFrame.width}
          height={filterFrame.height}
        >
          <feGaussianBlur stdDeviation={size * 0.02} />
        </filter>
        <filter
          id={filterIds.glow}
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
          x={filterFrame.x}
          y={filterFrame.y}
          width={filterFrame.width}
          height={filterFrame.height}
        >
          <feDropShadow
            dx="0"
            dy={outerShadowDeviation}
            stdDeviation={outerShadowSpread}
            floodColor="rgba(59,130,246,0.4)"
          />
          <feDropShadow
            dx="0"
            dy={outerShadowDeviation * 0.5}
            stdDeviation={outerShadowSpread * 0.5}
            floodColor="rgba(96,165,250,0.35)"
          />
        </filter>
        <clipPath id={clipId}>
          <rect width={size} height={size} rx={cornerRadius} />
        </clipPath>
      </defs>

      <rect
        width={size}
        height={size}
        rx={cornerRadius}
        fill="none"
        filter={`url(#${filterIds.glow})`}
        opacity="0.32"
      />
      <rect
        width={size}
        height={size}
        rx={cornerRadius}
        fill={`url(#${gradientIds.base})`}
      />
      <rect
        width={size}
        height={size}
        rx={cornerRadius}
        fill={`url(#${gradientIds.glass1})`}
      />
      <rect
        width={size}
        height={size}
        rx={cornerRadius}
        fill={`url(#${gradientIds.glass2})`}
      />

      <g clipPath={`url(#${clipId})`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * 0.25}
          fill={`url(#${gradientIds.orb})`}
          filter={`url(#${filterIds.soft})`}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * 0.125}
          fill={`url(#${gradientIds.orbCore})`}
        />
        <circle
          cx={size * 0.32}
          cy={size * 0.27}
          r={size * 0.075}
          fill={`url(#${gradientIds.drop1})`}
          filter={`url(#${filterIds.soft})`}
        />
        <circle
          cx={size * 0.75}
          cy={size * 0.71}
          r={size * 0.06}
          fill={`url(#${gradientIds.drop2})`}
          filter={`url(#${filterIds.soft})`}
        />
        <circle
          cx={size * 0.69}
          cy={size * 0.34}
          r={size * 0.04}
          fill={`url(#${gradientIds.drop3})`}
          filter={`url(#${filterIds.soft})`}
        />
        <rect
          width={size}
          height={size}
          rx={cornerRadius}
          fill={`url(#${gradientIds.highlight})`}
        />
        <path
          d={`M 0 ${size * 0.67} Q 0 ${size} ${cornerRadius} ${size} L ${
            size - cornerRadius
          } ${size} Q ${size} ${size} ${size} ${size * 0.67} L ${size} ${size} L 0 ${
            size
          } Z`}
          fill={`url(#${gradientIds.shadow})`}
        />
      </g>
    </svg>
  );
};

export interface LiquidifyWordmarkProps {
  label?: string;
  className?: string;
  role?: LiquidifyWordmarkRole;
}

export const LiquidifyWordmark: React.FC<LiquidifyWordmarkProps> = ({
  label = "Liquidify",
  className,
  role = "title3",
}) => {
  const gradientText = css({
    display: "inline-block",
    fontWeight: 700,
    letterSpacing: "titles",
    backgroundImage:
      "linear-gradient(135deg, #6eb8ff 0%, #2563eb 60%, #312e81 100%)",
    color: "transparent",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  });

  return (
    <span className={cx(typography({ role }), gradientText, className)}>
      {label}
    </span>
  );
};

export interface LiquidifyBrandProps {
  size?: number;
  label?: string;
  showWordmark?: boolean;
  direction?: "row" | "column";
  gap?: string;
  className?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
  wordmarkRole?: LiquidifyWordmarkRole;
}

export const LiquidifyBrand: React.FC<LiquidifyBrandProps> = ({
  size = 32,
  label = "Liquidify",
  showWordmark = true,
  direction = "row",
  gap,
  className,
  iconClassName,
  wordmarkClassName,
  wordmarkRole = "title3",
}) => {
  const container = css({
    display: "inline-flex",
    alignItems: direction === "row" ? "center" : "flex-start",
    flexDirection: direction,
    gap: gap ?? (direction === "row" ? "0.6rem" : "0.5rem"),
  });

  return (
    <span className={cx(container, className)}>
      <LiquidifyLogomark
        size={size}
        className={iconClassName}
        ariaLabel={showWordmark ? undefined : label}
      />
      {showWordmark ? (
        <LiquidifyWordmark
          label={label}
          className={wordmarkClassName}
          role={wordmarkRole}
        />
      ) : null}
    </span>
  );
};
