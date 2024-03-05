import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react",
      exclude: "",
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@ui",
        replacement: fileURLToPath(
          new URL("./src/components/ui", import.meta.url)
        ),
      },
      {
        find: "@pages",
        replacement: fileURLToPath(
          new URL("./src/components/pages", import.meta.url)
        ),
      },
      {
        find: "@enums",
        replacement: fileURLToPath(
          new URL("./src/common/enums", import.meta.url)
        ),
      },
      {
        find: "@types-app",
        replacement: fileURLToPath(
          new URL("./src/common/types", import.meta.url)
        ),
      },
      {
        find: "@hooks",
        replacement: fileURLToPath(new URL("./src/hooks", import.meta.url)),
      },
      {
        find: "@store",
        replacement: fileURLToPath(new URL("./src/store", import.meta.url)),
      },
      {
        find: "@services",
        replacement: fileURLToPath(new URL("./src/services", import.meta.url)),
      },
      {
        find: "@validation",
        replacement: fileURLToPath(
          new URL("./src/validation", import.meta.url)
        ),
      },
      {
        find: "@utils",
        replacement: fileURLToPath(new URL("./src/utils", import.meta.url)),
      },
      {
        find: "@assets",
        replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
    ],
  },
});
