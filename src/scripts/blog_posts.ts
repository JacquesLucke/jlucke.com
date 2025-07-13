import { getCollection, type CollectionEntry } from "astro:content";

export async function getPublicBlogPosts() {
  let posts = await getCollection("blog");
  posts = posts.filter((post) => post.data.status === "published");
  return posts;
}

export async function getDraftBlogPosts() {
  let posts = await getCollection("blog");
  posts = posts.filter((post) => post.data.status === "draft");
  return posts;
}

export async function sortPostsMostRecentFirst(
  posts: CollectionEntry<"blog">[],
) {
  posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
