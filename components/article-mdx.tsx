import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxCompileOptions } from "@/lib/mdx-options";
import { mdxComponents } from "@/components/mdx-elements";

export function ArticleMdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
      options={mdxCompileOptions}
    />
  );
}
