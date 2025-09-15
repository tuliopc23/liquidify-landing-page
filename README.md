# liquidify-landing-page

Apple-inspired React + Vite site styled with Panda CSS.

Docs & Plans

- Components Showcase Execution Plan: docs/component-showcase-plan.md
- ADR 0001 — Routing & SSR with TanStack Start: docs/adr/0001-routing-ssr-tanstack-start.md

Decision snapshot

- Router: TanStack Router (Vite plugin) for SPA. We may adopt TanStack Start later for SSR.

Quick start (existing)

- Dev: bun run dev
- Build: bun run build
- Preview: bun run preview
- Panda (watch): bun run panda

Notes

- Theme is applied pre-hydration via index.html script. Panda tokens include glass.\* used by cards.
