import type { Metadata } from "next";
import { ReduceChurnPage } from "./reduce-churn-page";

export const metadata: Metadata = {
  title: "Reduce Gym Member Churn - AI-Powered Retention | GymWyse",
  description:
    "Predict which members are about to cancel 30 days in advance. AI churn prevention reduces member loss by 32%. See how GymWyse saves gyms $3,600+/month.",

  openGraph: {
    title: "Reduce Gym Member Churn - AI-Powered Retention | GymWyse",
    description:
      "Predict which members are about to cancel 30 days in advance. AI churn prevention reduces member loss by 32%. See how GymWyse saves gyms $3,600+/month.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <ReduceChurnPage />;
}
