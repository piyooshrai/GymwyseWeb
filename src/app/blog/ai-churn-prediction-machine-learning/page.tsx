import type { Metadata } from "next";
import { AIChurnPredictionPage } from "./blog-page";

export const metadata: Metadata = {
  title: "AI Churn Prediction: How Machine Learning Saves 18 Members Per Month | GymWyse Blog",
  description: "Inside the 14 behavioral signals our churn prediction model analyzes.",
  openGraph: {
    title: "AI Churn Prediction: How Machine Learning Saves 18 Members Per Month",
    description: "Inside the 14 behavioral signals our churn prediction model analyzes.",
    type: "article",
    publishedTime: "2026-01-15",
    authors: ["GymWyse Product Team"],
      images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <AIChurnPredictionPage />;
}
