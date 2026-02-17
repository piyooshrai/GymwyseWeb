import type { Metadata } from "next";
import { RevenueAnalyticsPage } from "./revenue-analytics-page";

export const metadata: Metadata = {
  title: "Revenue Analytics - Real-Time MRR, Profit Margins & Forecasting | GymWyse",
  description:
    "Track gym revenue in real time with MRR dashboards, per-member LTV, profit margins by service, failed payment recovery, and 12-month forecasting. Included in every GymWyse plan.",

  openGraph: {
    title: "Revenue Analytics - Real-Time MRR, Profit Margins & Forecasting | GymWyse",
    description:
      "Track gym revenue in real time with MRR dashboards, per-member LTV, profit margins by service, failed payment recovery, and 12-month forecasting. Included in every GymWyse plan.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/logos/logo-white.png", width: 800, height: 600, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <RevenueAnalyticsPage />;
}
