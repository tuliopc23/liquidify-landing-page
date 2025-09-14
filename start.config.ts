import react from "@vitejs/plugin-react";
import { defineConfig } from "@tanstack/start/config";

export default defineConfig({
  vite: {
    plugins: [react()],
    optimizeDeps: {
      exclude: ["lucide-react"],
    },
    server: {
      hmr: {
        overlay: false,
      },
      watch: {
        usePolling: true,
      },
    },
  },
});
