# Dev Server Blank Page - Troubleshooting

## Issue
- `bun run preview` works ✅
- `bun run dev` shows blank white page ❌

## Possible Causes

### 1. TanStack Router Cache Issue
```bash
# Clear router cache
rm -rf .tanstack
bun run dev
```

### 2. Node Modules Issue
```bash
# Reinstall dependencies
rm -rf node_modules
bun install
bun run dev
```

### 3. Browser Console Check
1. Open http://localhost:5173 in browser
2. Open DevTools (F12)
3. Check Console tab for JavaScript errors
4. Look for red error messages

### 4. Check if CSS is loading
In browser DevTools:
- Network tab → look for `styles.css`
- Should see `/styled-system/styles.css` loaded
- Check if it returns 200 or 404

### 5. Vite Dev Server Issue
```bash
# Try with different port
PORT=3000 bun run dev

# Or clear Vite cache
rm -rf node_modules/.vite
bun run dev
```

## Quick Diagnostic Commands

```bash
# 1. Clear all caches
rm -rf .tanstack node_modules/.vite

# 2. Regenerate Panda CSS
bun run panda:once

# 3. Start dev server
bun run dev

# 4. In browser, check:
# - Console for errors
# - Network tab for failed requests
# - Elements tab - is #root empty?
```

## What to Look For in Browser Console

**Good (no errors):**
```
No errors, React app mounts successfully
```

**Bad (indicates issue):**
```
Error: Failed to fetch dynamically imported module
Error: Cannot find module
Uncaught ReferenceError
Uncaught TypeError
```

## Next Step

**Please check browser console and share any error messages you see!**

The routing structure is correct, so this is likely a module loading or caching issue in dev mode.
