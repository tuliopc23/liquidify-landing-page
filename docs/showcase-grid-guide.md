# Showcase Grid Guide — TanStack Start + Panda CSS + Ark UI (Apple HIG)

Status: Authoritative How‑To
Applies to: React 19, Vite 7, Bun, Panda CSS tokens present in panda.config.ts, routing/SSR with TanStack Start

Purpose

- Build the “/components” showcase page as a responsive grid of Apple‑style liquid‑glass cards.
- Keep it simple, server‑render first, progressively hydrate previews.
- Use Panda CSS for styling primitives and Ark UI inside previews when needed (the grid itself is plain, accessible HTML).

References (official docs)

- TanStack Start: https://tanstack.com/router/latest/docs/framework/start/overview
- TanStack Router: https://tanstack.com/router/latest
- Panda CSS: https://panda-css.com/docs
- Ark UI (React): https://ark-ui.com/docs/react/overview
- Apple Human Interface Guidelines (HIG): https://developer.apple.com/design/human-interface-guidelines/

Pre‑reqs

- You already chose TanStack Start (see ADR 0001). Use Bun for package commands and keep versions at latest stable.

1. Install runtime deps (latest stable)
   Run one per line in fish/Bun:

- bun add @tanstack/start
- bun add @tanstack/react-router
- bun add react-helmet-async # for route head tags (optional but recommended)
- bun add @ark-ui/react # only for interactive previews inside the cards
- bun add @tanstack/virtual # optional, only if we need virtualization later
- bun add -D @types/node # types for SSR tools

2. File scaffolding (minimal)
   Create these files. The routes assume TanStack Start’s file routing.

- src/routes/\_\_root.tsx — app layout shell

```tsx path=null start=null
import { createRootRoute, Outlet } from "@tanstack/react-router";

function RootLayout() {
  return (
    <div id="app">
      <Outlet />
    </div>
  );
}

export const Route = createRootRoute({ component: RootLayout });
```

- src/routes/components.tsx — the showcase page

```tsx path=null start=null
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/components")({
  loader: async () => {
    const { componentsRegistry } = await import(
      "../registry/componentsRegistry"
    );
    return { registry: componentsRegistry };
  },
  component: ComponentsGridPage,
});

import { Helmet } from "react-helmet-async";
import { CardGrid, ComponentCard } from "../components/ui/Card";
import type { ComponentMeta } from "../registry/componentsRegistry";

function ComponentsGridPage() {
  const { registry } = Route.useLoaderData() as { registry: ComponentMeta[] };

  return (
    <main>
      <Helmet>
        <title>Liquidify Components Showcase</title>
        <meta
          name="description"
          content="Explore high-fidelity Liquid Glass components."
        />
        <link rel="canonical" href="/components" />
      </Helmet>

      <section aria-label="Components grid">
        <CardGrid>
          {registry.map((meta) => (
            <ComponentCard key={meta.id} meta={meta} />
          ))}
        </CardGrid>
      </section>
    </main>
  );
}
```

3. Data registry (the single source of truth)

- src/registry/componentsRegistry.ts

```ts path=null start=null
export type ComponentMeta = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  previewModule: string; // '/src/previews/ButtonPreview.tsx'
  sourceUrl: string;
  status?: "New" | "Updated" | "Deprecated" | null;
  presets?: Record<string, unknown>;
};

export const componentsRegistry: ComponentMeta[] = [
  {
    id: "button",
    name: "Button",
    description: "Versatile button with variants and states.",
    tags: ["inputs"],
    previewModule: "/src/previews/ButtonPreview.tsx",
    sourceUrl:
      "https://github.com/your-org/your-repo/src/components/Button.tsx",
    status: "Updated",
  },
  // …add the rest (~40)
];
```

4. Preview loader and one‑time visibility hook

- src/utils/previewLoader.ts

```ts path=null start=null
export const previewModules = import.meta.glob("/src/previews/**/*.tsx");
export async function loadPreview(key: string) {
  const loader = previewModules[key];
  if (!loader) throw new Error(`Preview module not found: ${key}`);
  const mod = await loader();
  return (mod as any).default ?? (mod as any).Preview;
}
```

- src/hooks/useIntersectionOnce.ts

```ts path=null start=null
import { useEffect, useState } from "react";

export function useIntersectionOnce<T extends Element>(
  ref: React.RefObject<T>,
  options?: IntersectionObserverInit,
) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, options, visible]);
  return visible;
}
```

5. Card and grid primitives (Apple‑style liquid glass)
   Uses Panda CSS tokens already present (glass.bg, glass.border, glass.ring, radii.glass, shadows.lg). Keep motion subtle and respect prefers‑reduced‑motion.

- src/components/ui/Card.tsx

