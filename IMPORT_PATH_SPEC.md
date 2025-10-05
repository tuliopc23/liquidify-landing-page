# Import Path Verification Specification

**Project:** Liquidify Landing Page  
**Purpose:** Ensure all import paths work seamlessly before implementing Option C enhancements  
**Date:** January 2025

---

## Overview

This document defines the import path structure, conventions, and verification process to prevent the "partially styled components" issue from recurring.

---

## Import Path Categories

### 1. Panda CSS (styled-system)

**Expected Pattern:**

```typescript
import { css, cx, cva } from "../styled-system/css";
import { css } from "../../styled-system/css";
```

**What Can Go Wrong:**

- Wrong relative path depth (`../` vs `../../`)
- Importing from source instead of generated output
- Missing Panda generation step

**Verification:**

- ✅ Import resolves without TypeScript errors
- ✅ Classes generate actual CSS in browser
- ✅ `styled-system/styles.css` is loaded in main.tsx
- ✅ `bun run panda:once` completes without errors

---

### 2. Internal Components

**Expected Pattern:**

```typescript
// From same directory
import { BrandAssets } from "./BrandAssets";

// From parent
import Hero from "../components/Hero";

// From routes
import Hero from "../../components/Hero";
```

**What Can Go Wrong:**

- Mixing default vs named exports
- Wrong relative path
- Circular dependencies

**Verification:**

- ✅ Component renders without errors
- ✅ No runtime "undefined" warnings
- ✅ TypeScript resolves types correctly

---

### 3. Internal Utilities & Hooks

**Expected Pattern:**

```typescript
import { useTheme } from "../theme";
import { useSpringHover } from "../hooks/useSpringHover";
```

**What Can Go Wrong:**

- Forgetting to export functions
- Wrong file extension (.ts vs .tsx)
- Path resolution issues

**Verification:**

- ✅ Functions/hooks are defined
- ✅ No circular import warnings
- ✅ Types are available

---

### 4. Icons (Custom SVG Components)

**Expected Pattern:**

```typescript
import HIGPrinciples from "../icons/HIGPrinciples";
import { Github } from "lucide-react";
```

**What Can Go Wrong:**

- Missing icon component files
- Wrong export format
- Mixed lucide-react and custom icons

**Verification:**

- ✅ Icon renders as SVG element
- ✅ Props (size, className) work
- ✅ No console warnings

---

### 5. Styles (CSS Modules)

**Expected Pattern:**

```typescript
import "../styled-system/styles.css";
import "./styles/apple-motion.css";
import "./styles/apple-typography.css";
import "./styles/apple-enhancements.css";
import "./styles/card-art-colors.css";
```

**What Can Go Wrong:**

- Loading order matters (Panda base first)
- Missing CSS files
- Duplicate imports

**Verification:**

- ✅ Styles apply in correct cascade order
- ✅ CSS variables are defined
- ✅ No FOUC (Flash of Unstyled Content)

---

### 6. External Dependencies

**Expected Pattern:**

```typescript
import { createRoot } from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
```

**What Can Go Wrong:**

- Version mismatches
- Missing peer dependencies
- Tree-shaking issues

**Verification:**

- ✅ All dependencies in package.json
- ✅ No version conflicts
- ✅ Bundle size reasonable

---

## Critical Import Paths by File

### src/main.tsx

```typescript
✓ "../styled-system/styles.css"           // Panda base styles
✓ "./styles/apple-motion.css"             // Motion curves
✓ "./styles/apple-typography.css"         // Typography enhancements
✓ "./styles/apple-enhancements.css"       // HIG polish
✓ "./styles/card-art-colors.css"          // Card backgrounds
✓ "react-dom/client"                      // React 19
✓ "@tanstack/react-router"                // Routing
✓ "./routeTree.gen"                        // Generated routes
```

### src/components/Hero.tsx

```typescript
✓ "../../styled-system/css"               // Panda utilities
✓ "../pandaStyles"                         // CVA recipes
✓ "./BrandAssets"                          // Logo components
```

### src/components/Navbar.tsx

```typescript
✓ "../../styled-system/css"               // Panda utilities
✓ "../pandaStyles"                         // CVA recipes
✓ "../theme"                               // Theme utilities
✓ "./BrandAssets"                          // Logo
✓ "lucide-react"                           // Icons
```

### src/components/OverviewCard.tsx

```typescript
✓ "../../styled-system/css"               // Panda utilities
✓ "../pandaStyles"                         // CVA recipes
✓ "../hooks/useSpringHover"                // Animation hook
```

### src/components/Features.tsx

```typescript
✓ "../../styled-system/css"               // Panda utilities
✓ "../pandaStyles"                         // CVA recipes
✓ "./OverviewCard"                         // Card component
✓ "./CardArt"                              // Icon art
✓ "../theme"                               // Theme utilities
```

### src/components/Documentation.tsx

```typescript
✓ "../../styled-system/css"               // Panda utilities
✓ "../pandaStyles"                         // CVA recipes
✓ "./CodeBlock"                            // Code display
✓ "./OverviewCard"                         // Card component
✓ "./CardArt"                              // Icon art
✓ "../theme"                               // Theme utilities
```

