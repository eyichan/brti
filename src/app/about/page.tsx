import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

// Page type: SUPPORTING — primary keyword: "what is BRTI"
export const metadata = buildMetadata({
  title: "What Is BRTI — About the BrainRot Type Indicator",
  description:
    "BRTI (BrainRot Type Indicator) is a personality quiz that matches you with brainrot meme characters. Two versions: quick 5-dimension scan and deep 15-dimension SBTI edition.",
  path: "/about",
  keywords: [
    "what is BRTI",
    "about brainrot type indicator",
    "BRTI meaning",
    "brainrot personality quiz about",
  ],
});

export default function AboutPage() {
  return (
    <main>
      <div className="shell">
        <article className="card legal-page about-page">
          <div className="about-hero">
            <Image src="/brand.svg" alt="BRTI" width={64} height={64} />
            <h1>About BRTI</h1>
          </div>

          <p className="about-lead">
            BRTI (BrainRot Type Indicator) is a personality quiz that matches
            you with iconic brainrot characters based on your responses to
            carefully crafted (and completely unscientific) questions.
          </p>

          <h2>Two Quiz Versions</h2>

          <div className="about-grid">
            <div className="about-card">
              <h3>🧠 Brainrot Quiz</h3>
              <p>
                The quick version. 15 questions across 5 dimensions (Chaos
                Energy, Rizz Factor, Brain Mode, Squad Energy, Vibe Check).
                16 possible personality types. Takes about 3 minutes.
              </p>
              <Link href="/quiz/brainrot" className="btn-secondary">
                Take the Quiz →
              </Link>
            </div>
            <div className="about-card">
              <h3>🔬 Classic Quiz</h3>
              <p>
                The deep scan. 30 questions across 15 dimensions organized into
                5 psychological models. 22+ personality types with detailed
                profiles. Based on the SBTI framework, culturally remastered.
                Takes about 8 minutes.
              </p>
              <Link href="/quiz/classic" className="btn-secondary">
                Take the Quiz →
              </Link>
            </div>
          </div>

          <h2>How It Works</h2>
          <p>
            Each question maps to a psychological dimension. Your answers
            generate a multi-dimensional personality vector. We then compute the
            shortest vector distance between your profile and each brainrot
            character&apos;s personality template to find your best match.
          </p>
          <p>
            Sounds scientific? It&apos;s not. We just made it sound that way so
            you&apos;d trust the results more. (Which you absolutely should not.)
          </p>

          <h2>Disclaimer</h2>
          <p>
            This is a 100% entertainment product. It is not a psychological
            assessment tool. Do not use your brainrot type on your resume, in
            court, or during a job interview. Probably don&apos;t use it on a
            first date either, but we can&apos;t stop you.
          </p>

          <h2>Credits</h2>
          <p>
            Inspired by the SBTI (Cyber Personality Test) framework. Character images from
            the brainrot universe. Built with Next.js, TypeScript, and an
            unhealthy amount of internet culture.
          </p>
        </article>
      </div>
    </main>
  );
}
