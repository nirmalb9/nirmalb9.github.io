# Writing posts

1. Add `my-essay.mdx` in `content/posts/`.
2. Start with YAML frontmatter:

   ```yaml
   ---
   title: "Title"
   date: "2026-03-27"
   description: "Optional summary for listings and SEO"
   draft: true   # omit or false to publish
   ---
   ```

3. Write **Markdown** in the file body.

- **LaTeX:** inline `\( ... \)` or `$...$` (with `remark-math`), display `$$ ... $$`.
- **Code:** fenced blocks with a language tag for highlighting.
- **Images / screenshots:** save under `public/images/` and use `![](/images/your-shot.png)`.
- **React (optional):** MDX files can use registered components (e.g. `<Callout>...</Callout>`). Add a component under `components/`, export it from `mdx-elements.tsx`, then use the tag in your post. Avoid bare `{` in prose when MDX thinks it starts an expression; use fenced code or escape if you hit compile errors.

4. Deploy with `NEXT_PUBLIC_SITE_URL=https://your.domain` set for RSS + sitemap.
