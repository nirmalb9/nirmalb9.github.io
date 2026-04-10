import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { FadeIn } from "@/components/fade-in";
import { getAllPosts } from "@/lib/posts";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <SiteHeader />
      <main id="main">
        <FadeIn>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Blog
          </h1>
        </FadeIn>

        {posts.length > 0 ? (
          <ul className="mt-12 space-y-10">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={0.05 * Math.min(i, 6)}>
                <li className="border-t border-[var(--border)] pt-8 first:border-0 first:pt-0">
                  <p className="font-mono text-xs text-[var(--muted)]">
                    {post.date}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-2 block font-serif text-xl font-semibold text-[var(--foreground)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
                  >
                    {post.title}
                  </Link>
                  {post.description ? (
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {post.description}
                    </p>
                  ) : null}
                </li>
              </FadeIn>
            ))}
          </ul>
        ) : (
          <p className="mt-12 text-[var(--muted)]">No posts yet.</p>
        )}
      </main>
    </>
  );
}
