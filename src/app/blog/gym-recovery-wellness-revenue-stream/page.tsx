import type { Metadata } from "next";
import { GymRecoveryWellnessPage } from "./blog-page";

export const metadata: Metadata = {
  title:
    "Recovery and Wellness: Building a High-Margin Revenue Stream Inside Your Gym | GymWyse Blog",
  description:
    "How cold plunge, sauna, massage, and recovery services generate 35% margins and reduce churn.",
  openGraph: {
    title:
      "Recovery and Wellness: Building a High-Margin Revenue Stream Inside Your Gym",
    description:
      "How cold plunge, sauna, massage, and recovery services generate 35% margins and reduce churn.",
    type: "article",
    publishedTime: "2026-02-07",
    authors: ["GymWyse Product Team"],
      images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <GymRecoveryWellnessPage />;
}
