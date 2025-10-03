import React from "react";
import { Link } from "@tanstack/react-router";
import { css } from "../../../styled-system/css";

interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
}

export default function SectionHeader({
  title,
  viewAllLink,
}: SectionHeaderProps) {
  const headerStyle = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
  });

  const titleStyle = css({
    fontSize: "title2",
    lineHeight: "title2",
    fontFamily: "caladea",
    fontWeight: 700,
    color: "text",
  });

  const linkStyle = css({
    fontSize: "callout",
    fontFamily: "wixMadefor",
    fontWeight: 600,
    color: "mb.accent",
    textDecoration: "none",
    transition: "opacity 150ms ease",
    _hover: {
      opacity: 0.8,
    },
  });

  return (
    <div className={headerStyle}>
      <h2 className={titleStyle}>{title}</h2>
      {viewAllLink && (
        <Link to={viewAllLink} className={linkStyle}>
          Ver todos →
        </Link>
      )}
    </div>
  );
}
