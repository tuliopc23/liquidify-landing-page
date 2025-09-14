# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Repository overview

- React + Vite + TypeScript app managed by Bun. Styling uses Panda CSS with custom design tokens and component utilities.
- Single-page landing site composed of sectioned components with in‑page anchors for navigation. Build output is written to dist/.

Common commands

- Install dependencies: bun install
- Start dev server: bun run dev
- Production build: bun run build
- Preview the built app: bun run preview
- Lint: bun run lint
- Lint and auto-fix: bun run lint:fix
- Type check: bun run typecheck
- Format (write): bun run format
- Format (check): bun run format:check
- Composite check (lint + typecheck + format:check): bun run check
- Composite fix (lint:fix + format): bun run fix
- Clean build artifacts: bun run clean
- Tests: no test runner is configured in this repo; running a single test is not applicable until one is added.

Architecture and configuration (big picture)

- Entry and render flow
  - index.html defines <div id="root"></div> and loads /src/main.tsx.
  - src/main.tsx creates a React root in StrictMode and renders a TanStack Router <RouterProvider> with a file-based route tree.
  - src/routes/__root.tsx composes the layout: Navbar, <Outlet/>, Footer. The home route (/src/routes/index.tsx) renders Hero, Features, ComponentShowcase, Documentation.
  - In‑page anchors used by the navbar and scrolling: #components, #features, #docs.

- Styling system
  - Panda CSS generates tokens, utilities, and reset via styled-system/styles.css (imported in src/main.tsx). Tokens mirror the former Tailwind theme (apple-_ and system-gray-_ palettes).
  - Reusable primitives are implemented with Panda’s css/cva in src/pandaStyles.ts (e.g., button, cardGlass, navLink, layout helpers).
  - @vitejs/plugin-react is enabled.
  - Dev server tweaks: HMR overlay is disabled (errors will show in terminal/console, not as an in‑page overlay); file watching uses polling.
  - optimizeDeps excludes "lucide-react" from pre-bundling.

- TypeScript
  - Solution-style tsconfig.json references tsconfig.app.json (app sources) and tsconfig.node.json (Vite config).
  - App config enables strict mode, bundler module resolution, noEmit, and JSX set to react-jsx; includes only src/.

- Linting
  - Flat ESLint config extends @eslint/js and typescript-eslint recommended configs; includes react-hooks and react-refresh plugins. The dist directory is ignored.

- External assets
  - Bootstrap Icons are loaded via CDN and used with bi-\* classes in components.
  - The Inter font is loaded from Google Fonts via <link> in index.html.

Notes for Warp

- Use Bun to run all scripts defined in package.json (packageManager is set to bun).
- With HMR overlay disabled, check the terminal and browser console for error details during local development.
- To work on styles, run: bun run panda (watch) or bun run panda:once (one-shot). Verification: bun run verify:panda.
- Dev-only token preview: open the app with ?palette=1 (e.g., http://localhost:5173/?palette=1) to view a palette grid with a light/dark toggle and download CSV/JSON exports from /public.
  - Theme: global light/dark/system is controlled by a `.dark` class on `<html>`. A pre-hydration script in `index.html` applies the stored or system theme. Navbar includes a theme toggle that cycles Light → Dark → System and persists to `localStorage`.
