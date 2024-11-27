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
  },
  preview: {
    port: 443,
    https: {
      key: "/etc/letsencrypt/live/madeinsrilanka.nl/privkey.pem",
      cert: "/etc/letsencrypt/live/madeinsrilanka.nl/fullchain.pem",
    },
  },
});
