import {
  DimensionKey,
  DimensionLevel,
  QuizQuestion,
  QuizResult,
} from "./types";
import { BRAINROT_TYPES } from "./brainrot-types";
import { DIMENSIONS } from "./questions";

const DIMENSION_ORDER: DimensionKey[] = ["CH", "RZ", "BR", "SQ", "VB"];

function scoreToLevel(score: number): DimensionLevel {
  // Each dimension has 3 questions, each scored 1-3, so range is 3-9
  if (score <= 4) return "L";
  if (score <= 6) return "M";
  return "H";
}

function levelToNum(level: DimensionLevel): number {
  return { L: 1, M: 2, H: 3 }[level];
}

function parsePattern(pattern: string): DimensionLevel[] {
  return pattern.split("") as DimensionLevel[];
}

export function computeResult(
  answers: Record<string, number>,
  questions: QuizQuestion[]
): QuizResult {
  // Sum scores per dimension
  const scores: Record<DimensionKey, number> = {
    CH: 0,
    RZ: 0,
    BR: 0,
    SQ: 0,
    VB: 0,
  };

  questions.forEach((q) => {
    const answer = answers[q.id];
    if (answer !== undefined) {
      scores[q.dim] += answer;
    }
  });

  // Convert to levels
  const levels: Record<DimensionKey, DimensionLevel> = {
    CH: scoreToLevel(scores.CH),
    RZ: scoreToLevel(scores.RZ),
    BR: scoreToLevel(scores.BR),
    SQ: scoreToLevel(scores.SQ),
    VB: scoreToLevel(scores.VB),
  };

  // Compute user vector
  const userVector = DIMENSION_ORDER.map((dim) => levelToNum(levels[dim]));

  // Rank all brainrot types by similarity
  const ranked = BRAINROT_TYPES.map((type) => {
    const typeVector = parsePattern(type.pattern).map(levelToNum);
    let distance = 0;
    let exact = 0;

    for (let i = 0; i < typeVector.length; i++) {
      const diff = Math.abs(userVector[i] - typeVector[i]);
      distance += diff;
      if (diff === 0) exact += 1;
    }

    // Max possible distance = 5 dims * 2 = 10
    const similarity = Math.max(0, Math.round((1 - distance / 10) * 100));

    return { ...type, similarity, distance, exact };
  }).sort((a, b) => {
    if (a.distance !== b.distance) return a.distance - b.distance;
    if (b.exact !== a.exact) return b.exact - a.exact;
    return b.similarity - a.similarity;
  });

  const best = ranked[0];

  return {
    scores,
    levels,
    type: best,
    matchPercent: best.similarity,
    ranked: ranked.slice(0, 3),
  };
}

export function getDimensionExplanation(
  dim: DimensionKey,
  level: DimensionLevel
): string {
  const meta = DIMENSIONS[dim];
  if (level === "L") return meta.low;
  if (level === "M") return meta.mid;
  return meta.high;
}

export { DIMENSION_ORDER };
