"use client";

import { useState, useCallback, useMemo } from "react";
import { Screen } from "@/lib/types";
import { QUESTIONS } from "@/lib/questions";
import { computeResult } from "@/lib/scoring";
import type { QuizResult } from "@/lib/types";
import IntroScreen from "./IntroScreen";
import QuizScreen from "./QuizScreen";
import ResultScreen from "./ResultScreen";

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function QuizApp() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState(QUESTIONS);

  const startQuiz = useCallback(() => {
    setAnswers({});
    setResult(null);
    setShuffledQuestions(shuffleArray(QUESTIONS));
    setScreen("quiz");
  }, []);

  const handleAnswer = useCallback((questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  const handleSubmit = useCallback(() => {
    const res = computeResult(answers, shuffledQuestions);
    setResult(res);
    setScreen("result");
    window.scrollTo(0, 0);
  }, [answers, shuffledQuestions]);

  const answeredCount = useMemo(
    () =>
      shuffledQuestions.filter((q) => answers[q.id] !== undefined).length,
    [answers, shuffledQuestions]
  );

  const isComplete = answeredCount === shuffledQuestions.length;

  return (
    <div className="shell">
      {screen === "intro" && <IntroScreen onStart={startQuiz} />}
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
      {screen === "result" && result && (
        <ResultScreen result={result} onRestart={startQuiz} onHome={() => setScreen("intro")} />
      )}
    </div>
  );
}
