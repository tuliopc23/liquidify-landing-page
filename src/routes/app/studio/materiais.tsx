import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { css } from "../../../../styled-system/css";
import SectionHeader from "../../../components/studio/SectionHeader";
import MaterialCard from "../../../components/studio/MaterialCard";
import { getMaterials } from "../../../lib/cms";
import type { Material } from "../../../lib/cms";

function MateriaisPage() {
  const [materials, setMaterials] = React.useState<Material[]>([]);
  const [filteredMaterials, setFilteredMaterials] = React.useState<Material[]>(
    [],
  );
  const [selectedTag, setSelectedTag] = React.useState<string>("all");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const materialsData = await getMaterials();
        setMaterials(materialsData);
        setFilteredMaterials(materialsData);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  React.useEffect(() => {
    if (selectedTag === "all") {
      setFilteredMaterials(materials);
    } else {
      setFilteredMaterials(materials.filter((m) => m.tags.includes(selectedTag)));
    }
  }, [selectedTag, materials]);

  const allTags = [
    "all",
    ...Array.from(new Set(materials.flatMap((m) => m.tags))),
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
      lg: "repeat(2, 1fr)",
    },
    gap: "1rem",
  });

  return (
    <>
      <Helmet>
        <title>Materiais - MB Studio</title>
      </Helmet>
      <div className={containerStyle}>
        <SectionHeader title="Materiais (Templates & Recursos)" />

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
              Filtrar por tag
            </h3>
            <div className={filterStyle}>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={filterButtonStyle(selectedTag === tag)}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag === "all" ? "Todos" : tag}
                </button>
              ))}
            </div>

            <div className={gridStyle}>
              {filteredMaterials.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>

            {filteredMaterials.length === 0 && (
              <div
                className={css({
                  padding: "3rem",
                  textAlign: "center",
                  color: "muted",
                })}
              >
                Nenhum material encontrado com esta tag.
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export const Route = createFileRoute("/app/studio/materiais")({
  component: MateriaisPage,
});
