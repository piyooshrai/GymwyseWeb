import type { Metadata } from "next";
import { MultiLocationPage } from "./multi-location-page";

export const metadata: Metadata = {
  title: "Multi-Location Gym Management Software - GymWyse",
  description:
    "Manage 2-100+ gym locations from one dashboard. Cross-location analytics, centralized member database, volume pricing. $79/location.",

  openGraph: {
    title: "Multi-Location Gym Management Software - GymWyse",
    description:
      "Manage 2-100+ gym locations from one dashboard. Cross-location analytics, centralized member database, volume pricing. $79/location.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <MultiLocationPage />;
}
