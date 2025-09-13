# Liquidify Components Showcase — Execution Plan

Status: Accepted — TanStack Start (decision date: 2025-09-13)
Owner: Agent Mode

Decision
- We will implement routing and SSR with TanStack Start and TanStack Router. Vike remains an evaluated fallback but is not planned.

Quick links
- ADR: docs/adr/0001-routing-ssr-tanstack-start.md
- Setup checklist: see section 12 “Implementation checklist”
- Where to start coding: src/routes/components.tsx, src/registry/componentsRegistry.ts, src/components/ui/Card.tsx
- Search tags: tanstack, start, router, ssr, components, showcase, grid, cards, apple, liquid glass

Evidence (current repo, VISIBLE)
- package.json shows React 19 + Vite 7, Bun, Panda CSS usage and scripts:
```
"packageManager": "bun@1.2.21",
"scripts": { "dev": "vite", "build": "vite build", "typecheck": "tsc --noEmit" }
```
- index.html hydrates a React root from /src/main.tsx and includes a pre‑hydration theme script:
```
<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>
```
- panda.config.ts includes glass.* semantic tokens suitable for Apple “liquid glass” cards.

If any of the above diverges locally, please note in review before executing.


1) Goal & Scope
- Keep landing at “/” as-is.
- Add second route “/components” that server‑renders a responsive grid of ~40 cards.
- Each card: Apple Developer aesthetic (like WWDC tiles) with title, short description, badge, and a live preview area that hydrates lazily when visible.
- No detail pages in MVP. Optional stretch later: “/components/:slug”.


2) Router + SSR choice
- Recommended: TanStack Start (with TanStack Router)
  Why: Vite-native SSR with streaming, file-based routes, loaders/actions, React 19 support, and progressive hydration; works well with Bun.
  Docs:
  - https://tanstack.com/router/latest/docs/framework/start/overview
  - https://tanstack.com/router/latest
  - https://vite.dev/guide/
  - https://bun.com/docs
- Fallback (if Start is not desired): Vike (Vite SSR)
  Why: Small, flexible Vite SSR. Keep your existing Vite config and index.html; add minimal files. You can still use TanStack Router client-side.
  Docs: https://vike.dev
- Explicit: Not using Next.js.

Decision note: Start gives us batteries-included data loading and streaming SSR; Vike is more DIY. Either way, we’ll progressively hydrate cards to control JS cost.


3) High-level architecture
- Routes
  - “/” → existing landing.
  - “/components” → ComponentsGridPage (SSR loader returns registry of components).
- Data
  - A static registry (TS array) with 40 entries: id, name, description, tags, previewModule path, sourceUrl, optional status/badge.
  - Previews are small components in /src/previews/ that import the public Liquidify package when published (or local stubs until publish).
- Rendering
  - SSR HTML for the page and card shells for fast TTFB and SEO.
  - Each card’s preview is hydrated lazily using IntersectionObserver + React.lazy + Suspense. Preload on hover/focus for responsiveness.
  - Optional virtualization via TanStack Virtual if previews are heavy.
- Styling
  - Use Panda tokens already defined (glass.bg, glass.border, glass.ring, radii.glass, shadows.*). Match Apple tile aesthetic.


