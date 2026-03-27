import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteName, siteUrl, contact } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s · ${siteName}`,
  },
  description:
    "ML systems, reliability, and quantitative takes on strategy and building.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
  },
  alternates: {
    types: {
      "application/rss+xml": `${siteUrl}/rss.xml`,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--surface)] focus:px-3 focus:py-2 focus:text-sm focus:shadow"
          >
            Skip to content
          </a>
          <div className="flex min-h-full flex-1 flex-col px-4 pb-20 pt-8 sm:px-6">
            <div className="mx-auto w-full max-w-[70ch] flex-1">
              {children}
            </div>
            <footer className="mx-auto mt-20 w-full max-w-[70ch] border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
              <p>
                <a className="hover:text-[var(--foreground)]" href={contact.email}>
                  Email
                </a>
                {" · "}
                <a
                  className="hover:text-[var(--foreground)]"
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                {" · "}
                <a
                  className="hover:text-[var(--foreground)]"
                  href={contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                {" · "}
                <a className="hover:text-[var(--foreground)]" href="/rss.xml">
                  RSS
                </a>
              </p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
