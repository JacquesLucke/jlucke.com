import { getCollection, type CollectionEntry } from "astro:content";

export async function getShowableBlogPosts() {
  let posts = await getCollection("blog");
  if (import.meta.env.PROD) {
    posts = posts.filter((post) => post.data.status === "published");
  }
  return posts;
}

export async function sortPostsMostRecentFirst(
  posts: CollectionEntry<"blog">[],
) {
  posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
