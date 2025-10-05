import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  const portEnv = process.env.PORT ?? process.env.VITE_PORT;
  const devPort = Number.parseInt(portEnv ?? "", 10) || 5173;
  return {
    plugins: [TanStackRouterVite(), react()],
    optimizeDeps: {
      include: ["react", "react-dom", "@tanstack/react-router"],
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
      host: "0.0.0.0",
      port: devPort,
      strictPort: false,
      hmr: {
        overlay: false,
        host: "0.0.0.0",
        port: devPort,
      },
      watch: { usePolling: true },
    },
  };
});
