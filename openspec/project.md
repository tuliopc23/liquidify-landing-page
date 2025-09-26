# Project Context

## Purpose
Liquidify Landing is an Apple-inspired marketing site that showcases product capabilities through interactive cards, smooth animations, and polished copy aimed at converting visitors.

## Tech Stack
- Bun 1.2.x for runtime, scripts, and dependency management
- TypeScript 5.x with strict typing
- React 19 rendered through Vite 7
- Panda CSS for design tokens, recipes, and generated styles in `styled-system/`
- TanStack Router for SPA routing and future SSR compatibility
- React Spring and Use Gesture for motion and interaction polish

## Project Conventions

### Code Style
- Format with Prettier and lint with ESLint via `bun run check`; rely on `bun run fix` to auto-apply fixes
- Prefer functional React components and hooks, using camelCase for variables/functions and PascalCase for components
- Keep styling in Panda utilities (no ad-hoc class strings) and co-locate helpers with their consumers

### Architecture Patterns
- Single-page Vite app bootstrapped from `src/main.tsx`, rendering `src/App.tsx`
- UI composed from reusable components under `src/components/`, supported by Panda tokens in `public/`
- Generated Panda styles live in `styled-system/` and are only updated through Panda commands
- Animations handled with React Spring + Use Gesture for card interactions and subtle motion

### Testing Strategy
- Use Vitest with React Testing Library for UI behavior coverage when adding or regressing features
- Target ~80% line coverage for new features, keeping tests beside implementation (`__tests__/` or `*.test.tsx`)
- Run `bun run check` before sharing changes to guarantee lint, type, and formatting compliance

### Git Workflow
- Follow Conventional Commits (e.g., `feat: add pricing cards`, `fix: adjust animation timing`)
- Keep branches focused per feature and ensure `bun run check`, `bun run build`, and `bun run verify:panda` succeed before PRs

## Domain Context
Liquidify positions itself as a premium design tooling brand; the landing page mimics Apple HIG aesthetics with gradient-rich, glassmorphism cards that highlight features such as install flows, accessibility, and tree-shakeable bundles.

## Important Constraints
- Do not alter typography scales, border radii, or established layout tokens without explicit approval
- All styling changes must flow through Panda tokens or utilities; regenerate styles with `bun run panda:once` when tokens change
- Avoid committing build artifacts or secrets; keep assets in `public/` and respect ASCII-only defaults unless existing files differ

## External Dependencies
- Panda CLI (`panda`) for design token generation and verification scripts
- TanStack Router plugin for Vite-powered routing
- React Spring and @use-gesture for animated interactions
- Lucide icons and PrismJS for illustrative assets and code highlighting
