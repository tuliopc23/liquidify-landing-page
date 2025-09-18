# Repository Guidelines

## Project Structure & Module Organization

- App entry starts at `src/main.tsx`; the shell lives in `src/App.tsx` and shared UI components sit under `src/components/` using PascalCase filenames.
- Utility helpers stay next to their consumers; keep tests close by in `src/**/__tests__/` or named `Component.test.tsx`.
- Static assets and Panda tokens live in `public/`; generated Panda output resides in `styled-system/` and should only change via Panda commands.
- Build artifacts land in `dist/`; clear them with `bun run clean` before fresh builds.

## Build, Test, and Development Commands

- `bun install` installs dependencies (Bun 1.2.x expected).
- `bun run dev` starts the Vite dev server at `http://localhost:5173`.
- `bun run build` emits the production bundle; preview with `bun run preview`.
- `bun run check` runs linting, formatting, and type checks—execute before every PR.
- Use `bun run panda` (watch) or `bun run panda:once` to regenerate Panda CSS; validate via `bun run verify:panda` after token or recipe updates.

## Coding Style & Naming Conventions

- TypeScript strict mode, React 19 functional components, and hooks-first patterns.
- Follow camelCase for variables/functions, PascalCase for components, and UPPER_SNAKE_CASE for top-level constants.
- Styling flows through Panda utilities; import `styled-system/styles.css` in `src/main.tsx` and avoid ad-hoc class strings.
- Formatting is enforced by Prettier and linting by ESLint; run `bun run fix` to auto-apply both.

## Testing Guidelines

- Prefer Vitest with React Testing Library when adding coverage.
- Target ~80% line coverage for new features; focus on user-visible behavior.
- Name files `Component.test.tsx` or place them under `src/**/__tests__/`.

## Commit & Pull Request Guidelines

- Use Conventional Commits (e.g., `feat: add pricing cards` or `fix(panda): refresh tokens`).
- Each PR should link its issue, describe scope, and include screenshots or GIFs for UI-visible changes.
- Confirm `bun run check`, `bun run build`, and `bun run verify:panda` (for styling changes) succeed before requesting review.

## Security & Configuration Tips

- Never commit secrets; rely on environment variables for sensitive data.
- After changing `panda.config.ts` or `public/tokens.*`, run `bun run panda:once` and commit regenerated `styled-system/` output.
