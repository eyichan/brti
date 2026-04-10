import type { Metadata } from "next";
import Link from "next/link";
import { BRAINROT_TYPES } from "@/lib/brainrot-types";
import { CLASSIC_PERSONALITY_TYPES } from "@/lib/classic/personality-types";
import { DIMENSIONS } from "@/lib/questions";
import { DIMENSION_ORDER } from "@/lib/scoring";
import { CLASSIC_DIMENSIONS } from "@/lib/classic/dimensions";
import type { DimensionKey } from "@/lib/types";
import type { ClassicDimensionKey } from "@/lib/classic/types";

const CLASSIC_DIM_ORDER: ClassicDimensionKey[] = [
  "S1", "S2", "S3", "E1", "E2", "E3",
  "A1", "A2", "A3", "Ac1", "Ac2", "Ac3",
  "So1", "So2", "So3",
];

function findType(quiz: string, code: string) {
  const types =
    quiz === "classic" ? CLASSIC_PERSONALITY_TYPES : BRAINROT_TYPES;
  return (
    types.find((t) => t.code.toUpperCase() === code.toUpperCase()) || null
  );
}

interface PageProps {
  searchParams: Promise<{ q?: string; t?: string; m?: string; d?: string }>;
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const quiz = params.q || "brainrot";
  const code = (params.t || "").toUpperCase();
  const match = params.m || "??";
  const type = findType(quiz, code);

  const title = type
    ? `I'm ${type.name} (${code}) \u2014 ${match}% Match!`
    : "SBTI Brainrot Test Result";
  const description = type
    ? `${type.tagline}. Take the SBTI Brainrot Test to find YOUR brainrot type!`
    : "Take the SBTI brainrot personality test and discover your brainrot character.";

  const ogUrl = `/api/og?q=${quiz}&t=${code}&m=${match}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl],
    },
    robots: { index: false, follow: true },
  };
}

export default async function SharePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const quiz = params.q || "brainrot";
  const code = (params.t || "").toUpperCase();
  const match = params.m || "??";
  const dims = (params.d || "").replace(/[^HMLhml]/g, "").toUpperCase();
  const type = findType(quiz, code);

  if (!type) {
    return (
      <main>
        <div className="shell">
          <section className="card share-page">
            <h1 className="share-heading">Result Not Found</h1>
            <p className="share-sub">
              This share link may be invalid or expired. Take the quiz to get
              your own result!
            </p>
            <div className="share-cta-buttons">
              <Link href="/quiz/brainrot" className="btn-primary">
                Take Brainrot Quiz
              </Link>
              <Link href="/quiz/classic" className="btn-secondary">
                Take Classic Quiz
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  // Decode dimension levels from URL param
  const dimEntries: { name: string; level: string }[] = [];
  if (quiz === "brainrot" && dims.length === 5) {
    DIMENSION_ORDER.forEach((key, i) => {
      dimEntries.push({
        name: DIMENSIONS[key as DimensionKey].name,
        level: dims[i],
      });
    });
  } else if (quiz === "classic" && dims.length === 15) {
    CLASSIC_DIM_ORDER.forEach((key, i) => {
      dimEntries.push({
        name: CLASSIC_DIMENSIONS[key].name,
        level: dims[i],
      });
    });
  }

  const quizLabel =
    quiz === "classic" ? "Classic SBTI Quiz" : "Brainrot Quiz";
  const quizUrl =
    quiz === "classic" ? "/quiz/classic" : "/quiz/brainrot";

  return (
    <main>
      <div className="shell">
        <section className="card share-page">
          <div className="share-eyebrow">{quizLabel} Result</div>

          <div className="share-hero">
            <div className="share-image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={type.image}
                alt={type.name}
                width={240}
                height={240}
                className="share-type-image"
              />
            </div>
            <div className="share-info">
              <div className="share-code">{code}</div>
              <h1 className="share-name">{type.name}</h1>
              <div className="share-match">Match: {match}%</div>
              <div className="share-tagline">
                &ldquo;{type.tagline}&rdquo;
              </div>
            </div>
          </div>

          <div className="share-desc">
            <p>{type.description}</p>
          </div>

          {dimEntries.length > 0 && (
            <div className="share-dims">
              <h2>Dimension Profile</h2>
              <div className="share-dim-chips">
                {dimEntries.map((d) => (
                  <div
                    key={d.name}
                    className={`share-dim-chip level-${d.level.toLowerCase()}`}
                  >
                    <span className="share-dim-name">{d.name}</span>
                    <span className="share-dim-level">
                      {d.level === "H"
                        ? "High"
                        : d.level === "M"
                          ? "Mid"
                          : "Low"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="share-cta">
            <h2>Think you can beat this?</h2>
            <p className="share-cta-sub">
              Take the same quiz and discover your own brainrot personality type.
            </p>
            <div className="share-cta-buttons">
              <Link href={quizUrl} className="btn-primary">
                Take the {quizLabel}
              </Link>
              <Link href="/" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
