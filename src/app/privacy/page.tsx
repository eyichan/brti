import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "BRTI privacy policy. Your quiz answers are processed locally in your browser. We do not store personal data.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <main>
      <div className="shell">
        <article className="card legal-page">
          <h1>Privacy Policy</h1>
          <p className="legal-date">Last updated: {new Date().toISOString().slice(0, 10)}</p>

          <h2>What We Collect</h2>
          <p>
            Almost nothing. BRTI is a client-side quiz tool. Your answers are
            processed entirely in your browser. We do not store your quiz
            responses, personality results, or any personal data on our servers.
          </p>

          <h2>Analytics</h2>
          <p>
            We may use privacy-respecting analytics tools (such as Google
            Analytics or similar) to understand aggregate site traffic — page
            views, referral sources, and device types. These tools may use
            cookies. No personally identifiable information is collected or
            shared.
          </p>

          <h2>Advertising</h2>
          <p>
            This site may display advertisements through Google AdSense or
            similar services. These services may use cookies to serve ads based
            on your browsing behavior. You can opt out of personalized
            advertising at{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            .
          </p>

          <h2>Cookies</h2>
          <p>
            We use minimal cookies for analytics and advertising purposes only.
            You can disable cookies in your browser settings at any time.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our site may contain links to external websites. We are not
            responsible for the privacy practices of those sites.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            This site is intended for entertainment purposes for users of all
            ages. We do not knowingly collect personal information from children
            under 13.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy from time to time. Any changes will be
            posted on this page with an updated date.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            through our website.
          </p>
        </article>
      </div>
    </main>
  );
}
