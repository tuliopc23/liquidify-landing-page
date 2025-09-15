# ADR 0001: Routing & SSR with TanStack Start

Date: 2025-09-13
Status: Accepted
Deciders: Project owner (you), Agent Mode

Context

- We are expanding the landing site with a Components Showcase page that will host ~40 live component previews. The page needs to be SEO-friendly, fast (TTFB/LCP), and progressively hydrated. We explicitly do not want to use Next.js.
- Current stack (VISIBLE): React 19, Vite 7, Panda CSS, Bun. Theme is applied pre-hydration via index.html. Panda tokens include glass.\* suitable for Apple-like cards.

Decision

- Adopt TanStack Start as the routing + SSR framework.
- Use TanStack Router for file-based routes and data loaders.
- Keep Vite as the bundler and dev server. Keep Bun as the package manager/runtime.

Consequences

- Pros
  - First-class SSR/streaming and file-based routing with loaders/actions.
  - Progressive hydration is straightforward (React.lazy + Suspense + loaders).
  - Vite-native; minimal friction with our current setup and Panda CSS.
- Cons/Risks
  - New framework surface; contributors must learn Start conventions.
  - Hosting requires SSR adapter (Node/Bun server) or prerender step.

Alternatives considered

- Vike (Vite SSR): Lightweight and flexible; would require wiring routing/data manually. Kept as fallback.
- Next.js: Rejected per product preference.

Implementation notes

- New files (initial):
  - src/routes/\_\_root.tsx, src/routes/index.tsx, src/routes/components.tsx
  - src/registry/componentsRegistry.ts, src/utils/previewLoader.ts, src/hooks/useIntersectionOnce.ts
  - src/components/ui/Card.tsx; src/previews/\* for per-component demos
- Keep theme pre-hydrate script in SSR template head; ensure Panda CSS loads before hydration.

Verification

- Build SSR and preview locally.
- Lighthouse targets: Desktop ≥ 90, Mobile ≥ 80; A11y ≥ 95.

Links

- Execution plan: ../component-showcase-plan.md
- TanStack Start docs: https://tanstack.com/router/latest/docs/framework/start/overview
