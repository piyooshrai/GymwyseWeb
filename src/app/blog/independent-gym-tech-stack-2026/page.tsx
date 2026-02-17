import type { Metadata } from "next";
import { IndependentGymTechStackPage } from "./blog-page";

export const metadata: Metadata = {
  title: "The Independent Gym Owner's Tech Stack for 2026 | GymWyse Blog",
  description:
    "The right-sized tech stack for single-location gyms: billing, scheduling, analytics starting at $99/month.",
  openGraph: {
    title: "The Independent Gym Owner's Tech Stack for 2026",
    description:
      "The right-sized tech stack for single-location gyms: billing, scheduling, analytics starting at $99/month.",
    type: "article",
    publishedTime: "2026-01-19",
    authors: ["GymWyse Product Team"],
      images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <IndependentGymTechStackPage />;
}
