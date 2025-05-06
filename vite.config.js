import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "fs";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configurações de desenvolvimento seguro
    https: false, // Mudar para true e fornecer certificados em produção
    open: true,
    host: true,
  },
  // Configuração de cabeçalhos de segurança para produção
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["framer-motion", "react-icons"],
        },
      },
    },
  },
  preview: {
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
      // Configuração básica de CSP
      "Content-Security-Policy": `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        img-src 'self' data: https://www.google-analytics.com;
        font-src 'self' https://fonts.gstatic.com;
        connect-src 'self' https://www.google-analytics.com;
        frame-src 'none';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        upgrade-insecure-requests;
      `
        .replace(/\s+/g, " ")
        .trim(),
    },
  },
});
