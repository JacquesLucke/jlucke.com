// @ts-check
import { defineConfig } from "astro/config";
import rehypeAddClasses from "rehype-add-classes";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://jlucke.com",

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    rehypePlugins: [[rehypeAddClasses, {}]],
  },

  integrations: [mdx()],
});
