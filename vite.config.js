import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 }, // Port pour le développement
  base: "/react-app/", // Remplace <nom-du-repo> par le nom de ton dépôt GitHub
});
