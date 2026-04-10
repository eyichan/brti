import Image from "next/image";
import { QuizResult, DimensionKey } from "@/lib/types";
import { DIMENSIONS } from "@/lib/questions";
import { getDimensionExplanation, DIMENSION_ORDER } from "@/lib/scoring";
import ShareButton from "./ShareButton";

interface ResultScreenProps {
  result: QuizResult;
  onRestart: () => void;
  onHome: () => void;
}

export default function ResultScreen({ result, onRestart, onHome }: ResultScreenProps) {
  const { type, matchPercent, levels, scores, ranked } = result;

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
            <div className="type-kicker">Your BrainRot Type</div>
            <div className="type-name">{type.code}</div>
            <div className="type-subname">{type.name}</div>
            <div className="match">Match: {matchPercent}%</div>
          </div>
        </div>

        {/* Description */}
        <div className="analysis-box">
          <h3>Personality Breakdown</h3>
          <p>{type.description}</p>
        </div>

        {/* 5 Dimensions */}
        <div className="dim-box">
          <h3>5-Dimension Profile</h3>
          <div className="dim-list">
            {DIMENSION_ORDER.map((dim) => (
              <div key={dim} className="dim-item">
                <div className="dim-item-top">
                  <div className="dim-item-name">
                    {DIMENSIONS[dim as DimensionKey].name}
                  </div>
                  <div className="dim-item-score">
                    {levels[dim as DimensionKey]} / {scores[dim as DimensionKey]}pts
                  </div>
                </div>
                <p>
                  {getDimensionExplanation(
                    dim as DimensionKey,
                    levels[dim as DimensionKey]
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Runner-ups */}
        {ranked.length > 1 && (
          <div className="runner-box">
            <h3>You Also Match</h3>
            <div className="runner-list">
              {ranked.slice(1).map((r) => (
                <div key={r.code} className="runner-item">
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.code}</span>
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
            This test is for entertainment only. Do not use it for medical diagnosis,
            job interviews, relationship decisions, college applications, court
            proceedings, or any situation where actual psychological insight would be
            useful. Your brainrot type is not legally binding. Probably.
          </p>
        </div>
      </div>

      <div className="result-actions">
        <ShareButton
          typeCode={type.code}
          typeName={type.name}
          matchPercent={matchPercent}
          quiz="brainrot"
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
