import type { Metadata } from "next";
import { CrossFitBoxManagementPage } from "./blog-page";

export const metadata: Metadata = {
  title:
    "CrossFit Box Management: WOD Tracking, Competition, and Community Building | GymWyse Blog",
  description:
    "Purpose-built gym management features for CrossFit boxes: WOD programming, leaderboards, competition management.",
  openGraph: {
    title:
      "CrossFit Box Management: WOD Tracking, Competition, and Community Building",
    description:
      "Purpose-built gym management features for CrossFit boxes: WOD programming, leaderboards, competition management.",
    type: "article",
    publishedTime: "2026-02-10",
    authors: ["GymWyse Product Team"],
      images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <CrossFitBoxManagementPage />;
}
