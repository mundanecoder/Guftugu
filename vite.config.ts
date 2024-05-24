import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";
export default defineConfig({
  plugins: [react(), crx({ manifest })], // Remove the extra comma here
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
