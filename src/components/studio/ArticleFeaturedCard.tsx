import React from "react";
import { css } from "../../../styled-system/css";
import { Clock, Tag } from "lucide-react";
import type { Article } from "../../lib/cms";

interface ArticleFeaturedCardProps {
  article: Article;
}

export default function ArticleFeaturedCard({
  article,
}: ArticleFeaturedCardProps) {
  const cardStyle = css({
    borderRadius: "1rem",
    backgroundColor: "mb.surface",
    border: "1px solid",
    borderColor: "border.default",
    overflow: "hidden",
    transition: "all 150ms ease",
    cursor: "pointer",
    _hover: {
      transform: "translateY(-4px)",
      boxShadow: "lg",
    },
  });

  const imageStyle = css({
    width: "100%",
    height: "240px",
    backgroundColor: "rgba(206, 108, 71, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "mb.accent",
    fontSize: "title1",
  });

  const contentStyle = css({
    padding: "1.5rem",
  });

  const categoryStyle = css({
    display: "inline-block",
    padding: "0.25rem 0.75rem",
    borderRadius: "0.25rem",
    fontSize: "caption",
    fontFamily: "wixMadefor",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    backgroundColor: "rgba(206, 108, 71, 0.15)",
    color: "mb.accent",
    marginBottom: "0.75rem",
  });

  const titleStyle = css({
    fontSize: "title2",
    lineHeight: "title2",
    fontFamily: "caladea",
    fontWeight: 700,
    color: "text",
    marginBottom: "0.75rem",
  });

  const excerptStyle = css({
    fontSize: "body",
    lineHeight: "body",
    fontFamily: "wixMadefor",
    color: "muted",
    marginBottom: "1rem",
  });

  const metaStyle = css({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    fontSize: "footnote",
    fontFamily: "wixMadefor",
    color: "muted",
  });

  const ctaStyle = css({
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    fontSize: "callout",
    fontFamily: "wixMadefor",
    fontWeight: 600,
    borderRadius: "0.5rem",
    backgroundColor: "mb.button-primary",
    color: { base: "white", _dark: "white" },
    border: "none",
    textDecoration: "none",
    transition: "all 150ms ease",
    _hover: {
      transform: "translateY(-1px)",
      boxShadow: "md",
    },
  });

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className={cardStyle}>
      <div className={imageStyle}>
        <Tag size={48} />
      </div>
      <div className={contentStyle}>
        <span className={categoryStyle}>{article.category}</span>
        <h3 className={titleStyle}>{article.title}</h3>
        {article.excerpt && <p className={excerptStyle}>{article.excerpt}</p>}
        <div className={metaStyle}>
          <span>{formatDate(article.dateISO)}</span>
          <span>•</span>
          <span>
            <Clock size={14} style={{ display: "inline", marginRight: "4px" }} />
            {article.minutes} min de leitura
          </span>
        </div>
        <button className={ctaStyle}>Ler artigo completo →</button>
      </div>
    </div>
  );
}
