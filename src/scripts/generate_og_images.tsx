/** @jsxImportSource preact */
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import fs from "fs";
import type { CollectionEntry } from "astro:content";

export async function generatePreviewImage(post: CollectionEntry<"blog">) {
  const frontmatter = post.data;
  const svg = await satori(
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        fontSize: "3rem",
      }}
    >
      <p style={{ color: "black" }}>{frontmatter.title}</p>
    </div>,
    {
      width: 500,
      height: 500,
      fonts: [
        {
          name: "Lato",
          data: await fs.promises.readFile(
            "node_modules/@fontsource/lato/files/lato-latin-300-normal.woff",
          ),
        },
      ],
    },
  );
  const resvg = new Resvg(svg);
  const pngData = resvg.render().asPng();
  const assetDir = `/generated/previews`;
  const assetPath = `${assetDir}/${post.id}.png`;
  await fs.promises.mkdir(`./dist${assetDir}`, { recursive: true });
  await fs.promises.writeFile(`./dist${assetPath}`, pngData);
  return assetPath;
}
