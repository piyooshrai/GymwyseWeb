import type { Metadata } from "next";
import { PricingHero } from "./pricing-hero";

export const metadata: Metadata = {
  title: "GymWyse Pricing - Transparent Gym Software Pricing",
  description:
    "No setup fees. No contracts. $99/mo for independent gyms. Compare vs Mindbody, Zen Planner, Glofox. See why 200+ gyms switched. Start 14-day free trial.",

  openGraph: {
    title: "GymWyse Pricing - Transparent Gym Software Pricing",
    description:
      "No setup fees. No contracts. $99/mo for independent gyms. Compare vs Mindbody, Zen Planner, Glofox. See why 200+ gyms switched. Start 14-day free trial.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function PricingPage() {
  return <PricingHero />;
}
