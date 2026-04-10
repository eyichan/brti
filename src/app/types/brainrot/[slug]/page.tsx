import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BRAINROT_TYPES } from "@/lib/brainrot-types";
import { DIMENSIONS } from "@/lib/questions";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

type Params = { slug: string };

export function generateStaticParams() {
  return BRAINROT_TYPES.map((t) => ({ slug: t.code.toLowerCase() }));
}

// Page type: ARTICLE — primary keyword: "[Name] brainrot type"
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const type = BRAINROT_TYPES.find((t) => t.code.toLowerCase() === slug);
  if (!type) return {};
  return buildMetadata({
    title: `${type.name} (${type.code}) — Brainrot Personality Type Explained`,
    description: `${type.name} is the ${type.code} brainrot personality type: "${type.tagline}" — full personality analysis, 5-dimension breakdown, and similar types. ${type.description.slice(0, 100)}...`,
    path: `/types/brainrot/${slug}`,
    keywords: [
      `${type.name.toLowerCase()} brainrot`,
      `${type.name.toLowerCase()} personality`,
      `${type.code} personality type`,
      `${type.name.toLowerCase()} brainrot character`,
      "brainrot type explained",
    ],
  });
}

const DIM_KEYS = ["CH", "RZ", "BR", "SQ", "VB"] as const;
const LEVEL_LABELS: Record<string, string> = { H: "High", M: "Mid", L: "Low" };

export default async function BrainrotTypePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const type = BRAINROT_TYPES.find((t) => t.code.toLowerCase() === slug);
  if (!type) notFound();

  const levels = type.pattern.split("") as Array<"H" | "M" | "L">;

  // Find similar types (share 3+ dimension levels)
  const similar = BRAINROT_TYPES.filter((t) => {
    if (t.code === type.code) return false;
    const other = t.pattern.split("");
    let match = 0;
    for (let i = 0; i < levels.length; i++) {
      if (other[i] === levels[i]) match++;
    }
    return match >= 3;
  }).slice(0, 3);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Types", url: "/types" },
              { name: `${type.code} — ${type.name}`, url: `/types/brainrot/${slug}` },
            ])
          ),
        }}
      />
      <div className="shell">
        <section className="card type-detail-page">
          <nav className="breadcrumb">
            <Link href="/types">← All Types</Link>
            <span>/</span>
            <span>Brainrot Quiz</span>
            <span>/</span>
            <span>{type.code}</span>
          </nav>

          <div className="type-detail-hero">
            <div className="type-detail-img">
              <Image
                src={type.image}
                alt={type.name}
                width={280}
                height={280}
                className="poster-image"
                priority
              />
            </div>
            <div className="type-detail-info">
              <span className="type-kicker">Brainrot Type</span>
              <h1 className="type-detail-name">{type.code}</h1>
              <h2 className="type-detail-subname">{type.name}</h2>
              <p className="type-detail-tagline">&ldquo;{type.tagline}&rdquo;</p>
              <div className="type-detail-pattern">
                {DIM_KEYS.map((dim, i) => (
                  <span key={dim} className={`pattern-chip pattern-${levels[i].toLowerCase()}`}>
                    {DIMENSIONS[dim as keyof typeof DIMENSIONS]?.name ?? dim}: {LEVEL_LABELS[levels[i]]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="type-detail-body">
            <h3>Personality Analysis</h3>
            <p className="type-opening-answer">
              <strong>{type.name}</strong> ({type.code}) is a brainrot personality type characterized by the tagline &ldquo;{type.tagline}&rdquo;. If you scored {type.code} on the BRTI quiz, here&rsquo;s what it means for your personality:
            </p>
            <p>{type.description}</p>
          </div>

          <div className="type-detail-dimensions">
            <h3>Dimension Breakdown</h3>
            <div className="dim-list">
              {DIM_KEYS.map((dim, i) => {
                const meta = DIMENSIONS[dim as keyof typeof DIMENSIONS];
                if (!meta) return null;
                const level = levels[i];
                const explanation =
                  level === "H" ? meta.high : level === "M" ? meta.mid : meta.low;
                return (
                  <div key={dim} className="dim-item">
                    <div className="dim-item-top">
                      <span className="dim-item-name">{meta.name}</span>
                      <span className="dim-item-score">{LEVEL_LABELS[level]}</span>
                    </div>
                    <p>{explanation}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {similar.length > 0 && (
            <div className="type-detail-similar">
              <h3>Similar Types</h3>
              <div className="similar-grid">
                {similar.map((s) => (
                  <Link
                    key={s.code}
                    href={`/types/brainrot/${s.code.toLowerCase()}`}
                    className="type-grid-card"
                  >
                    <span className="type-grid-code">{s.code}</span>
                    <h3>{s.name}</h3>
                    <p className="type-grid-tagline">{s.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="type-detail-actions">
            <Link href="/quiz/brainrot" className="btn-primary">
              Take the Quiz to Get This Type
            </Link>
            <Link href="/compare" className="btn-secondary">
              Compare Types
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
