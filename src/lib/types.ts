export interface QuizOption {
  label: string;
  value: number;
}

export interface QuizQuestion {
  id: string;
  dim: DimensionKey;
  text: string;
  options: QuizOption[];
}

export type DimensionKey =
  | "CH" // Chaos Energy
  | "RZ" // Rizz Factor
  | "BR" // Brain Mode
  | "SQ" // Squad Loyalty
  | "VB"; // Vibe Check

export interface DimensionMeta {
  name: string;
  description: string;
  low: string;
  mid: string;
  high: string;
}

export type DimensionLevel = "L" | "M" | "H";

export interface BrainrotType {
  code: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  pattern: string; // e.g. "HMLHM" for CH-RZ-BR-SQ-VB
}

export interface QuizResult {
  scores: Record<DimensionKey, number>;
  levels: Record<DimensionKey, DimensionLevel>;
  type: BrainrotType;
  matchPercent: number;
  ranked: Array<BrainrotType & { similarity: number }>;
}

export type Screen = "intro" | "quiz" | "result";
