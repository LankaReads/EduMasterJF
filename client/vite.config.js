import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // important for accessing from other devices
    port: 443, // standard HTTPS port
    https: {
      key: "/etc/letsencrypt/live/madeinsrilanka.nl/privkey.pem",
      cert: "/etc/letsencrypt/live/madeinsrilanka.nl/fullchain.pem",
    },
    proxy: {
      // Proxy API requests
      '/api': {
        target: 'http://13.60.226.150:5000', // Replace with your actual HTTP API URL
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false, // Allow proxying to an HTTP server
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix if necessary
      },
    },
  },
  preview: {
    port: 443,
    https: {
      key: "/etc/letsencrypt/live/madeinsrilanka.nl/privkey.pem",
      cert: "/etc/letsencrypt/live/madeinsrilanka.nl/fullchain.pem",
    },
  },
});
