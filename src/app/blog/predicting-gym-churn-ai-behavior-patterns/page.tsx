import type { Metadata } from "next";
import { PredictingChurnPage } from "./blog-page";

export const metadata: Metadata = {
  title: "Beyond Attendance: Predicting Gym Churn with AI Behavior Patterns | GymWyse Blog",
  description: "How AI-driven behavioral analysis identifies at-risk members 30 days before cancellation, and the automated retention workflows that save 18 members per month.",
  openGraph: {
    title: "Beyond Attendance: Predicting Gym Churn with AI Behavior Patterns",
    description: "How AI-driven behavioral analysis identifies at-risk members 30 days before cancellation.",
    type: "article",
    publishedTime: "2025-12-06",
    authors: ["GymWyse Product Team"],
  },
};

export default function Page() {
  return <PredictingChurnPage />;
}
