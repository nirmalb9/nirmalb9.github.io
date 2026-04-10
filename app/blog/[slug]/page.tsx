import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { ArticleMdx } from "@/components/article-mdx";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { siteName, siteUrl } from "@/lib/site";

export const dynamic = "force-static";
/** Lets `output: "export"` succeed when `generateStaticParams` returns []. */
export const revalidate = 0;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found" };
  const url = `${siteUrl}/blog/${slug}`;
  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url,
      type: "article",
      publishedTime: post.meta.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.meta.draft) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main">
        <article itemScope itemType="https://schema.org/Article">
          <header className="mb-12">
            <p className="font-mono text-xs text-[var(--muted)]">
              <time dateTime={post.meta.date}>{post.meta.date}</time>
            </p>
            <h1
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl"
              itemProp="headline"
            >
              {post.meta.title}
            </h1>
            {post.meta.description ? (
              <p
                className="mt-4 text-lg text-[var(--muted)]"
                itemProp="description"
              >
                {post.meta.description}
              </p>
            ) : null}
            <meta itemProp="author" content={siteName} />
          </header>
          <div
            className="prose prose-lg prose-stone max-w-none dark:prose-invert prose-headings:font-serif prose-a:text-[var(--accent)] prose-a:no-underline hover:prose-a:underline"
            itemProp="articleBody"
          >
            <ArticleMdx source={post.content} />
          </div>
        </article>
        <p className="mt-16 border-t border-[var(--border)] pt-10">
          <Link
            href="/blog"
            className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            ← All posts
          </Link>
        </p>
      </main>
    </>
  );
}
