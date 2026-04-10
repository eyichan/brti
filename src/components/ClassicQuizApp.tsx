"use client";

import { useState, useCallback, useMemo } from "react";
import { ClassicScreen } from "@/lib/classic/types";
import type { ClassicQuizResult } from "@/lib/classic/types";
import {
  CLASSIC_QUESTIONS,
  CLASSIC_SPECIAL_QUESTIONS,
} from "@/lib/classic/questions";
import { computeClassicResult } from "@/lib/classic/scoring";
import ClassicIntroScreen from "./ClassicIntroScreen";
import QuizScreen from "./QuizScreen";
import ClassicResultScreen from "./ClassicResultScreen";

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const gate_q1 = CLASSIC_SPECIAL_QUESTIONS[0];
const gate_q2 = CLASSIC_SPECIAL_QUESTIONS[1];

export default function ClassicQuizApp() {
  const [screen, setScreen] = useState<ClassicScreen | "gate">("intro");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [gateAnswers, setGateAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<ClassicQuizResult | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState(() => {
    // Mix gate_q1 into the regular questions (around position 10-15)
    const regular = [...CLASSIC_QUESTIONS];
    const insertAt = 10 + Math.floor(Math.random() * 5);
    regular.splice(insertAt, 0, gate_q1);
    return regular;
  });

  const startQuiz = useCallback(() => {
    setAnswers({});
    setGateAnswers({});
    setResult(null);
    const regular = shuffleArray(CLASSIC_QUESTIONS);
    const insertAt = 10 + Math.floor(Math.random() * 5);
    regular.splice(insertAt, 0, gate_q1);
    setShuffledQuestions(regular);
    setScreen("quiz");
  }, []);

  const handleAnswer = useCallback(
    (questionId: string, value: number) => {
      if (questionId === gate_q1.id) {
        setGateAnswers((prev) => ({ ...prev, [questionId]: value }));
      }
      setAnswers((prev) => ({ ...prev, [questionId]: value }));
    },
    []
  );

  const handleSubmit = useCallback(() => {
    // Check if gate_q1 triggered (drinking hobby)
    if (gateAnswers["gate_q1"] === 3) {
      setScreen("gate");
      return;
    }
    // No gate → compute result directly
    const res = computeClassicResult(answers, shuffledQuestions, gateAnswers);
    setResult(res);
    setScreen("result");
    window.scrollTo(0, 0);
  }, [answers, gateAnswers, shuffledQuestions]);

  const handleGateAnswer = useCallback(
    (value: number) => {
      const updatedGate = { ...gateAnswers, gate_q2: value };
      setGateAnswers(updatedGate);
      const res = computeClassicResult(answers, shuffledQuestions, updatedGate);
      setResult(res);
      setScreen("result");
      window.scrollTo(0, 0);
    },
    [answers, gateAnswers, shuffledQuestions]
  );

  const answeredCount = useMemo(
    () => shuffledQuestions.filter((q) => answers[q.id] !== undefined).length,
    [answers, shuffledQuestions]
  );

  const isComplete = answeredCount === shuffledQuestions.length;

  return (
    <div className="shell">
      {screen === "intro" && <ClassicIntroScreen onStart={startQuiz} />}

      {screen === "quiz" && (
        <QuizScreen
          questions={shuffledQuestions}
          answers={answers}
          onAnswer={handleAnswer}
          onSubmit={handleSubmit}
          onBack={() => setScreen("intro")}
          answeredCount={answeredCount}
          totalCount={shuffledQuestions.length}
          isComplete={isComplete}
        />
      )}

      {screen === "gate" && (
        <section className="card gate-wrap">
          <div className="gate-content">
            <div className="gate-icon">🍺</div>
            <h2>Wait... one more question.</h2>
            <p className="gate-subtitle">You mentioned drinking. We need to know more.</p>
            <div className="gate-question">{gate_q2.text}</div>
            <div className="gate-options">
              {gate_q2.options.map((opt, i) => (
                <button
                  key={i}
                  className="gate-option"
                  onClick={() => handleGateAnswer(opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {screen === "result" && result && (
        <ClassicResultScreen
          result={result}
          onRestart={startQuiz}
          onHome={() => setScreen("intro")}
        />
      )}
    </div>
  );
}
