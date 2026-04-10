import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";
import { BRAINROT_TYPES } from "@/lib/brainrot-types";
import { CLASSIC_PERSONALITY_TYPES } from "@/lib/classic/personality-types";

export const runtime = "edge";

function findType(quiz: string, code: string) {
  const types =
    quiz === "classic" ? CLASSIC_PERSONALITY_TYPES : BRAINROT_TYPES;
  return (
    types.find((t) => t.code.toUpperCase() === code.toUpperCase()) || null
  );
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const quiz = searchParams.get("q") || "brainrot";
  const code = (searchParams.get("t") || "").toUpperCase();
  const match = searchParams.get("m") || "??";
  const type = findType(quiz, code);

  const typeName = type?.name || "Unknown Type";
  const tagline = type?.tagline || "";
  const quizLabel =
    quiz === "classic" ? "CLASSIC SBTI QUIZ" : "BRAINROT QUIZ";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0c0a09",
          color: "#f5f0eb",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Quiz label */}
        <div
          style={{
            fontSize: 18,
            color: "#a89890",
            letterSpacing: "0.12em",
            marginBottom: 24,
          }}
        >
          {quizLabel} RESULT
        </div>

        {/* Type code */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#f97316",
            lineHeight: 1,
            marginBottom: 12,
          }}
        >
          {code}
        </div>

        {/* Type name */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#f5f0eb",
            marginBottom: 20,
          }}
        >
          {typeName}
        </div>

        {/* Match badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(249,115,22,0.15)",
            border: "2px solid rgba(249,115,22,0.3)",
            borderRadius: "999px",
            padding: "10px 28px",
            fontSize: 28,
            fontWeight: 700,
            color: "#fb923c",
          }}
        >
          {`Match: ${match}%`}
        </div>

        {/* Tagline */}
        {tagline && (
          <div
            style={{
              fontSize: 20,
              color: "#a89890",
              marginTop: 24,
            }}
          >
            {`\u201C${tagline}\u201D`}
          </div>
        )}

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            fontSize: 16,
            color: "#a89890",
          }}
        >
          Take the quiz at sbtibrainrot.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
