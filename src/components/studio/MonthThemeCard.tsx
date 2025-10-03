import React from "react";
import { css } from "../../../styled-system/css";
import { Sparkles } from "lucide-react";
import type { MonthTheme } from "../../lib/cms";

interface MonthThemeCardProps {
  theme: MonthTheme;
}

export default function MonthThemeCard({ theme }: MonthThemeCardProps) {
  const cardStyle = css({
    padding: "1.5rem",
    borderRadius: "0.75rem",
    backgroundColor: "mb.surface",
    border: "2px solid",
    borderColor: "mb.accent",
    position: "relative",
    overflow: "hidden",
  });

  const headerStyle = css({
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "1rem",
  });

  const iconStyle = css({
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "0.5rem",
    backgroundColor: "rgba(206, 108, 71, 0.15)",
    color: "mb.accent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const titleStyle = css({
    fontSize: "title3",
    lineHeight: "title3",
    fontFamily: "caladea",
    fontWeight: 700,
    color: "text",
  });

  const monthStyle = css({
    fontSize: "footnote",
    fontFamily: "wixMadefor",
    color: "muted",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  });

  const listStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    listStyle: "none",
    padding: 0,
    margin: 0,
  });

  const listItemStyle = css({
    fontSize: "callout",
    fontFamily: "wixMadefor",
    color: "text",
    paddingLeft: "1.5rem",
    position: "relative",
    _before: {
      content: '"•"',
      position: "absolute",
      left: 0,
      color: "mb.accent",
      fontWeight: "bold",
      fontSize: "1.25rem",
    },
  });

  return (
    <div className={cardStyle}>
      <div className={headerStyle}>
        <div className={iconStyle}>
          <Sparkles size={20} />
        </div>
        <div>
          <p className={monthStyle}>{theme.month}</p>
          <h3 className={titleStyle}>{theme.title}</h3>
        </div>
      </div>
      <ul className={listStyle}>
        {theme.bullets.map((bullet, index) => (
          <li key={index} className={listItemStyle}>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
