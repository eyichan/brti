"use client";

import { useState } from "react";
import Link from "next/link";
import { BRAINROT_TYPES } from "@/lib/brainrot-types";
import { CLASSIC_PERSONALITY_TYPES } from "@/lib/classic/personality-types";

type AllType = {
  code: string;
  name: string;
  tagline: string;
  description: string;
  pattern: string;
  version: "brainrot" | "classic";
};

const ALL_TYPES: AllType[] = [
  ...BRAINROT_TYPES.map((t) => ({ ...t, version: "brainrot" as const })),
  ...CLASSIC_PERSONALITY_TYPES.map((t) => ({
    ...t,
    version: "classic" as const,
  })),
];

export default function CompareClient() {
  const [typeA, setTypeA] = useState<string>("");
  const [typeB, setTypeB] = useState<string>("");

  const a = ALL_TYPES.find(
    (t) => `${t.version}:${t.code}` === typeA
  );
  const b = ALL_TYPES.find(
    (t) => `${t.version}:${t.code}` === typeB
  );

  return (
    <div className="compare-tool">
      <div className="compare-selectors">
        <div className="compare-select-group">
          <label>Type A</label>
          <select
            value={typeA}
            onChange={(e) => setTypeA(e.target.value)}
            className="compare-select"
          >
            <option value="">-- Select a type --</option>
            <optgroup label="🧠 Brainrot Quiz Types">
              {BRAINROT_TYPES.map((t) => (
                <option key={`br-${t.code}`} value={`brainrot:${t.code}`}>
                  {t.code} — {t.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="🔬 Classic SBTI Types">
              {CLASSIC_PERSONALITY_TYPES.map((t) => (
                <option key={`cl-${t.code}`} value={`classic:${t.code}`}>
                  {t.code} — {t.name}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <span className="compare-vs">VS</span>

        <div className="compare-select-group">
          <label>Type B</label>
          <select
            value={typeB}
            onChange={(e) => setTypeB(e.target.value)}
            className="compare-select"
          >
            <option value="">-- Select a type --</option>
            <optgroup label="🧠 Brainrot Quiz Types">
              {BRAINROT_TYPES.map((t) => (
                <option key={`br-${t.code}`} value={`brainrot:${t.code}`}>
                  {t.code} — {t.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="🔬 Classic SBTI Types">
              {CLASSIC_PERSONALITY_TYPES.map((t) => (
                <option key={`cl-${t.code}`} value={`classic:${t.code}`}>
                  {t.code} — {t.name}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      {a && b ? (
        <div className="compare-result">
          <div className="compare-cards">
            <div className="compare-card compare-card-a">
              <span className="version-tag">{a.version === "brainrot" ? "Brainrot" : "Classic SBTI"}</span>
              <span className="type-grid-code">{a.code}</span>
              <h3>{a.name}</h3>
              <p className="type-grid-tagline">&ldquo;{a.tagline}&rdquo;</p>
              <p className="compare-desc">{a.description}</p>
              <Link
                href={`/types/${a.version}/${a.code.toLowerCase()}`}
                className="btn-secondary compare-link"
              >
                View Full Profile
              </Link>
            </div>

            <div className="compare-card compare-card-b">
              <span className="version-tag">{b.version === "brainrot" ? "Brainrot" : "Classic SBTI"}</span>
              <span className="type-grid-code">{b.code}</span>
              <h3>{b.name}</h3>
              <p className="type-grid-tagline">&ldquo;{b.tagline}&rdquo;</p>
              <p className="compare-desc">{b.description}</p>
              <Link
                href={`/types/${b.version}/${b.code.toLowerCase()}`}
                className="btn-secondary compare-link"
              >
                View Full Profile
              </Link>
            </div>
          </div>

          {/* If both from same version & same dim system, show dimension comparison */}
          {a.version === b.version && (
            <div className="compare-dimensions">
              <h3>Dimension Comparison</h3>
              {a.version === "brainrot" ? (
                <BrainrotDimCompare patternA={a.pattern} patternB={b.pattern} nameA={a.code} nameB={b.code} />
              ) : (
                <ClassicDimCompare patternA={a.pattern} patternB={b.pattern} nameA={a.code} nameB={b.code} />
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="compare-empty">
          <p>Select two brainrot personality types above to compare them side by side.</p>
        </div>
      )}
    </div>
  );
}

const BRAINROT_DIMS = ["Chaos Energy", "Rizz Factor", "Brain Mode", "Squad Energy", "Vibe Check"];
const LEVEL_MAP: Record<string, number> = { L: 1, M: 2, H: 3 };
const LEVEL_LABEL: Record<string, string> = { L: "Low", M: "Mid", H: "High" };

function BrainrotDimCompare({ patternA, patternB, nameA, nameB }: {
  patternA: string; patternB: string; nameA: string; nameB: string;
}) {
  const levelsA = patternA.split("");
  const levelsB = patternB.split("");

  return (
    <div className="dim-compare-grid">
      {BRAINROT_DIMS.map((dim, i) => (
        <div key={dim} className="dim-compare-row">
          <span className="dim-compare-name">{dim}</span>
          <div className="dim-compare-bars">
            <div className="dim-bar-wrap">
              <span className="dim-bar-label">{nameA}</span>
              <div className="dim-bar">
                <div className="dim-bar-fill" style={{ width: `${(LEVEL_MAP[levelsA[i]] / 3) * 100}%` }} />
              </div>
              <span className="dim-bar-value">{LEVEL_LABEL[levelsA[i]]}</span>
            </div>
            <div className="dim-bar-wrap">
              <span className="dim-bar-label">{nameB}</span>
              <div className="dim-bar dim-bar-alt">
                <div className="dim-bar-fill dim-bar-fill-alt" style={{ width: `${(LEVEL_MAP[levelsB[i]] / 3) * 100}%` }} />
              </div>
              <span className="dim-bar-value">{LEVEL_LABEL[levelsB[i]]}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const CLASSIC_DIMS = [
  "Self-Worth", "Self-Clarity", "Core Drive",
  "Trust Level", "Heart Mode", "Boundary Style",
  "World Lens", "Rule Stance", "Sense of Purpose",
  "Motivation Fuel", "Decision Speed", "Execution Mode",
  "Social Battery", "Social Bubble", "Mask Level",
];

function ClassicDimCompare({ patternA, patternB, nameA, nameB }: {
  patternA: string; patternB: string; nameA: string; nameB: string;
}) {
  const flatA = patternA.replace(/-/g, "").split("");
  const flatB = patternB.replace(/-/g, "").split("");

  return (
    <div className="dim-compare-grid">
      {CLASSIC_DIMS.map((dim, i) => (
        <div key={dim} className="dim-compare-row">
          <span className="dim-compare-name">{dim}</span>
          <div className="dim-compare-bars">
            <div className="dim-bar-wrap">
              <span className="dim-bar-label">{nameA}</span>
              <div className="dim-bar">
                <div className="dim-bar-fill" style={{ width: `${(LEVEL_MAP[flatA[i]] / 3) * 100}%` }} />
              </div>
              <span className="dim-bar-value">{LEVEL_LABEL[flatA[i]]}</span>
            </div>
            <div className="dim-bar-wrap">
              <span className="dim-bar-label">{nameB}</span>
              <div className="dim-bar dim-bar-alt">
                <div className="dim-bar-fill dim-bar-fill-alt" style={{ width: `${(LEVEL_MAP[flatB[i]] / 3) * 100}%` }} />
              </div>
              <span className="dim-bar-value">{LEVEL_LABEL[flatB[i]]}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
