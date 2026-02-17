import type { Metadata } from "next";
import { GymChurnReductionPage } from "./blog-page";

export const metadata: Metadata = {
  title: "How to Reduce Gym Churn: 12 Proven Strategies for 2026 | GymWyse Blog",
  description: "The fitness industry averages 30-50% annual member churn. These 12 field-tested strategies reduce it by 32%.",
  openGraph: {
    title: "How to Reduce Gym Churn: 12 Proven Strategies for 2026",
    description: "The fitness industry averages 30-50% annual member churn. These 12 field-tested strategies reduce it by 32%.",
    type: "article",
    publishedTime: "2026-01-03",
    authors: ["GymWyse Product Team"],
      images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <GymChurnReductionPage />;
}
