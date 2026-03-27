"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-sm opacity-60">
        ···
      </span>
    );
  }

  const cycle = () => {
    if (theme === "system") setTheme(resolvedTheme === "dark" ? "light" : "dark");
    else if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  const label =
    theme === "system"
      ? `System (${resolvedTheme ?? "…"})`
      : theme ?? "theme";

  return (
    <button
      type="button"
      onClick={cycle}
      className="inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 text-xs font-medium text-[var(--foreground)] transition-colors hover:bg-[color-mix(in_oklab,var(--foreground)_6%,var(--surface))]"
      title={`Theme: ${label}. Click to toggle light/dark.`}
      aria-label={`Toggle color theme, currently ${label}`}
    >
      {resolvedTheme === "dark" ? "◐" : "◑"}
    </button>
  );
}
