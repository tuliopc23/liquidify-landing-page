import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { css } from "../../../../styled-system/css";
import SectionHeader from "../../../components/studio/SectionHeader";
import ArticleFeaturedCard from "../../../components/studio/ArticleFeaturedCard";
import ArticleMiniCard from "../../../components/studio/ArticleMiniCard";
import { getFeaturedArticle, getArticles } from "../../../lib/cms";
import type { Article } from "../../../lib/cms";

function ArtigosPage() {
  const [featuredArticle, setFeaturedArticle] = React.useState<Article | null>(
    null,
  );
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = React.useState<Article[]>(
    [],
  );
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [featuredData, articlesData] = await Promise.all([
          getFeaturedArticle(),
          getArticles(),
        ]);
        setFeaturedArticle(featuredData);
        const nonFeatured = articlesData.filter((a) => !a.featured);
        setArticles(nonFeatured);
        setFilteredArticles(nonFeatured);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  React.useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(
        articles.filter((a) => a.category === selectedCategory),
      );
    }
  }, [selectedCategory, articles]);

  const categories = [
    "all",
    ...Array.from(new Set(articles.map((a) => a.category))),
  ];

  const containerStyle = css({
    backgroundColor: "mb.bg",
    minHeight: "100vh",
    padding: "2.5rem 3rem",
  });

  const filterStyle = css({
    display: "flex",
    gap: "0.5rem",
    marginBottom: "2rem",
    flexWrap: "wrap",
  });

  const filterButtonStyle = (active: boolean) =>
    css({
      padding: "0.5rem 1rem",
      fontSize: "callout",
      fontFamily: "wixMadefor",
      fontWeight: 600,
      borderRadius: "0.5rem",
      border: "1px solid",
      borderColor: active ? "mb.accent" : "border.default",
      backgroundColor: active ? "rgba(206, 108, 71, 0.15)" : "mb.surface",
      color: active ? "mb.accent" : "text",
      cursor: "pointer",
      transition: "all 150ms ease",
      _hover: {
        borderColor: "mb.accent",
      },
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

  return (
    <>
      <Helmet>
        <title>Artigos & Blog - MB Studio</title>
      </Helmet>
      <div className={containerStyle}>
        <SectionHeader title="Artigos & Blog" />

        {loading ? (
          <div
            className={css({
              padding: "3rem",
              textAlign: "center",
              color: "muted",
            })}
          >
            Carregando...
          </div>
        ) : (
          <>
            {featuredArticle && (
              <div className={css({ marginBottom: "3rem" })}>
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
              Filtrar por categoria
            </h3>
            <div className={filterStyle}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={filterButtonStyle(selectedCategory === category)}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all" ? "Todos" : category}
                </button>
              ))}
            </div>

            <div className={gridStyle}>
              {filteredArticles.map((article) => (
                <ArticleMiniCard key={article.id} article={article} />
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div
                className={css({
                  padding: "3rem",
                  textAlign: "center",
                  color: "muted",
                })}
              >
                Nenhum artigo encontrado nesta categoria.
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export const Route = createFileRoute("/app/studio/artigos")({
  component: ArtigosPage,
});
