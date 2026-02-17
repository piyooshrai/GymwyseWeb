import type { Metadata } from "next";
import { MultiLocationGuidePage } from "./blog-page";

export const metadata: Metadata = {
  title: "Multi-Location Gym Management: From Chaos to Control | GymWyse Blog",
  description: "How to eliminate 4.2 hours of weekly cross-location reporting with unified dashboards.",
  openGraph: {
    title: "Multi-Location Gym Management: From Chaos to Control",
    description: "How to eliminate 4.2 hours of weekly cross-location reporting with unified dashboards.",
    type: "article",
    publishedTime: "2026-01-07",
    authors: ["GymWyse Product Team"],
      images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <MultiLocationGuidePage />;
}
