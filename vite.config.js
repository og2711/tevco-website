import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This tells Vite: when you see "@", look in the "src" folder
      "@": path.resolve(__dirname, "./src"),
    },
  },
})