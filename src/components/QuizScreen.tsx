interface QuizScreenQuestion {
  id: string;
  dim: string;
  text: string;
  options: { label: string; value: number }[];
}

interface QuizScreenProps {
  questions: QuizScreenQuestion[];
  answers: Record<string, number>;
  onAnswer: (questionId: string, value: number) => void;
  onSubmit: () => void;
  onBack: () => void;
  answeredCount: number;
  totalCount: number;
  isComplete: boolean;
}

export default function QuizScreen({
  questions,
  answers,
  onAnswer,
  onSubmit,
  onBack,
  answeredCount,
  totalCount,
  isComplete,
}: QuizScreenProps) {
  const percent = totalCount ? (answeredCount / totalCount) * 100 : 0;
  const CODE_LABELS = ["A", "B", "C", "D"];

  return (
    <section className="card test-wrap">
      <div className="topbar">
        <div className="progress">
          <span style={{ width: `${percent}%` }} />
        </div>
        <div className="progress-text">
          {answeredCount} / {totalCount}
        </div>
      </div>

      <div className="question-list">
        {questions.map((q, qIndex) => (
          <article key={q.id} className="question">
            <div className="question-meta">
              <div className="badge">Q{qIndex + 1}</div>
              <div className="dim-tag">{q.dim}</div>
            </div>
            <div className="question-title">{q.text}</div>
            <div className="options">
              {q.options.map((opt, i) => (
                <label
                  key={i}
                  className={`option ${answers[q.id] === opt.value ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    value={opt.value}
                    checked={answers[q.id] === opt.value}
                    onChange={() => onAnswer(q.id, opt.value)}
                  />
                  <div className="option-code">{CODE_LABELS[i]}</div>
                  <div>{opt.label}</div>
                </label>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="actions-bottom">
        <div className="hint">
          {isComplete
            ? "All questions answered. Your brainrot awaits."
            : "Answer every question. The brainrot demands it."}
        </div>
        <div className="action-buttons">
          <button className="btn-secondary" onClick={onBack}>
            Back to Home
          </button>
          <button
            className="btn-primary"
            disabled={!isComplete}
            onClick={onSubmit}
          >
            Reveal My Brainrot
          </button>
        </div>
      </div>
    </section>
  );
}
