import type { Metadata } from "next";
import { GymStaffSchedulingPage } from "./blog-page";

export const metadata: Metadata = {
  title:
    "Gym Staff Scheduling: Cut Labor Costs Without Cutting Corners | GymWyse Blog",
  description:
    "How demand-based staff scheduling and labor-to-revenue ratios help gyms save 15-20% on their biggest expense.",
  openGraph: {
    title: "Gym Staff Scheduling: Cut Labor Costs Without Cutting Corners",
    description:
      "How demand-based staff scheduling and labor-to-revenue ratios help gyms save 15-20% on their biggest expense.",
    type: "article",
    publishedTime: "2026-02-01",
    authors: ["GymWyse Product Team"],
      images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <GymStaffSchedulingPage />;
}
