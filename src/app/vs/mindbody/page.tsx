import type { Metadata } from "next";
import { MindbodyComparison } from "./mindbody-comparison";

export const metadata: Metadata = {
  title: "GymWyse vs Mindbody - Why Gyms Are Switching & Saving $500+/mo",
  description:
    "Compare GymWyse and Mindbody. No setup fees ($500 savings). No contracts. Revenue analytics included. See why independent gyms are switching. Migration takes 7-10 days.",

  openGraph: {
    title: "GymWyse vs Mindbody - Why Gyms Are Switching & Saving $500+/mo",
    description:
      "Compare GymWyse and Mindbody. No setup fees ($500 savings). No contracts. Revenue analytics included. See why independent gyms are switching. Migration takes 7-10 days.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <MindbodyComparison />;
}