### src/components/CodeBlock.tsx

```typescript
✓ "../../styled-system/css"               // Panda utilities
✓ "prismjs/themes/prism-tomorrow.css"     // Prism theme
✓ "prismjs"                                // Syntax highlighting
✓ "prismjs/components/prism-typescript"   // TS support
✓ "prismjs/components/prism-tsx"          // TSX support
✓ "prismjs/components/prism-jsx"          // JSX support
```

### src/components/CardArt.tsx

```typescript
✓ "../../styled-system/css"               // Panda utilities
✓ "../icons/HIGPrinciples"                // 14 custom icon imports
✓ "../icons/BuiltForApple"
✓ "../icons/AccessibleFastThemable"
// ... (11 more icon imports)
```

### src/components/BrandAssets.tsx

```typescript
✓ "../../styled-system/css"               // Panda utilities
✓ "../pandaStyles"                         // CVA recipes
```

### src/components/Footer.tsx

```typescript
✓ "../../styled-system/css"               // Panda utilities
✓ "./BrandAssets"                          // Logo
```

### src/components/OverviewSection.tsx

```typescript
✓ "../../styled-system/css"               // Panda utilities
✓ "../pandaStyles"                         // CVA recipes
✓ "./BrandAssets"                          // Logo
```

### src/components/PalettePreview.tsx

```typescript
✓ "../../styled-system/css"               // Panda utilities
✓ "../pandaStyles"                         // CVA recipes
```

---

## Common Import Path Issues & Solutions

### Issue 1: "Module not found" errors

**Symptoms:**

```
Cannot find module '../styled-system/css'
```

**Diagnosis:**

- Check relative path depth (count `../`)
- Verify file exists at target location
- Check file extension (.ts vs .tsx vs .js)

**Solution:**

```bash
# Verify styled-system exists
ls -la styled-system/

# Regenerate if missing
bun run panda:once
```

---

### Issue 2: Components render but no styles apply

**Symptoms:**

- Components visible but unstyled
- Default browser styles showing
- No Panda CSS classes in DOM

**Diagnosis:**

- Panda styles not loaded in main.tsx
- Import order wrong (Panda must be first)
- CSS classes not generated

**Solution:**

```typescript
// src/main.tsx - CORRECT ORDER
import "../styled-system/styles.css"; // ← MUST BE FIRST
import "./styles/apple-motion.css";
import "./styles/apple-typography.css";
// ... other imports
```

---

### Issue 3: TypeScript errors but runtime works

**Symptoms:**

```
Property 'css' does not exist on type '...'
```

**Diagnosis:**

- Panda types not generated
- tsconfig.json doesn't include styled-system
- IDE cache stale

**Solution:**

```bash
# Regenerate Panda types
bun run panda:once

# Restart TypeScript server in VSCode
Cmd+Shift+P → "TypeScript: Restart TS Server"
```

---

### Issue 4: Circular dependency warnings

**Symptoms:**

```
Warning: Circular dependency detected
```

**Diagnosis:**

- Two files import each other
- Barrel export files create loops

**Solution:**

- Use direct imports, not barrel exports
- Refactor shared code into separate file
- Check with: `npx madge --circular src/`

---

### Issue 5: Dynamic imports fail in production

**Symptoms:**

- Works in dev, fails in build
- "Cannot find module" in production

**Diagnosis:**

- Vite code-splitting issue
- Missing chunks in dist/

**Solution:**

```typescript
// Use static imports for critical paths
import Component from "./Component";

// Reserve dynamic for code-splitting
const LazyComponent = lazy(() => import("./LazyComponent"));
```

---

## Import Path Testing Strategy

### Level 1: Static Analysis (TypeScript)

```bash
# Run type checking
bun run typecheck

# Expected: No errors
```

**Tests:**

- ✅ All imports resolve
- ✅ Types are correct
- ✅ No circular dependencies

---

### Level 2: Build Verification

```bash
# Clean build from scratch
rm -rf dist .output
bun run build

# Expected: Build succeeds, dist/ created
```

**Tests:**

- ✅ All imports bundle correctly
- ✅ No missing module errors
- ✅ CSS is included in build

---

### Level 3: Runtime Verification

```bash
# Start dev server
bun run dev

# Open http://localhost:5173
# Open browser DevTools
```

**Tests:**

- ✅ No console errors
- ✅ Components render with styles
- ✅ Panda CSS classes in DOM
- ✅ Dark mode toggle works
- ✅ Interactions work (hover, focus)

---

### Level 4: Production Verification

```bash
# Build and preview production
bun run build
bun run preview

# Open http://localhost:4173
```

**Tests:**

- ✅ Same as Level 3 but in production mode
- ✅ No hydration errors
- ✅ CSS classes match dev

---

## Automated Import Path Tests

See `scripts/verify-imports.mjs` for automated verification script.

**Run:**

```bash
bun run scripts/verify-imports.mjs
```

**Tests:**

1. Verify styled-system exists
2. Check all component imports
3. Validate Panda CSS generation
4. Test icon imports
5. Verify style cascade order
6. Check for circular dependencies

