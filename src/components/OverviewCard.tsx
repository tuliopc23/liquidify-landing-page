import React from "react";
import { css, cx } from "../../styled-system/css";
import { typography } from "../pandaStyles";
import { useSpringHover } from "../hooks/useSpringHover";

export type OverviewCardProps = {
  href?: string;
  cover: React.ReactNode;
  eyebrow?: string;
  title: string;
  summary?: string;
  cta?: string | null;
  theme?: "light" | "dark";
  size?: "standard" | "compact";
  children?: React.ReactNode;
};

const defaultCta = "Learn more ›";

export const OverviewCard: React.FC<OverviewCardProps> = ({
  href,
  cover,
  eyebrow,
  title,
  summary,
  cta,
  theme = "dark",
  size = "standard",
  children,
}) => {
  const isLightCard = theme === "light";
  const isCompact = size === "compact";
  const hoverStyles = href
    ? {
        transform: "translateY(-2px)",
        boxShadow: isLightCard
          ? "0 1px 0 rgba(0,0,0,0.06), 0 20px 64px rgba(0,0,0,0.14)"
          : "0 1px 0 rgba(255,255,255,0.06) inset, 0 28px 72px rgba(0,0,0,0.56)",
      }
    : {
        transform: "translateY(-1px)",
        boxShadow: isLightCard
          ? "0 1px 0 rgba(0,0,0,0.05), 0 16px 48px rgba(0,0,0,0.12)"
          : "0 1px 0 rgba(255,255,255,0.06) inset, 0 22px 60px rgba(0,0,0,0.46)",
      };
  const card = css({
    display: "flex",
    flexDirection: "column",
    borderRadius: "26px",
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
    backgroundColor: isLightCard
      ? "rgba(255,255,255,0.98)"
      : "rgba(16,16,20,0.96)",
    transform: "translateZ(0)",
    cursor: href ? "pointer" : "default",
    transition:
      "transform 160ms var(--ease-out-quad), box-shadow 200ms var(--ease-out-quad)",
    boxShadow: isLightCard
      ? isCompact
        ? "inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 0 rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.06), 0 20px 32px rgba(0,0,0,0.08)"
        : "inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 0 rgba(0,0,0,0.04), 0 12px 24px rgba(0,0,0,0.06), 0 28px 44px rgba(0,0,0,0.10)"
      : isCompact
        ? "inset 0 1px 0 rgba(255,255,255,0.06), 0 10px 20px rgba(0,0,0,0.38), 0 24px 48px rgba(0,0,0,0.46)"
        : "inset 0 1px 0 rgba(255,255,255,0.06), 0 14px 28px rgba(0,0,0,0.42), 0 30px 60px rgba(0,0,0,0.5)",
    _hover: {
      ...hoverStyles,
      transform: "translateY(-3px)",
    },
    _active: { transform: href ? "translateY(-1px)" : undefined },
    _focusVisible: {
      outline: "none",
      boxShadow: isLightCard
        ? "0 0 0 3px rgba(10,132,255,0.35), 0 28px 80px rgba(0,0,0,0.32)"
        : "0 0 0 3px rgba(10,132,255,0.45), 0 28px 80px rgba(0,0,0,0.42)",
    },
  });

  const coverShell = css({
    position: "relative",
    aspectRatio: "3/2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: isLightCard ? "#f5f5f7" : "#0b0c10",
    borderTopLeftRadius: "26px",
    borderTopRightRadius: "26px",
  });

  const coverContent = css({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: isCompact ? "0.5rem" : "0.75rem",
    boxSizing: "border-box",
    "& > *": {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& > svg": {
      display: "block",
      width: "100%",
      height: "auto",
      maxHeight: "100%",
      minWidth: 0,
      flexShrink: 0,
      overflow: "visible",
      transformBox: "fill-box",
      transformOrigin: "center",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      imageRendering: "optimizeQuality",
    },
  });

  const keyline = css({
    height: "1px",
    backgroundColor: isLightCard ? "#e8e8ed" : "rgba(255,255,255,0.1)",
    boxShadow: isLightCard
      ? "0 1px 0 rgba(255,255,255,0.6) inset"
      : "0 1px 0 rgba(0,0,0,0.2) inset",
  });

  const details = css({
    backgroundColor: "transparent",
    color: isLightCard ? "#1d1d1f" : "rgba(248,248,250,0.93)",
    padding: isCompact ? "0.9rem 1.1rem 1.1rem" : "1.1rem 1.3rem 1.25rem",
    display: "grid",
    gap: isCompact ? "0.45rem" : "0.6rem",
    minHeight: isCompact ? "10.25rem" : "12.25rem",
    borderBottomLeftRadius: "26px",
    borderBottomRightRadius: "26px",
  });

  const eyebrowCls = css({
    fontSize: isCompact ? "0.7rem" : "0.75rem",
    letterSpacing: "0.09em",
    textTransform: "uppercase",
    fontWeight: 600,
    color: isLightCard ? "#6e6e73" : "rgba(255,255,255,0.62)",
  });

  const titleCls = cx(
    typography({ role: isCompact ? "title3" : "title2" }),
    css({
      fontSize: isCompact ? "1.1rem" : undefined,
      letterSpacing: "-0.02em",
      color: isLightCard ? "#1d1d1f" : "rgba(255,255,255,0.95)",
    }),
  );

  const summaryCls = css({
    fontSize: isCompact ? "0.9rem" : "0.95rem",
    lineHeight: 1.5,
    color: isLightCard ? "#515154" : "rgba(255,255,255,0.74)",
  });

  const ctaCls = css({
    fontSize: isCompact ? "0.9rem" : "0.95rem",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
    color: isLightCard ? "#0071e3" : "var(--colors-link)",
    textRendering: "optimizeLegibility",
  });

  const resolvedCta = cta === null ? null : (cta ?? defaultCta);

  const content = (
    <>
      <div className={coverShell}>
        <div className={coverContent} aria-hidden={true}>
          {cover}
        </div>
      </div>
      <div className={keyline} aria-hidden={true} />
      <div className={details}>
        {eyebrow ? <div className={eyebrowCls}>{eyebrow}</div> : null}
        <div className={titleCls}>{title}</div>
        {summary ? <p className={summaryCls}>{summary}</p> : null}
        {children}
        {resolvedCta ? <span className={ctaCls}>{resolvedCta}</span> : null}
      </div>
    </>
  );

  const [springStyle, bind, a] = useSpringHover({
    lift: href ? 3 : 2,
    scale: 1.01,
  });

  if (href) {
    return (
      <a.a style={springStyle} className={card} href={href} {...bind}>
        {content}
      </a.a>
    );
  }

  return (
    <a.div style={springStyle} className={card} {...bind}>
      {content}
    </a.div>
  );
};

export default OverviewCard;
