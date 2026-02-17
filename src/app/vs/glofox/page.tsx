import type { Metadata } from "next";
import { GlofoxComparison } from "./glofox-comparison";

export const metadata: Metadata = {
  title: "GymWyse vs Glofox - Better Revenue Analytics & AI Features",
  description:
    "Compare GymWyse and Glofox. Superior revenue analytics, AI churn prediction, lower pricing. See why gyms are choosing GymWyse.",

  openGraph: {
    title: "GymWyse vs Glofox - Better Revenue Analytics & AI Features",
    description:
      "Compare GymWyse and Glofox. Superior revenue analytics, AI churn prediction, lower pricing. See why gyms are choosing GymWyse.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <GlofoxComparison />;
}
