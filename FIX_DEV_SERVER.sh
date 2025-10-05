#!/bin/bash

echo "🔧 Fixing Dev Server Issue..."
echo ""

# Step 1: Clear caches
echo "1️⃣ Clearing caches..."
rm -rf .tanstack node_modules/.vite
echo "✅ Caches cleared"
echo ""

# Step 2: Regenerate Panda CSS
echo "2️⃣ Regenerating Panda CSS..."
bun run panda:once
echo "✅ Panda CSS regenerated"
echo ""

# Step 3: Instructions
echo "3️⃣ Now run:"
echo "   bun run dev"
echo ""
echo "4️⃣ Then open http://localhost:5173 and check:"
echo "   - Browser console (F12) for errors"
echo "   - Network tab for failed requests"
echo ""
echo "If still blank, please share the browser console errors!"
