# Repository Guidelines

## Project Structure & Module Organization

- Entry point lives in `src/main.tsx` with the app shell in `src/App.tsx`; reusable UI sits under `src/components/` using PascalCase filenames.
- Static assets and Panda design tokens are in `public/`; do not edit generated files under `styled-system/` except via Panda commands.
- Build artifacts land in `dist/`; clear them with `bun run clean` before a fresh build.
- Configuration roots at the repo top (`vite.config.ts`, `panda.config.ts`, `tsconfig.*`, `eslint.config.js`, `postcss.config.js`).

## Build, Test, and Development Commands

- `bun install` sets up dependencies (Bun 1.2.x expected).
- `bun run dev` starts the Vite dev server on `http://localhost:5173`.
- `bun run build` produces the production bundle; preview it locally with `bun run preview`.
- `bun run check` aggregates linting, formatting checks, and type checking; run it before every PR.
- `bun run panda` (watch) or `bun run panda:once` regenerates Panda CSS output; validate with `bun run verify:panda` when tokens or recipes change.

## Coding Style & Naming Conventions

- TypeScript strict mode, React 19 functional components, and hooks-first patterns.
- Components export named symbols and use PascalCase filenames; shared helpers live alongside consumers.
- Follow camelCase for variables/functions and UPPER_SNAKE_CASE for top-level constants.
- Formatting is enforced by Prettier; lint with ESLint; run `bun run fix` to auto-apply both.
- Import `styled-system/styles.css` in `src/main.tsx` and style via Panda utilities instead of ad-hoc class strings.

## Testing Guidelines

- No test harness is installed yet; prefer Vitest + React Testing Library when adding coverage.
- Name test files `Component.test.tsx` or place them in `src/**/__tests__/`.
- Target ~80% line coverage for new features; focus on user-visible behavior over implementation details.

## Commit & Pull Request Guidelines

- Use Conventional Commits (`feat:`, `fix:`, `chore:`, etc.); scope them when useful (e.g., `feat(panda): …`).
- Each PR should link to its issue, describe scope, and include screenshots or GIFs for UI changes.
- Ensure `bun run check`, `bun run build`, and `bun run verify:panda` (when styling changes) pass before requesting review.

## Security & Configuration Tips

- Never commit secrets; prefer environment variables for sensitive data.
- After adjusting `panda.config.ts` or `public/tokens.*`, rerun `bun run panda:once` and commit the regenerated `styled-system/` output.
