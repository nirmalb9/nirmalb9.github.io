import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navLink =
  "text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]";

export function SiteHeader() {
  return (
    <header className="mb-16 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-6">
      <Link
        href="/"
        className="font-serif text-lg font-semibold tracking-tight text-[var(--foreground)]"
      >
        Nirmal Balachundhar
      </Link>
      <nav className="flex items-center gap-6" aria-label="Main">
        <Link href="/" className={navLink}>
          Home
        </Link>
        <Link href="/blog" className={navLink}>
          Blog
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
