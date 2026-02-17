import type { Metadata } from "next";
import { DemoPage } from "./demo-page";

export const metadata: Metadata = {
  title: "Book a Demo - GymWyse Gym Management Software",
  description:
    "See GymWyse in action. Book a personalized demo and discover how to track revenue, predict churn, and recover $12K+/month for your gym.",

  openGraph: {
    title: "Book a Demo - GymWyse Gym Management Software",
    description:
      "See GymWyse in action. Book a personalized demo and discover how to track revenue, predict churn, and recover $12K+/month for your gym.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <DemoPage />;
}
