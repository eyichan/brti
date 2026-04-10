import QuizApp from "@/components/QuizApp";
import Link from "next/link";
import {
  quizJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
  QUIZ_FAQS,
} from "@/lib/seo";

// Page type: MECHANIC — primary keyword: "brainrot personality quiz"
export const metadata = buildMetadata({
  title: "Brainrot Personality Quiz — Find Your Type",
  description:
    "Take the 15-question brainrot quiz to find your character match. Are you Bombardiro Crocodilo, Sigma Boy, or Skibidi? 5 dimensions. Instant results.",
  path: "/quiz/brainrot",
  keywords: [
    "brainrot personality quiz",
    "which brainrot character am I",
    "brainrot animal quiz",
    "brainrot quiz online",
    "brainrot type test",
  ],
});

export default function BrainrotQuizPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(quizJsonLd("brainrot")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(QUIZ_FAQS.brainrot)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Brainrot Quiz", url: "/quiz/brainrot" },
            ])
          ),
        }}
      />

      <QuizApp />

      <div className="shell">
        <section className="content-section quiz-below-fold">
          <h2 className="section-heading">
            About the SBTI Brainrot Personality Quiz
          </h2>
          <div className="explainer-content">
            <p>
              The <strong>SBTI Brainrot Personality Quiz</strong> measures your
              personality across 5 brainrot dimensions: <em>Chaos Energy</em>,{" "}
              <em>Rizz Factor</em>, <em>Brain Mode</em>, <em>Squad Energy</em>,
              and <em>Vibe Check</em>. Each question maps to one dimension using
              a 3-level scoring system (Low / Mid / High).
            </p>
            <p>
              Your answers create a 5-character personality vector that gets
              matched against 16 iconic brainrot characters using vector
              similarity scoring. The result: your brainrot personality type,
              complete with match percentage and runner-up types.
            </p>
            <p>
              This is the quick version of the SBTI brainrot test. For a deeper
              15-dimension analysis with 22+ types, try the{" "}
              <Link href="/quiz/classic">Classic SBTI Quiz</Link>.
            </p>
          </div>

          <h3 className="faq-heading">Frequently Asked Questions</h3>
          <div className="faq-list">
            {QUIZ_FAQS.brainrot.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{faq.question}</summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="section-cta">
            <Link href="/types" className="btn-secondary">
              Browse All Brainrot Types →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
