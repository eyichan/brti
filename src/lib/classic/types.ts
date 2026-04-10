export interface ClassicQuizOption {
  label: string;
  value: number;
}

export interface ClassicQuizQuestion {
  id: string;
  dim: ClassicDimensionKey;
  text: string;
  options: ClassicQuizOption[];
  special?: boolean;
  kind?: string;
}

export type ClassicDimensionKey =
  | "S1" | "S2" | "S3"
  | "E1" | "E2" | "E3"
  | "A1" | "A2" | "A3"
  | "Ac1" | "Ac2" | "Ac3"
  | "So1" | "So2" | "So3";

export type ClassicDimensionLevel = "L" | "M" | "H";

export interface ClassicDimensionMeta {
  name: string;
  model: string;
  low: string;
  mid: string;
  high: string;
}

export interface ClassicPersonalityType {
  code: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  pattern: string; // "HHH-HMH-MHH-HHH-MHM"
}

export interface ClassicQuizResult {
  rawScores: Record<ClassicDimensionKey, number>;
  levels: Record<ClassicDimensionKey, ClassicDimensionLevel>;
  type: ClassicPersonalityType;
  matchPercent: number;
  ranked: Array<ClassicPersonalityType & { similarity: number }>;
  special: boolean;
  modeKicker: string;
  badge: string;
  sub: string;
  secondaryType: (ClassicPersonalityType & { similarity: number }) | null;
}

export type ClassicScreen = "intro" | "quiz" | "result";
