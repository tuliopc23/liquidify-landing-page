import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  // Shim Node globals used by some dependencies in the browser during dev.
  // This avoids runtime errors like "ReferenceError: process is not defined".
  define: {
    "process.env.NODE_ENV": JSON.stringify("development"),
    "process.env": "{}",
    process: "({ env: {} })",
    global: "globalThis",
  },
  css: {
    preprocessorOptions: {},
    // Allow importing CSS from package subpaths without the module loader complaining in dev.
    // Vite can handle CSS imports, but hydrating SSR/Node contexts might require guards elsewhere.
  },
  server: {
    hmr: {
      overlay: false,
    },
    watch: {
      usePolling: true,
    },
  },
});
