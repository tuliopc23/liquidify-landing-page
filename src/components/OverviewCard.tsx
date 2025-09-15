import React from "react";
import { css, cx } from "../../styled-system/css";
import { symbolTile, typography } from "../pandaStyles";

/**
 * Apple-style overview card: cover → keyline → details
 * Uses Panda CSS utilities so it fits the project's style system.
 */
export type OverviewCardProps = {
  href: string;
  cover?: string;
  /** Optional icon to use instead of a cover image */
  icon?: React.ReactNode;
  /** Tint for the icon tile background */
  tint?: "gray" | "blue" | "indigo" | "teal" | "green" | "orange" | "pink";
  eyebrow: string;
  title: string;
  summary: string;
  theme?: "light" | "dark";
};

export const OverviewCard: React.FC<OverviewCardProps> = ({
  href,
  cover,
  icon,
  tint = "gray",
  eyebrow,
  title,
  summary,
  theme = "dark",
}) => {
  const card = css({
    display: "flex",
    flexDirection: "column",
    borderRadius: "glass",
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
    transition: "transform 150ms ease, box-shadow 150ms ease",
    _hover: { transform: "translateY(-2px)", boxShadow: "xl" },
  });

  const coverCls = css({
    width: "100%",
    aspectRatio: "16/9",
    objectFit: "cover",
    bg: { base: "#222" },
  });

  const keyline = css({ height: "1px", bg: "glass.border" });

  const details = css({
    backgroundColor: theme === "light" ? "white" : "bg.surface",
    color: theme === "light" ? "black" : "text",
    p: "1rem",
    display: "grid",
    gap: "0.35rem",
    minH: "150px",
  });

  const eyebrowCls = css({
    fontSize: "0.75rem",
    color: theme === "light" ? "muted" : "muted",
  });
  const titleCls = cx(
    typography({ role: "title3" }),
    css({ letterSpacing: "-0.02em" }),
  );
  const summaryCls = css({
    fontSize: "0.875rem",
    color: theme === "light" ? "#515154" : "muted",
  });
  const cta = css({ fontSize: "0.875rem", color: "link" });

  return (
    <a className={card} href={href}>
      {icon ? (
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: "1rem",
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,.12), transparent)",
          })}
        >
          <span className={cx(symbolTile({ tint }))}>{icon}</span>
        </div>
      ) : (
        <img className={coverCls} src={cover ?? ""} alt="" />
      )}
      <div className={keyline} aria-hidden="true" />
      <div className={details}>
        <div className={eyebrowCls}>{eyebrow}</div>
        <div className={titleCls}>{title}</div>
        <p className={summaryCls}>{summary}</p>
        <span className={cta}>Learn more ›</span>
      </div>
    </a>
  );
};

export default OverviewCard;
