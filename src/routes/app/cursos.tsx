import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { css } from "../../../styled-system/css";
import SectionHeader from "../../components/studio/SectionHeader";
import CourseProgressCard from "../../components/studio/CourseProgressCard";
import { getCourseProgress } from "../../lib/cms";
import type { CourseProgress } from "../../lib/cms";

function CursosPage() {
  const [courses, setCourses] = React.useState<CourseProgress[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const coursesData = await getCourseProgress();
        setCourses(coursesData);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const containerStyle = css({
    backgroundColor: "mb.bg",
    minHeight: "100vh",
    padding: "2.5rem 3rem",
  });

  const gridStyle = css({
    display: "grid",
    gridTemplateColumns: {
      base: "1fr",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
    },
    gap: "1.5rem",
  });

  const emptyStateStyle = css({
    padding: "3rem",
    textAlign: "center",
    color: "muted",
    fontFamily: "wixMadefor",
  });

  return (
    <>
      <Helmet>
        <title>Meus Cursos - MB Studio</title>
      </Helmet>
      <div className={containerStyle}>
        <SectionHeader title="Meus Cursos" />

        {loading ? (
          <div className={emptyStateStyle}>Carregando...</div>
        ) : courses.length > 0 ? (
          <div className={gridStyle}>
            {courses.map((course) => (
              <CourseProgressCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className={emptyStateStyle}>
            <p>Você ainda não está matriculado em nenhum curso.</p>
            <p>
              <a
                href="/cursos"
                className={css({
                  color: "mb.accent",
                  textDecoration: "underline",
                  fontWeight: 600,
                })}
              >
                Explorar cursos disponíveis
              </a>
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export const Route = createFileRoute("/app/cursos")({
  component: CursosPage,
});
