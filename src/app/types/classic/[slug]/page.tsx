import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CLASSIC_PERSONALITY_TYPES } from "@/lib/classic/personality-types";
import { CLASSIC_DIMENSIONS } from "@/lib/classic/dimensions";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import type { ClassicDimensionKey, ClassicDimensionLevel } from "@/lib/classic/types";

type Params = { slug: string };

export function generateStaticParams() {
  return CLASSIC_PERSONALITY_TYPES.map((t) => ({
    slug: t.code.toLowerCase(),
  }));
}

// Page type: ARTICLE — primary keyword: "[Name] SBTI personality"
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const type = CLASSIC_PERSONALITY_TYPES.find(
    (t) => t.code.toLowerCase() === slug
  );
  if (!type) return {};
  return buildMetadata({
    title: `${type.name} (${type.code}) — Classic SBTI Personality Type Explained`,
    description: `${type.name} is the ${type.code} SBTI personality type: "${type.tagline}" — full 15-dimension breakdown across 5 psychological models. ${type.description.slice(0, 100)}...`,
    path: `/types/classic/${slug}`,
    keywords: [
      `${type.name.toLowerCase()} SBTI type`,
      `${type.name.toLowerCase()} personality`,
      `${type.code} SBTI personality`,
      `${type.name.toLowerCase()} brainrot character`,
      "SBTI personality type explained",
    ],
  });
}

const DIM_ORDER: ClassicDimensionKey[] = [
  "S1", "S2", "S3",
  "E1", "E2", "E3",
  "A1", "A2", "A3",
  "Ac1", "Ac2", "Ac3",
  "So1", "So2", "So3",
];
const LEVEL_LABELS: Record<string, string> = { H: "High", M: "Mid", L: "Low" };

const MODELS = [
  { label: "Self Model", dims: ["S1", "S2", "S3"] as ClassicDimensionKey[] },
  { label: "Emotional Model", dims: ["E1", "E2", "E3"] as ClassicDimensionKey[] },
  { label: "Attitude Model", dims: ["A1", "A2", "A3"] as ClassicDimensionKey[] },
  { label: "Action Model", dims: ["Ac1", "Ac2", "Ac3"] as ClassicDimensionKey[] },
  { label: "Social Model", dims: ["So1", "So2", "So3"] as ClassicDimensionKey[] },
];

function parseClassicPattern(
  pattern: string
): Record<ClassicDimensionKey, ClassicDimensionLevel> {
  // Pattern format: "HHH-HMH-MHH-HHH-MHM"
  const parts = pattern.split("-");
  const result = {} as Record<ClassicDimensionKey, ClassicDimensionLevel>;
  parts.forEach((group, gi) => {
    const dims = MODELS[gi].dims;
    group.split("").forEach((ch, ci) => {
      result[dims[ci]] = ch as ClassicDimensionLevel;
    });
  });
  return result;
}

export default async function ClassicTypePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const type = CLASSIC_PERSONALITY_TYPES.find(
    (t) => t.code.toLowerCase() === slug
  );
  if (!type) notFound();

  const levels = parseClassicPattern(type.pattern);

  // Find similar types (share 10+ dimension levels)
  const similar = CLASSIC_PERSONALITY_TYPES.filter((t) => {
    if (t.code === type.code) return false;
    const other = parseClassicPattern(t.pattern);
    let match = 0;
    for (const dim of DIM_ORDER) {
      if (other[dim] === levels[dim]) match++;
    }
    return match >= 10;
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
              {
                name: `${type.code} — ${type.name}`,
                url: `/types/classic/${slug}`,
              },
            ])
          ),
        }}
      />
      <div className="shell">
        <section className="card type-detail-page">
          <nav className="breadcrumb">
            <Link href="/types">← All Types</Link>
            <span>/</span>
            <span>Classic SBTI</span>
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
              <span className="type-kicker">Classic SBTI Type</span>
              <h1 className="type-detail-name">{type.code}</h1>
              <h2 className="type-detail-subname">{type.name}</h2>
              <p className="type-detail-tagline">
                &ldquo;{type.tagline}&rdquo;
              </p>
              <div className="type-detail-pattern">
                {DIM_ORDER.map((dim) => (
                  <span
                    key={dim}
                    className={`pattern-chip pattern-${levels[dim].toLowerCase()}`}
                  >
                    {CLASSIC_DIMENSIONS[dim].name}:{" "}
                    {LEVEL_LABELS[levels[dim]]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="type-detail-body">
            <h3>Personality Analysis</h3>
            <p className="type-opening-answer">
              <strong>{type.name}</strong> ({type.code}) is a Classic SBTI personality type with the tagline &ldquo;{type.tagline}&rdquo;. If this is your SBTI result, here&rsquo;s the full analysis of what it means across all 15 dimensions:
            </p>
            <p>{type.description}</p>
          </div>

          <div className="type-detail-dimensions">
            <h3>15-Dimension SBTI Breakdown</h3>
            {MODELS.map((model) => (
              <div key={model.label} className="model-group">
                <div className="model-group-name">{model.label}</div>
                <div className="dim-list">
                  {model.dims.map((dim) => {
                    const meta = CLASSIC_DIMENSIONS[dim];
                    const level = levels[dim];
                    const explanation =
                      level === "H"
                        ? meta.high
                        : level === "M"
                          ? meta.mid
                          : meta.low;
                    return (
                      <div key={dim} className="dim-item">
                        <div className="dim-item-top">
                          <span className="dim-item-name">{meta.name}</span>
                          <span className="dim-item-score">
                            {LEVEL_LABELS[level]}
                          </span>
                        </div>
                        <p>{explanation}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {similar.length > 0 && (
            <div className="type-detail-similar">
              <h3>Similar SBTI Types</h3>
              <div className="similar-grid">
                {similar.map((s) => (
                  <Link
                    key={s.code}
                    href={`/types/classic/${s.code.toLowerCase()}`}
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
            <Link href="/quiz/classic" className="btn-primary">
              Take the Classic Quiz
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
