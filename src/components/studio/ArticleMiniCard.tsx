import React from "react";
import { css } from "../../../styled-system/css";
import { Clock } from "lucide-react";
import type { Article } from "../../lib/cms";

interface ArticleMiniCardProps {
  article: Article;
}

export default function ArticleMiniCard({ article }: ArticleMiniCardProps) {
  const cardStyle = css({
    minWidth: "280px",
    padding: "1.25rem",
    borderRadius: "0.75rem",
    backgroundColor: "mb.surface",
    border: "1px solid",
    borderColor: "border.default",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    transition: "all 150ms ease",
    cursor: "pointer",
    _hover: {
      transform: "translateY(-2px)",
      boxShadow: "md",
    },
  });

  const categoryStyle = css({
    display: "inline-block",
    padding: "0.25rem 0.5rem",
    borderRadius: "0.25rem",
    fontSize: "caption",
    fontFamily: "wixMadefor",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    backgroundColor: "rgba(206, 108, 71, 0.15)",
    color: "mb.accent",
    alignSelf: "flex-start",
  });

  const titleStyle = css({
    fontSize: "callout",
    lineHeight: "1.4",
    fontFamily: "wixMadefor",
    fontWeight: 600,
    color: "text",
  });

  const metaStyle = css({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "footnote",
    fontFamily: "wixMadefor",
    color: "muted",
  });

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className={cardStyle}>
      <span className={categoryStyle}>{article.category}</span>
      <h4 className={titleStyle}>{article.title}</h4>
      <div className={metaStyle}>
        <span>{formatDate(article.dateISO)}</span>
        <span>•</span>
        <span>
          <Clock size={12} style={{ display: "inline", marginRight: "4px" }} />
          {article.minutes} min
        </span>
      </div>
    </div>
  );
}
