import { getCollection, type CollectionEntry } from "astro:content";
import { supportedTags } from "../content.config";

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

export async function getPublishedTags() {
  let posts = await getPublicBlogPosts();
  return supportedTags.filter((tag) => {
    for (let post of posts) {
      if (post.data.tags.includes(tag)) {
        return true;
      }
    }
    return false;
  });
}
