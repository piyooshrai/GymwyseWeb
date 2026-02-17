import type { Metadata } from "next";
import { UKPage } from "./uk-page";

export const metadata: Metadata = {
  title: "Gym Management Software UK - Direct Debit & GDPR Compliant",
  description:
    "UK gym software with Direct Debit (BACS), GDPR compliance, and GBP pricing. Built for gyms in London, Manchester, Birmingham. Start £79/mo. Free trial.",

  openGraph: {
    title: "Gym Management Software UK - Direct Debit & GDPR Compliant",
    description:
      "UK gym software with Direct Debit (BACS), GDPR compliance, and GBP pricing. Built for gyms in London, Manchester, Birmingham. Start £79/mo. Free trial.",
    type: "website",
    siteName: "GymWyse",
    images: [{ url: "https://gymwyse.fit/og-default.png", width: 1200, height: 630, alt: "GymWyse - Gym Management Software" }],
  },
};

export default function Page() {
  return <UKPage />;
}