```tsx path=null start=null
import { lazy, Suspense, useMemo, useRef } from "react";
import type { ComponentMeta } from "../../registry/componentsRegistry";
import { loadPreview } from "../../utils/previewLoader";
import { useIntersectionOnce } from "../../hooks/useIntersectionOnce";
import { cva } from "styled-system/css";

export const grid = cva({
  base: {
    display: "grid",
    gap: { base: "4", md: "6" },
    gridTemplateColumns: {
      base: "1fr",
      sm: "repeat(2, minmax(0, 1fr))",
      lg: "repeat(3, minmax(0, 1fr))",
      xl: "repeat(4, minmax(0, 1fr))",
    },
  },
});

export function CardGrid(props: React.PropsWithChildren) {
  return <div className={grid()}>{props.children}</div>;
}

const card = cva({
  base: {
    position: "relative",
    borderRadius: "glass",
    bg: "glass.bg",
    border: "1px solid",
    borderColor: "glass.border",
    boxShadow: "lg",
    overflow: "hidden",
    transition: "transform 200ms ease, outline-color 200ms ease",
    _hover: {
      outline: "2px solid",
      outlineColor: "glass.ring",
      transform: "translateY(-2px)",
    },
    _prefersReducedMotion: {
      base: { transition: "none", _hover: { transform: "none" } },
    },
  },
});

const header = cva({ base: { p: "5", display: "grid", gap: "2" } });
const title = cva({ base: { fontSize: "xl", fontWeight: "semibold" } });
const desc = cva({ base: { color: "muted" } });
const previewBox = cva({ base: { p: "5", pt: "0" } });
const skeleton = cva({
  base: { height: "200px", bg: "bg.subtle", borderRadius: "md" },
});
const footer = cva({
  base: { p: "5", pt: "0", display: "flex", justifyContent: "flex-end" },
});
const badge = cva({
  base: {
    fontSize: "xs",
    fontWeight: "semibold",
    px: "2",
    py: "1",
    borderRadius: "full",
    bg: "bg.surface",
  },
});
const cta = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "1",
    color: "link",
    _hover: { textDecoration: "underline" },
  },
});

export function ComponentCard({ meta }: { meta: ComponentMeta }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useIntersectionOnce(ref, { rootMargin: "250px" });

  const LazyPreview = useMemo(
    () =>
      lazy(async () => {
        const Comp = await loadPreview(meta.previewModule);
        return { default: Comp };
      }),
    [meta.previewModule],
  );

  const preload = () => {
    loadPreview(meta.previewModule).catch(() => {});
  };

  return (
    <article ref={ref} className={card()} aria-labelledby={`${meta.id}-title`}>
      <header className={header()}>
        {meta.status ? <span className={badge()}>{meta.status}</span> : null}
        <h2 id={`${meta.id}-title`} className={title()}>
          {meta.name}
        </h2>
        <p id={`${meta.id}-desc`} className={desc()}>
          {meta.description}
        </p>
      </header>

      <div className={previewBox()} onMouseEnter={preload} onFocus={preload}>
        <Suspense fallback={<div className={skeleton()} />}>
          {" "}
          {visible ? <LazyPreview /> : null}{" "}
        </Suspense>
      </div>

      <footer className={footer()}>
        <a
          className={cta()}
          href={meta.sourceUrl}
          target="_blank"
          rel="noreferrer"
          aria-describedby={`${meta.id}-desc`}
        >
          View Source <span aria-hidden>›</span>
        </a>
      </footer>
    </article>
  );
}
```

6. Previews (use Ark UI inside previews as needed)
   Each preview is a tiny, isolated component that imports from your library (after publish) or from local source during development. Keep them light; they are lazy‑loaded.

- Example: src/previews/ButtonPreview.tsx

```tsx path=null start=null
import React from "react";
// Replace with published package when available: import { Button } from 'liquidify/button'
// For local dev before publish, import from local source
export default function ButtonPreview() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <button>Primary</button>
      <button disabled>Disabled</button>
    </div>
  );
}
```

Note: If a preview needs popover/dialog/menu behavior, use @ark-ui/react primitives inside the preview component. The grid and cards themselves remain plain, which keeps SSR simple and JS weight low.

7. Accessibility (AA targets)

- Card markup uses <article> with aria-labelledby/aria-describedby.
- Focus-visible is preserved; links are keyboard reachable in a sensible order.
- Contrast: ensure your Panda tokens keep text ≥ 4.5:1 on glass surfaces. If needed, bump token contrast or add a data-contrast="high" switch in the app layout.
- Respect prefers-reduced-motion (already handled in card cva for hover transform).

8. Performance & hydration (simple and robust)

- SSR everything: page, headers, and card shells come from the loader output.
- Defer preview code via React.lazy + import.meta.glob; hydrate previews when visible via IntersectionObserver.
- Preload on hover/focus to improve perceived latency.
- Only add @tanstack/virtual if the page becomes very long or previews are heavy; otherwise avoid complexity.

9. SEO

- Set title/description/canonical for /components (shown in the route file above via react-helmet-async).
- Optionally inject JSON‑LD ItemList based on registry contents if helpful for search. Keep it small.

10. Verification checklist

- bun run dev → open /components → above‑the‑fold previews appear quickly; offscreen previews hydrate when scrolling.
- bun run build (and Start’s SSR build) → no hydration mismatches in console.
- Lighthouse (mobile + desktop): Performance, Accessibility within agreed budgets.

Notes on Apple HIG + Liquid Glass

- Follow HIG’s guidance on depth, translucency, and motion: subtle shadows, restrained blur, and reduced motion for accessibility.
- Use Panda tokens glass.bg/glass.border/glass.ring consistently; keep hover lift minimal.
- For true refraction effects, consider SVG filter approaches in a future iteration. Current guide sticks to performant, widely‑supported CSS.

That’s it. Keep the primitives small, SSR first, and hydrate only what’s needed. Add search/filter or detail pages later without changing this base.
