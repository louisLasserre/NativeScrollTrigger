import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "native-scroll-trigger",
      fileName: `native-scroll-trigger`,
    },
  },
  plugins: [dts()],
});
