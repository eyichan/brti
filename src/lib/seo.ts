import type { Metadata } from "next";

const SITE_NAME = "BRTI — BrainRot Type Indicator";
const SITE_URL = "https://sbtibrainrot.com";
const SITE_DESCRIPTION =
  "The SBTI brainrot personality test. Discover which iconic brainrot character matches your personality — like MBTI but way more unhinged. Two quiz versions: quick brainrot scan or deep classic SBTI edition.";

export function buildMetadata(overrides: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
}): Metadata {
  // Title is just the page part — layout.tsx template appends "| BRTI"
  const title = overrides.title || SITE_NAME;
  const description = overrides.description || SITE_DESCRIPTION;
  const url = overrides.path ? `${SITE_URL}${overrides.path}` : SITE_URL;
  const ogImage = overrides.ogImage || `${SITE_URL}/og-image.png`;

  return {
    title,
    description,
    keywords: overrides.keywords,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: overrides.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// JSON-LD generators

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/types?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function quizJsonLd(version: "brainrot" | "classic") {
  const isClassic = version === "classic";
  return {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: isClassic
      ? "Classic SBTI Brainrot Personality Test"
      : "BRTI Brainrot Personality Quiz",
    description: isClassic
      ? "30 questions across 15 dimensions to discover your brainrot personality type. The comprehensive SBTI brainrot edition."
      : "15 questions across 5 dimensions to discover your brainrot personality type. Fast, fun, and scientifically unverified.",
    url: `${SITE_URL}/quiz/${version}`,
    about: {
      "@type": "Thing",
      name: "Brainrot Personality Type",
      description:
        "A personality classification system based on iconic brainrot meme characters",
    },
    educationalLevel: "entertainment",
    numberOfQuestions: isClassic ? 30 : 15,
    hasPart: {
      "@type": "WebContent",
      about: "personality assessment",
    },
  };
}

export function faqJsonLd(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export const HOME_FAQS = [
  {
    question: "What is SBTI brainrot?",
    answer:
      "SBTI brainrot refers to personality typing using iconic brainrot meme characters like Bombardiro Crocodilo, Tralalero Tralala, and Skibidi Toilet. Instead of traditional MBTI letters, your personality maps to a unique brainrot character that captures your energy, social style, and chaos level.",
  },
  {
    question: "What is the BRTI (BrainRot Type Indicator)?",
    answer:
      "BRTI is a personality test inspired by MBTI but built entirely around brainrot meme culture. It uses scientifically unverified but culturally accurate dimensions to match you with one of 16+ iconic brainrot characters. Think of it as MBTI for the chronically online generation.",
  },
  {
    question: "How is BRTI different from MBTI?",
    answer:
      "MBTI sorts you into 16 letter-based types (like INTJ). BRTI sorts you into brainrot characters (like Bombardiro Crocodilo or Sigma Boy). Instead of Introversion/Extraversion, we measure Chaos Energy, Rizz Factor, and Vibe Check. Same energy, better characters.",
  },
  {
    question: "What is the difference between Brainrot Quiz and Classic Quiz?",
    answer:
      "The Brainrot Quiz is a quick 15-question scan across 5 dimensions with 16 personality types — perfect for a 3-minute break. The Classic Quiz (SBTI edition) has 30 questions across 15 dimensions with 22+ types including secret unlockable characters, giving deeper personality analysis.",
  },
  {
    question: "What does SBTI stand for?",
    answer:
      "In the brainrot personality testing community, SBTI relates to a structured personality framework. Our Classic Quiz draws from this tradition, adapting the 15-dimension model into brainrot character mapping. SBTI guidance helps you understand how different personality dimensions interact.",
  },
  {
    question: "Which brainrot animal am I?",
    answer:
      "Take our quiz to find out! You could be Bombardiro Crocodilo (the explosion-loving reptile), Smurf Cat (the mysterious shapeshifter), Chimpanzini Bananini (return to monke energy), or La Vacca Saturno Saturnita (the cosmic space cow). Each brainrot animal represents a unique personality archetype.",
  },
  {
    question: "Is BRTI scientifically accurate?",
    answer:
      "Absolutely not, and that's the point. BRTI is an entertainment personality test that uses brainrot meme culture as a fun lens for self-reflection. While it won't get you a psychology degree, many users find the character descriptions surprisingly relatable. Take it for fun, not for your resume.",
  },
  {
    question: "Can I retake the SBTI brainrot quiz?",
    answer:
      "Yes! You can retake both quiz versions as many times as you want. Your answers are processed locally in your browser — nothing is stored on our servers. Try answering differently to explore other brainrot character types.",
  },
];

export const QUIZ_FAQS = {
  brainrot: [
    {
      question: "How many questions are in the Brainrot Quiz?",
      answer:
        "The Brainrot Quiz has 15 questions covering 5 personality dimensions: Chaos Energy, Rizz Factor, Brain Mode, Squad Loyalty, and Vibe Check. It takes about 3 minutes to complete.",
    },
    {
      question: "How many personality types can I get?",
      answer:
        "There are 16 unique brainrot personality types in the quick quiz version, from Bombardiro Crocodilo (main character energy) to La Vacca Saturno Saturnita (cosmic dreamer). Each type is matched using a vector similarity algorithm based on your answers.",
    },
    {
      question: "What are the 5 dimensions in the BRTI quiz?",
      answer:
        "The 5 dimensions measure: Chaos Energy (how much chaos you bring), Rizz Factor (your social charm), Brain Mode (strategic vs impulsive), Squad Loyalty (team player vs lone wolf), and Vibe Check (how you process emotions).",
    },
  ],
  classic: [
    {
      question: "How many questions are in the Classic SBTI Quiz?",
      answer:
        "The Classic SBTI Quiz has 30 standard questions plus 2 secret gate questions that can unlock hidden personality types. It covers 15 personality dimensions across 5 models. Takes about 8 minutes.",
    },
    {
      question: "What are the 5 models in the Classic SBTI Quiz?",
      answer:
        "The 5 models are: Self Model (self-worth, clarity, drive), Emotional Model (trust, heart mode, boundaries), Attitude Model (world lens, rules, purpose), Action Model (motivation, speed, execution), and Social Model (energy battery, social bubble, mask level).",
    },
    {
      question: "Are there secret personality types?",
      answer:
        "Yes! The Classic Quiz includes hidden types that unlock through specific answer combinations. One is triggered by a special gate question sequence. There's also a fallback type for truly unique personality profiles that don't match any archetype closely.",
    },
  ],
};
