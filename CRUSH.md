# CRUSH Playbook

Environment

- Bun >=1.2, Node >=20, React 19 + Vite 7, TanStack Router, Panda CSS. Generated CSS lives in styled-system/.

Build, dev, and maintenance

- Install: bun install
- Dev: bun run dev
- Build: bun run build | Preview: bun run preview
- Lint: bun run lint | Fix: bun run fix
- Types: bun run typecheck | Format: bun run format | Check all: bun run check
- Panda CSS: bun run panda (watch) | bun run panda:once | bun run verify:panda
- Clean artifacts: bun run clean

Testing

- Tests are not configured; prefer Vitest + React Testing Library.
- Once installed, examples: bunx vitest; single file: bunx vitest src/path/Foo.test.tsx
- Single test by name: bunx vitest -t "renders foo" src/path/Foo.test.tsx; watch: bunx vitest --watch

Code style

- Imports: external then internal; type-only via `import type`; prefer relative paths within src; omit extensions for TS/TSX; CSS imports first (see src/main.tsx).
- Components: React function components, named exports; hooks-first; avoid React.FC; derive state from props when possible.
- Types: TS strict; avoid any; use unknown + narrowing; explicit prop/return types for exports; prefer const, readonly, and discriminated unions over enums.
- Naming: camelCase variables/functions, PascalCase components and filenames, UPPER_SNAKE_CASE constants; hooks start with use*; event handlers on*/handle\*.
- Error handling: never throw in render; wrap async/handlers in try/catch; surface errors to UI; log with console.error in dev only; never log secrets.
- Styling: use Panda tokens/semanticTokens/utilities; avoid ad‑hoc class strings; do not edit styled-system/ by hand; run panda after token changes.
- Project layout: routes in src/routes; shared UI in src/components; colocate helpers; tests as \*.test.ts(x) or under src/\*\*/**tests**/.

Commits & PRs

- Conventional Commits; before PR run: bun run check && bun run build && bun run verify:panda (when styling changed).
- Do not commit secrets; after changing panda.config.ts or public/tokens.\*, regenerate CSS (panda:once) and commit outputs.
