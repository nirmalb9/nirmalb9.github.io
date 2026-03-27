import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/callout";

export const mdxComponents: MDXComponents = {
  Callout,
  img: ({ alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={alt ?? ""}
      className="my-8 w-full max-w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm"
    />
  ),
};
