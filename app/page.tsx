import { SiteHeader } from "@/components/site-header";
import { FadeIn } from "@/components/fade-in";
import { contact } from "@/lib/site";

function ExtLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[var(--accent)] underline decoration-[color-mix(in_oklab,var(--accent)_45%,transparent)] underline-offset-[0.18em] transition-colors hover:decoration-[var(--accent)]"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <FadeIn>
          <section className="space-y-4 text-base leading-relaxed text-[var(--foreground)]">
            <h1 className="sr-only">About</h1>
            <p>
              Hi, I&apos;m Nirmal. Short notes here on what I&apos;m building,
              reading, and thinking about—mostly data, risk, startups, tech, and
              how to operate when things are uncertain.
            </p>
            <p>
              If something&apos;s useful or off, feel free to reach out! On{" "}
              <ExtLink href={contact.twitter}>Twitter</ExtLink> or{" "}
              <a
                href={contact.email}
                className="font-medium text-[var(--accent)] underline decoration-[color-mix(in_oklab,var(--accent)_45%,transparent)] underline-offset-[0.18em] transition-colors hover:decoration-[var(--accent)]"
              >
                nbalachundhar [at] gmail.com
              </a>
              .
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.06}>
          <section className="mt-16 border-t border-[var(--border)] pt-10">
            <h2 className="font-serif text-xl font-semibold text-[var(--foreground)]">
              Work experience
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[var(--foreground)]">
              <p>
                In 2025, I was a research resident at South Park Commons, focused
                on hallucination reduction and LLM reliability. I co-authored work
                on decorrelating parallel representations within a model to reduce
                hallucination, similar to portfolio diversification, and on
                reframing multi-head attention as a game between strategic agents.
                Both bets on a similar idea: that explicit second-moment error
                reduction is a useful lever for tail reliability.
              </p>
              <p>
                From 2021 to 2024, at Abnormal, I built ML systems that detected
                account takeovers across hundreds of millions of events—streaming
                sign-in telemetry, ensemble detectors, and internal tooling that
                had to keep iteration and analyst workflows honest at that volume.
              </p>
              <p className="text-[var(--muted)]">
                I hold a B.A. in Computer Science from Northwestern University
                (2020).
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.12}>
          <section className="mt-16 border-t border-[var(--border)] pt-10">
            <h2 className="font-serif text-xl font-semibold text-[var(--foreground)]">
              Publications
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--foreground)]">
              <li>
                <ExtLink href="https://arxiv.org/abs/2510.20690">
                  Neural Diversity Regularizes Hallucinations in Language Models
                </ExtLink>
                <span className="text-[var(--muted)]"> — arXiv:2510.20690</span>
              </li>
              <li>
                <ExtLink href="https://arxiv.org/abs/2602.00861">
                  Multi-Head Attention Is a Multi-Player Game
                </ExtLink>
                <span className="text-[var(--muted)]"> — arXiv:2602.00861</span>
              </li>
            </ul>
          </section>
        </FadeIn>
      </main>
    </>
  );
}
