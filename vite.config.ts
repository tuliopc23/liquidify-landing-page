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
      // Bind to IPv4 localhost to avoid ::1/EPERM issues on some setups
      host: "127.0.0.1",
      port: 5173,
      hmr: { overlay: false, host: "127.0.0.1", port: 5173 },
      watch: { usePolling: true },
    },
  };
});
