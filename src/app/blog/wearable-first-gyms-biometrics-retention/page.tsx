import type { Metadata } from "next";
import { WearableFirstGymsPage } from "./blog-page";

export const metadata: Metadata = {
  title: "Wearable-First Gyms: Syncing Biometrics with Member Retention | GymWyse Blog",
  description: "How integrating Apple Watch, Whoop, and Garmin data into your gym management platform creates measurable retention advantages.",
  openGraph: {
    title: "Wearable-First Gyms: Syncing Biometrics with Member Retention",
    description: "How integrating wearable data into gym management creates measurable retention advantages.",
    type: "article",
    publishedTime: "2025-12-14",
    authors: ["GymWyse Product Team"],
  },
};

export default function Page() {
  return <WearableFirstGymsPage />;
}
