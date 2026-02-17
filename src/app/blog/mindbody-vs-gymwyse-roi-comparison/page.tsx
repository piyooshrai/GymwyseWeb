import type { Metadata } from "next";
import { MindbodyVsGymwysePage } from "./blog-page";

export const metadata: Metadata = {
  title: "Mindbody vs. GymWyse: Why ROI-First Tech Wins in 2026 | GymWyse Blog",
  description: "A head-to-head comparison of Mindbody and GymWyse across pricing, features, and measurable ROI for independent gyms and multi-location operators.",
  openGraph: {
    title: "Mindbody vs. GymWyse: Why ROI-First Tech Wins in 2026",
    description: "A head-to-head comparison of Mindbody and GymWyse across pricing, features, and measurable ROI.",
    type: "article",
    publishedTime: "2025-12-02",
    authors: ["GymWyse Product Team"],
      images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <MindbodyVsGymwysePage />;
}