---

## Import Path Conventions

### DO ✅

1. **Use relative imports for internal code**

   ```typescript
   import { Hero } from "../components/Hero";
   ```

2. **Use package names for external deps**

   ```typescript
   import { css } from "../../styled-system/css";
   ```

3. **Import Panda styles first in main.tsx**

   ```typescript
   import "../styled-system/styles.css"; // FIRST
   ```

4. **Use consistent relative path depth**

   ```typescript
   // From components/
   import { css } from "../../styled-system/css";

   // From routes/
   import Hero from "../../components/Hero";
   ```

5. **Export components consistently**

   ```typescript
   // Default export for components
   export default Hero;

   // Named exports for utilities
   export { useTheme, applyTheme };
   ```

---

### DON'T ❌

1. **Don't mix import styles**

   ```typescript
   // BAD - inconsistent
   import Hero from "./Hero"; // default
   import { Navbar } from "./Navbar"; // named
   ```

2. **Don't use absolute imports without config**

   ```typescript
   // BAD - won't resolve
   import { Hero } from "components/Hero";
   ```

3. **Don't import from node_modules directly**

   ```typescript
   // BAD
   import css from "../node_modules/@pandacss/dev";
   ```

4. **Don't create circular dependencies**

   ```typescript
   // BAD - A imports B, B imports A
   ```

5. **Don't skip Panda generation**
   ```typescript
   // BAD - importing before generating
   import { css } from "styled-system/css"; // File doesn't exist yet!
   ```

---

## Pre-Implementation Checklist

Before starting Option C implementation, verify:

- [ ] `bun run typecheck` passes with no errors
- [ ] `bun run build` completes successfully
- [ ] `bun run dev` starts without warnings
- [ ] All 11 components render with styles
- [ ] Dark mode toggle works
- [ ] Focus rings appear on tab navigation
- [ ] No console errors in browser
- [ ] styled-system/ directory exists with recent timestamps
- [ ] All icon imports resolve (14 custom icons)
- [ ] PalettePreview shows colors correctly
- [ ] Code blocks syntax highlight works
- [ ] Card art backgrounds show correct colors

---

## Import Path Debugging Workflow

If imports break during Option C implementation:

### Step 1: Identify the Error

```bash
# Check TypeScript
bun run typecheck

# Check build
bun run build

# Check runtime
bun run dev
# Open browser console
```

### Step 2: Locate the File

- Read error message for file path
- Find line number with broken import
- Check what it's trying to import

### Step 3: Verify Target Exists

```bash
# For Panda CSS
ls -la styled-system/css/

# For components
ls -la src/components/

# For icons
ls -la src/icons/
```

### Step 4: Fix Path Depth

- Count directories from source to target
- Each level up needs one `../`
- Verify with `pwd` and `ls`

### Step 5: Regenerate if Needed

```bash
# If Panda CSS import fails
bun run panda:once

# If routes fail
# Check routeTree.gen.ts is up to date
```

### Step 6: Restart Dev Server

```bash
# Kill server (Ctrl+C)
# Clear cache
rm -rf .vite
bun run dev
```

---

## Import Path Map (Quick Reference)

### From `src/components/*.tsx`

| Import          | Path                      |
| --------------- | ------------------------- |
| Panda CSS       | `../../styled-system/css` |
| pandaStyles     | `../pandaStyles`          |
| theme           | `../theme`                |
| hooks           | `../hooks/*`              |
| icons           | `../icons/*`              |
| Other component | `./*`                     |
| lucide-react    | `lucide-react`            |

### From `src/routes/*.tsx`

| Import      | Path                      |
| ----------- | ------------------------- |
| Panda CSS   | `../../styled-system/css` |
| Components  | `../../components/*`      |
| pandaStyles | `../../pandaStyles`       |
| theme       | `../../theme`             |

### From `src/*.tsx` (root level)

| Import     | Path                   |
| ---------- | ---------------------- |
| Panda CSS  | `../styled-system/css` |
| Components | `./components/*`       |
| Styles     | `./styles/*`           |

---

## Post-Implementation Verification

After implementing Option C enhancements:

1. **Run all tests:**

   ```bash
   bun run check
   bun run build
   bun run verify:panda
   ```

2. **Visual verification:**
   - [ ] All components render
   - [ ] Styles applied correctly
   - [ ] New enhancements visible
   - [ ] No regressions

3. **Import integrity:**
   - [ ] No new TypeScript errors
   - [ ] Build succeeds
   - [ ] No runtime warnings
   - [ ] Production build works

---

## Related Documentation

- **package.json** - Dependencies and scripts
- **tsconfig.json** - TypeScript configuration
- **panda.config.ts** - Panda CSS configuration
- **vite.config.ts** - Build configuration

---

## Success Criteria

✅ **All imports working** when:

1. TypeScript has zero errors
2. Build completes without warnings
3. Dev server starts clean
4. All components render with styles
5. No console errors in browser
6. Production build works identically
7. All new Option C code imports resolve

---

## Next Step

Run the automated verification script:

```bash
bun run scripts/verify-imports.mjs
```

If all tests pass, proceed with Option C implementation.
