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
    rehypePlugins: [
      [
        rehypeAddClasses,
        {
          h2: "text-2xl font-bold",
          h3: "text-xl font-bold",
          ul: "list-disc list-inside my-2",
          p: "my-2",
          strong: "font-bold",
        },
      ],
    ],
  },

  integrations: [mdx()],
});
