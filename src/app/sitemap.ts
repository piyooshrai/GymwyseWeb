import type { MetadataRoute } from "next";
import { cityPages } from "@/lib/city-data";

const verticalSlugs = [
  "yoga-studio-software",
  "crossfit-gym-software",
  "mma-gym-software",
  "pilates-studio-software",
  "dance-studio-software",
  "barre-studio-software",
  "bootcamp-software",
  "personal-training-studio-software",
  "climbing-gym-software",
];

const problemSolutionSlugs = [
  "reduce-gym-member-churn",
  "increase-gym-revenue",
  "gym-payment-processing",
  "gym-class-scheduling",
  "personal-training-software",
  "gym-billing-software",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gymwyse.fit";

  return [
    // Tier 1 - Core Pages
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/roi-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/demo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/vs/mindbody`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vs/zenplanner`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vs/glofox`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vs/pushpress`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Tier 2 - Solutions Pages
    { url: `${baseUrl}/solutions/independent-gyms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/solutions/multi-location`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/solutions/boutique-fitness`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/solutions/reduce-churn`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/solutions/revenue-tracking`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Tier 3 - Regional Pages
    { url: `${baseUrl}/uk`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/au`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/ae`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Tier 4 - Content & Support
    { url: `${baseUrl}/migration`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/case-studies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },

    // Niche Vertical Pages
    ...verticalSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Problem/Solution SEO Pages
    ...problemSolutionSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // City Landing Pages
    ...cityPages.map((city) => ({
      url: `${baseUrl}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
