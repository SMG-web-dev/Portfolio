import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React y bibliotecas principales
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/")
          ) {
            return "react-vendor";
          }

          // Internacionalización
          if (
            id.includes("node_modules/i18next/") ||
            id.includes("node_modules/react-i18next/") ||
            id.includes("node_modules/i18next-browser-languagedetector/")
          ) {
            return "i18n-vendor";
          }

          // Animación
          if (id.includes("node_modules/framer-motion/")) {
            return "motion-vendor";
          }

          // Iconos por categoría
          if (id.includes("node_modules/lucide-react/")) {
            return "lucide-icons";
          }

          if (id.includes("node_modules/react-icons/")) {
            return "react-icons";
          }

          // Separar los iconos de devicons por categorías
          if (id.includes("node_modules/devicons-react/")) {
            if (
              id.includes("/react") ||
              id.includes("/javascript") ||
              id.includes("/typescript")
            ) {
              return "devicons-js";
            }
            if (id.includes("/java") || id.includes("/spring")) {
              return "devicons-java";
            }
            if (
              id.includes("/html") ||
              id.includes("/css") ||
              id.includes("/sass") ||
              id.includes("/tailwind")
            ) {
              return "devicons-web";
            }
            return "devicons-other";
          }
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
