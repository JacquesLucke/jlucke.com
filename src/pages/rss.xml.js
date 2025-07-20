import rss from "@astrojs/rss";

import { getCollection } from "astro:content";
import { sortPostsMostRecentFirst } from "../scripts/blog_posts";

export async function GET(context) {
  const posts = await getCollection("blog");
  sortPostsMostRecentFirst(posts);

  return rss({
    title: "Jacques’ Blog",
    description: "Recent content on Jacques’ website.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
