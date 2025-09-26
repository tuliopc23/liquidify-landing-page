import React from "react";
import { css, cx } from "../../styled-system/css";
import { typography } from "../pandaStyles";

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
        transform: "translateY(-4px)",
        boxShadow: isLightCard
          ? "0 20px 64px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.05)"
          : "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1), 0 0 140px rgba(10,132,255,0.18)",
      }
    : {
        transform: "translateY(-1px)",
        boxShadow: isLightCard
          ? "0 16px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05)"
          : "0 24px 64px rgba(0,0,0,0.44), 0 0 0 1px rgba(255,255,255,0.08)",
      };
  const card = css({
    display: "flex",
    flexDirection: "column",
    borderRadius: isCompact ? "0.875rem" : "1rem",
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
    backgroundColor: isLightCard
      ? "rgba(255,255,255,0.98)"
      : "rgba(16,16,20,0.96)",
    transform: "translateZ(0)",
    cursor: href ? "pointer" : "default",
    transition:
      "transform 180ms var(--ease-out-quad), box-shadow 220ms var(--ease-out-quad)",
    boxShadow: isLightCard
      ? isCompact
        ? "0 10px 30px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)"
        : "0 14px 44px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04)"
      : isCompact
        ? "0 14px 40px rgba(0,0,0,0.42), 0 0 0 1px rgba(255,255,255,0.06)"
        : "0 22px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)",
    _hover: hoverStyles,
    _active: { transform: href ? "translateY(-2px)" : undefined },
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
    borderTopLeftRadius: isCompact ? "0.75rem" : "0.875rem",
    borderTopRightRadius: isCompact ? "0.75rem" : "0.875rem",
    WebkitMaskImage:
      "radial-gradient(120% 100% at 0% 0%, rgba(0,0,0,1), rgba(0,0,0,0.5) 55%, rgba(0,0,0,0) 70%)",
    maskImage:
      "radial-gradient(120% 100% at 0% 0%, rgba(0,0,0,1), rgba(0,0,0,0.5) 55%, rgba(0,0,0,0) 70%)",
    _after: {
      content: '""',
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.15) 35%, rgba(255,255,255,0) 60%)",
      _dark: {
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05) 35%, rgba(255,255,255,0) 60%)",
      },
    },
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
    borderBottomLeftRadius: isCompact ? "0.875rem" : "1rem",
    borderBottomRightRadius: isCompact ? "0.875rem" : "1rem",
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

  if (href) {
    return (
      <a className={card} href={href}>
        {content}
      </a>
    );
  }

  return <div className={card}>{content}</div>;
};

export default OverviewCard;
