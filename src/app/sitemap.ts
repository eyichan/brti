import type { MetadataRoute } from "next";
import { BRAINROT_TYPES } from "@/lib/brainrot-types";
import { CLASSIC_PERSONALITY_TYPES } from "@/lib/classic/personality-types";

const BASE = "https://brti.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/quiz/brainrot`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/quiz/classic`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/types`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/compare`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const brainrotTypes: MetadataRoute.Sitemap = BRAINROT_TYPES.map((t) => ({
    url: `${BASE}/types/brainrot/${t.code.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const classicTypes: MetadataRoute.Sitemap = CLASSIC_PERSONALITY_TYPES.map((t) => ({
    url: `${BASE}/types/classic/${t.code.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...brainrotTypes, ...classicTypes];
}
