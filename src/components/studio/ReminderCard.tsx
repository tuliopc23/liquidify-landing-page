import React from "react";
import { Link } from "@tanstack/react-router";
import { css } from "../../../styled-system/css";
import { AlertCircle, Calendar, Clock } from "lucide-react";
import type { Reminder } from "../../lib/cms";

interface ReminderCardProps {
  reminder: Reminder;
}

export default function ReminderCard({ reminder }: ReminderCardProps) {
  const cardStyle = css({
    padding: "1.25rem",
    borderRadius: "0.75rem",
    backgroundColor: "mb.surface",
    border: "1px solid",
    borderColor: "border.default",
    display: "flex",
    gap: "1rem",
    transition: "all 150ms ease",
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
    fontSize: "footnote",
    fontFamily: "wixMadefor",
    color: "muted",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  });

  const tagStyle = css({
    display: "inline-block",
    padding: "0.25rem 0.5rem",
    borderRadius: "0.25rem",
    fontSize: "caption",
    fontFamily: "wixMadefor",
    fontWeight: 600,
    textTransform: "uppercase",
  });

  const ctaStyle = css({
    fontSize: "callout",
    fontFamily: "wixMadefor",
    fontWeight: 600,
    color: "mb.accent",
    textDecoration: "none",
    marginTop: "0.25rem",
    _hover: {
      opacity: 0.8,
    },
  });

  const getIconByType = () => {
    switch (reminder.type) {
      case "aviso":
        return <AlertCircle size={20} />;
      case "evento":
        return <Calendar size={20} />;
      case "prazo":
        return <Clock size={20} />;
    }
  };

  const getTagColor = () => {
    switch (reminder.type) {
      case "aviso":
        return { backgroundColor: "rgba(52, 170, 220, 0.2)", color: "#34AADC" };
      case "evento":
        return { backgroundColor: "rgba(76, 217, 100, 0.2)", color: "#4CD964" };
      case "prazo":
        return { backgroundColor: "rgba(255, 69, 58, 0.2)", color: "#FF3B30" };
    }
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className={cardStyle}>
      <div
        className={iconStyle}
        style={{
          backgroundColor: getTagColor().backgroundColor,
          color: getTagColor().color,
        }}
      >
        {getIconByType()}
      </div>
      <div className={contentStyle}>
        <h3 className={titleStyle}>{reminder.title}</h3>
        <div className={metaStyle}>
          <span
            className={tagStyle}
            style={{
              backgroundColor: getTagColor().backgroundColor,
              color: getTagColor().color,
            }}
          >
            {reminder.type}
          </span>
          <span>{formatDate(reminder.dateISO)}</span>
        </div>
        {reminder.cta && (
          <Link to={reminder.cta.href} className={ctaStyle}>
            {reminder.cta.label} →
          </Link>
        )}
      </div>
    </div>
  );
}
