#!/bin/bash
set -e

echo "Starting build process..."

# Check if we're on Vercel
if [ "$VERCEL" = "1" ]; then
    echo "Running on Vercel, using npm..."
    npm install --legacy-peer-deps
    npm run build
else
    # Try Bun first, fallback to npm
    if command -v bun &> /dev/null; then
        echo "Using Bun..."
        bun install
        bun run build
    else
        echo "Bun not available, using npm..."
        npm install --legacy-peer-deps
        npm run build
    fi
fi

echo "Build completed successfully!"
