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
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <RevenueAnalyticsPage />;
}
