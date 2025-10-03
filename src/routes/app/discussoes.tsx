import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { css } from "../../../styled-system/css";
import SectionHeader from "../../components/studio/SectionHeader";
import DiscussionItem from "../../components/studio/DiscussionItem";
import { getDiscussions } from "../../lib/cms";
import type { Discussion } from "../../lib/cms";

function DiscussoesPage() {
  const [discussions, setDiscussions] = React.useState<Discussion[]>([]);
  const [filteredDiscussions, setFilteredDiscussions] = React.useState<
    Discussion[]
  >([]);
  const [selectedTag, setSelectedTag] = React.useState<string>("all");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const discussionsData = await getDiscussions();
        setDiscussions(discussionsData);
        setFilteredDiscussions(discussionsData);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  React.useEffect(() => {
    if (selectedTag === "all") {
      setFilteredDiscussions(discussions);
    } else {
      setFilteredDiscussions(discussions.filter((d) => d.tag === selectedTag));
    }
  }, [selectedTag, discussions]);

  const tags = [
    "all",
    ...Array.from(new Set(discussions.map((d) => d.tag))),
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

  return (
    <>
      <Helmet>
        <title>Discussões - MB Studio</title>
      </Helmet>
      <div className={containerStyle}>
        <SectionHeader title="Discussões" />

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
            <h3
              className={css({
                fontSize: "title3",
                fontFamily: "caladea",
                fontWeight: 600,
                marginBottom: "1rem",
              })}
            >
              Filtrar por tipo
            </h3>
            <div className={filterStyle}>
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={filterButtonStyle(selectedTag === tag)}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag === "all" ? "Todos" : tag}
                </button>
              ))}
            </div>

            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              })}
            >
              {filteredDiscussions.map((discussion) => (
                <DiscussionItem key={discussion.id} discussion={discussion} />
              ))}
            </div>

            {filteredDiscussions.length === 0 && (
              <div
                className={css({
                  padding: "3rem",
                  textAlign: "center",
                  color: "muted",
                })}
              >
                Nenhuma discussão encontrada.
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export const Route = createFileRoute("/app/discussoes")({
  component: DiscussoesPage,
});
