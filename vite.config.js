import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  content: [
    "index.html",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Literata", "serif"],
        headline: ["Literata", "serif"],
        code: ["monospace"],
      },
      colors: {
        secondary: "#ededd4",
        primary: "#a68b64",
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
