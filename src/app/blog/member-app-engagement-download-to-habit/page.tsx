import type { Metadata } from "next";
import { MemberAppEngagementPage } from "./blog-page";

export const metadata: Metadata = {
  title: "Member App Engagement: From Download to Daily Habit | GymWyse Blog",
  description:
    "The engagement loop that turns a one-time app download into a daily touchpoint, driving 40% higher weekly engagement.",
  openGraph: {
    title: "Member App Engagement: From Download to Daily Habit",
    description:
      "The engagement loop that turns a one-time app download into a daily touchpoint, driving 40% higher weekly engagement.",
    type: "article",
    publishedTime: "2026-01-23",
    authors: ["GymWyse Product Team"],
      images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <MemberAppEngagementPage />;
}
