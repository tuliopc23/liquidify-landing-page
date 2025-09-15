import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  return {
    plugins: [react(), TanStackRouterVite()],
    optimizeDeps: {
      exclude: ["lucide-react"],
    },
    // Shim Node globals used by some dependencies in the browser.
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
      "process.env": "{}",
      ...(isProd ? {} : { process: "({ env: {} })" }),
      global: "globalThis",
    },
    css: {
      preprocessorOptions: {},
    },
    server: {
      hmr: { overlay: false },
      watch: { usePolling: true },
    },
  };
});