4) Minimal file changes (TanStack Start path)
- Add:
  - src/routes/__root.tsx → app layout; mounts Outlet; injects global CSS.
  - src/routes/index.tsx → wraps the current landing content (move content from your existing App into here).
  - src/routes/components.tsx → ComponentsGridPage with loader.
  - src/registry/componentsRegistry.ts → the 40-item registry (start with stubs).
  - src/utils/previewLoader.ts → import.meta.glob map and dynamic import helper.
  - src/hooks/useIntersectionOnce.ts → one-time visibility hook.
  - src/components/ui/Card.tsx → Panda cva for Card and CardGrid.
  - src/previews/*.tsx → lightweight per-component demo previews (can be incremental).
- Adjust:
  - Ensure Panda generated CSS (styled-system/styles.css) and your theme pre-hydrate logic load before hydration (migrate the inline theme script from index.html into Start’s HTML template/head if needed).
- Keep:
  - Vite config and Panda config as-is unless tokens need minor extension.

Fallback (Vike) path
- Add pages/components.page.tsx and minimal SSR renderer files. Keep index.html. The rest (registry, previews, hooks, Card) remains the same.


5) Data model & loader
Type and registry
```ts
export type ComponentMeta = {
  id: string
  name: string
  description: string
  tags: string[]
  previewModule: string // e.g., '/src/previews/ButtonPreview.tsx'
  sourceUrl: string
  status?: 'New' | 'Updated' | 'Deprecated' | null
  presets?: Record<string, unknown>
}

export const componentsRegistry: ComponentMeta[] = [
  // 40 entries; begin with 8–10 and fill out incrementally
  { id: 'button', name: 'Button', description: 'Versatile button', tags: ['inputs'], previewModule: '/src/previews/ButtonPreview.tsx', sourceUrl: 'https://github.com/.../Button.tsx', status: 'Updated' },
]
```
Preview loader
```ts
export const previewModules = import.meta.glob('/src/previews/**/*.tsx')
export async function loadPreview(key: string) {
  const loader = previewModules[key]
  if (!loader) throw new Error(`Preview module not found: ${key}`)
  const mod = await loader()
  return (mod as any).default ?? (mod as any).Preview
}
```
Route loader (Start)
```ts
export const Route = createFileRoute('/components')({
  loader: async () => {
    const { componentsRegistry } = await import('../registry/componentsRegistry')
    return { registry: componentsRegistry }
  },
  component: ComponentsGridPage,
})
```


6) UI/UX spec (Apple aesthetic)
- Grid
  - Responsive CSS grid, no JS: 1/2/3/4 columns at base/sm/lg/xl.
  - Gap: 24px–32px (use Panda spacing tokens).
- Card
  - Glass surface: bg glass.bg, 1px border glass.border, rounded radii.glass, shadow lg.
  - Hover: subtle lift (translateY(-2px)), ring with glass.ring.
  - Header: badge (optional), H2 title in SF Pro, muted description.
  - Preview: fixed min-height ~180–220px; dark/light aware; skeleton while loading.
  - Footer: “View Source ›” link; optional tags.
- Motion
  - Respect prefers-reduced-motion; reduce hover transforms.
- Typography
  - Use typography roles wired to Panda tokens (display/title/headline/body...) to align with Apple feel.


7) Performance strategy
- SSR HTML + streaming (Start) for faster TTFB and SEO.
- Lazy hydration per card (IO + React.lazy + Suspense); preload preview on hover/focus.
- Code splitting: each preview is a separate chunk via import.meta.glob.
- Optional virtualization (TanStack Virtual) if grid becomes long or previews heavy.
- Budgets
  - Initial JS ≤ 200KB on /components before any previews load.
  - LCP ≤ 2.5s on mid-range mobile.
  - CLS ~ 0.
- Images
  - Inline SVGs; use WebP/PNG for any heavy assets; avoid large network fonts beyond SF Pro already referenced.


8) Accessibility
- Card is <article>; title is <h2>; description associated via aria-describedby.
- Keyboard: focus-visible styling; previews reachable, no keyboard traps.
- Color contrast ≥ 4.5:1 for all text and CTAs in both themes.
- Motion: address prefers-reduced-motion.


9) SEO
- Head tags for /components: title, meta description, canonical, OG/Twitter.
- JSON-LD ItemList listing all components with anchors to #id.
- Avoid content shift by reserving preview heights.


10) Analytics (optional, non-blocking)
- Track once when a card becomes visible (card_visible).
- Track CTA clicks (cta_click with component id and sourceUrl).
- Provide a no-op analytics adapter for dev/staging.


11) Dependencies (latest stable; do not downgrade)
TanStack Start path (recommended)
- Runtime: @tanstack/start, @tanstack/react-router, @tanstack/virtual (optional), @tanstack/react-query (optional), react-helmet-async (optional)
- Dev: @types/node
Commands (fish/Bun; run one per line):
```
bun add @tanstack/start
bun add @tanstack/react-router
bun add @tanstack/virtual
bun add @tanstack/react-query
bun add react-helmet-async
bun add -D @types/node
```
Vike fallback path
```
bun add vike
bun add @tanstack/react-router
bun add @tanstack/virtual
bun add react-helmet-async
bun add -D @types/node
```


12) Implementation checklist
- [ ] Choose SSR path: Start (preferred) or Vike (fallback).
- [ ] Scaffold routes (Start: __root.tsx, index.tsx, components.tsx; Vike: components.page.tsx + renderer).
- [ ] Move landing content into the “/” route component; preserve Panda CSS and theme script order.
- [ ] Add registry, preview loader, IO hook, Card/Grid primitives.
- [ ] Create 5–10 preview modules to start; expand to 40.
- [ ] Progressive hydration + preload on hover/focus.
- [ ] Optional virtualization if needed.
- [ ] Head tags + JSON-LD for /components.
- [ ] Light analytics (optional).
- [ ] Build and preview SSR locally; fix hydration warnings, if any.
- [ ] Lighthouse (mobile/desktop) and axe checks meet budgets.
- [ ] Deploy to host (Vercel/Netlify/Fly) using SSR adapter; or prerender as interim.


13) Acceptance criteria
- /components server‑renders a grid of ~40 cards.
- Above‑the‑fold cards hydrate within ~1s; offscreen hydrate on view.
- No hydration warnings in console.
- Lighthouse: Desktop ≥ 90 Perf, Mobile ≥ 80 Perf, A11y ≥ 95.


14) Timeline (suggested)
- Day 1: Choose SSR, install deps, scaffold routes; migrate landing; verify SSR dev.
- Day 2: Card/Grid with Panda; registry + loader; 10 previews.
- Day 3: Lazy hydration + preload; optional virtualization; a11y + SEO polish.
- Day 4: QA, budgets, deploy; expand previews toward 40 as time allows.


15) Risks & Rollback
- SSR friction with host → ship CSR + prerender temporarily; keep SSR branch.
- Style token mismatches → extend Panda tokens minimally; keep hover/focus semantics.
- Rollback: feature branch for SSR; revert by switching back to main if needed.


16) References
- TanStack Start: https://tanstack.com/router/latest/docs/framework/start/overview
- TanStack Router: https://tanstack.com/router/latest
- TanStack Virtual: https://tanstack.com/virtual/latest
- Vike: https://vike.dev
- Vite: https://vite.dev/guide/
- Bun: https://bun.com/docs
- React 19: https://react.dev/reference/react
