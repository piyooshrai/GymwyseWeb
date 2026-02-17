import type { Metadata } from "next";
import { ROICalculatorPage } from "./roi-calculator-page";

export const metadata: Metadata = {
  title: "Gym Software ROI Calculator - Calculate Your Savings | GymWyse",
  description:
    "See exactly how much GymWyse will save you vs Mindbody, Zen Planner, or Glofox. Calculate churn savings, payment recovery, and net ROI. Free interactive tool for gym owners.",

  openGraph: {
    title: "Gym Software ROI Calculator - Calculate Your Savings | GymWyse",
    description:
      "See exactly how much GymWyse will save you vs Mindbody, Zen Planner, or Glofox. Calculate churn savings, payment recovery, and net ROI. Free interactive tool for gym owners.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <ROICalculatorPage />;
}
