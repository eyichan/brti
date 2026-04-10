import Image from "next/image";
import { ClassicDimensionKey } from "@/lib/classic/types";
import { ClassicQuizResult } from "@/lib/classic/types";
import { CLASSIC_DIMENSIONS } from "@/lib/classic/dimensions";
import { getClassicDimensionExplanation } from "@/lib/classic/scoring";
import ShareButton from "./ShareButton";

interface Props {
  result: ClassicQuizResult;
  onRestart: () => void;
  onHome: () => void;
}

const MODEL_GROUPS = [
  { name: "Self Model", keys: ["S1", "S2", "S3"] as ClassicDimensionKey[] },
  {
    name: "Emotional Model",
    keys: ["E1", "E2", "E3"] as ClassicDimensionKey[],
  },
  {
    name: "Attitude Model",
    keys: ["A1", "A2", "A3"] as ClassicDimensionKey[],
  },
  {
    name: "Action Model",
    keys: ["Ac1", "Ac2", "Ac3"] as ClassicDimensionKey[],
  },
  {
    name: "Social Model",
    keys: ["So1", "So2", "So3"] as ClassicDimensionKey[],
  },
];

export default function ClassicResultScreen({
  result,
  onRestart,
  onHome,
}: Props) {
  const {
    type,
    matchPercent,
    levels,
    rawScores,
    ranked,
    special,
    modeKicker,
    badge,
    sub,
    secondaryType,
  } = result;

  return (
    <section className="card result-wrap">
      <div className="result-layout">
        {/* Top: Image + Type Info */}
        <div className="result-top">
          <div className="poster-box">
            <Image
              src={type.image}
              alt={type.name}
              width={400}
              height={400}
              className="poster-image"
              priority
            />
            <div className="poster-caption">{type.tagline}</div>
          </div>

          <div className="type-box">
            <div className="type-kicker">{modeKicker}</div>
            <div className="type-name">{type.code}</div>
            <div className="type-subname">{type.name}</div>
            {!special && <div className="match">Match: {matchPercent}%</div>}
            {badge && <div className="result-badge">{badge}</div>}
            {sub && <div className="result-sub">{sub}</div>}
          </div>
        </div>

        {/* Description */}
        <div className="analysis-box">
          <h3>Personality Breakdown</h3>
          <p>{type.description}</p>
        </div>

        {/* 15 Dimensions grouped by model */}
        <div className="dim-box">
          <h3>15-Dimension Profile</h3>
          {MODEL_GROUPS.map((group) => (
            <div key={group.name} className="model-group">
              <div className="model-group-name">{group.name}</div>
              <div className="dim-list">
                {group.keys.map((key) => (
                  <div key={key} className="dim-item">
                    <div className="dim-item-top">
                      <div className="dim-item-name">
                        {CLASSIC_DIMENSIONS[key].name}
                      </div>
                      <div className="dim-item-score">
                        {levels[key]} / {rawScores[key]}pts
                      </div>
                    </div>
                    <p>
                      {getClassicDimensionExplanation(key, levels[key])}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Runner-ups */}
        {ranked.length > 1 && (
          <div className="runner-box">
            <h3>You Also Match</h3>
            <div className="runner-list">
              {ranked.slice(1, 3).map((r) => (
                <div key={r.code} className="runner-item">
                  <div>
                    <strong>{r.name}</strong>
                    <span>
                      {r.code} — {r.tagline}
                    </span>
                  </div>
                  <div className="runner-score">{r.similarity}%</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="note-box">
          <h3>Legal Disclaimer</h3>
          <p>
            This test is for entertainment only. Do not use it for medical
            diagnosis, job interviews, relationship decisions, college
            applications, court proceedings, or any situation where actual
            psychological insight would be useful. Your brainrot type is not
            legally binding. Probably.
          </p>
        </div>
      </div>

      <div className="result-actions">
        <ShareButton
          typeCode={type.code}
          typeName={type.name}
          matchPercent={matchPercent}
          quiz="classic"
        />
        <button className="btn-secondary" onClick={onRestart}>
          Take Again
        </button>
        <button className="btn-primary" onClick={onHome}>
          Back to Home
        </button>
      </div>
    </section>
  );
}
