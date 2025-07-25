import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

export const supportedTags = [
  "Development",
  "Teaching",
  "Photography",
  "Food",
  "Funding",
] as const;

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    status: z.enum(["published", "draft"]),
    tags: z.array(z.enum(supportedTags)),
    preview: z.string().optional(),
  }),
});

export const collections = { blog };
