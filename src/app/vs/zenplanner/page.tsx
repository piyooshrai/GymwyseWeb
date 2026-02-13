import type { Metadata } from "next";
import { ZenPlannerComparison } from "./zenplanner-comparison";

export const metadata: Metadata = {
  title: "GymWyse vs Zen Planner - Modern Gym Software Alternative",
  description:
    "Compare GymWyse and Zen Planner. Better revenue analytics, AI churn prediction, no setup fees. See why gyms are switching to GymWyse.",
};

export default function Page() {
  return <ZenPlannerComparison />;
}
