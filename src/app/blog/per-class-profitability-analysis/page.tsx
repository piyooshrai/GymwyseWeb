import type { Metadata } from "next";
import { PerClassProfitabilityPage } from "./blog-page";

export const metadata: Metadata = {
  title:
    "Per-Class Profitability: Why Your Busiest Class Might Be Your Least Profitable | GymWyse Blog",
  description:
    "How to run true per-class P&L analysis including instructor costs, energy, equipment depreciation, and room utilization to find your real money-makers.",
  openGraph: {
    title:
      "Per-Class Profitability: Why Your Busiest Class Might Be Your Least Profitable",
    description:
      "How to run true per-class P&L analysis including instructor costs, energy, equipment depreciation, and room utilization to find your real money-makers.",
    type: "article",
    publishedTime: "2025-12-28",
    authors: ["GymWyse Product Team"],
      images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <PerClassProfitabilityPage />;
}
