#!/usr/bin/env node
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
let ok = true

function fail(msg) {
  console.error(`VERIFY: ${msg}`)
  ok = false
}

// 1) Ensure Panda artifacts + config exist
if (!existsSync(join(root, 'panda.config.ts'))) fail('panda.config.ts missing')
if (!existsSync(join(root, 'styled-system', 'styles.css'))) fail('styled-system/styles.css missing; run `bun run panda:once`')

// 2) Ensure main.tsx imports Panda styles
try {
  const main = readFileSync(join(root, 'src', 'main.tsx'), 'utf8')
  if (!main.includes('styled-system/styles.css')) fail('src/main.tsx is not importing styled-system/styles.css')
} catch (e) {
  fail('Cannot read src/main.tsx')
}

// 3) Assert Tailwind is not present in config or postcss
try {
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
  const deps = { ...pkg.dependencies, ...pkg.devDependencies }
  const forbidden = ['tailwindcss', '@tailwindcss/postcss']
  for (const name of forbidden) {
    if (deps && deps[name]) fail(`Forbidden dependency present: ${name}`)
  }
} catch (e) {
  fail('Cannot read package.json to check dependencies')
}

try {
  const postcss = readFileSync(join(root, 'postcss.config.js'), 'utf8')
  if (/tailwindcss|@tailwindcss\/postcss/i.test(postcss)) fail('postcss.config.js still references Tailwind')
} catch (e) {
  // ok if missing
}

// 4) Ensure no remaining Tailwind class markers in src (heuristic)
function grepDir(dir) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, name.name)
    if (name.isDirectory()) grepDir(p)
    else if (/\.(tsx?|jsx?)$/.test(name.name)) {
      const s = readFileSync(p, 'utf8')
      if (/className=\"[^\"]*(?:\btext-|\bbg-|\bflex|\bgrid|\brounded|\bp-[xytrbl]?|\bm-[xytrbl]?|\bw-\d)/.test(s)) {
        fail(`Tailwind-like utility classes remain in: ${p}`)
      }
    }
  }
}
try { grepDir(join(root, 'src')) } catch (e) { /* ignore */ }

if (!ok) {
  console.error('VERIFY: Panda migration checks FAILED')
  process.exit(1)
}
console.log('VERIFY: Panda migration checks PASSED')

