import type { Metadata } from "next";
import { GymMemberOnboardingPage } from "./blog-page";

export const metadata: Metadata = {
  title:
    "The First 90 Days: A Gym Member Onboarding Framework That Prevents Early Churn | GymWyse Blog",
  description:
    "The structured onboarding sequence that reduces first-90-day cancellations by 45%.",
  openGraph: {
    title:
      "The First 90 Days: A Gym Member Onboarding Framework That Prevents Early Churn",
    description:
      "The structured onboarding sequence that reduces first-90-day cancellations by 45%.",
    type: "article",
    publishedTime: "2026-01-31",
    authors: ["GymWyse Product Team"],
  },
};

export default function Page() {
  return <GymMemberOnboardingPage />;
}
