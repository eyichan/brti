import {
  ClassicDimensionKey,
  ClassicDimensionLevel,
  ClassicQuizQuestion,
  ClassicQuizResult,
} from "./types";
import {
  CLASSIC_PERSONALITY_TYPES,
  CLASSIC_SPECIAL_TYPE,
  CLASSIC_FALLBACK_TYPE,
} from "./personality-types";
import { CLASSIC_DIMENSIONS, CLASSIC_DIMENSION_ORDER } from "./dimensions";

function scoreToLevel(score: number): ClassicDimensionLevel {
  // 2 questions per dim, each scored 1-3 → range 2-6
  if (score <= 3) return "L";
  if (score === 4) return "M";
  return "H";
}

function levelToNum(l: ClassicDimensionLevel): number {
  return { L: 1, M: 2, H: 3 }[l];
}

function parsePattern(pattern: string): ClassicDimensionLevel[] {
  return pattern.replace(/-/g, "").split("") as ClassicDimensionLevel[];
}

export function computeClassicResult(
  answers: Record<string, number>,
  questions: ClassicQuizQuestion[],
  gateAnswers: Record<string, number>
): ClassicQuizResult {
  const isWasted =
    gateAnswers["gate_q1"] === 3 && gateAnswers["gate_q2"] === 2;

  // Sum scores per dimension (skip special questions)
  const rawScores = {} as Record<ClassicDimensionKey, number>;
  for (const key of CLASSIC_DIMENSION_ORDER) rawScores[key] = 0;

  for (const q of questions) {
    if (q.special) continue;
    const val = answers[q.id];
    if (val !== undefined) rawScores[q.dim] += val;
  }

  // Convert to levels
  const levels = {} as Record<ClassicDimensionKey, ClassicDimensionLevel>;
  for (const key of CLASSIC_DIMENSION_ORDER) {
    levels[key] = scoreToLevel(rawScores[key]);
  }

  // Special WASTED type
  if (isWasted) {
    return {
      rawScores,
      levels,
      type: CLASSIC_SPECIAL_TYPE,
      matchPercent: 100,
      ranked: [],
      special: true,
      modeKicker: "🍻 WASTED Mode Activated",
      badge: "Party Animal",
      sub: "You triggered the secret personality type!",
      secondaryType: null,
    };
  }

  // Compute user vector
  const userVector = CLASSIC_DIMENSION_ORDER.map((dim) =>
    levelToNum(levels[dim])
  );

  // Rank all personality types by vector distance
  const ranked = CLASSIC_PERSONALITY_TYPES.map((type) => {
    const typeVector = parsePattern(type.pattern).map(levelToNum);
    let distance = 0;
    let exact = 0;
    for (let i = 0; i < typeVector.length; i++) {
      const diff = Math.abs(userVector[i] - typeVector[i]);
      distance += diff;
      if (diff === 0) exact++;
    }
    // Max distance = 15 dims × 2 = 30
    const similarity = Math.max(0, Math.round((1 - distance / 30) * 100));
    return { ...type, similarity, distance, exact };
  }).sort((a, b) => {
    if (a.distance !== b.distance) return a.distance - b.distance;
    if (b.exact !== a.exact) return b.exact - a.exact;
    return 0;
  });

  const best = ranked[0];

  // Fallback to GLITCH if match too low
  if (best.similarity < 60) {
    return {
      rawScores,
      levels,
      type: CLASSIC_FALLBACK_TYPE,
      matchPercent: best.similarity,
      ranked: ranked.slice(0, 3),
      special: false,
      modeKicker: "⚠️ GLITCH Mode",
      badge: "Anomaly",
      sub: "Your personality broke the algorithm.",
      secondaryType: ranked.length > 1 ? ranked[1] : null,
    };
  }

  // Determine dominant model for mode kicker
  const modelScores = {
    Self: (rawScores.S1 + rawScores.S2 + rawScores.S3) / 3,
    Emotional: (rawScores.E1 + rawScores.E2 + rawScores.E3) / 3,
    Attitude: (rawScores.A1 + rawScores.A2 + rawScores.A3) / 3,
    Action: (rawScores.Ac1 + rawScores.Ac2 + rawScores.Ac3) / 3,
    Social: (rawScores.So1 + rawScores.So2 + rawScores.So3) / 3,
  };

  const dom = Object.entries(modelScores).sort((a, b) => b[1] - a[1])[0][0];

  const kickers: Record<string, string> = {
    Self: "🧠 Self-Aware Mode",
    Emotional: "❤️ Feelings-First Mode",
    Attitude: "🌍 World-View Mode",
    Action: "⚡ Action-Driven Mode",
    Social: "🎭 Social Dynamics Mode",
  };

  const badges: Record<string, string> = {
    Self: "Identity Expert",
    Emotional: "Heart Warrior",
    Attitude: "Perspective Master",
    Action: "Execution Machine",
    Social: "Social Architect",
  };

  return {
    rawScores,
    levels,
    type: best,
    matchPercent: best.similarity,
    ranked: ranked.slice(0, 3),
    special: false,
    modeKicker: kickers[dom] || "🔮 Mixed Mode",
    badge: badges[dom] || "Balanced",
    sub: `Your strongest model: ${dom}`,
    secondaryType: ranked.length > 1 ? ranked[1] : null,
  };
}

export function getClassicDimensionExplanation(
  dim: ClassicDimensionKey,
  level: ClassicDimensionLevel
): string {
  const meta = CLASSIC_DIMENSIONS[dim];
  if (level === "L") return meta.low;
  if (level === "M") return meta.mid;
  return meta.high;
}

export { CLASSIC_DIMENSION_ORDER };
