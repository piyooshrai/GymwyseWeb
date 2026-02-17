import type { Metadata } from "next";
import { GymRevenueOptimizationPage } from "./blog-page";

export const metadata: Metadata = {
  title: "The Complete Guide to Gym Revenue Optimization in 2026 | GymWyse Blog",
  description:
    "Three revenue levers every gym owner must master: pricing intelligence, member retention, and payment recovery. Backed by data from 200+ gyms.",
  openGraph: {
    title: "The Complete Guide to Gym Revenue Optimization in 2026",
    description:
      "Three revenue levers every gym owner must master: pricing intelligence, member retention, and payment recovery. Backed by data from 200+ gyms.",
    type: "article",
    publishedTime: "2025-12-22",
    authors: ["GymWyse Product Team"],
      images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <GymRevenueOptimizationPage />;
}
