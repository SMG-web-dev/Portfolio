import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-icons": ["react-icons"],
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      "react-icons/fa",
      "react-icons/fi",
      "react-icons/si",
      "react-icons/bi",
      "react-icons/tb",
      "react-icons/di",
    ],
  },
});
