import type { Metadata } from "next";
import { RevenueAnalyticsPage } from "./revenue-analytics-page";

export const metadata: Metadata = {
  title: "Revenue Analytics - Real-Time MRR, Profit Margins & Forecasting | GymWyse",
  description:
    "Track gym revenue in real time with MRR dashboards, per-member LTV, profit margins by service, failed payment recovery, and 12-month forecasting. Included in every GymWyse plan.",
};

export default function Page() {
  return <RevenueAnalyticsPage />;
}
