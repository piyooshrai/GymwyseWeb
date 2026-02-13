import type { Metadata } from "next";
import { ROICalculatorPage } from "./roi-calculator-page";

export const metadata: Metadata = {
  title: "Gym Software ROI Calculator - Calculate Your Savings",
  description:
    "See exactly how much GymWyse will save you vs Mindbody, Zen Planner, or Glofox. Calculate churn savings, payment recovery, and net ROI. Free interactive tool.",
};

export default function Page() {
  return <ROICalculatorPage />;
}
