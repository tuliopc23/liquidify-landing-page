import React from "react";
import { css } from "../../../styled-system/css";
import { MessageSquare } from "lucide-react";
import type { Discussion } from "../../lib/cms";

interface DiscussionItemProps {
  discussion: Discussion;
}

export default function DiscussionItem({ discussion }: DiscussionItemProps) {
  const itemStyle = css({
    padding: "1.25rem",
    borderRadius: "0.75rem",
    backgroundColor: "mb.surface",
    border: "1px solid",
    borderColor: "border.default",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    transition: "all 150ms ease",
    cursor: "pointer",
    _hover: {
      transform: "translateY(-2px)",
      boxShadow: "md",
    },
  });

  const iconStyle = css({
    flexShrink: 0,
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "0.5rem",
    backgroundColor: "rgba(206, 108, 71, 0.15)",
    color: "mb.accent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const contentStyle = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  });

  const titleStyle = css({
    fontSize: "callout",
    fontFamily: "wixMadefor",
    fontWeight: 600,
    color: "text",
  });

  const metaStyle = css({
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    fontSize: "footnote",
    fontFamily: "wixMadefor",
    color: "muted",
  });

  const tagStyle = css({
    display: "inline-block",
    padding: "0.25rem 0.5rem",
    borderRadius: "0.25rem",
    fontSize: "caption",
    fontFamily: "wixMadefor",
    fontWeight: 600,
  });

  const repliesStyle = css({
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
  });

  const getTagColor = () => {
    switch (discussion.tag) {
      case "Pergunta":
        return { backgroundColor: "rgba(0, 122, 255, 0.15)", color: "#007AFF" };
      case "Ideia":
        return { backgroundColor: "rgba(76, 217, 100, 0.15)", color: "#4CD964" };
      case "Anúncio":
        return {
          backgroundColor: "rgba(206, 108, 71, 0.15)",
          color: "#CE6C47",
        };
    }
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) return "Há alguns minutos";
    if (diffHours < 24) return `Há ${diffHours}h`;
    if (diffDays < 7) return `Há ${diffDays}d`;
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className={itemStyle}>
      <div className={iconStyle}>
        <MessageSquare size={20} />
      </div>
      <div className={contentStyle}>
        <h4 className={titleStyle}>{discussion.title}</h4>
        <div className={metaStyle}>
          <span
            className={tagStyle}
            style={{
              backgroundColor: getTagColor().backgroundColor,
              color: getTagColor().color,
            }}
          >
            {discussion.tag}
          </span>
          <span className={repliesStyle}>
            <MessageSquare size={14} />
            {discussion.replies} resposta{discussion.replies !== 1 ? "s" : ""}
          </span>
          <span>•</span>
          <span>{formatDate(discussion.lastActivityISO)}</span>
        </div>
      </div>
    </div>
  );
}
