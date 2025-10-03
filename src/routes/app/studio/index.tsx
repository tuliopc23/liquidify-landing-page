import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { css } from "../../../../styled-system/css";
import StudioHero from "../../../components/studio/StudioHero";
import SectionHeader from "../../../components/studio/SectionHeader";
import ReminderCard from "../../../components/studio/ReminderCard";
import EventItem from "../../../components/studio/EventItem";
import MonthThemeCard from "../../../components/studio/MonthThemeCard";
import ArticleFeaturedCard from "../../../components/studio/ArticleFeaturedCard";
import ArticleMiniCard from "../../../components/studio/ArticleMiniCard";
import MaterialCard from "../../../components/studio/MaterialCard";
import CourseProgressCard from "../../../components/studio/CourseProgressCard";
import DiscussionItem from "../../../components/studio/DiscussionItem";
import {
  getReminders,
  getEvents,
  getMonthTheme,
  getFeaturedArticle,
  getArticles,
  getMaterials,
  getCourseProgress,
  getDiscussions,
} from "../../../lib/cms";
import type {
  Reminder,
  Event,
  MonthTheme,
  Article,
  Material,
  CourseProgress,
  Discussion,
} from "../../../lib/cms";

function StudioPage() {
  const [reminders, setReminders] = React.useState<Reminder[]>([]);
  const [events, setEvents] = React.useState<Event[]>([]);
  const [monthTheme, setMonthTheme] = React.useState<MonthTheme | null>(null);
  const [featuredArticle, setFeaturedArticle] = React.useState<Article | null>(
    null,
  );
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [materials, setMaterials] = React.useState<Material[]>([]);
  const [courses, setCourses] = React.useState<CourseProgress[]>([]);
  const [discussions, setDiscussions] = React.useState<Discussion[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [
          remindersData,
          eventsData,
          themeData,
          featuredData,
          articlesData,
          materialsData,
          coursesData,
          discussionsData,
        ] = await Promise.all([
          getReminders(),
          getEvents(),
          getMonthTheme(),
          getFeaturedArticle(),
          getArticles(),
          getMaterials(),
          getCourseProgress(),
          getDiscussions(),
        ]);

        setReminders(remindersData);
        setEvents(eventsData);
        setMonthTheme(themeData);
        setFeaturedArticle(featuredData);
        setArticles(articlesData.filter((a) => !a.featured).slice(0, 4));
        setMaterials(materialsData.slice(0, 4));
        setCourses(coursesData);
        setDiscussions(discussionsData.slice(0, 5));
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const containerStyle = css({
    backgroundColor: "mb.bg",
    minHeight: "100vh",
  });

  const sectionStyle = css({
    padding: "2.5rem 3rem",
    borderBottom: "1px solid",
    borderColor: "border.default",
  });

  const gridStyle = css({
    display: "grid",
    gridTemplateColumns: {
      base: "1fr",
      md: "repeat(2, 1fr)",
    },
    gap: "1rem",
  });

  const grid3Style = css({
    display: "grid",
    gridTemplateColumns: {
      base: "1fr",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
    },
    gap: "1rem",
  });

  const carouselStyle = css({
    display: "flex",
    gap: "1rem",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    paddingBottom: "1rem",
    "&::-webkit-scrollbar": {
      height: "8px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "rgba(206, 108, 71, 0.1)",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "mb.accent",
      borderRadius: "4px",
    },
  });

  const emptyStateStyle = css({
    padding: "3rem",
    textAlign: "center",
    color: "muted",
    fontFamily: "wixMadefor",
  });

  if (loading) {
    return (
      <div className={containerStyle}>
        <StudioHero />
        <div className={sectionStyle}>
          <div className={emptyStateStyle}>Carregando...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>MB Studio - Início</title>
        <meta name="description" content="Seu hub de conteúdos e cursos" />
      </Helmet>
      <div className={containerStyle}>
        <StudioHero />

        {/* Lembretes & Próximos */}
        <section className={sectionStyle}>
          <SectionHeader
            title="Lembretes & Próximos"
            viewAllLink="/app/studio/lembretes"
          />
          <div className={gridStyle}>
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              })}
            >
              {reminders.map((reminder) => (
                <ReminderCard key={reminder.id} reminder={reminder} />
              ))}
            </div>
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              })}
            >
              {monthTheme && <MonthThemeCard theme={monthTheme} />}
              {events.map((event) => (
                <EventItem key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Artigos & Blog */}
        <section className={sectionStyle}>
          <SectionHeader
            title="Artigos & Blog"
            viewAllLink="/app/studio/artigos"
          />
          {featuredArticle && (
            <div className={css({ marginBottom: "2rem" })}>
              <ArticleFeaturedCard article={featuredArticle} />
            </div>
          )}
          <h3
            className={css({
              fontSize: "title3",
              fontFamily: "caladea",
              fontWeight: 600,
              marginBottom: "1rem",
            })}
          >
            Escolha mais artigos
          </h3>
          <div className={carouselStyle}>
            {articles.map((article) => (
              <ArticleMiniCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* Materiais */}
        <section className={sectionStyle}>
          <SectionHeader
            title="Materiais (Templates & Recursos)"
            viewAllLink="/app/studio/materiais"
          />
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            })}
          >
            {materials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        </section>

        {/* Meus Cursos */}
        <section className={sectionStyle}>
          <SectionHeader title="Meus Cursos" viewAllLink="/app/cursos" />
          {courses.length > 0 ? (
            <div className={grid3Style}>
              {courses.map((course) => (
                <CourseProgressCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className={emptyStateStyle}>
              <p>Você ainda não está matriculado em nenhum curso.</p>
              <p>
                <a
                  href="/app/cursos"
                  className={css({
                    color: "mb.accent",
                    textDecoration: "underline",
                  })}
                >
                  Explorar cursos disponíveis
                </a>
              </p>
            </div>
          )}
        </section>

        {/* Discussões */}
        <section className={sectionStyle}>
          <SectionHeader title="Discussões" viewAllLink="/app/discussoes" />
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            })}
          >
            {discussions.map((discussion) => (
              <DiscussionItem key={discussion.id} discussion={discussion} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export const Route = createFileRoute("/app/studio/")({
  component: StudioPage,
});
