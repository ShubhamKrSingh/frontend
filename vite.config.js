import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  "/api": "https://backendwa-j4ck.onrender.com",
  //   },
  // },
  plugins: [react()],
});
