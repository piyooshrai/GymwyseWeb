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
    images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <ROICalculatorPage />;
}
