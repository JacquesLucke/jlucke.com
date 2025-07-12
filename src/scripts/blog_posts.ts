import { getCollection } from "astro:content";

export async function getShowableBlogPosts() {
  let posts = await getCollection("blog");
  if (import.meta.env.PROD) {
    posts = posts.filter((post) => post.data.status === "published");
  }
  return posts;
}
