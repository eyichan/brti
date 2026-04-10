import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="shell">
        <section className="card hero-minimal" style={{ minHeight: "60vh" }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            404 — Page Not Found
          </div>
          <h1>
            You&apos;ve gone <span className="dead-word">offline</span>.
          </h1>
          <p className="hero-sub">
            This page doesn&apos;t exist in the brainrot universe. Maybe it
            got Skibidi&apos;d out of existence, or maybe you just mistyped
            the URL. Either way, let&apos;s get you back on track.
          </p>
          <div className="hero-actions">
            <Link href="/" className="btn-primary">
              Back to Homepage
            </Link>
            <Link href="/quiz/brainrot" className="btn-secondary">
              Take the Quiz
            </Link>
            <Link href="/types" className="btn-secondary">
              Browse Types
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
