import type { Metadata } from "next";
import { RevenueTrackingPage } from "./revenue-tracking-page";

export const metadata: Metadata = {
  title: "Gym Revenue Analytics & Tracking - Real-Time P&L | GymWyse",
  description:
    "Real-time revenue tracking for gyms. MRR dashboard, revenue stream breakdown, failed payment recovery. Know where every dollar goes. $99/mo.",

  openGraph: {
    title: "Gym Revenue Analytics & Tracking - Real-Time P&L | GymWyse",
    description:
      "Real-time revenue tracking for gyms. MRR dashboard, revenue stream breakdown, failed payment recovery. Know where every dollar goes. $99/mo.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <RevenueTrackingPage />;
}
