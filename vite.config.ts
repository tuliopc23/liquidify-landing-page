import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  return {
    plugins: [react(), TanStackRouterVite()],
    optimizeDeps: {},
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
      // Bind to all interfaces for Replit environment
      host: "0.0.0.0",
      port: 5000,
      // Allow all hosts for Replit proxy
      hmr: { overlay: false, host: "0.0.0.0", port: 5000 },
      watch: { usePolling: true },
    },
  };
});
