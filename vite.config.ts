import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Visualiza el tamaño de los paquetes (opcional)
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        // Divide los chunks para mejorar el caching
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "i18n-vendor": [
            "i18next",
            "react-i18next",
            "i18next-browser-languagedetector",
          ],
          "motion-vendor": ["framer-motion"],
          "icons-vendor": ["lucide-react", "react-icons", "devicons-react"],
        },
      },
    },
    // Mejora la minificación
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
