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
    : {};
  const card = css({
    display: "flex",
    flexDirection: "column",
    borderRadius: isCompact ? "1rem" : "1.125rem",
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
    backgroundColor: isLightCard
      ? "rgba(255,255,255,0.96)"
      : "rgba(19,19,22,0.94)",
    transform: "translateZ(0)",
    cursor: href ? "pointer" : "default",
    transition: "transform 180ms ease, box-shadow 200ms ease",
    boxShadow: isLightCard
      ? isCompact
        ? "0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)"
        : "0 12px 48px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04)"
      : isCompact
        ? "0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06), 0 0 80px rgba(10,132,255,0.15)"
        : "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08), 0 0 120px rgba(10,132,255,0.12)",
    _hover: hoverStyles,
    _focusVisible: {
      outline: "none",
      boxShadow: isLightCard
        ? "0 0 0 3px rgba(10,132,255,0.35), 0 28px 80px rgba(0,0,0,0.32)"
        : "0 0 0 3px rgba(10,132,255,0.45), 0 28px 80px rgba(0,0,0,0.42)",
    },
  });

  const coverShell = css({
    position: "relative",
    // Use fixed aspect ratio for all to match artwork
    aspectRatio: "16/9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: isLightCard ? "#f5f5f7" : "#0f1115",
    // Let height be dictated by width and aspect-ratio for Safari correctness
    borderTopLeftRadius: isCompact ? "1rem" : "1.125rem",
    borderTopRightRadius: isCompact ? "1rem" : "1.125rem",
  });

  const coverContent = css({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // Use fixed padding to avoid Safari percentage quirks
    padding: isCompact ? "0.75rem" : "1rem",
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
    },
  });

  const keyline = css({
    height: "1px",
    backgroundColor: isLightCard ? "#e8e8ed" : "rgba(255,255,255,0.1)",
  });

  const details = css({
    backgroundColor: "transparent",
    color: isLightCard ? "#1d1d1f" : "rgba(248,248,250,0.93)",
    padding: isCompact ? "1rem 1.15rem 1.2rem" : "1.15rem 1.35rem 1.3rem",
    display: "grid",
    gap: isCompact ? "0.45rem" : "0.55rem",
    minHeight: isCompact ? "10.5rem" : "12.5rem",
    borderBottomLeftRadius: isCompact ? "1rem" : "1.125rem",
    borderBottomRightRadius: isCompact ? "1rem" : "1.125rem",
  });

  const eyebrowCls = css({
    fontSize: isCompact ? "0.7rem" : "0.75rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontWeight: 600,
    color: isLightCard ? "#6e6e73" : "rgba(255,255,255,0.64)",
  });

  const titleCls = cx(
    typography({ role: "title3" }),
    css({
      fontSize: isCompact ? "1.15rem" : undefined,
      letterSpacing: "-0.02em",
      color: isLightCard ? "#1d1d1f" : "rgba(255,255,255,0.95)",
    }),
  );

  const summaryCls = css({
    fontSize: isCompact ? "0.9rem" : "0.95rem",
    lineHeight: 1.48,
    color: isLightCard ? "#515154" : "rgba(255,255,255,0.72)",
  });

  const ctaCls = css({
    fontSize: isCompact ? "0.9rem" : "0.95rem",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
    color: isLightCard ? "#0071e3" : "var(--colors-link)",
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
