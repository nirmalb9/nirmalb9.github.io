/** Use in MDX: <Callout>Optional aside, similar to a Notion callout.</Callout> */
export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <aside className="my-8 border-l-[3px] border-[var(--accent)] bg-[color-mix(in_oklab,var(--surface)_88%,var(--accent)_12%)] px-4 py-3 text-[0.95em] leading-relaxed dark:bg-[color-mix(in_oklab,var(--surface)_92%,var(--accent)_8%)]">
      {children}
    </aside>
  );
}
