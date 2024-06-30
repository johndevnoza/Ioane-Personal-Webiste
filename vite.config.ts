// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@components": "/src/components",
    },
  },
  base: "./",
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "PLUGIN_WARNING") return;
        warn(warning);
      },
    },
  },
});
