import type { Metadata } from "next";
import { UKGymCompliancePage } from "./blog-page";

export const metadata: Metadata = {
  title:
    "UK Gym Management: Navigating GDPR, BACS, and FCA Compliance | GymWyse Blog",
  description:
    "The complete compliance guide for UK gym owners covering GDPR data handling, BACS Direct Debit, FCA regulations, and VAT.",
  openGraph: {
    title: "UK Gym Management: Navigating GDPR, BACS, and FCA Compliance",
    description:
      "The complete compliance guide for UK gym owners covering GDPR data handling, BACS Direct Debit, FCA regulations, and VAT.",
    type: "article",
    publishedTime: "2026-02-05",
    authors: ["GymWyse Product Team"],
      images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <UKGymCompliancePage />;
}
