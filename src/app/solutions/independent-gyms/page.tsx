import type { Metadata } from "next";
import { IndependentGymsPage } from "./independent-gyms-page";

export const metadata: Metadata = {
  title: "Gym Software for Independent Owners - GymWyse",
  description:
    "Built for single-location independent gyms. Revenue analytics, churn prediction, and member engagement. $99/mo, no contracts. Start your free trial.",

  openGraph: {
    title: "Gym Software for Independent Owners - GymWyse",
    description:
      "Built for single-location independent gyms. Revenue analytics, churn prediction, and member engagement. $99/mo, no contracts. Start your free trial.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <IndependentGymsPage />;
}
