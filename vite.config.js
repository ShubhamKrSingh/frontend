import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import https from "https";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://backendwa-j4ck.onrender.com",
        changeOrigin: true,
        secure: false,
        agent: new https.Agent(),
      },
    },
  },
  plugins: [react()],
});
