import type { Metadata } from "next";
import { GymPricingStrategyPage } from "./blog-page";

export const metadata: Metadata = {
  title:
    "Data-Driven Gym Pricing: Stop Guessing What Members Will Pay | GymWyse Blog",
  description:
    "How to use real member behavior data, willingness-to-pay analysis, and A/B testing to set optimal prices.",
  openGraph: {
    title: "Data-Driven Gym Pricing: Stop Guessing What Members Will Pay",
    description:
      "How to use real member behavior data, willingness-to-pay analysis, and A/B testing to set optimal prices.",
    type: "article",
    publishedTime: "2026-01-27",
    authors: ["GymWyse Product Team"],
  },
};

export default function Page() {
  return <GymPricingStrategyPage />;
}
