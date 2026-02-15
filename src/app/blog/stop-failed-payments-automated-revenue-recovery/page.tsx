import type { Metadata } from "next";
import { StopFailedPaymentsPage } from "./blog-page";

export const metadata: Metadata = {
  title: "Stop Failed Payments: The Automated Revenue Recovery Blueprint | GymWyse Blog",
  description: "The exact automated dunning sequence that recovers 40% of failed gym payments without a single awkward phone call. Real numbers from real gyms.",
  openGraph: {
    title: "Stop Failed Payments: The Automated Revenue Recovery Blueprint",
    description: "The automated dunning sequence that recovers 40% of failed gym payments.",
    type: "article",
    publishedTime: "2025-12-18",
    authors: ["GymWyse Product Team"],
  },
};

export default function Page() {
  return <StopFailedPaymentsPage />;
}
