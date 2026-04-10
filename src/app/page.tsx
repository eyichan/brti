import Link from "next/link";
import {
  websiteJsonLd,
  faqJsonLd,
  HOME_FAQS,
  buildMetadata,
} from "@/lib/seo";

// Page type: HUB — primary keyword: "SBTI brainrot"
export const metadata = buildMetadata({
  title: "SBTI Brainrot Personality Test — Which Brainrot Character Are You?",
  description:
    "The original SBTI brainrot personality test. Discover which iconic brainrot character matches your personality — like MBTI but way more unhinged. 16+ types including Bombardiro Crocodilo, Tralalero Tralala & more.",
  path: "/",
  keywords: [
    "SBTI brainrot",
    "brainrot SBTI",
    "brainrot personality test",
    "brainrot MBTI",
    "brainrot type indicator",
    "BRTI",
  ],
});

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(HOME_FAQS)),
        }}
      />

      <div className="shell">
        {/* ── Hero ── */}
        <section className="card hero-minimal">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            SBTI Brainrot Personality Test
          </div>
          <h1>
            MBTI is <span className="dead-word">dead</span>.
            <br />
            BRTI has arrived.
          </h1>
          <p className="hero-sub">
            Forget Myers-Briggs. The SBTI brainrot personality test matches you
            with iconic brainrot characters based on your real personality.
            Discover your brainrot type below.
          </p>

          <div className="landing-versions">
            <div className="version-card">
              <span className="version-tag">Quick Scan</span>
              <h3>🧠 Brainrot Quiz</h3>
              <p>
                15 questions. 5 dimensions. 16 personality types. Fast, fun,
                and scientifically unverified. Takes about 3 minutes.
              </p>
              <Link href="/quiz/brainrot" className="btn-primary">
                Start Brainrot Quiz
              </Link>
            </div>
            <div className="version-card">
              <span className="version-tag">Deep Scan · SBTI Edition</span>
              <h3>🔬 Classic SBTI Quiz</h3>
              <p>
                30 questions. 15 dimensions. 22+ personality types. The
                comprehensive SBTI brainrot edition with detailed profiles.
                Takes about 8 minutes.
              </p>
              <Link href="/quiz/classic" className="btn-secondary">
                Start Classic Quiz
              </Link>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="content-section" id="how-it-works">
          <h2 className="section-heading">How the SBTI Brainrot Test Works</h2>
          <p className="section-sub">
            Three steps to discover your brainrot personality type. No sign-up.
            No data collection. Just pure, unfiltered personality matching.
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <span className="step-num">01</span>
              <h3>Answer Questions</h3>
              <p>
                Respond honestly to scenario-based personality questions. Each
                answer maps to specific brainrot personality dimensions like
                Chaos Energy, Rizz Factor, and Vibe Check.
              </p>
            </div>
            <div className="step-card">
              <span className="step-num">02</span>
              <h3>Get Matched</h3>
              <p>
                Our algorithm converts your answers into a personality vector
                and matches you against 16+ iconic brainrot character profiles
                using vector similarity scoring.
              </p>
            </div>
            <div className="step-card">
              <span className="step-num">03</span>
              <h3>Explore Your Type</h3>
              <p>
                Discover your brainrot character, read your personality
                analysis, see your dimension breakdown, and compare your
                results with friends.
              </p>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="content-section" id="features">
          <h2 className="section-heading">
            Why Take the SBTI Brainrot Personality Test?
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🎭</span>
              <h3>16+ Brainrot Characters</h3>
              <p>
                From Bombardiro Crocodilo to Sigma Boy — every personality
                archetype has a brainrot character that captures its energy.
                SBTI brainrot mapping at its finest.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📊</span>
              <h3>Multi-Dimensional Analysis</h3>
              <p>
                Go beyond simple labels. See your scores across 5 (or 15)
                personality dimensions with detailed breakdowns. Like SBTI
                guidance, but for brainrot.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔒</span>
              <h3>100% Private</h3>
              <p>
                Everything runs locally in your browser. Zero data sent to
                servers. No accounts needed. Your brainrot personality is
                your business.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⚡</span>
              <h3>Two Quiz Versions</h3>
              <p>
                Quick 3-minute brainrot scan or comprehensive 8-minute classic
                SBTI edition. Choose your depth. Both use the same proven
                personality matching algorithm.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔓</span>
              <h3>Secret Types</h3>
              <p>
                The Classic SBTI Quiz includes hidden personality types that
                only unlock through specific answer combinations. Can you find
                the WASTED type?
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🆚</span>
              <h3>Compare & Share</h3>
              <p>
                Compare your type with all other brainrot characters. See
                which friends are your personality match and who is your
                brainrot opposite.
              </p>
            </div>
          </div>
        </section>

        {/* ── Popular Types Preview ── */}
        <section className="content-section" id="popular-types">
          <h2 className="section-heading">Popular Brainrot Personality Types</h2>
          <p className="section-sub">
            Here are some of the most iconic SBTI brainrot types you could match
            with. Which one sounds like you?
          </p>
          <div className="types-preview-grid">
            {[
              {
                code: "BOOM",
                name: "Bombardiro Crocodilo",
                tag: "Main Character Energy",
                desc: "You detonate into rooms. Where others see calm, you see opportunity for maximum impact.",
              },
              {
                code: "TRAL",
                name: "Tralalero Tralala",
                tag: "Pure Vibes",
                desc: "Logic? Never met her. You operate on a frequency scientists haven't discovered yet.",
              },
              {
                code: "SIGM",
                name: "Sigma Boy",
                tag: "Lone Wolf",
                desc: "You built your empire while everyone was still arguing about which empire to build.",
              },
              {
                code: "SKIB",
                name: "Skibidi Toilet",
                tag: "Reality Transcender",
                desc: "You don't break rules. You simply exist in a dimension where rules are suggestions.",
              },
              {
                code: "BRRR",
                name: "Brr Brr Patapim",
                tag: "Galaxy Brain",
                desc: "Ice-cold strategist. Three moves ahead while everyone else is still loading.",
              },
              {
                code: "CHIMP",
                name: "Chimpanzini Bananini",
                tag: "Return to Monke",
                desc: "Civilization was a mistake. You're just here for the bananas and the vibes.",
              },
            ].map((t) => (
              <Link
                key={t.code}
                href={`/types/brainrot/${t.code.toLowerCase()}`}
                className="type-preview-card"
              >
                <span className="type-preview-code">{t.code}</span>
                <h3>{t.name}</h3>
                <span className="type-preview-tag">{t.tag}</span>
                <p>{t.desc}</p>
              </Link>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/types" className="btn-secondary">
              View All {`16+`} Brainrot Types →
            </Link>
          </div>
        </section>

        {/* ── SBTI Brainrot Explainer ── */}
        <section className="content-section" id="what-is-sbti">
          <h2 className="section-heading">
            What is SBTI Brainrot? A Quick Guide
          </h2>
          <div className="explainer-content">
            <p>
              <strong>SBTI brainrot</strong> is a personality typing framework
              that maps human personality traits to iconic brainrot meme
              characters. If you have ever searched for{" "}
              <em>&ldquo;SBTI guidance&rdquo;</em>,{" "}
              <em>&ldquo;brainrot MBTI&rdquo;</em>, or{" "}
              <em>&ldquo;which brainrot animal am I&rdquo;</em> — this is what
              you were looking for.
            </p>
            <p>
              Traditional personality tests like MBTI use letter codes (INTJ,
              ENFP). SBTI brainrot uses character archetypes from the brainrot
              meme universe — Bombardiro Crocodilo, Tralalero Tralala, Skibidi
              Toilet, Sigma Boy, and more. Each character represents a unique
              combination of personality dimensions.
            </p>
            <p>
              Our BRTI (BrainRot Type Indicator) offers two quiz versions.
              The <strong>Quick Brainrot Quiz</strong> measures 5
              dimensions for fast personality matching. The{" "}
              <strong>Classic SBTI Quiz</strong> uses 15 dimensions across 5
              personality models — Self, Emotional, Attitude, Action, and
              Social — for comprehensive brainrot type analysis.
            </p>
            <p>
              Whether you call it SBTI, brainrot MBTI, or a brainrot animal
              quiz, the goal is the same: finding the meme character that
              captures your chaotic, beautiful personality.
            </p>
          </div>
        </section>

        {/* ── Version Comparison ── */}
        <section className="content-section" id="compare-versions">
          <h2 className="section-heading">Quiz Version Comparison</h2>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>🧠 Brainrot Quiz</th>
                  <th>🔬 Classic SBTI Quiz</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Questions</td>
                  <td>15</td>
                  <td>30 + 2 secret</td>
                </tr>
                <tr>
                  <td>Dimensions</td>
                  <td>5</td>
                  <td>15 (across 5 models)</td>
                </tr>
                <tr>
                  <td>Personality Types</td>
                  <td>16</td>
                  <td>22 + 2 secret</td>
                </tr>
                <tr>
                  <td>Time to Complete</td>
                  <td>~3 minutes</td>
                  <td>~8 minutes</td>
                </tr>
                <tr>
                  <td>Secret Types</td>
                  <td>No</td>
                  <td>Yes (WASTED & GLITCH)</td>
                </tr>
                <tr>
                  <td>Best For</td>
                  <td>Quick fun, sharing</td>
                  <td>Deep self-discovery</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="content-section" id="faq">
          <h2 className="section-heading">
            Frequently Asked Questions About SBTI Brainrot
          </h2>
          <div className="faq-list">
            {HOME_FAQS.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{faq.question}</summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="content-section cta-section">
          <h2 className="section-heading">
            Ready to Find Your Brainrot Personality?
          </h2>
          <p className="section-sub">
            Join thousands discovering their SBTI brainrot type. No sign-up
            required. 100% free. 0% scientific rigor.
          </p>
          <div className="cta-buttons">
            <Link href="/quiz/brainrot" className="btn-primary">
              Quick Brainrot Quiz (3 min)
            </Link>
            <Link href="/quiz/classic" className="btn-secondary">
              Classic SBTI Quiz (8 min)
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

