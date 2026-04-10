import ClassicQuizApp from "@/components/ClassicQuizApp";
import Link from "next/link";
import {
  quizJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
  QUIZ_FAQS,
} from "@/lib/seo";

// Page type: MECHANIC — primary keyword: "SBTI personality test"
export const metadata = buildMetadata({
  title: "SBTI Personality Test — 15 Dimensions, 22+ Types",
  description:
    "The deep SBTI personality test: 30 questions, 15 dimensions, 5 psychological models. Comprehensive brainrot analysis with secret unlockable types.",
  path: "/quiz/classic",
  keywords: [
    "SBTI personality test",
    "SBTI test",
    "SBTI guidance",
    "deep brainrot personality test",
    "15 dimension personality quiz",
  ],
});

export default function ClassicQuizPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(quizJsonLd("classic")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(QUIZ_FAQS.classic)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Classic SBTI Quiz", url: "/quiz/classic" },
            ])
          ),
        }}
      />

      <ClassicQuizApp />

      <div className="shell">
        <section className="content-section quiz-below-fold">
          <h2 className="section-heading">
            About the Classic SBTI Brainrot Test
          </h2>
          <div className="explainer-content">
            <p>
              The <strong>Classic SBTI Brainrot Test</strong> is the most
              comprehensive brainrot personality analysis available. It measures
              your personality across <strong>15 dimensions</strong> organized
              into 5 models: Self, Emotional, Attitude, Action, and Social.
            </p>
            <p>
              With 30 standard questions plus 2 secret gate questions, this quiz
              maps you to one of 22+ personality types — including hidden types
              like <em>WASTED</em> (the secret party animal) that only unlock
              through specific answer combinations. SBTI guidance for each type
              includes detailed dimension breakdowns.
            </p>
            <p>
              This is the deep version of the SBTI brainrot test. For a quick
              3-minute personality scan, try the{" "}
              <Link href="/quiz/brainrot">Brainrot Quiz</Link>.
            </p>
          </div>

          <h3 className="faq-heading">Frequently Asked Questions</h3>
          <div className="faq-list">
            {QUIZ_FAQS.classic.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{faq.question}</summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="section-cta">
            <Link href="/types" className="btn-secondary">
              Browse All SBTI Types →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
