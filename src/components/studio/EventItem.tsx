import React from "react";
import { css } from "../../../styled-system/css";
import { Calendar, MapPin } from "lucide-react";
import type { Event } from "../../lib/cms";

interface EventItemProps {
  event: Event;
}

export default function EventItem({ event }: EventItemProps) {
  const itemStyle = css({
    padding: "1rem",
    borderRadius: "0.5rem",
    backgroundColor: "mb.surface",
    border: "1px solid",
    borderColor: "border.default",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    transition: "all 150ms ease",
    _hover: {
      transform: "translateY(-1px)",
      boxShadow: "sm",
    },
  });

  const iconStyle = css({
    flexShrink: 0,
    width: "2rem",
    height: "2rem",
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
    gap: "0.25rem",
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
    gap: "0.75rem",
  });

  const formatDateTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString("pt-BR", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={itemStyle}>
      <div className={iconStyle}>
        <Calendar size={18} />
      </div>
      <div className={contentStyle}>
        <h3 className={titleStyle}>{event.title}</h3>
        <div className={metaStyle}>
          <span>{formatDateTime(event.dateISO)}</span>
          {event.location && (
            <>
              <MapPin size={14} />
              <span>{event.location}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
