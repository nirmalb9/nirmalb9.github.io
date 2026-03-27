import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  title: string;
  date: string;
  description?: string;
  draft?: boolean;
  slug: string;
};

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): {
  meta: PostMeta;
  content: string;
} | null {
  const full = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(full)) return null;
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: { ...(data as Omit<PostMeta, "slug">), slug },
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((s) => getPostBySlug(s))
    .filter(
      (p): p is NonNullable<typeof p> => p != null && !p.meta.draft,
    )
    .map((p) => p.meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
