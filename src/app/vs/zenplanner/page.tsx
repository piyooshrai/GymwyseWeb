import type { Metadata } from "next";
import { ZenPlannerComparison } from "./zenplanner-comparison";

export const metadata: Metadata = {
  title: "GymWyse vs Zen Planner - Modern Gym Software Alternative",
  description:
    "Compare GymWyse and Zen Planner. Better revenue analytics, AI churn prediction, no setup fees. See why gyms are switching to GymWyse.",

  openGraph: {
    title: "GymWyse vs Zen Planner - Modern Gym Software Alternative",
    description:
      "Compare GymWyse and Zen Planner. Better revenue analytics, AI churn prediction, no setup fees. See why gyms are switching to GymWyse.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <ZenPlannerComparison />;
}
