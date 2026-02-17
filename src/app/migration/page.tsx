import type { Metadata } from "next";
import { MigrationPage } from "./migration-page";

export const metadata: Metadata = {
  title: "Switch to GymWyse - Migration Guide for Gym Owners",
  description:
    "Switch from Mindbody, Zen Planner, or Glofox to GymWyse in 3-4 weeks. Free migration included. Zero downtime. Zero data loss. 200+ gyms migrated.",

  openGraph: {
    title: "Switch to GymWyse - Migration Guide for Gym Owners",
    description:
      "Switch from Mindbody, Zen Planner, or Glofox to GymWyse in 3-4 weeks. Free migration included. Zero downtime. Zero data loss. 200+ gyms migrated.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <MigrationPage />;
}
