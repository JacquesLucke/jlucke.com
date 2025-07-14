import type { ImageMetadata } from "astro";

const allAssets = import.meta.glob("/src/assets/**/*.{jpg,webp,png,jpeg,mp4}");

console.log(allAssets);

export async function loadImage(path: string): Promise<ImageMetadata> {
  if (!allAssets[path]) {
    throw new Error(`Could not find image at ${path}`);
  }
  return ((await allAssets[path]()) as { default: ImageMetadata }).default;
}

export async function loadVideo(path: string) {
  if (!allAssets[path]) {
    throw new Error(`Could not find video at ${path}`);
  }
  return ((await allAssets[path]()) as { default: string }).default;
}
