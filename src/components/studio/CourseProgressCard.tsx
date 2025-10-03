import React from "react";
import { Link } from "@tanstack/react-router";
import { css } from "../../../styled-system/css";
import { BookOpen, PlayCircle } from "lucide-react";
import type { CourseProgress } from "../../lib/cms";

interface CourseProgressCardProps {
  course: CourseProgress;
}

export default function CourseProgressCard({
  course,
}: CourseProgressCardProps) {
  const cardStyle = css({
    padding: "1.5rem",
    borderRadius: "0.75rem",
    backgroundColor: "mb.surface",
    border: "1px solid",
    borderColor: "border.default",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    transition: "all 150ms ease",
    _hover: {
      transform: "translateY(-2px)",
      boxShadow: "md",
    },
  });

  const headerStyle = css({
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
  });

  const iconStyle = css({
    flexShrink: 0,
    width: "3rem",
    height: "3rem",
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

  const progressContainerStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  });

  const progressLabelStyle = css({
    fontSize: "footnote",
    fontFamily: "wixMadefor",
    color: "muted",
    display: "flex",
    justifyContent: "space-between",
  });

  const progressBarStyle = css({
    width: "100%",
    height: "0.5rem",
    borderRadius: "9999px",
    backgroundColor: "rgba(206, 108, 71, 0.2)",
    overflow: "hidden",
  });

  const progressFillStyle = css({
    height: "100%",
    backgroundColor: "mb.accent",
    borderRadius: "9999px",
    transition: "width 300ms ease",
  });

  const lastLessonStyle = css({
    padding: "0.75rem",
    borderRadius: "0.5rem",
    backgroundColor: "rgba(206, 108, 71, 0.1)",
    fontSize: "footnote",
    fontFamily: "wixMadefor",
    color: "text",
  });

  const ctaStyle = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
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
    cursor: "pointer",
    _hover: {
      transform: "translateY(-1px)",
      boxShadow: "sm",
    },
  });

  return (
    <div className={cardStyle}>
      <div className={headerStyle}>
        <div className={iconStyle}>
          <BookOpen size={24} />
        </div>
        <h3 className={titleStyle}>{course.title}</h3>
      </div>

      <div className={progressContainerStyle}>
        <div className={progressLabelStyle}>
          <span>Progresso</span>
          <span>{course.progress}%</span>
        </div>
        <div className={progressBarStyle}>
          <div
            className={progressFillStyle}
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      {course.lastLesson && (
        <div className={lastLessonStyle}>
          <strong>Última aula:</strong> {course.lastLesson.title}
        </div>
      )}

      <Link
        to={`/app/cursos/${course.id}`}
        className={ctaStyle}
      >
        <PlayCircle size={18} />
        Continuar
      </Link>
    </div>
  );
}
