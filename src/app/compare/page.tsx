import CompareClient from "@/components/CompareClient";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

// Page type: MECHANIC — primary keyword: "compare brainrot types"
export const metadata = buildMetadata({
  title: "Compare Brainrot Personality Types — Side-by-Side Tool",
  description:
    "Compare any two brainrot personality types side by side. See dimension breakdowns, personality differences, and find your match or opposite. Works across Brainrot and Classic SBTI types.",
  path: "/compare",
  keywords: [
    "compare brainrot types",
    "brainrot type comparison",
    "brainrot personality comparison",
    "brainrot vs brainrot",
  ],
});

export default function ComparePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Compare Types", url: "/compare" },
            ])
          ),
        }}
      />
      <div className="shell">
        <section className="card legal-page">
          <h1>Compare SBTI Brainrot Types</h1>
          <p className="hero-sub" style={{ maxWidth: "none" }}>
            Pick any two brainrot personality types from either quiz version
            and compare them side by side. See how their dimensions stack up,
            where they differ, and which one fits you better.
          </p>
          <CompareClient />
        </section>
      </div>
    </main>
  );
}
