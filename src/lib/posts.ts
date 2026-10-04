import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const insightsDir = path.join(process.cwd(), "src/content/insights");

export type PostMeta = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishDate: string;
  targetKeyword: string;
  excerpt: string;
  coverImage: string;
};

export type Post = PostMeta & {
  bodyHtml: string;
};

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(insightsDir)) return [];
  const fileNames = fs.readdirSync(insightsDir);
  const posts = fileNames
    .filter((file) => file.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(insightsDir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return data as PostMeta;
    })
    .sort((a, b) => (new Date(a.publishDate) < new Date(b.publishDate) ? 1 : -1));
  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(insightsDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  const bodyHtml = await marked(content, { async: true });

  return {
    ...(data as PostMeta),
    bodyHtml,
  };
}
