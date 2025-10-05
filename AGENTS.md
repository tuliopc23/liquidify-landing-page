<!-- OPENSPEC:START -->

# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:

- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:

- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# Repository Guidelines

## Project Structure & Module Organization

- `src/main.tsx` boots the Vite shell; `src/App.tsx` orchestrates shared layout and routing.
- Reusable UI sits in `src/components/` (PascalCase files); colocated helpers stay beside their consumer.
- Tests belong either next to the unit under test or in `src/**/__tests__/`.
- Static assets live in `public/`; generated Panda `styled-system/` output is tracked but only regenerated via Panda commands.
- Spec-driven work is coordinated through `openspec/`; review `project.md` plus active deltas before adding behavior.

## Build, Test, and Development Commands

- `bun install` installs dependencies (Bun ≥1.2.x, Node ≥20).
- `bun run dev` starts the Vite dev server at `http://localhost:5173`; `bun run preview` serves the production bundle.
- `bun run build` emits the production build; run after major UI changes.
- `bun run check` chains lint, type, and formatting checks; use before every PR.
- `bun run fix` applies ESLint + Prettier autofixes.
- `bun run panda` (watch) and `bun run panda:once` generate Panda CSS; confirm with `bun run verify:panda` when tokens change.
- Configure tests with Vitest; run via `bunx vitest` or a `bun run test` script once added.

## Coding Style & Naming Conventions

- TypeScript strict mode, React 19 functional components, hooks-first patterns.
- Use camelCase for variables/functions, PascalCase for components, UPPER_SNAKE_CASE for top-level constants.
- Prefer Panda utilities for styling; avoid ad-hoc class strings.
- Format with Prettier and lint with ESLint; stick to ASCII unless a file already uses Unicode.

## Testing Guidelines

- Add coverage with Vitest + React Testing Library focusing on user-facing behavior.
- Target ~80% line coverage for new modules; prioritize critical flows over exhaustive mocks.
- Name test files `Component.test.tsx` or place them under `__tests__/` mirrors.
- When adding tests, include them in CI by wiring a `test` script and documenting setup in PR notes.

## Commit & Pull Request Guidelines

- Follow Conventional Commits (e.g., `feat: add pricing cards`, `fix(panda): regenerate tokens`).
- Keep commits scoped and reversible; avoid mixing feature work with formatting-only changes.
- Every PR should link its issue, describe scope, and attach screenshots/GIFs for UI updates.
- Before requesting review, run `bun run check`, `bun run build`, and `bun run verify:panda` if styling changed.

## Security & Configuration Tips

- Never commit secrets; rely on environment variables for keys or tokens.
- After modifying `panda.config.ts` or assets under `public/`, regenerate Panda output and verify it.
- Use `bun run clean` before fresh builds when switching branches to avoid stale artifacts.
