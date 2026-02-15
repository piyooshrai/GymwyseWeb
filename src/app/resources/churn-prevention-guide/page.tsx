import type { Metadata } from "next";
import { ChurnGuidePage } from "./churn-guide-page";

export const metadata: Metadata = {
  title: "The Complete Guide to Gym Churn Prevention (2026) | GymWyse",
  description:
    "Learn how to reduce gym member churn from 4% to under 2.5%. AI prediction, win-back campaigns, and proven retention strategies for gym owners.",
  openGraph: {
    title: "The Complete Guide to Gym Churn Prevention (2026) | GymWyse",
    description:
      "Learn how to reduce gym member churn from 4% to under 2.5%. AI prediction, win-back campaigns, and proven retention strategies for gym owners.",
  },
};

export default function Page() {
  return <ChurnGuidePage />;
}
