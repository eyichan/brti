import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "BRTI terms of service. This personality quiz is for entertainment purposes only.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <main>
      <div className="shell">
        <article className="card legal-page">
          <h1>Terms of Service</h1>
          <p className="legal-date">Last updated: {new Date().toISOString().slice(0, 10)}</p>

          <h2>1. Entertainment Purpose</h2>
          <p>
            BRTI (BrainRot Type Indicator) is a personality quiz created
            entirely for entertainment purposes. The results are not
            scientifically validated and should not be used as a substitute for
            professional psychological assessment, medical advice, career
            guidance, or any other serious decision-making process.
          </p>

          <h2>2. No Warranty</h2>
          <p>
            This website and its content are provided &quot;as is&quot; without
            warranty of any kind, express or implied. We make no representations
            about the accuracy, reliability, or completeness of quiz results.
          </p>

          <h2>3. User Conduct</h2>
          <p>
            By using this site, you agree to use it responsibly and not to
            misuse any content, attempt to reverse-engineer the scoring
            algorithm, or use results to discriminate against or harass
            individuals.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All brainrot character images, quiz content, personality
            descriptions, and site design are the property of BRTI or their
            respective creators. You may share your personal results but may not
            reproduce the quiz content for commercial purposes without
            permission.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall BRTI be liable for any damages arising out of
            the use or inability to use this website or its content. This
            includes but is not limited to existential crises triggered by
            discovering you are an NPC.
          </p>

          <h2>6. Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued
            use of the site constitutes acceptance of any changes.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These terms shall be governed by applicable laws. Any disputes shall
            be resolved through good-faith negotiation.
          </p>
        </article>
      </div>
    </main>
  );
}
