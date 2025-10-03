import React from "react";
import { css } from "../../../styled-system/css";
import { FileText, FileSpreadsheet, Download, File } from "lucide-react";
import type { Material } from "../../lib/cms";

interface MaterialCardProps {
  material: Material;
}

export default function MaterialCard({ material }: MaterialCardProps) {
  const cardStyle = css({
    padding: "1.25rem",
    borderRadius: "0.75rem",
    backgroundColor: "mb.surface",
    border: "1px solid",
    borderColor: "border.default",
    display: "flex",
    gap: "1rem",
    transition: "all 150ms ease",
    cursor: "pointer",
    _hover: {
      transform: "translateY(-2px)",
      boxShadow: "md",
      borderColor: "mb.accent",
    },
  });

  const iconStyle = css({
    flexShrink: 0,
    width: "3rem",
    height: "3rem",
    borderRadius: "0.5rem",
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

  const descriptionStyle = css({
    fontSize: "footnote",
    lineHeight: "1.4",
    fontFamily: "wixMadefor",
    color: "muted",
  });

  const tagsStyle = css({
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
    marginTop: "0.25rem",
  });

  const tagStyle = css({
    padding: "0.25rem 0.5rem",
    borderRadius: "0.25rem",
    fontSize: "caption",
    fontFamily: "wixMadefor",
    fontWeight: 600,
    backgroundColor: "rgba(206, 108, 71, 0.1)",
    color: "mb.accent",
  });

  const actionsStyle = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: "0.5rem",
  });

  const buttonStyle = css({
    padding: "0.5rem 0.75rem",
    fontSize: "callout",
    fontFamily: "wixMadefor",
    fontWeight: 600,
    borderRadius: "0.5rem",
    backgroundColor: "mb.button-primary",
    color: { base: "white", _dark: "white" },
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "all 150ms ease",
    _hover: {
      transform: "translateY(-1px)",
      boxShadow: "sm",
    },
  });

  const sizeStyle = css({
    fontSize: "caption",
    fontFamily: "wixMadefor",
    color: "muted",
  });

  const getIcon = () => {
    switch (material.type) {
      case "pdf":
        return (
          <>
            <FileText size={24} />
            <span
              className={css({
                position: "absolute",
                bottom: "0.25rem",
                right: "0.25rem",
                fontSize: "0.625rem",
                fontWeight: "bold",
              })}
            >
              PDF
            </span>
          </>
        );
      case "xlsx":
        return (
          <>
            <FileSpreadsheet size={24} />
            <span
              className={css({
                position: "absolute",
                bottom: "0.25rem",
                right: "0.25rem",
                fontSize: "0.625rem",
                fontWeight: "bold",
              })}
            >
              XLS
            </span>
          </>
        );
      case "docx":
        return (
          <>
            <FileText size={24} />
            <span
              className={css({
                position: "absolute",
                bottom: "0.25rem",
                right: "0.25rem",
                fontSize: "0.625rem",
                fontWeight: "bold",
              })}
            >
              DOC
            </span>
          </>
        );
      case "template":
        return <File size={24} />;
    }
  };

  const getIconColor = () => {
    switch (material.type) {
      case "pdf":
        return { backgroundColor: "rgba(255, 69, 58, 0.15)", color: "#FF3B30" };
      case "xlsx":
        return { backgroundColor: "rgba(76, 217, 100, 0.15)", color: "#4CD964" };
      case "docx":
        return { backgroundColor: "rgba(0, 122, 255, 0.15)", color: "#007AFF" };
      case "template":
        return {
          backgroundColor: "rgba(206, 108, 71, 0.15)",
          color: "#CE6C47",
        };
    }
  };

  return (
    <div className={cardStyle}>
      <div
        className={iconStyle}
        style={{
          backgroundColor: getIconColor().backgroundColor,
          color: getIconColor().color,
          position: "relative",
        }}
      >
        {getIcon()}
      </div>
      <div className={contentStyle}>
        <h4 className={titleStyle}>{material.title}</h4>
        <p className={descriptionStyle}>{material.description}</p>
        <div className={tagsStyle}>
          {material.tags.map((tag) => (
            <span key={tag} className={tagStyle}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={actionsStyle}>
        {material.size && <span className={sizeStyle}>{material.size}</span>}
        <button className={buttonStyle}>
          <Download size={16} />
          Baixar
        </button>
      </div>
    </div>
  );
}
