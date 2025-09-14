import React, { useMemo, useState } from "react";
import { css } from "../../styled-system/css";
import { createFileRoute } from "@tanstack/react-router";
import { CardGrid, ComponentCard, registry } from "../showcase/GridParts";

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
      <section className={css({ maxW: "6xl", mx: "auto", px: { base: 4, md: 6 } })}>
        <h1 className={css({ fontSize: "3xl", fontWeight: 700, mb: 6 })}>
          Components Showcase
        </h1>
        <div className={css({ mb: 6, display: "flex", alignItems: "center", gap: 3 })}>
          <label htmlFor="component-search" className={css({ fontWeight: 500 })}>
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
        <CardGrid>
          {list.map((meta) => (
            <ComponentCard key={meta.id} meta={meta} />
          ))}
        </CardGrid>
      </section>
    </main>
  );
}

export const Route = createFileRoute("/components")({ component: ComponentsShowcaseRoute });
