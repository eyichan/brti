import Link from "next/link";
import { BRAINROT_TYPES } from "@/lib/brainrot-types";
import { CLASSIC_PERSONALITY_TYPES } from "@/lib/classic/personality-types";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

// Page type: HUB — primary keyword: "brainrot personality types"
export const metadata = buildMetadata({
  title: "All Brainrot Personality Types — 40 Characters Directory",
  description:
    "Browse every brainrot personality type: 16 Brainrot types and 24 Classic SBTI types. Bombardiro Crocodilo, Tralalero Tralala, Sigma Boy & more. Complete character directory with profiles.",
  path: "/types",
  keywords: [
    "brainrot personality types",
    "brainrot characters list",
    "all brainrot types",
    "brainrot animal list",
    "SBTI types directory",
  ],
});

export default function TypesIndexPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "All Types", url: "/types" },
            ])
          ),
        }}
      />
      <div className="shell">
        <section className="card legal-page">
          <h1>All SBTI Brainrot Personality Types</h1>
          <p className="section-sub" style={{ marginBottom: 16 }}>
            Explore every personality type across both quiz versions. Click any
            type to read the full personality profile and see how it compares
            to others.
          </p>

          <h2 style={{ marginTop: 32 }}>
            🧠 Brainrot Quiz Types ({BRAINROT_TYPES.length})
          </h2>
          <p className="hero-sub" style={{ maxWidth: "none", marginBottom: 18 }}>
            Quick scan personality types — 5 dimensions, maximum chaos.
          </p>
          <div className="types-grid">
            {BRAINROT_TYPES.map((t) => (
              <Link
                key={t.code}
                href={`/types/brainrot/${t.code.toLowerCase()}`}
                className="type-grid-card"
              >
                <span className="type-grid-code">{t.code}</span>
                <h3>{t.name}</h3>
                <p className="type-grid-tagline">{t.tagline}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ marginTop: 40 }}>
            🔬 Classic SBTI Quiz Types ({CLASSIC_PERSONALITY_TYPES.length})
          </h2>
          <p className="hero-sub" style={{ maxWidth: "none", marginBottom: 18 }}>
            Deep scan SBTI personality types — 15 dimensions, 5 personality
            models.
          </p>
          <div className="types-grid">
            {CLASSIC_PERSONALITY_TYPES.map((t) => (
              <Link
                key={t.code}
                href={`/types/classic/${t.code.toLowerCase()}`}
                className="type-grid-card"
              >
                <span className="type-grid-code">{t.code}</span>
                <h3>{t.name}</h3>
                <p className="type-grid-tagline">{t.tagline}</p>
              </Link>
            ))}
          </div>

          <div className="section-cta" style={{ marginTop: 32 }}>
            <Link href="/compare" className="btn-secondary">
              🆚 Compare Any Two Types →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
