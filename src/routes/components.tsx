import React, { useMemo, useState } from "react";
import { css } from "../../styled-system/css";
import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { CardGrid, ComponentCard } from "../showcase/GridParts";
import { registry } from "../showcase/registry";

function ComponentsShowcaseRoute() {
  const [query, setQuery] = useState("");
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return registry;
    return registry.filter((m) =>
      [m.name, m.description, m.id].some((s) => s.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <main id="main" className={css({ py: "5rem" })}>
      <Helmet>
        <title>Liquidify Components Showcase</title>
        <meta
          name="description"
          content="Explore high-fidelity Liquid Glass React components."
        />
        <link rel="canonical" href="/components" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Liquidify Components Showcase" />
        <meta
          property="og:description"
          content="Explore high-fidelity Liquid Glass React components."
        />
        <meta property="og:url" content="/components" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: registry.map((m, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `/components#${m.id}`,
            })),
          })}
        </script>
      </Helmet>
      <section
        className={css({ maxW: "6xl", mx: "auto", px: { base: 4, md: 6 } })}
      >
        <h1 className={css({ fontSize: "3xl", fontWeight: 700, mb: 6 })}>
          Components Showcase
        </h1>
        <div
          className={css({
            mb: 6,
            display: "flex",
            alignItems: "center",
            gap: 3,
          })}
        >
          <label
            htmlFor="component-search"
            className={css({ fontWeight: 500 })}
          >
            Search
          </label>
          <input
            id="component-search"
            type="search"
            placeholder="Search components..."
            value={query}
            onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
            className={css({
              flex: 1,
              bg: "bg.surface",
              color: "text",
              borderWidth: "1px",
              borderColor: "border.default",
              borderRadius: "lg",
              px: 3,
              py: 2,
              outline: "none",
              _focusVisible: { borderColor: "glass.ring", boxShadow: "md" },
            })}
          />
        </div>
        <p className={css({ color: "muted", mb: 3 })} aria-live="polite">
          Found {list.length} component{list.length === 1 ? "" : "s"}
        </p>
        {list.length === 0 ? (
          <div
            className={css({
              p: 6,
              borderWidth: "1px",
              borderColor: "border.default",
              borderRadius: "lg",
              bg: "bg.surface",
            })}
          >
            No components match your search.
          </div>
        ) : (
          <CardGrid>
            {list.map((meta) => {
              const entry = registry.find((e) => e.id === meta.id);
              if (!entry) return null;
              return <ComponentCard key={meta.id} meta={meta} entry={entry} />;
            })}
          </CardGrid>
        )}
      </section>
    </main>
  );
}

export const Route = createFileRoute("/components")({
  component: ComponentsShowcaseRoute,
});
