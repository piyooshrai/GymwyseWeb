import type { Metadata } from "next";
import { PushPressComparison } from "./pushpress-comparison";

export const metadata: Metadata = {
  title: "GymWyse vs PushPress - Advanced Gym Management Alternative",
  description:
    "Compare GymWyse and PushPress. Better revenue analytics, AI features, and multi-location management. See why gyms prefer GymWyse.",

  openGraph: {
    title: "GymWyse vs PushPress - Advanced Gym Management Alternative",
    description:
      "Compare GymWyse and PushPress. Better revenue analytics, AI features, and multi-location management. See why gyms prefer GymWyse.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <PushPressComparison />;
}
