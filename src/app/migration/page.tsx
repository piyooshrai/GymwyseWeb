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
    images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <MigrationPage />;
}
